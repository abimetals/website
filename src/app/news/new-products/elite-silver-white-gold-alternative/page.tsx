import { tryManagedOverride } from "@/lib/pages/resolve";
import NewProductPage from "@/components/NewProductPage";
import { getNewProduct } from "@/data/new-products";
import { notFound } from "next/navigation";

const product = getNewProduct("elite-silver-white-gold-alternative");

export const metadata = {
  title: product
    ? `${product.title} | ABI Manufacturing Intl Ltd`
    : "Product Not Found",
  description: product?.snippet,
};

export default async function Page() {
  const override = await tryManagedOverride("/news/new-products/elite-silver-white-gold-alternative", {
    backHref: "/news/new-products",
    backLabel: "Back to New Products",
  });
  if (override) return override;

  if (!product) notFound();
  return <NewProductPage product={product} />;
}
