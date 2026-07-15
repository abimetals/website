import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Platinum | Palladium Sterling - Technical Data | ABI Manufacturing Intl Ltd",
  description:
    "Technical data sheets and product info for ABI platinum sterling and palladium sterling alloys.",
};

type DocLink = {
  label: string;
  href: string;
};

const technicalData: DocLink[] = [
  {
    label: "1% Platinum Sterling",
    href: "https://drive.google.com/file/d/1rQtte-IOlUTur4QhMj9S4tlsHjtrwUNt/view",
  },
  {
    label: "3.5% Platinum Sterling",
    href: "https://drive.google.com/file/d/14WEIkCn9dD3CWtCwUUz5-kDSb015d6Yt/view",
  },
  {
    label: "5% Platinum Sterling",
    href: "https://drive.google.com/file/d/1Y0_wdtEEIHmPr8Ra-zG0EgPjmZa38Lzs/view",
  },
  {
    label: "1% Palladium Sterling",
    href: "https://drive.google.com/file/d/1vydYi6qclDRNRIzQsgz93wHTc72xSsP9/view?usp=sharing",
  },
  {
    label: "3% Palladium Sterling",
    href: "https://drive.google.com/file/d/1aifxIjkUoJy6JYtU6eoavPEdUYn11rz1/view?usp=sharing",
  },
];

const productInfo: DocLink[] = [
  {
    label: "Platinum Sterling Products",
    href: "https://drive.google.com/file/d/1Zz6ZCz5iSIUVJ8rqhKtYXIyA0RBHaeDb/view?usp=share_link",
  },
  {
    label: "Palladium Sterling Products",
    href: "https://drive.google.com/file/d/1e6YvydnvhdKeGOaE_WGe0x_Fd8gDIpPz/view?usp=share_link",
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

export default function PlatinumPalladiumSterlingTechnicalDataPage() {
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
          Platinum &amp; Palladium Sterling
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700305378/abimetals/products/Palladium-Sterling-Alloy-Allura-Metals-Inc.jpg"
            alt="Platinum and palladium sterling alloy jewelry"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div className="grid gap-10 sm:grid-cols-2">
            <DocList title="Technical Data" links={technicalData} />
            <DocList title="Product Info" links={productInfo} />
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/w_410,h_285,r_15/v1700494929/abimetals/manufacturing/alluragold-allura-metals.jpg"
              alt="ABI Manufacturing Alluragold precious metal alloys"
              className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)] sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
