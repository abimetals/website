import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Sterilite De-Ox Sterling - Technical Data | ABI Manufacturing Intl Ltd",
  description:
    "Technical data sheets, product info, and tech tips for Sterilite™ De-Ox Sterling alloys from ABI Manufacturing International.",
};

type DocLink = {
  label: string;
  href: string;
};

const technicalData: DocLink[] = [
  {
    label: "#127 B2 Sterilite™",
    href: "https://drive.google.com/file/d/1hvlwoCDMs7Se6tsczZ-2seoDpacDGH7Q/view?usp=sharing",
  },
  {
    label: "#127 Sterilite™ Sterling Wire/Sheet",
    href: "https://drive.google.com/file/d/1u9HtlXI8tD0p-RtVCVvBxskS-BBifyKz/edit",
  },
  {
    label: "250B Sterilite™ Sterling",
    href: "https://drive.google.com/file/d/1_rRq1MPmkBoWaI4yYRhs5IvuzENMJBA8/view?usp=share_link",
  },
  {
    label: "250M Sterilite™ Sterling",
    href: "https://drive.google.com/file/d/1OyGBqg8bTtKtwLJfHQBsyMq6pOlj1xn3/view",
  },
  {
    label: "255 Sterilite™ Sterling",
    href: "https://drive.google.com/file/d/1hR0lk1cXxngejfJ3gOT6pPYi8gAQ_Kgc/view?usp=share_link",
  },
  {
    label: "256 Sterilite™ Sterling",
    href: "https://drive.google.com/file/d/1yFgtZHcsDLPRUUpL1k1uve5uYE6x1gh5/view?usp=share_link",
  },
  {
    label: "407 Sterilite™ Sterling",
    href: "https://drive.google.com/file/d/15mFMjad4pUfcCdG2Wg2hCqltndcrgGO0/view",
  },
];

const otherProductInfo: DocLink[] = [
  {
    label: "#127 Hard De-Ox Sterling",
    href: "https://drive.google.com/file/d/1Bx0R_V-Q328ZPwd0OEKPGLQNNI2lYWVp/view",
  },
  {
    label: "#127 Casting & Heat Treating Recommendations",
    href: "https://drive.google.com/file/d/1voka32BwktD1yPDZveJRkb3wu1Cj_DGB/view",
  },
  {
    label: "Sterilite Tarnish Resistant Sterling Grain",
    href: "https://drive.google.com/file/d/1g-INPwR1XFlS-kgKe9uesFVt75M2xoI3/view",
  },
  {
    label: "Sterilite Replenisher",
    href: "https://drive.google.com/file/d/1_XbNqwJ38ls8-zcLjAL_0KU-WpYOe3FL/view",
  },
];

const techTips: DocLink[] = [
  {
    label: "Antiquing Sterilite",
    href: "https://drive.google.com/file/d/1kPVlBCJcP2docuwFenoFhTm1jepapK1M/view",
  },
  {
    label: "Investment Casting",
    href: "https://drive.google.com/file/d/1rk9BXrrERANzeOqFQM7xPbkzHdbut806/view",
  },
  {
    label: "Sterilite Alloy 250 M Hand Fabrication",
    href: "https://drive.google.com/file/d/1pvtidyN6mg07Yzroio_Xd_2lv4cvwz-I/view",
  },
  {
    label: "Heat Treating Silver Jewelry",
    href: "https://drive.google.com/file/d/1a8I9uamRfYQ46WxksRH_TkLFawLYvxC1/view",
  },
  {
    label: "Tarnishing in Silver Jewelry",
    href: "https://drive.google.com/file/d/1GQIFCSpg0X-iC7CQh5Rp6jkixdtAS6Nr/view",
  },
];

function DocList({ title, links }: { title: string; links: DocLink[] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-[#14314b] sm:text-2xl">
        {title}
      </h2>
      <hr className="mt-3 w-12 border-0 border-t-2 border-[#696a6c]" />
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-base leading-snug text-[#14314b] transition hover:text-[#696a6c] hover:underline sm:text-lg"
            >
              <FontAwesomeIcon
                icon={faFilePdf}
                className="mt-1 h-4 w-4 shrink-0 text-[#696a6c]"
              />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SteriliteDeOxSterlingTechnicalDataPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-6">
          <Link
            href="/support"
            className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
          >
            ← Back to Technical Data
          </Link>
        </p>

        <h1 className="font-display text-3xl font-extrabold text-[#14314b] sm:text-4xl lg:text-5xl">
          Sterilite™ De-Ox Sterling
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg"
            alt="Sterilite™ De-Ox Sterling polished silver bowl and spoons"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <DocList title="Technical Data" links={technicalData} />
            <DocList title="Other Product Info" links={otherProductInfo} />
            <DocList title="Tech Tips" links={techTips} />
          </div>
        </div>
      </div>
    </section>
  );
}
