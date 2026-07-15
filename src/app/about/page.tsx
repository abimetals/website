import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Company Overview | ABI Manufacturing Intl Ltd",
  description:
    "ABI Manufacturing International — precious metals quality, support, and fast delivery from our Bangkok facility. ISO 9001 & ISO 14001 certified.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:gap-14">
          <div className="relative grid gap-4 sm:grid-cols-[1.45fr_1fr] sm:gap-5">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/c_crop,w_450,h_550,g_south/v1748452294/abimetals/team/about-abi-manufacturing-int-nop.jpg"
              alt="ABI Manufacturing International team member at trade show booth"
              className="h-full min-h-[320px] w-full rounded-2xl object-cover sm:min-h-[420px]"
            />
            <div className="relative h-full min-h-[220px] sm:min-h-[420px]">
              <img
                src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1715009020/abimetals/manufacturing/ABI-Metals-Alloys-Company.jpg"
                alt="ABI manufacturing technician handling alloy casting grain"
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="pointer-events-none absolute bottom-5 left-4 z-10 sm:bottom-7 sm:left-5">
                <p className="font-display text-5xl font-extrabold leading-none text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
                  30+
                </p>
                <p className="mt-2 max-w-[10rem] text-sm font-semibold leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:max-w-[12rem] sm:text-base">
                  We have more than years of experience.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-[#14314b] [text-shadow:0_2px_8px_rgba(20,49,75,0.15)] sm:text-4xl lg:text-[2.65rem]">
              Precious Metals: Quality, Support, Fast Delivery
            </h1>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-base text-[#14314b] sm:text-lg">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mt-1 h-4 w-4 shrink-0 text-[#14314b]"
                />
                <span className="font-semibold">
                  Cutting-Edge Manufacturing in Bangkok, Thailand
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-[#14314b] sm:text-lg">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mt-1 h-4 w-4 shrink-0 text-[#14314b]"
                />
                <span className="font-semibold">
                  Expert Alloy Development at ABI
                </span>
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              Our state-of-the-art facility in Bangkok, Thailand manufactures
              high quality alloys at competitive pricing with fast delivery.
              Most alloys are stocked for immediate delivery, and the recent
              Asian trade agreement with Thailand allows us to deliver alloys
              to most countries duty free.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              ABI engineers have extensive technical experience in alloy
              development and jewelry manufacturing, enabling us to maintain
              high quality alloy manufacturing standards as we provide expert
              technical support to customers. Our facility includes a product
              development and test casting laboratory allowing us to design
              custom alloys and evaluate casting performance on specific
              jewelry designs.
            </p>

            <Link
              id="our-team"
              href="/about/technical-support"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
            >
              <FontAwesomeIcon icon={faUsers} className="h-4 w-4" />
              Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#14314b] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            — Why Choose Us?
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Our Commitment: Excellence in Metal Solutions and Customer
            Satisfaction
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-white/90 sm:text-lg">
            ABI Manufacturing International is committed to providing you with
            the highest quality, most innovative metals and alloys on the
            market, and with our superior customer service, you’ll be sure to
            get the most out of every one of our products.
          </p>
        </div>
      </section>

      {/* Custom Solution */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-[#14314b] sm:text-4xl">
              Do You Need A Custom Solution?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              Our laboratory can create specialized alloys to help keep you
              competitive. Get in touch to find out what we can do for you.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#696a6c]"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/r_25/v1700494929/abimetals/manufacturing/alluragold-allura-metals.jpg"
              alt="Gold casting grain representing custom alloy solutions"
              className="h-auto w-full rounded-[25px] object-cover"
            />
          </div>
        </div>
      </section>

      <div className="bg-white px-5 md:px-8" aria-hidden="true">
        <hr className="mx-auto max-w-7xl border-0 border-t border-[#d0d1d2]" />
      </div>

      {/* ISO Certification */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:gap-14">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1766271400/abimetals/logo/partners/iso-logo.png"
              alt="Bureau Veritas ISO 9001 and ISO 14001 certification logo"
              className="h-auto w-full max-w-xl object-contain"
            />
          </div>

          <div className="rounded-2xl bg-[#444444] p-8 text-[#ffffff] shadow-lg sm:p-10">
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              ABI Manufacturing Achieves ISO 9001 &amp; 14001 Certification
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              ABI Manufacturing Int Co., Ltd. has been certified by Bureau
              Veritas to ISO 9001:2015 and ISO 14001:2015. The certifications
              cover manufacturing and trading of precious metal alloys and
              master alloys for the jewelry industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/19omyi55izQX_BNAiWTL7DeBDSovsZOS6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#0445bf] px-5 py-3 text-base font-bold text-white transition hover:brightness-110"
              >
                ISO 9001
              </a>
              <a
                href="https://drive.google.com/file/d/19eFnnW4b-1AF6ywPRqB9OBG7BJdYsAYE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#0445bf] px-5 py-3 text-base font-bold text-white transition hover:brightness-110"
              >
                ISO 14001
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
