import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManagedPageView from "@/components/ManagedPageView";
import { getManagedPageByPath } from "@/lib/pages/store";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/contact/${slug}`);
  return {
    title: page
      ? `${page.title} | ABI Manufacturing Intl Ltd`
      : "Contact | ABI Manufacturing Intl Ltd",
  };
}

export default async function ContactManagedPage({ params }: Props) {
  const { slug } = await params;
  const page = await getManagedPageByPath(`/contact/${slug}`);
  if (!page) notFound();
  return (
    <ManagedPageView
      page={page}
      backHref="/contact-us"
      backLabel="Back to Contact"
    />
  );
}
