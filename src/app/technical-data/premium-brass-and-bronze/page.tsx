import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Premium Brass & Bronze - Technical Data | ABI Manufacturing Intl Ltd",
  description:
    "Technical data sheets and casting tips for ABI premium brass and bronze jewelry alloys.",
};

type DocLink = {
  label: string;
  href: string;
};

const brassData: DocLink[] = [
  {
    label: "696 Brass",
    href: "https://drive.google.com/file/d/1DuI7H0Q8MWMgZfMnuNwSTgojbQOzWHCV/view",
  },
  {
    label: "817 Brass",
    href: "https://drive.google.com/file/d/1L4_qpsNY24BKOFOVcj9iyivfAv946MNp/view?usp=sharing",
  },
  {
    label: "926 Brass",
    href: "https://drive.google.com/file/d/1XULov3CfhK8Z3F2kROrKaw9ut8g5lkRx/view?usp=share_link",
  },
  {
    label: "902 Brass",
    href: "https://drive.google.com/file/d/1vl1jZuYiJmy7f4-djhM02GizPkSrOCig/view?usp=share_link",
  },
  {
    label: "798 Brass",
    href: "https://drive.google.com/file/d/1UEjZoccUTj1T9dGK9wgP1d_jGZ_hbbWA/view?usp=share_link",
  },
  {
    label: "8025 Brass",
    href: "https://drive.google.com/file/d/1hdBltmhSzTzeHM-xlz2MXXTPxM8FoWrR/view",
  },
];

const bronzeData: DocLink[] = [
  {
    label: "890 Bronze",
    href: "https://drive.google.com/file/d/1Xgi7UQ5kz1ykbUbhbYIxWxvAQn6ONVFz/view",
  },
  {
    label: "955 Bronze",
    href: "https://drive.google.com/file/d/1VA_sMmY-faJJm7DCJ3MWH5HUXIWPb-wV/view",
  },
  {
    label: "961 Bronze",
    href: "https://drive.google.com/file/d/13iLvXdjd00xwq3vyHq7wfFyd7MC-F2le/view",
  },
  {
    label: "18-S Bronze",
    href: "https://drive.google.com/file/d/1SfkGKtCyq6xtadzbY58gdYfKORiATlsy/view?usp=share_link",
  },
  {
    label: "20 Bronze",
    href: "https://drive.google.com/file/d/1jFUwwfKSXgF753FAIE2au003o83p5HPp/view?usp=share_link",
  },
  {
    label: "21 Bronze",
    href: "https://drive.google.com/file/d/1v87Eh-OQaQ9ZBKBSqPmvczeJXVWJjluv/view?usp=sharing",
  },
  {
    label: "2510 Bronze",
    href: "https://drive.google.com/file/d/1g7P7cm1CnF5dOZBw4eYKM5xUdNFWJITj/view?usp=share_link",
  },
];

const techTips: DocLink[] = [
  {
    label: "Brass & Bronze Alloy Casting",
    href: "https://drive.google.com/file/d/1IFC5TU1S4sLuMzX_ewUIuU8rOY0y6Omc/view",
  },
  {
    label: "White Bronze Casting Info",
    href: "https://drive.google.com/file/d/11YCRa5YRYb_P_nq4lvS_6MnpGgGqGqj1/view",
  },
  {
    label: "Brass & Bronze Soldering Tips",
    href: "https://drive.google.com/file/d/1JGC8Y2_8nPa4rQc7Ls-I5tjwTjEvRaJR/view",
  },
];

function DocList({
  title,
  links,
  showTitle = true,
}: {
  title?: string;
  links: DocLink[];
  showTitle?: boolean;
}) {
  return (
    <div>
      {showTitle && title && (
        <>
          <h2 className="font-display text-xl font-bold text-[#14314b] sm:text-2xl">
            {title}
          </h2>
          <hr className="mt-3 w-12 border-0 border-t-2 border-[#696a6c]" />
        </>
      )}
      <ul className={showTitle && title ? "mt-5 space-y-3" : "space-y-3"}>
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

export default function PremiumBrassAndBronzeTechnicalDataPage() {
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
          Premium Brass &amp; Bronze
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg"
            alt="Premium brass and bronze alloy casting grain"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <div className="sm:col-span-2 xl:col-span-2">
              <h2 className="font-display text-xl font-bold text-[#14314b] sm:text-2xl">
                Technical Data
              </h2>
              <hr className="mt-3 w-12 border-0 border-t-2 border-[#696a6c]" />
              <div className="mt-5 grid gap-8 sm:grid-cols-2">
                <DocList links={brassData} showTitle={false} />
                <DocList links={bronzeData} showTitle={false} />
              </div>
            </div>
            <DocList title="Tech Tips" links={techTips} />
          </div>
        </div>
      </div>
    </section>
  );
}
