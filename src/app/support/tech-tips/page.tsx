import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import { techTips } from "@/data/tech-tips";

export const metadata = {
  title: "Tech Tips | ABI Manufacturing Intl Ltd",
  description:
    "Technical tips from ABI Manufacturing International — casting stones in place, brass and bronze alloy casting, metal contamination, and more.",
};

export default function TechTipsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — Support
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
          Tech Tips
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#696a6c] sm:text-lg">
          Practical casting guidance and troubleshooting tips to help you get
          the best results from ABI alloys.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {techTips.map((tip) => (
            <Link
              key={tip.slug}
              href={`/support/tech-tips/${tip.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#14314b]/10 bg-white shadow-[0_10px_28px_-18px_rgba(20,49,75,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-16px_rgba(20,49,75,0.4)] sm:flex-row"
            >
              <img
                src={tip.image}
                alt={tip.imageAlt}
                className={`h-44 w-full sm:h-auto sm:w-44 md:w-52 ${
                  tip.slug === "casting-stones-in-place"
                    ? "object-contain bg-white p-2"
                    : "object-cover"
                }`}
              />
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <h2 className="font-display text-xl font-bold text-[#14314b] transition group-hover:text-[#696a6c] sm:text-2xl">
                  {tip.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#696a6c] sm:text-base">
                  {tip.subheading}
                </p>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#696a6c] sm:text-base">
                  {tip.snippet}
                </p>
                {tip.download && (
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#14314b] sm:text-base">
                    <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                    {tip.download.label}
                  </p>
                )}
                {tip.phone && (
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#14314b] sm:text-base">
                    <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                    {tip.phone}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
