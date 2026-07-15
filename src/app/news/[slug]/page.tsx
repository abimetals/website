import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManagedPageView from "@/components/ManagedPageView";
import { getManagedPageByPath } from "@/lib/pages/store";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/news/${slug}`);
  return {
    title: page
      ? `${page.title} | ABI Manufacturing Intl Ltd`
      : "News | ABI Manufacturing Intl Ltd",
  };
}

export default async function NewsManagedPage({ params }: Props) {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/news/${slug}`);
  if (!page) notFound();
  return (
    <ManagedPageView page={page} backHref="/news" backLabel="Back to News" />
  );
}
