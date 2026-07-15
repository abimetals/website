import Link from "next/link";

export const metadata = {
  title: "Support | ABI Manufacturing Intl Ltd",
  description:
    "Browse technical data for ABI alloys — Sterilite De-Ox Sterling, Elite Silver, brass & bronze, Alluragold, gold alloys, platinum & palladium, and more.",
};

const supportProducts = [
  {
    name: "Sterilite De-Ox Sterling",
    href: "/technical-data/sterilite-de-ox-sterling",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg",
    alt: "Sterilite De-Ox Sterling polished silver bowl and spoons",
  },
  {
    name: "Elite Silver",
    href: "/technical-data/950-elite-silver",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700302962/abimetals/products/elite-silver-bracelet-3.jpg",
    alt: "Elite Silver jewelry bracelet",
  },
  {
    name: "Brass & Bronze Alloys",
    href: "/technical-data/premium-brass-and-bronze",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg",
    alt: "Brass and bronze alloy casting grain",
  },
  {
    name: "Alluragold",
    href: "/technical-data/alluragold",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1699442117/abimetals/products/Alluragold-Alloy-Allura-Metals-Inc_new.jpg",
    alt: "Alluragold alloy jewelry with gold casting grain",
  },
  {
    name: "Gold Alloys",
    href: "/technical-data/gold-alloys",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700250849/abimetals/products/allura-metals-gold-alloys-new.jpg",
    alt: "Gold alloys casting grain",
  },
  {
    name: "Platinum | Palladium",
    href: "/technical-data/platinum-palladium-sterling",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700305378/abimetals/products/Palladium-Sterling-Alloy-Allura-Metals-Inc.jpg",
    alt: "Platinum and palladium alloy jewelry ring",
  },
  {
    name: "Other Products",
    href: "/products/other-products-and-services",
    image:
      "https://abimetals.com/wp-content/uploads/2024/07/colored-silvers.jpg",
    alt: "Colored silver and specialty alloy products",
  },
];

export default function SupportPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — Support
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
          Technical Data
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#696a6c] sm:text-lg">
          Select a product category to view technical data sheets, casting
          guidance, and alloy specifications.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {supportProducts.map((product) => (
            <Link
              key={product.href + product.name}
              href={product.href}
              className="group block overflow-hidden rounded-2xl border border-[#14314b]/10 bg-white shadow-[0_10px_28px_-18px_rgba(20,49,75,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-16px_rgba(20,49,75,0.4)]"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="aspect-[4/3] h-auto w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
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
