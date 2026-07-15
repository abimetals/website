import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    name: "STERILITE DE-OX STERLING",
    href: "/products/silver/sterilite-de-ox-sterling",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg",
    alt: "Polished Sterilite De-Ox Sterling silver bowl and spoons with a mirror finish",
  },
  {
    name: "ELITE SILVER",
    href: "/products/silver/950-elite-silver",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700302962/abimetals/products/elite-silver-bracelet-3.jpg",
    alt: "Elite Silver jewelry product",
  },
  {
    name: "BRASS/BRONZE ALLOYS",
    href: "/products/premium-brass-bronze",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg",
    alt: "Brass and bronze alloy casting grain",
  },
  {
    name: "ALLURAGOLD™",
    href: "/products/gold/alluragold",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1699442117/abimetals/products/Alluragold-Alloy-Allura-Metals-Inc_new.jpg",
    alt: "Alluragold alloy jewelry with gold casting grain",
  },
  {
    name: "GOLD ALLOYS",
    href: "/products/gold/gold-alloys",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700250849/abimetals/products/allura-metals-gold-alloys-new.jpg",
    alt: "Gold alloys casting grain",
  },
  {
    name: "PLATINUM/PALLADIUM",
    href: "/products/platinum-palladium-sterling",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700305378/abimetals/products/Palladium-Sterling-Alloy-Allura-Metals-Inc.jpg",
    alt: "Platinum and palladium alloy jewelry ring",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[linear-gradient(145deg,#ffffff_0%,#e9e9e9_42%,#dfe3e7_78%,#d4dae1_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-[0.95fr_1.15fr] md:gap-10 md:px-8 md:py-12 lg:gap-12">
          <div className="animate-fade-up text-center">
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[#14314b] [text-shadow:0_3px_12px_rgba(20,49,75,0.28)] sm:text-5xl lg:text-[3.35rem]">
              Innovative Precious
              <br />
              Metals &amp; Alloys
            </h1>
            <p className="mt-4 font-display text-2xl font-bold text-[#696a6c] [text-shadow:0_3px_10px_rgba(105,106,108,0.35)] sm:text-3xl lg:text-4xl">
              Since 1988
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up animate-delay-1">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_14px_rgba(20,49,75,0.35)] transition hover:bg-[#696a6c] sm:text-lg"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                Contact Us
              </Link>
              <a
                href="tel:+6621506711"
                className="inline-flex items-center gap-2.5 rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_14px_rgba(20,49,75,0.35)] transition hover:bg-[#696a6c] sm:text-lg"
              >
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                662-150-6711
              </a>
            </div>
          </div>
          <div className="animate-fade-in animate-delay-2">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/c_fill,w_680,h_370/bo_15px_solid_rgb:e9e9e9,c_lfill,w_1100/abimetals/banners/team-banner-2.jpg"
              alt="ABI Manufacturing team with award"
              className="h-auto w-full min-h-[260px] object-cover md:min-h-[310px] lg:min-h-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="bg-[#14314b] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:gap-14">
          <div className="order-2 md:order-1">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/r_20,b_rgb:13314B/v1715006977/abimetals/manufacturing/ABI-Metals-Int-Ltd-Innovative-Alloy-Silver-Brass-Bronze-Gold-Sterling-Platinum-Palladium-Manufacturing.jpg"
              alt="Close-up of ABI innovative alloy casting grain"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              — Innovation
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Innovative Alloys That Keep You Competitive
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
              Our innovative, patented alloys have earned us a reputation as a
              worldwide leader in alternative metals for the jewelry industry.
              Our alloys provide similar properties to traditional jewelry
              alloys at a fraction of the cost, and we can custom engineer
              alloys to meet specific properties like castability, color,
              hardness, and tarnish resistance to meet your needs. All of our
              alloys are manufactured with high purity metals under tight
              quality control standards to ensure consistent products for our
              customer.
            </p>
          </div>
        </div>
      </section>

      {/* Superior Metals */}
      <section className="bg-[#ffffff]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:gap-14">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
              — ABI Manufacturing Intl Ltd
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#14314b] sm:text-4xl">
              Superior Metals &amp; Alloys In Asia
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              ABI Manufacturing International has been serving the needs of
              jewelry manufacturers for over 30 years in the USA and Asia. We
              opened our Bangkok Thailand factory in February 2015 to service
              the needs of the Asian jewelry manufacturers. Our state of the art
              facility manufactures high quality gold and silver alloys,
              sterling grain, and brass/bronze alloys at competitive prices and
              fast delivery. Existing Asian trade agreements allow us to deliver
              alloys to many countries{" "}
              <em className="not-italic font-semibold text-[#14314b]">
                duty free
              </em>
              .
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              Our Bangkok facility has product development capabilities and a
              casting laboratory that enables us to custom design alloys and
              evaluate casting performance on specific jewelry designs. ABI
              maintains high quality standards in all alloy production. We can
              also provide customers with{" "}
              <em className="not-italic font-semibold text-[#14314b]">
                expert technical support
              </em>{" "}
              to ensure you achieve the best results from our high quality
              alloys.
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/c_scale,r_20:20:0:0/v1715003100/abimetals/manufacturing/ABI-Manufacturing-Process-Innovative-Innovation-3.jpg"
              alt="A technician at ABI Manufacturing wearing a face shield and heat-resistant gloves while operating precision alloy manufacturing machinery"
              className="h-auto w-full rounded-tl-[20px] rounded-tr-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#696a6c] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
            <h2 className="shrink-0 font-display text-3xl font-bold tracking-wide sm:text-4xl">
              Our Products
            </h2>
            <div className="hidden w-px self-stretch bg-[#ccc] md:block" aria-hidden="true" />
            <div className="h-px w-full bg-[#ccc] md:hidden" aria-hidden="true" />
            <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Discover ABI&apos;s premium alloys, crafted in Bangkok with
              advanced capabilities for development and casting, ensuring
              optimal performance with expert technical support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="product-card group block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-40 w-full rounded-2xl object-cover sm:h-48 md:h-52 lg:aspect-[4/3] lg:h-auto"
                  />
                </div>
                <p className="px-3 py-3 text-center font-display text-sm font-semibold tracking-wide sm:py-4 sm:text-base">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-base text-white/90 sm:text-lg">
            Browse our{" "}
            <Link
              href="/products/other-products-and-services"
              className="font-semibold underline underline-offset-4 transition hover:text-white"
            >
              Other Products
            </Link>{" "}
            | Looking for Technical Data?{" "}
            <Link
              href="/support"
              className="font-semibold underline underline-offset-4 transition hover:text-white"
            >
              Click Here
            </Link>
          </p>
        </div>
      </section>

      {/* Progold */}
      <section className="bg-[#ffffff]">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8">
          <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-[#14314b] sm:text-4xl lg:text-5xl">
            WELCOME TO THE PROGOLD FAMILY
            <br />
            WE ARE
            <br />
            EXPANDING
            <br />
            A VISION TOGETHER
          </h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1748454417/abimetals/newsletter/progold-update-2025.jpg"
              alt="Welcome to the Progold Family announcement plaque"
              className="mx-auto h-auto w-full rounded-lg object-contain shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
