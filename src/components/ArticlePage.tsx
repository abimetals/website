import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import type { Article } from "@/data/articles";

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={index} className="h-3" />;

    const plain = trimmed.replace(/:$/, "");

    if (
      plain === "Article Summary" ||
      /^[IVX]+\.\s/.test(trimmed) ||
      plain === "Major Bullet Points" ||
      plain === "Key Points"
    ) {
      return (
        <h2
          key={index}
          className="mt-8 font-display text-2xl font-bold text-[#14314b] first:mt-0 sm:text-3xl"
        >
          {plain}
        </h2>
      );
    }

    if (/^[A-E]\.\s/.test(trimmed)) {
      return (
        <h4
          key={index}
          className="mt-4 font-display text-lg font-semibold text-[#14314b] sm:text-xl"
        >
          {trimmed}
        </h4>
      );
    }

    if (
      trimmed.endsWith(":") &&
      trimmed.length < 80 &&
      !trimmed.startsWith("A.") &&
      !/^[IVX]+\./.test(trimmed)
    ) {
      return (
        <h3
          key={index}
          className="mt-6 font-display text-xl font-bold text-[#14314b] sm:text-2xl"
        >
          {plain}
        </h3>
      );
    }

    if (
      plain === "Mastering the Art of Blackening Silver Jewelry" ||
      (trimmed.length < 70 &&
        !trimmed.includes(".") &&
        /^[A-Z]/.test(trimmed) &&
        !trimmed.includes(" "))
    ) {
      return (
        <h3
          key={index}
          className="mt-6 font-display text-xl font-bold text-[#14314b] sm:text-2xl"
        >
          {plain}
        </h3>
      );
    }

    return (
      <p
        key={index}
        className="mt-2 text-base leading-relaxed text-[#696a6c] sm:text-lg"
      >
        {trimmed}
      </p>
    );
  });
}

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-6">
          <Link
            href="/news/articles"
            className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
          >
            ← Back to Articles
          </Link>
        </p>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-2xl border border-[#ccc] bg-[#fafafa] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-wide text-[#14314b] sm:text-2xl">
              Article Info
            </h2>
            <hr className="mt-3 w-16 border-0 border-t-2 border-[#696a6c]" />

            <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight text-[#14314b] sm:text-3xl">
              {article.title}
            </h1>
            <p className="mt-2 font-display text-base font-semibold text-[#696a6c] sm:text-lg">
              {article.subheading}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              {article.snippet}
            </p>

            <a
              href={article.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
            >
              <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
              Download PDF
            </a>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl">{renderContent(article.content)}</div>
      </div>
    </article>
  );
}
