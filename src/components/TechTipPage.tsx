import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import type { TechTip } from "@/data/tech-tips";

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

export default function TechTipPage({ tip }: { tip: TechTip }) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-6">
          <Link
            href="/support/tech-tips"
            className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
          >
            ← Back to Tech Tips
          </Link>
        </p>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-2xl border border-[#ccc] bg-[#fafafa] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-wide text-[#14314b] sm:text-2xl">
              Tech Tip Info
            </h2>
            <hr className="mt-3 w-16 border-0 border-t-2 border-[#696a6c]" />

            <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight text-[#14314b] sm:text-3xl">
              {tip.title}
            </h1>
            <p className="mt-2 font-display text-base font-semibold text-[#696a6c] sm:text-lg">
              {tip.subheading}
            </p>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-[#696a6c] sm:text-lg">
              {tip.snippet}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tip.download && (
                <a
                  href={tip.download.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
                >
                  <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                  {tip.download.label}
                </a>
              )}
              {tip.phone && (
                <a
                  href={`tel:+${tip.phone.replace(/\D/g, "").replace(/^0/, "66")}`}
                  className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                  {tip.phone}
                </a>
              )}
            </div>
          </div>

          <img
            src={tip.image}
            alt={tip.imageAlt}
            className={`h-auto w-full rounded-2xl shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)] ${
              tip.slug === "casting-stones-in-place"
                ? "object-contain bg-white"
                : "object-cover"
            }`}
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {renderContent(tip.content)}

          {tip.contentImage && (
            <img
              src={tip.contentImage.src}
              alt={tip.contentImage.alt}
              className="mt-8 h-auto w-full max-w-lg rounded-2xl object-contain"
            />
          )}

          {tip.videoUrl && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#14314b]/10 shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]">
              <iframe
                src={tip.videoUrl}
                title={`${tip.title} video`}
                className="aspect-video h-auto w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
