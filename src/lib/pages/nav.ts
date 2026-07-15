import { baseNavItems, type NavChild, type NavItem } from "@/data/navigation";
import { listManagedPages } from "@/lib/pages/store";

function cloneNav(items: NavItem[]): NavItem[] {
  return items.map((item) => ({
    ...item,
    children: item.children?.map((child) => ({
      ...child,
      children: child.children?.map((nested) => ({ ...nested })),
    })),
  }));
}

function ensureChild(
  parent: NavItem | NavChild,
  label: string,
  href: string
): NavChild {
  if (!parent.children) parent.children = [];
  let child = parent.children.find((item) => item.label === label);
  if (!child) {
    child = { label, href, children: [] };
    parent.children.push(child);
  }
  return child;
}

export async function getNavItemsWithManaged(): Promise<NavItem[]> {
  const items = cloneNav(baseNavItems);
  const managed = await listManagedPages();

  for (const page of managed) {
    if (page.menuId === "product") {
      const product = items.find((item) => item.label === "Product");
      if (!product) continue;

      const submenuLabel =
        page.productSubmenuId === "silver"
          ? "Silver Products"
          : page.productSubmenuId === "brass"
            ? "Brass & Bronze Products"
            : page.productSubmenuId === "gold"
              ? "Gold Products"
              : page.productSubmenuId === "platinum"
                ? "Platinum & Palladium"
                : page.productSubmenuId === "other"
                  ? "Other Products"
                  : "Other Products";

      const submenu = ensureChild(
        product,
        submenuLabel,
        page.productSubmenuId === "silver"
          ? "/products/silver/sterilite-de-ox-sterling"
          : page.productSubmenuId === "brass"
            ? "/products/premium-brass-bronze"
            : page.productSubmenuId === "gold"
              ? "/products/gold/alluragold"
              : page.productSubmenuId === "platinum"
                ? "/products/platinum-palladium-sterling"
                : "/products/other-products-and-services"
      );

      if (!submenu.children) submenu.children = [];
      if (!submenu.children.some((item) => item.href === page.path)) {
        submenu.children.push({ label: page.title, href: page.path });
      }
      continue;
    }

    const topLabel =
      page.menuId === "about"
        ? "About"
        : page.menuId === "support"
          ? "Support"
          : page.menuId === "news"
            ? "News"
            : page.menuId === "contact"
              ? "Contact"
              : null;

    if (!topLabel) continue;
    const top = items.find((item) => item.label === topLabel);
    if (!top) continue;
    if (!top.children) top.children = [];
    if (!top.children.some((item) => item.href === page.path)) {
      top.children.push({ label: page.title, href: page.path });
    }
  }

  return items;
}
