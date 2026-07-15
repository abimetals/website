import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import {
  getSessionCookieName,
  verifySessionToken,
} from "@/lib/auth";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return await verifySessionToken(token);
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

    const bytes = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name || "").toLowerCase() || ".jpg";
    const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)
      ? ext
      : ".jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${safeExt}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), bytes);

    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch {
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}
