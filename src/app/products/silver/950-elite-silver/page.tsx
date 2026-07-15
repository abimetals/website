import ProductDetailPage from "@/components/ProductDetailPage";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/silver/950-elite-silver",
      "950 Elite Silver | ABI Manufacturing Intl Ltd"
    ),
    description: "ABI Elite Silver — 95% silver with palladium and gold, rhodium white color, high hardness, and market-leading tarnish resistance.",
  };
}

export default async function EliteSilverProductPage() {
  const override = await tryManagedOverride("/products/silver/950-elite-silver", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <ProductDetailPage
      product={{
        category: "Silver Products",
        title: "950 Elite Silver",
        description:
          "ABI Elite Silver with exceptional tarnish resistance — an ideal alternative to white gold.",
        image:
          "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700300918/abimetals/products/elite-silver-bracelet-new.jpg",
        imageAlt: "950 Elite Silver bracelet",
        paragraphs: [
          "ABI Manufacturing International’s Elite Silver with exceptional tarnish resistance offers the ideal alternative to white gold.",
          "This 95% silver patent pending alloy with palladium and gold has a rhodium white color and increased hardness compared to sterling for greater durability. The tarnish resistance is the highest of any sterling on the market. Give your customer the natural beauty of sterling without rhodium plating.",
        ],
        benefits: [
          "95% silver, top tarnish resistance",
          "Rhodium White, High Hardness",
          "Market-Leading Tarnish Resistance",
          "Natural Beauty, No Rhodium Plating",
        ],
        technicalDataHref: "/technical-data/950-elite-silver",
      }}
    />
  );
}
