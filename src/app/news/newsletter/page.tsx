import Link from "next/link";
import FilloutEmbed from "@/components/FilloutEmbed";
import { newsletterItems } from "@/data/newsletter";

export const metadata = {
  title: "Newsletter | ABI Manufacturing Intl Ltd",
  description:
    "Stay informed with ABI Manufacturing International newsletters — innovations, industry insights, trade shows, and tech tips.",
};

export default function NewsletterPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-12 md:px-8 md:pt-14 md:pb-16">
        <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="lg:pt-1">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
              — News
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
              Newsletter
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#696a6c] sm:text-lg">
              Stay Informed: Get the latest on our innovations and industry
              insights, trade shows and tech tips. delivered straight to your
              inbox. Subscribe to our newsletter.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#14314b]/10 bg-white leading-none">
            <FilloutEmbed />
          </div>
        </div>

        <hr className="mt-2 mb-8 border-0 border-t border-[#ccc] md:mt-3 md:mb-10" />

        <div className="space-y-12 md:space-y-14">
          {newsletterItems.map((item, index) => (
            <div key={item.id}>
              <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`h-[260px] w-full rounded-2xl sm:h-[300px] ${
                      item.id === "iso-certification" ||
                      item.id === "innovative-jewelry-alloy-products" ||
                      item.id === "progold-acquires-abi"
                        ? "object-contain bg-white"
                        : "object-cover"
                    }`}
                  />
                </div>

                <div className="rounded-2xl bg-[#444444] p-8 text-[#ffffff] shadow-lg sm:p-10">
                  <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                    {item.title}
                    {item.date && (
                      <>
                        <br />
                        <span className="mt-2 inline-block text-lg font-semibold text-white/80 sm:text-xl">
                          {item.date}
                        </span>
                      </>
                    )}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                    {item.snippet}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.links.map((link) => {
                      const external = link.href.startsWith("http");
                      const className =
                        "inline-flex items-center rounded-md bg-[#0445bf] px-5 py-3 text-base font-bold text-white transition hover:brightness-110";

                      return external ? (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
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
                </div>
              </div>

              {index < newsletterItems.length - 1 && (
                <hr className="mt-12 border-0 border-t border-[#ccc] md:mt-14" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
