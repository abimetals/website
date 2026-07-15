import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import type { ManagedPage } from "@/lib/pages/types";

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={index} className="h-3" />;
    return (
      <p
        key={index}
        className="mt-2 text-base leading-relaxed text-[#696a6c] first:mt-0 sm:text-lg"
      >
        {trimmed}
      </p>
    );
  });
}

export default function ManagedPageView({
  page,
  backHref,
  backLabel,
}: {
  page: ManagedPage;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        {backHref && (
          <p className="mb-6">
            <Link
              href={backHref}
              className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
            >
              ← {backLabel || "Back"}
            </Link>
          </p>
        )}

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-2xl border border-[#ccc] bg-[#fafafa] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-wide text-[#14314b] sm:text-2xl">
              Page Info
            </h2>
            <hr className="mt-3 w-16 border-0 border-t-2 border-[#696a6c]" />

            <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight text-[#14314b] sm:text-3xl">
              {page.title}
            </h1>
            {page.subheading && (
              <p className="mt-2 font-display text-base font-semibold text-[#696a6c] sm:text-lg">
                {page.subheading}
              </p>
            )}
            {page.snippet && (
              <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-[#696a6c] sm:text-lg">
                {page.snippet}
              </p>
            )}

            {page.downloads.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {page.downloads.map((link) => {
                  const external = link.href.startsWith("http");
                  const className =
                    "inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]";

                  return external ? (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className={className}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {page.image ? (
            <img
              src={page.image}
              alt={page.title}
              className="h-auto w-full rounded-2xl object-contain shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
            />
          ) : null}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">{renderContent(page.content)}</div>
      </div>
    </article>
  );
}
