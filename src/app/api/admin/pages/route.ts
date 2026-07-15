import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getSessionCookieName,
  verifySessionToken,
} from "@/lib/auth";
import {
  createPageId,
  listEditablePages,
  listManagedPages,
  upsertManagedPage,
} from "@/lib/pages/store";
import { assertUniquePath, validatePageInput } from "@/lib/pages/validate";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return await verifySessionToken(token);
}

export async function GET(request: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode");

  if (mode === "editable") {
    const pages = await listEditablePages();
    return NextResponse.json({ pages });
  }

  const pages = await listManagedPages();
  return NextResponse.json({ pages });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = validatePageInput(body);
    if (!result.ok) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    const conflict = await assertUniquePath(result.page.path);
    if (conflict) {
      return NextResponse.json({ errors: [conflict] }, { status: 400 });
    }

    const now = new Date().toISOString();
    const page = await upsertManagedPage({
      ...result.page,
      id: createPageId(),
      source: "managed",
      createdAt: now,
      updatedAt: now,
    });

    return NextResponse.json({ page }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to create page." }, { status: 500 });
  }
}
