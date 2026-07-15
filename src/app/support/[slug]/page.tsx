import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManagedPageView from "@/components/ManagedPageView";
import { getManagedPageByPath } from "@/lib/pages/store";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/support/${slug}`);
  return {
    title: page
      ? `${page.title} | ABI Manufacturing Intl Ltd`
      : "Support | ABI Manufacturing Intl Ltd",
  };
}

export default async function SupportManagedPage({ params }: Props) {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/support/${slug}`);
  if (!page) notFound();
  return (
    <ManagedPageView
      page={page}
      backHref="/support"
      backLabel="Back to Support"
    />
  );
}
