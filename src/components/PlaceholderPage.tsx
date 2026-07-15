import Link from "next/link";

export default function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — ABI Manufacturing Intl Ltd
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#14314b]">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#696a6c]">
          {description ??
            "This page is coming soon. Please contact us for more information."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-us"
            className="rounded-md bg-[#14314b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a3f5f]"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="rounded-md border border-[#14314b] px-5 py-3 text-sm font-semibold text-[#14314b] transition hover:bg-[#14314b]/5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
