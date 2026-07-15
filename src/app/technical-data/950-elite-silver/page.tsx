import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "950 Elite Silver - Technical Data | ABI Manufacturing Intl Ltd",
  description:
    "Technical data sheets and product info for 950 Elite Silver from ABI Manufacturing International.",
};

type DocLink = {
  label: string;
  href: string;
};

const technicalData: DocLink[] = [
  {
    label: "950 Elite Silver",
    href: "https://drive.google.com/file/d/1q3OUGebzCQZS829IqAn0jN0EFV1DWT3j/view?usp=share_link",
  },
];

const productInfo: DocLink[] = [
  {
    label: "950 Elite Silver Benefits & Pricing",
    href: "https://drive.google.com/file/d/1EXmvohaSj0Cj3tW27igA-rIhQwWCyyU1/view?usp=share_link",
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

export default function EliteSilverTechnicalDataPage() {
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
          950 Elite Silver
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700300918/abimetals/products/elite-silver-bracelet-new.jpg"
            alt="950 Elite Silver bracelet"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div className="grid gap-10 sm:grid-cols-2">
            <DocList title="Technical Data" links={technicalData} />
            <DocList title="Product Info" links={productInfo} />
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/r_10/w_410,h_285/v1715006317/abimetals/manufacturing/platinum-palladium-allura-metals-inc-abi-international_fsuqxy.jpg"
              alt="ABI Manufacturing precious metal alloys"
              className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)] sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
