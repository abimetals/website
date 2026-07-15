import { promises as fs } from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";
import type { ManagedPage, PagesStore } from "@/lib/pages/types";
import { getBuiltinPages, builtinToManaged } from "@/lib/pages/builtins";

const DATA_DIR = path.join(process.cwd(), "content");
const DATA_FILE = path.join(DATA_DIR, "pages.json");

const emptyStore = (): PagesStore => ({
  pages: [],
  deletedBuiltinKeys: [],
});

async function ensureStore() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(emptyStore(), null, 2), "utf8");
  }
}

export async function readPagesStore(): Promise<PagesStore> {
  noStore();
  await ensureStore();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw) as PagesStore;
    return {
      pages: Array.isArray(parsed.pages) ? parsed.pages : [],
      deletedBuiltinKeys: Array.isArray(parsed.deletedBuiltinKeys)
        ? parsed.deletedBuiltinKeys
        : [],
    };
  } catch {
    return emptyStore();
  }
}

export async function writePagesStore(store: PagesStore) {
  await ensureStore();
  await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), "utf8");
}

export async function listManagedPages() {
  const store = await readPagesStore();
  return store.pages.slice().sort((a, b) => a.title.localeCompare(b.title));
}

export async function getManagedPageById(id: string) {
  const store = await readPagesStore();
  return store.pages.find((page) => page.id === id) ?? null;
}

export async function getManagedPageByPath(pagePath: string) {
  const store = await readPagesStore();
  return store.pages.find((page) => page.path === pagePath) ?? null;
}

export async function getPageForPublicPath(pagePath: string) {
  const store = await readPagesStore();
  const managed = store.pages.find((page) => page.path === pagePath);
  if (managed) return managed;

  const builtin = getBuiltinPages().find((page) => page.path === pagePath);
  if (!builtin) return null;
  if (store.deletedBuiltinKeys.includes(builtin.builtinKey)) return null;
  return builtinToManaged(builtin);
}

export async function listEditablePages() {
  const store = await readPagesStore();
  const managedByBuiltin = new Set(
    store.pages.map((page) => page.builtinKey).filter(Boolean) as string[]
  );
  const managedPaths = new Set(store.pages.map((page) => page.path));

  const builtins = getBuiltinPages()
    .filter((page) => !store.deletedBuiltinKeys.includes(page.builtinKey))
    .filter(
      (page) =>
        !managedByBuiltin.has(page.builtinKey) && !managedPaths.has(page.path)
    )
    .map(builtinToManaged);

  return [...store.pages, ...builtins].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

export async function upsertManagedPage(
  page: ManagedPage
): Promise<ManagedPage> {
  const store = await readPagesStore();
  const index = store.pages.findIndex((item) => item.id === page.id);
  if (index >= 0) {
    store.pages[index] = page;
  } else {
    // Replace any prior page with same path
    store.pages = store.pages.filter((item) => item.path !== page.path);
    store.pages.push(page);
  }
  await writePagesStore(store);
  return page;
}

export async function deleteManagedPage(id: string) {
  const store = await readPagesStore();
  const existing = store.pages.find((page) => page.id === id);

  if (existing) {
    store.pages = store.pages.filter((page) => page.id !== id);
    if (existing.builtinKey) {
      store.deletedBuiltinKeys = Array.from(
        new Set([...store.deletedBuiltinKeys, existing.builtinKey])
      );
    }
    await writePagesStore(store);
    return { ok: true as const, type: "managed" as const };
  }

  // Deleting a builtin that was never copied into the store
  if (id.startsWith("builtin:")) {
    const key = id.replace(/^builtin:/, "");
    store.deletedBuiltinKeys = Array.from(
      new Set([...store.deletedBuiltinKeys, key])
    );
    await writePagesStore(store);
    return { ok: true as const, type: "builtin" as const };
  }

  return { ok: false as const, type: "missing" as const };
}

export function createPageId() {
  return `page_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
