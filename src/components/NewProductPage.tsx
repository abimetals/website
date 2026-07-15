import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import type { NewProduct } from "@/data/new-products";

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={index} className="h-3" />;

    if (trimmed.startsWith("Phone:")) {
      const phone = trimmed.replace("Phone:", "").trim();
      const tel = phone.replace(/[^\d+]/g, "");
      return (
        <p
          key={index}
          className="mt-6 flex flex-wrap items-center gap-2 text-base font-semibold text-[#14314b] sm:text-lg"
        >
          <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
          Phone:{" "}
          <a href={`tel:+${tel.replace(/^0/, "66")}`} className="hover:underline">
            {phone}
          </a>
        </p>
      );
    }

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

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function NewProductPage({ product }: { product: NewProduct }) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-6">
          <Link
            href="/news/new-products"
            className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
          >
            ← Back to New Products
          </Link>
        </p>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-2xl border border-[#ccc] bg-[#fafafa] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-wide text-[#14314b] sm:text-2xl">
              Product Info
            </h2>
            <hr className="mt-3 w-16 border-0 border-t-2 border-[#696a6c]" />

            <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight text-[#14314b] sm:text-3xl">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              {product.snippet}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {product.links.map((link) =>
                isExternal(link.href) ? (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
                  >
                    <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <img
            src={product.image}
            alt={product.title}
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl">{renderContent(product.content)}</div>
      </div>
    </article>
  );
}
