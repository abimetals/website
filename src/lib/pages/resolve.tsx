import { notFound } from "next/navigation";
import ManagedPageView from "@/components/ManagedPageView";
import { getBuiltinPages } from "@/lib/pages/builtins";
import { getManagedPageByPath, readPagesStore } from "@/lib/pages/store";

/** Returns managed override UI, or null to fall through to the static page. */
export async function tryManagedOverride(
  pagePath: string,
  opts?: { backHref?: string; backLabel?: string }
) {
  const store = await readPagesStore();
  const builtin = getBuiltinPages().find((page) => page.path === pagePath);
  if (builtin && store.deletedBuiltinKeys.includes(builtin.builtinKey)) {
    notFound();
  }

  const managed = await getManagedPageByPath(pagePath);
  if (!managed) return null;

  return (
    <ManagedPageView
      page={managed}
      backHref={opts?.backHref}
      backLabel={opts?.backLabel}
    />
  );
}

export async function managedPageTitle(pagePath: string, fallback: string) {
  const managed = await getManagedPageByPath(pagePath);
  return managed ? `${managed.title} | ABI Manufacturing Intl Ltd` : fallback;
}
