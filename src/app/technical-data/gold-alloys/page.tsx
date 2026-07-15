import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Gold Alloys - Technical Data | ABI Manufacturing Intl Ltd",
  description:
    "Technical data sheets for ABI Manufacturing International gold alloys.",
};

type DocLink = {
  label: string;
  href: string;
};

const technicalDataCol1: DocLink[] = [
  {
    label: "#192-T",
    href: "https://drive.google.com/file/d/1pYL2v2mqJkvbw2amuLt7A7NNiU0yyFm1/view",
  },
  {
    label: "#200",
    href: "https://drive.google.com/file/d/1rj62sB7rQgLdaVmyqrzPu78aD8-dJPFm/view",
  },
  {
    label: "#120",
    href: "https://drive.google.com/file/d/1KG_XZseAGGm3cOLZHwI2ZEq4XwkRgjby/view?usp=share_link",
  },
  {
    label: "#120R",
    href: "https://drive.google.com/file/d/1bW856Gc8oJTvcx-B0SkanxeSIJKQesZz/view",
  },
];

const technicalDataCol2: DocLink[] = [
  {
    label: "#178",
    href: "https://drive.google.com/file/d/1QCQhGF1_QQ-6PfsrDdnsmKRL6zwpCBxR/view",
  },
  {
    label: "#51",
    href: "https://drive.google.com/file/d/1agWrzUpnbBFLB6Jd8UxkNj1KKiQTaLkQ/view",
  },
  {
    label: "#700-C",
    href: "https://drive.google.com/file/d/1g3O-3AtK5JrU_7QQt7gF-HqQPg_SLo8l/view?usp=share_link",
  },
  {
    label: "#670",
    href: "https://drive.google.com/file/d/1bOhhS1waAN4FlhnBqCLiGBQrExgOV_y5/view?usp=share_link",
  },
  {
    label: "#850",
    href: "https://drive.google.com/file/d/10rRKIz86PNaiVDE7oNMxn8vofkpp7A62/view",
  },
  {
    label: "#467",
    href: "https://drive.google.com/file/d/1X-6orodPp0TjTO5km03jD0mTO7wl26eh/view",
  },
];

function DocLinks({ links }: { links: DocLink[] }) {
  return (
    <ul className="space-y-3">
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
  );
}

export default function GoldAlloysTechnicalDataPage() {
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
          Gold Alloys
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700250849/abimetals/products/allura-metals-gold-alloys-new.jpg"
            alt="Gold alloys casting grain"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div>
            <h2 className="font-display text-xl font-bold text-[#14314b] sm:text-2xl">
              Technical Data
            </h2>
            <hr className="mt-3 w-12 border-0 border-t-2 border-[#696a6c]" />
            <div className="mt-5 grid gap-8 sm:grid-cols-2">
              <DocLinks links={technicalDataCol1} />
              <DocLinks links={technicalDataCol2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
