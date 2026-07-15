import Link from "next/link";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/other-products-and-services",
      "Other Products & Services | ABI Manufacturing Intl Ltd"
    ),
    description: "Sterilite Replenisher, brass recycling, colored silvers, and alloy recycling services from ABI Manufacturing International.",
  };
}

const services = [
  {
    title: "Sterilite™ Replenisher",
    description:
      "Recycle all your regular and de-ox sterling. Our replenisher replaces the Silicon and Zinc burned off during the casting process to create brighter casting with lower porosity.",
    href: "https://drive.google.com/file/d/15ri31lXL8rdyru4O4xsx4jzvKxQr1B_Q/view?usp=share_link",
  },
  {
    title: "Brass Recycling",
    description:
      "Recycle your casting trees and save on refining costs.",
    href: "https://drive.google.com/file/d/1GJasPXluMa9tLXuSFPza_r9wRQBdanzw/view?usp=share_link",
  },
  {
    title: "Colored Silvers",
    description:
      "Pink and yellow blends are available at one quarter the cost of traditional sterling.",
    href: "https://drive.google.com/file/d/1tC2K_FGBMcbGz_28QorjHWRLzMBPdHKH/view?usp=share_link",
  },
  {
    title: "Alloy Recycling",
    description:
      "More information about this great service coming soon.",
  },
];

export default async function OtherProductsAndServicesPage() {
  const override = await tryManagedOverride("/products/other-products-and-services", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-6">
          <Link
            href="/products"
            className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
          >
            ← Back to Products
          </Link>
        </p>

        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — Products
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
          Other Products
        </h1>

        <div className="mt-8 flex justify-center">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1723164134/abimetals/products/colored-silvers.jpg"
            alt="ABI colored silvers and specialty products"
            className="h-auto max-h-[320px] w-auto max-w-full rounded-2xl object-contain shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)] sm:max-h-[380px] md:max-h-[420px]"
          />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-[#14314b]/10 bg-[#fafafa] p-6 shadow-[0_10px_28px_-18px_rgba(20,49,75,0.3)]"
            >
              <h2 className="font-display text-xl font-bold leading-tight text-[#14314b] sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-relaxed text-[#696a6c] sm:text-lg">
                {service.description}
              </p>
              {service.href ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
                >
                  Technical Data
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
