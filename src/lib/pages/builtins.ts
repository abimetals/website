import { articles } from "@/data/articles";
import { newProducts } from "@/data/new-products";
import { techTips } from "@/data/tech-tips";
import type { ManagedPage } from "@/lib/pages/types";

export type BuiltinPage = {
  builtinKey: string;
  slug: string;
  path: string;
  menuId: string;
  productSubmenuId?: string;
  title: string;
  subheading: string;
  snippet: string;
  image: string;
  downloads: { label: string; href: string }[];
  content: string;
};

export function getBuiltinPages(): BuiltinPage[] {
  const articlePages: BuiltinPage[] = articles.map((article) => ({
    builtinKey: `article:${article.slug}`,
    slug: article.slug,
    path: `/news/articles/${article.slug}`,
    menuId: "news",
    title: article.title,
    subheading: article.subheading,
    snippet: article.snippet,
    image: article.image,
    downloads: article.pdf
      ? [{ label: "Download PDF", href: article.pdf }]
      : [],
    content: article.content,
  }));

  const productNewsPages: BuiltinPage[] = newProducts.map((product) => ({
    builtinKey: `new-product:${product.slug}`,
    slug: product.slug,
    path: `/news/new-products/${product.slug}`,
    menuId: "news",
    title: product.title,
    subheading: "",
    snippet: product.snippet,
    image: product.image,
    downloads: product.links.map((link) => ({
      label: link.label,
      href: link.href,
    })),
    content: product.content,
  }));

  const tipPages: BuiltinPage[] = techTips.map((tip) => ({
    builtinKey: `tech-tip:${tip.slug}`,
    slug: tip.slug,
    path: `/support/tech-tips/${tip.slug}`,
    menuId: "support",
    title: tip.title,
    subheading: tip.subheading,
    snippet: tip.snippet,
    image: tip.image,
    downloads: tip.download
      ? [{ label: tip.download.label, href: tip.download.href }]
      : tip.phone
        ? [{ label: `Call ${tip.phone}`, href: `tel:+${tip.phone.replace(/\D/g, "")}` }]
        : [],
    content: tip.content,
  }));

  const productPages: BuiltinPage[] = [
    {
      builtinKey: "product:sterilite-de-ox-sterling",
      slug: "sterilite-de-ox-sterling",
      path: "/products/silver/sterilite-de-ox-sterling",
      menuId: "product",
      productSubmenuId: "silver",
      title: "Sterilite™ De-Ox Sterling",
      subheading: "Silver Products",
      snippet:
        "Patented de-ox sterling grains for torch and machine casting with superior casting performance and tarnish resistance.",
      image:
        "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg",
      downloads: [
        {
          label: "Get Technical Data",
          href: "/technical-data/sterilite-de-ox-sterling",
        },
      ],
      content:
        "ABI Manufacturing International offers a variety of patented de-ox sterling grains for torch and machine casting. Innovative metal alloys and outstanding service are our specialty, give us a call today.\n\nSterilite™ sterling provides superior casting performance and the highest tarnish resistance in the industry. Sheet and wire product is also available.",
    },
    {
      builtinKey: "product:950-elite-silver",
      slug: "950-elite-silver",
      path: "/products/silver/950-elite-silver",
      menuId: "product",
      productSubmenuId: "silver",
      title: "950 Elite Silver",
      subheading: "Silver Products",
      snippet:
        "95% silver with palladium and gold — rhodium white color and market-leading tarnish resistance.",
      image:
        "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700300918/abimetals/products/elite-silver-bracelet-new.jpg",
      downloads: [
        {
          label: "Get Technical Data",
          href: "/technical-data/950-elite-silver",
        },
      ],
      content:
        "ABI Manufacturing International’s Elite Silver with exceptional tarnish resistance offers the ideal alternative to white gold.\n\nThis 95% silver patent pending alloy with palladium and gold has a rhodium white color and increased hardness compared to sterling for greater durability.",
    },
    {
      builtinKey: "product:premium-brass-bronze",
      slug: "premium-brass-bronze",
      path: "/products/premium-brass-bronze",
      menuId: "product",
      productSubmenuId: "brass",
      title: "Premium Brass & Bronze",
      subheading: "Brass & Bronze Products",
      snippet:
        "High quality brass and bronze alloys for more affordable jewelry manufacturing.",
      image:
        "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg",
      downloads: [
        {
          label: "Get Technical Data",
          href: "/technical-data/premium-brass-and-bronze",
        },
      ],
      content:
        "The dramatic increase in precious metal prices over the past few years has created a need to manufacture more affordable jewelry. ABI Manufacturing’s high quality brass and bronze alloys can fill this need.",
    },
    {
      builtinKey: "product:alluragold",
      slug: "alluragold",
      path: "/products/gold/alluragold",
      menuId: "product",
      productSubmenuId: "gold",
      title: "Alluragold™ Gold and Palladium Alloy",
      subheading: "Gold Products",
      snippet:
        "Low karat gold and palladium alloys with colors similar to white and yellow karat gold.",
      image:
        "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1699442117/abimetals/products/Alluragold-Alloy-Allura-Metals-Inc_new.jpg",
      downloads: [
        { label: "Get Technical Data", href: "/technical-data/alluragold" },
      ],
      content:
        "The recent change in the USA laws allowing the marketing and stamping of karat gold alloys below 10K has created a demand for lower karat jewelry alloys to create more affordable jewelry.\n\nABI Manufacturing offers a wide variety of alloys to serve this need from 1KT to 6KT blends.",
    },
    {
      builtinKey: "product:gold-alloys",
      slug: "gold-alloys",
      path: "/products/gold/gold-alloys",
      menuId: "product",
      productSubmenuId: "gold",
      title: "Gold Alloys",
      subheading: "Gold Products",
      snippet:
        "High purity and superior casting gold alloys for casting and sheet/wire fabrication.",
      image:
        "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700250849/abimetals/products/allura-metals-gold-alloys-new.jpg",
      downloads: [
        { label: "Get Technical Data", href: "/technical-data/gold-alloys" },
      ],
      content:
        "ABI Manufacturing offers a variety of high purity and superior casting gold alloys to meet the specific needs of your casting and sheet/wire fabrication applications.",
    },
    {
      builtinKey: "product:platinum-palladium-sterling",
      slug: "platinum-palladium-sterling",
      path: "/products/platinum-palladium-sterling",
      menuId: "product",
      productSubmenuId: "platinum",
      title: "Platinum & Palladium Sterling",
      subheading: "Platinum & Palladium",
      snippet:
        "Bright white platinum and palladium sterling with increased hardness and excellent tarnish resistance.",
      image:
        "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700305378/abimetals/products/Palladium-Sterling-Alloy-Allura-Metals-Inc.jpg",
      downloads: [
        {
          label: "Get Technical Data",
          href: "/technical-data/platinum-palladium-sterling",
        },
      ],
      content:
        "The marriage of platinum and palladium with silver create a premium sterling silver or white gold alternative with unique metal properties.",
    },
    {
      builtinKey: "product:other-products-and-services",
      slug: "other-products-and-services",
      path: "/products/other-products-and-services",
      menuId: "product",
      productSubmenuId: "other",
      title: "Other Products & Services",
      subheading: "Other Products",
      snippet:
        "Sterilite Replenisher, brass recycling, colored silvers, and alloy recycling services.",
      image: "",
      downloads: [],
      content:
        "ABI Manufacturing offers Sterilite™ Replenisher, brass recycling, colored silvers, and alloy recycling services for jewelry manufacturers.",
    },
  ];

  return [...articlePages, ...productNewsPages, ...tipPages, ...productPages];
}

export function builtinToManaged(builtin: BuiltinPage): ManagedPage {
  const now = new Date().toISOString();
  return {
    id: `builtin:${builtin.builtinKey}`,
    slug: builtin.slug,
    path: builtin.path,
    menuId: builtin.menuId,
    productSubmenuId: builtin.productSubmenuId,
    title: builtin.title,
    subheading: builtin.subheading,
    snippet: builtin.snippet,
    image: builtin.image,
    downloads: builtin.downloads,
    content: builtin.content,
    source: "builtin",
    builtinKey: builtin.builtinKey,
    createdAt: now,
    updatedAt: now,
  };
}
