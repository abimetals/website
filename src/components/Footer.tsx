import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const hqPhones = [
  { label: "662-150-6711", href: "tel:+6621506711" },
  { label: "622-150-6712", href: "tel:+6621506712" },
  { label: "08-1793-8582", href: "tel:+66817938582" },
];

const certifications = [
  {
    src: "https://res.cloudinary.com/dkbf7tvcx/image/upload/f_webp,c_fit,w_150,h_67/abimetals/logo/partners/nj.jpg",
    alt: "NJ Logo",
  },
  {
    src: "https://res.cloudinary.com/dkbf7tvcx/image/upload/f_webp,c_fit,w_150,h_67/abimetals/logo/partners/green.jpg",
    alt: "Green Logo",
  },
  {
    src: "https://res.cloudinary.com/dkbf7tvcx/image/upload/f_webp,c_fit,w_150,h_67/abimetals/logo/partners/global-recycled-standard-logo.png",
    alt: "Global Recycled Standard Logo",
  },
  {
    src: "https://res.cloudinary.com/dkbf7tvcx/image/upload/f_webp,c_fit,w_150,h_67/abimetals/logo/partners/carbon-footprint-logo.jpg",
    alt: "Carbon Footprint Logo",
  },
  {
    src: "https://res.cloudinary.com/dkbf7tvcx/image/upload/f_webp,c_fill,w_150,h_67/abimetals/logo/partners/iso-logo.png",
    alt: "Bureau Veritas to ISO 9001:2015 and ISO 14001:2015",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2228] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 lg:gap-10">
        <div className="md:col-span-5">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1723169103/abimetals/logo/logo-footer-int.png"
            alt="ABI Manufacturing International"
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            38/66 Moo4 Tambon Lumlukka Ampher Lamlukka
            <br />
            Pathumthani 12150, Thailand
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-base text-white/90 sm:text-lg">
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-white/70" />
              <span aria-hidden="true" className="text-lg leading-none">
                🇹🇭
              </span>
            </span>
            {hqPhones.map((phone, i) => (
              <span key={phone.href} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-white/40">|</span>}
                <a
                  href={phone.href}
                  className="transition-colors hover:text-white"
                >
                  {phone.label}
                </a>
              </span>
            ))}
          </div>

          <p className="mt-4 flex items-center gap-2 text-base sm:text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-white/70" />
            <a
              href="mailto:nongluckjulsuwan@abimanu.com"
              className="transition-colors hover:text-white"
            >
              nongluckjulsuwan@abimanu.com
            </a>
          </p>

          <p className="mt-3 flex items-center gap-2 text-base sm:text-lg">
            <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 text-white/70" />
            <a
              href="https://www.abimanufacturingint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              www.abimanufacturingint.com
            </a>
          </p>
        </div>

        <div className="grid gap-8 md:col-span-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-6 lg:gap-8">
          <div>
            <h3 className="border-b border-white/25 pb-3 font-display text-2xl font-semibold tracking-wide sm:text-3xl">
              Distributors
            </h3>

            <div className="mt-5 space-y-6 text-base text-white/85 sm:text-lg">
              <div>
                <p className="font-semibold text-white">Kapit Mas | Indonesia</p>
                <p className="mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-white/70" />
                  <span aria-hidden="true">🇮🇩</span>
                  <a href="tel:+62361425762" className="hover:text-white">
                    +62-361-425762
                  </a>
                </p>
                <p className="mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-white/70" />
                  <a
                    href="mailto:ben@kapitmas.com"
                    className="hover:text-white"
                  >
                    ben@kapitmas.com
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Progold India | India</p>
                <p className="mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-white/70" />
                  <span aria-hidden="true">🇮🇳</span>
                  <a href="tel:+919820017581" className="hover:text-white">
                    +91 9820017581
                  </a>
                </p>
                <p className="mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-white/70" />
                  <a
                    href="mailto:contact@progoldindia.com"
                    className="hover:text-white"
                  >
                    contact@progoldindia.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="whitespace-nowrap border-b border-white/25 pb-3 font-display text-2xl font-semibold tracking-wide sm:text-3xl">
              Member &amp; Certifications
            </h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {certifications.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-base text-white/60 md:px-8">
        Copyright © 2026 by{" "}
        <Link
          href="https://bizbia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white"
        >
          Bizbia.com
        </Link>{" "}
        | All rights reserved
        {" · "}
        <Link
          href="/admin/login"
          className="text-white/45 transition-colors hover:text-white/75"
        >
          Staff login
        </Link>
      </div>
    </footer>
  );
}
