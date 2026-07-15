import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Alluragold - Technical Data | ABI Manufacturing Intl Ltd",
  description:
    "Technical data sheets, product info, and tech tips for Alluragold™ gold and palladium alloys from ABI Manufacturing International.",
};

type DocLink = {
  label: string;
  href: string;
};

const technicalData: DocLink[] = [
  {
    label: "#A48 Yellow",
    href: "https://drive.google.com/file/d/1zq3iNHLEPKgvbwc6ch1HhamFJRrs1v6q/view?usp=sharing",
  },
  {
    label: "#A8951 Yellow",
    href: "https://drive.google.com/file/d/1T51O-vAepzORnnnEWOUK3vMP5Zpi_bJm/view?usp=sharing",
  },
  {
    label: "#1000 White",
    href: "https://drive.google.com/file/d/1OVbPn6NIivgPKiYgnJOAbhn-i5_6irMF/view",
  },
  {
    label: "#A1005 White",
    href: "https://drive.google.com/file/d/1bTZUA6P-rjXbqVGTkzhYpUx08S1uYnXI/view",
  },
  {
    label: "#A2205 White",
    href: "https://drive.google.com/file/d/10SQ7aKTWb1y6kIB_gBWkCJl57WgAk8s1/view?usp=sharing",
  },
  {
    label: "#A2209 White",
    href: "https://drive.google.com/file/d/1tb-TCcfFiaJy0jR3k6nQjRSmLZ3vlJeo/view?usp=sharing",
  },
  {
    label: "#A1900 Silver, Gold, Palladium",
    href: "https://drive.google.com/file/d/1UtIHhlRGzN0WfmJcEk7sYQpIobXyrIC5/view?usp=sharing",
  },
];

const productInfo: DocLink[] = [
  {
    label: "Alluragold™ The Karat Gold Alternative",
    href: "https://drive.google.com/file/d/1o1HkC5cC-rZdlTlP0hsRxfXvUUK4rIWX/view?usp=share_link",
  },
];

const techTips: DocLink[] = [
  {
    label: "Karat Gold Comparison",
    href: "https://drive.google.com/file/d/1in1K1NpFBApqwgHwLf9bP8TyCGW_vaqz/view?usp=share_link",
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

export default function AlluragoldTechnicalDataPage() {
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
          Alluragold™ Gold &amp; Palladium Alloy
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1699442117/abimetals/products/Alluragold-Alloy-Allura-Metals-Inc_new.jpg"
            alt="Alluragold™ gold and palladium alloy jewelry"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <DocList title="Technical Data" links={technicalData} />
            <DocList title="Product Info" links={productInfo} />
            <DocList title="Tech Tips" links={techTips} />
          </div>
        </div>
      </div>
    </section>
  );
}
