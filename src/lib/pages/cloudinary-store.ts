import { createHash } from "crypto";
import type { PagesStore } from "@/lib/pages/types";

const PUBLIC_ID = "abimetals/content/pages";

type CloudinaryConfig = {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
};

function cleanEnv(value: string | undefined) {
  if (!value) return "";
  let cleaned = value.replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "").replace(/\s+/g, "");
  if (
    (cleaned.startsWith('"') && cleaned.endsWith('"')) ||
    (cleaned.startsWith("'") && cleaned.endsWith("'"))
  ) {
    cleaned = cleaned.slice(1, -1);
  }
  return cleaned;
}

export function cloudinaryConfig(): CloudinaryConfig | null {
  const cloudName = cleanEnv(process.env.CLOUDINARY_CLOUD_NAME);
  const apiKey = cleanEnv(process.env.CLOUDINARY_API_KEY);
  const apiSecret = cleanEnv(process.env.CLOUDINARY_API_SECRET);
  if (!cloudName || !apiKey || !apiSecret) return null;
  return { cloudName, apiKey, apiSecret };
}

function sign(params: Record<string, string>, apiSecret: string, algorithm: "sha1" | "sha256") {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return createHash(algorithm).update(payload + apiSecret).digest("hex");
}

function normalizeStore(value: unknown): PagesStore {
  const parsed = value as Partial<PagesStore> | null;
  return {
    pages: Array.isArray(parsed?.pages) ? parsed.pages : [],
    deletedBuiltinKeys: Array.isArray(parsed?.deletedBuiltinKeys)
      ? parsed.deletedBuiltinKeys
      : [],
  };
}

function authHeader(config: CloudinaryConfig) {
  return `Basic ${Buffer.from(`${config.apiKey}:${config.apiSecret}`).toString("base64")}`;
}

async function cloudinaryError(response: Response) {
  const data = (await response.json().catch(() => null)) as {
    error?: { message?: string };
  } | null;
  return data?.error?.message || "Cloudinary request failed.";
}

export async function readCloudinaryStore(config: CloudinaryConfig): Promise<PagesStore> {
  const details = await fetch(
    `https://api.cloudinary.com/v1_1/${config.cloudName}/resources/raw/upload/${PUBLIC_ID}`,
    {
      headers: { Authorization: authHeader(config) },
      cache: "no-store",
    }
  );

  if (details.status === 404) return { pages: [], deletedBuiltinKeys: [] };
  if (!details.ok) {
    throw new Error(await cloudinaryError(details));
  }

  const meta = (await details.json()) as { secure_url?: string };
  if (!meta.secure_url) return { pages: [], deletedBuiltinKeys: [] };

  const file = await fetch(meta.secure_url, { cache: "no-store" });
  if (file.status === 404) return { pages: [], deletedBuiltinKeys: [] };
  if (!file.ok) throw new Error("Unable to load saved pages.");

  return normalizeStore(JSON.parse(await file.text()));
}

export async function writeCloudinaryStore(config: CloudinaryConfig, store: PagesStore) {
  const timestamp = String(Math.round(Date.now() / 1000));
  const params = {
    invalidate: "true",
    overwrite: "true",
    public_id: PUBLIC_ID,
    timestamp,
  };
  const json = JSON.stringify(store);

  let message = "Unable to save page data.";
  for (const algorithm of ["sha1", "sha256"] as const) {
    const body = new FormData();
    body.append("file", new Blob([json], { type: "application/json" }), "pages.json");
    body.append("api_key", config.apiKey);
    body.append("timestamp", timestamp);
    body.append("signature", sign(params, config.apiSecret, algorithm));
    body.append("public_id", PUBLIC_ID);
    body.append("overwrite", "true");
    body.append("invalidate", "true");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${config.cloudName}/raw/upload`,
      { method: "POST", body }
    );
    if (response.ok) return;

    message = await cloudinaryError(response);
    if (!message.includes("Invalid Signature")) break;
  }

  throw new Error(message);
}
