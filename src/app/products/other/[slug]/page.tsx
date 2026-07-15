import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManagedPageView from "@/components/ManagedPageView";
import { getManagedPageByPath } from "@/lib/pages/store";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/products/other/${slug}`);
  return {
    title: page
      ? `${page.title} | ABI Manufacturing Intl Ltd`
      : "Product | ABI Manufacturing Intl Ltd",
  };
}

export default async function OtherManagedProductPage({ params }: Props) {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/products/other/${slug}`);
  if (!page) notFound();
  return (
    <ManagedPageView
      page={page}
      backHref="/products/other-products-and-services"
      backLabel="Back to Other Products"
    />
  );
}
