import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getSessionCookieName,
  verifySessionToken,
} from "@/lib/auth";
import {
  deleteManagedPage,
  getManagedPageById,
  listEditablePages,
  upsertManagedPage,
} from "@/lib/pages/store";
import { validatePageInput } from "@/lib/pages/validate";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return await verifySessionToken(token);
}

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const decoded = decodeURIComponent(id);

  const managed = await getManagedPageById(decoded);
  if (managed) return NextResponse.json({ page: managed });

  const editable = await listEditablePages();
  const page = editable.find((item) => item.id === decoded);
  if (!page) {
    return NextResponse.json({ error: "Page not found." }, { status: 404 });
  }

  return NextResponse.json({ page });
}

export async function PUT(request: Request, { params }: Params) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const decoded = decodeURIComponent(id);

  try {
    const body = await request.json();
    const existingManaged = await getManagedPageById(decoded);
    const editable = existingManaged
      ? null
      : (await listEditablePages()).find((item) => item.id === decoded);

    const base = existingManaged || editable;
    if (!base) {
      return NextResponse.json({ error: "Page not found." }, { status: 404 });
    }

    const result = validatePageInput({
      ...body,
      id: existingManaged?.id || createStableId(base),
      slug: body.slug || base.slug,
      path: body.path || base.path,
      menuId: body.menuId || base.menuId,
      productSubmenuId: body.productSubmenuId || base.productSubmenuId,
      builtinKey: base.builtinKey,
      source: "managed",
      createdAt: existingManaged?.createdAt || base.createdAt,
    });

    if (!result.ok) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    const now = new Date().toISOString();
    const page = await upsertManagedPage({
      ...result.page,
      id: result.page.id || createStableId(base),
      source: "managed",
      builtinKey: base.builtinKey,
      createdAt: existingManaged?.createdAt || base.createdAt || now,
      updatedAt: now,
    });

    return NextResponse.json({ page });
  } catch {
    return NextResponse.json({ error: "Unable to update page." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const decoded = decodeURIComponent(id);
  const result = await deleteManagedPage(decoded);

  if (!result.ok) {
    return NextResponse.json({ error: "Page not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, type: result.type });
}

function createStableId(page: { id: string; builtinKey?: string }) {
  if (page.id.startsWith("builtin:") && page.builtinKey) {
    return `page_${page.builtinKey.replace(/[^a-zA-Z0-9]+/g, "_")}`;
  }
  return page.id;
}
