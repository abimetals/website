import { createHash } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getSessionCookieName,
  verifySessionToken,
} from "@/lib/auth";

const UPLOAD_FOLDER = "abimetals/uploads";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return await verifySessionToken(token);
}

function cleanEnv(value: string | undefined) {
  if (!value) return "";
  let cleaned = value.trim();
  if (
    (cleaned.startsWith('"') && cleaned.endsWith('"')) ||
    (cleaned.startsWith("'") && cleaned.endsWith("'"))
  ) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  return cleaned;
}

function cloudinarySignature(
  params: Record<string, string>,
  apiSecret: string,
  algorithm: "sha1" | "sha256"
) {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return createHash(algorithm).update(payload + apiSecret).digest("hex");
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cloudName = cleanEnv(process.env.CLOUDINARY_CLOUD_NAME);
  const apiKey = cleanEnv(process.env.CLOUDINARY_API_KEY);
  const apiSecret = cleanEnv(process.env.CLOUDINARY_API_SECRET);
  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: "Image uploads are not configured." },
      { status: 500 }
    );
  }
  if (apiSecret.includes("://") || apiKey.includes("://")) {
    return NextResponse.json(
      {
        error:
          "Use the numeric API Key and the API Secret, not the cloudinary:// environment variable.",
      },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image uploads are allowed." },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image must be 5MB or smaller." },
        { status: 400 }
      );
    }

    const timestamp = String(Math.round(Date.now() / 1000));
    const params = { folder: UPLOAD_FOLDER, timestamp };
    const bytes = await file.arrayBuffer();
    const filename = file.name || "upload.jpg";

    let data: { secure_url?: string; error?: { message?: string } } | null = null;
    for (const algorithm of ["sha1", "sha256"] as const) {
      const uploadBody = new FormData();
      uploadBody.append("file", new Blob([bytes], { type: file.type }), filename);
      uploadBody.append("api_key", apiKey);
      uploadBody.append("timestamp", timestamp);
      uploadBody.append(
        "signature",
        cloudinarySignature(params, apiSecret, algorithm)
      );
      uploadBody.append("folder", UPLOAD_FOLDER);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudName)}/image/upload`,
        { method: "POST", body: uploadBody }
      );
      data = (await uploadRes.json().catch(() => null)) as {
        secure_url?: string;
        error?: { message?: string };
      } | null;

      if (uploadRes.ok && data?.secure_url) {
        return NextResponse.json({ url: data.secure_url });
      }
      if (!data?.error?.message?.includes("Invalid Signature")) break;
    }

    return NextResponse.json(
      { error: data?.error?.message || "Upload failed." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}
