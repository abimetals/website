import type { DownloadLink, ManagedPage } from "@/lib/pages/types";
import {
  buildManagedPagePath,
  getAdminMenuOptions,
  getProductSubmenuOptions,
  slugifyLabel,
} from "@/data/navigation";

export type PageInput = {
  menuId: string;
  productSubmenuId?: string;
  title: string;
  subheading?: string;
  snippet?: string;
  image?: string;
  downloads?: DownloadLink[];
  content?: string;
  slug?: string;
  id?: string;
  path?: string;
  builtinKey?: string;
  source?: "managed" | "builtin";
  createdAt?: string;
};

export type ValidationResult =
  | { ok: true; page: Omit<ManagedPage, "createdAt" | "updatedAt"> & { createdAt?: string } }
  | { ok: false; errors: string[] };

function isValidUrl(value: string) {
  if (value.startsWith("/") || value.startsWith("tel:") || value.startsWith("mailto:")) {
    return true;
  }
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validatePageInput(input: PageInput): ValidationResult {
  const errors: string[] = [];
  const title = (input.title || "").trim();
  const menuId = (input.menuId || "").trim();
  const content = (input.content || "").trim();
  const image = (input.image || "").trim();
  const subheading = (input.subheading || "").trim();
  const snippet = (input.snippet || "").trim();

  if (!title) errors.push("Title is required.");
  if (!menuId) errors.push("Please choose where to add this page.");
  if (!content) errors.push("Content is required.");

  const menuOptions = getAdminMenuOptions();
  if (menuId && !menuOptions.some((option) => option.id === menuId)) {
    errors.push("Selected menu is invalid.");
  }

  let productSubmenuId = input.productSubmenuId?.trim() || undefined;
  if (menuId === "product") {
    if (!productSubmenuId) {
      errors.push("Please choose a Product submenu.");
    } else if (
      !getProductSubmenuOptions().some((option) => option.id === productSubmenuId)
    ) {
      errors.push("Selected Product submenu is invalid.");
    }
  } else {
    productSubmenuId = undefined;
  }

  if (image && !isValidUrl(image)) {
    errors.push("Image must be a valid URL or site path.");
  }

  const downloads = (input.downloads || [])
    .map((item) => ({
      label: (item.label || "").trim(),
      href: (item.href || "").trim(),
    }))
    .filter((item) => item.label || item.href);

  downloads.forEach((item, index) => {
    if (!item.label) errors.push(`Download #${index + 1} needs a label.`);
    if (!item.href) errors.push(`Download #${index + 1} needs a URL.`);
    else if (!isValidUrl(item.href)) {
      errors.push(`Download #${index + 1} has an invalid URL.`);
    }
  });

  const slug =
    (input.slug || "").trim() ||
    slugifyLabel(title) ||
    `page-${Date.now().toString(36)}`;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.push("Slug must use lowercase letters, numbers, and hyphens only.");
  }

  if (errors.length) return { ok: false, errors };

  const path =
    input.path ||
    buildManagedPagePath({
      menuId,
      productSubmenuId,
      slug,
    });

  return {
    ok: true,
    page: {
      id: input.id || "",
      slug,
      path,
      menuId,
      productSubmenuId,
      title,
      subheading,
      snippet,
      image,
      downloads,
      content,
      source: input.source || "managed",
      builtinKey: input.builtinKey,
      createdAt: input.createdAt,
    },
  };
}

export async function assertUniquePath(
  pagePath: string,
  excludeId?: string
): Promise<string | null> {
  const { listEditablePages } = await import("@/lib/pages/store");
  const pages = await listEditablePages();
  const conflict = pages.find(
    (page) => page.path === pagePath && page.id !== excludeId
  );
  return conflict
    ? `A page already exists at ${pagePath}. Choose a different title.`
    : null;
}
