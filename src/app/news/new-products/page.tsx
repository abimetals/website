import Link from "next/link";
import { newProducts } from "@/data/new-products";

export const metadata = {
  title: "New Products | ABI Manufacturing Intl Ltd",
  description:
    "Discover new alloys and products from ABI Manufacturing International — Sterilite Spring Hard De-Ox Sterling, Nickel Free White Bronze, and Elite Silver.",
};

export default function NewProductsListingPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — News
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
          New Products
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#696a6c] sm:text-lg">
          Explore ABI&apos;s latest alloys and product innovations for jewelry
          manufacturers.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {newProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/news/new-products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#14314b]/10 bg-white shadow-[0_10px_28px_-18px_rgba(20,49,75,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-16px_rgba(20,49,75,0.4)] sm:flex-row"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-44 w-full object-cover sm:h-auto sm:w-44 md:w-52"
              />
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <h2 className="font-display text-xl font-bold text-[#14314b] transition group-hover:text-[#696a6c] sm:text-2xl">
                  {product.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#696a6c] sm:text-base">
                  {product.listingSubheading}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
