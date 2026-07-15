import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import ManagedPageView from "@/components/ManagedPageView";
import { articles, getArticle } from "@/data/articles";
import { getManagedPageByPath, readPagesStore } from "@/lib/pages/store";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const managed = await getManagedPageByPath(`/news/articles/${slug}`);
  if (managed) {
    return {
      title: `${managed.title} | ABI Manufacturing Intl Ltd`,
      description: managed.snippet,
    };
  }
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | ABI Manufacturing Intl Ltd`,
    description: article.snippet,
  };
}

export default async function NewsArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const pagePath = `/news/articles/${slug}`;
  const store = await readPagesStore();
  if (store.deletedBuiltinKeys.includes(`article:${slug}`)) notFound();

  const managed = await getManagedPageByPath(pagePath);
  if (managed) {
    return (
      <ManagedPageView
        page={managed}
        backHref="/news/articles"
        backLabel="Back to Articles"
      />
    );
  }
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
