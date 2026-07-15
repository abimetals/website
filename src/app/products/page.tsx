import Link from "next/link";

export const metadata = {
  title: "Products | ABI Manufacturing Intl Ltd",
  description:
    "Explore ABI's premium alloys including Sterilite De-Ox Sterling, Elite Silver, Brass/Bronze, Alluragold™, Gold Alloys, and Platinum/Palladium.",
};

const products = [
  {
    name: "Sterilite™ De-Ox Sterling",
    href: "/products/silver/sterilite-de-ox-sterling",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg",
    alt: "Sterilite De-Ox Sterling polished silver bowl and spoons",
  },
  {
    name: "950 Elite Silver",
    href: "/products/silver/950-elite-silver",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700300918/abimetals/products/elite-silver-bracelet-new.jpg",
    alt: "950 Elite Silver bracelet",
  },
  {
    name: "Brass & Bronze Alloys",
    href: "/products/premium-brass-bronze",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg",
    alt: "Brass and bronze alloy casting grain",
  },
  {
    name: "Alluragold™",
    href: "/products/gold/alluragold",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1699442117/abimetals/products/Alluragold-Alloy-Allura-Metals-Inc_new.jpg",
    alt: "Alluragold alloy jewelry",
  },
  {
    name: "Gold Alloys",
    href: "/products/gold/gold-alloys",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700250849/abimetals/products/allura-metals-gold-alloys-new.jpg",
    alt: "Gold alloys casting grain",
  },
  {
    name: "Platinum / Palladium",
    href: "/products/platinum-palladium-sterling",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700305378/abimetals/products/Palladium-Sterling-Alloy-Allura-Metals-Inc.jpg",
    alt: "Platinum and palladium alloy jewelry",
  },
  {
    name: "Other Products",
    href: "/products/other-products-and-services",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1723164134/abimetals/products/colored-silvers.jpg",
    alt: "Colored silvers and specialty products",
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — ABI Manufacturing Intl Ltd
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#696a6c] sm:text-lg">
          Discover ABI&apos;s premium alloys, crafted in Bangkok with advanced
          capabilities for development and casting, ensuring optimal performance
          with expert technical support.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group overflow-hidden rounded-2xl border border-[#14314b]/10 bg-white shadow-[0_10px_28px_-18px_rgba(20,49,75,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-16px_rgba(20,49,75,0.4)]"
            >
              <img
                src={product.image}
                alt={product.alt}
                className={`aspect-[4/3] h-auto w-full transition duration-300 group-hover:scale-[1.03] ${
                  product.href.includes("other-products")
                    ? "object-contain bg-[#f7f7f7] p-4"
                    : "object-cover"
                }`}
              />
              <p className="px-4 py-4 text-center font-display text-base font-semibold tracking-wide text-[#14314b] sm:text-lg">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
