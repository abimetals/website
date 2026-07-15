export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/** Top-level site navigation — single source of truth for Header + Admin. */
export const baseNavItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about" },
      { label: "Meet Our Team", href: "/about/technical-support" },
    ],
  },
  {
    label: "Product",
    href: "/products",
    children: [
      {
        label: "Silver Products",
        href: "/products/silver/sterilite-de-ox-sterling",
        children: [
          {
            label: "Sterilite™ De-Ox Sterling",
            href: "/products/silver/sterilite-de-ox-sterling",
          },
          {
            label: "950 Elite Silver",
            href: "/products/silver/950-elite-silver",
          },
        ],
      },
      {
        label: "Brass & Bronze Products",
        href: "/products/premium-brass-bronze",
      },
      {
        label: "Gold Products",
        href: "/products/gold/alluragold",
        children: [
          {
            label: "Alluragold™",
            href: "/products/gold/alluragold",
          },
          {
            label: "Gold Alloys",
            href: "/products/gold/gold-alloys",
          },
        ],
      },
      {
        label: "Platinum & Palladium",
        href: "/products/platinum-palladium-sterling",
      },
      {
        label: "Other Products",
        href: "/products/other-products-and-services",
      },
    ],
  },
  {
    label: "Support",
    href: "/support",
    children: [
      { label: "Technical Data", href: "/support" },
      { label: "Tech Tips", href: "/support/tech-tips" },
      { label: "Account Application", href: "/support/account-application" },
    ],
  },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Articles", href: "/news/articles" },
      { label: "New Products", href: "/news/new-products" },
      { label: "Newsletter", href: "/news/newsletter" },
      {
        label: "Responsible Jewelry Council",
        href: "/news/responsible-jewelry-council",
      },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export type AdminMenuOption = {
  id: string;
  label: string;
  href: string;
};

/** Top-level choices for Admin → Add Page (includes Home). */
export function getAdminMenuOptions(): AdminMenuOption[] {
  return [
    { id: "home", label: "Home", href: "/" },
    ...baseNavItems.map((item) => ({
      id: slugifyLabel(item.label),
      label: item.label,
      href: item.href,
    })),
  ];
}

export type ProductSubmenuOption = {
  id: string;
  label: string;
  pathPrefix: string;
};

export function getProductSubmenuOptions(): ProductSubmenuOption[] {
  return [
    {
      id: "silver",
      label: "Silver Products",
      pathPrefix: "/products/silver",
    },
    {
      id: "brass",
      label: "Brass & Bronze Products",
      pathPrefix: "/products/brass",
    },
    {
      id: "gold",
      label: "Gold Products",
      pathPrefix: "/products/gold",
    },
    {
      id: "platinum",
      label: "Platinum & Palladium",
      pathPrefix: "/products/platinum",
    },
    {
      id: "other",
      label: "Other Products",
      pathPrefix: "/products/other",
    },
  ];
}

export function slugifyLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/™/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function buildManagedPagePath(input: {
  menuId: string;
  productSubmenuId?: string;
  slug: string;
}) {
  const { menuId, productSubmenuId, slug } = input;

  if (menuId === "product") {
    const sub = getProductSubmenuOptions().find((s) => s.id === productSubmenuId);
    const prefix = sub?.pathPrefix ?? "/products";
    return `${prefix}/${slug}`;
  }

  const map: Record<string, string> = {
    home: "/pages",
    about: "/about",
    support: "/support",
    news: "/news",
    contact: "/contact",
  };

  const prefix = map[menuId] ?? "/pages";
  return `${prefix}/${slug}`;
}
