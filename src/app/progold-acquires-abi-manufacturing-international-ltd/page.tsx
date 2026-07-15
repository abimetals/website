import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "Progold acquires ABI Manufacturing International Ltd | ABI Manufacturing Intl Ltd",
  description:
    "ABI Manufacturing International Ltd becomes part of Progold S.p.A. — a new phase of strategic expansion in Asia.",
};

const contentParagraphs = [
  "Vicenza (Italy), May 29 2025 – Progold S.p.A., an Italian company based in Trissino (Vicenza) and a global leader in the development and production of precious metal alloys and advanced additive technologies for the jewellery industry, announces the acquisition of 100% of the share capital of ABI Manufacturing International Ltd, a Bangkok-based company operating in the same sector.",
  "This transaction marks a key strategic step for Progold, strengthening its presence in the high-potential region of Asia, with the goal of consolidating the Group's global leadership in the field of precious metal alloys and additive technologies for jewellery manufacturing.",
  "The acquisition aims not only to reinforce Progold’s commercial presence in the Asian market but also to enhance strategic relationships with leading Asian players in the industry, accelerating the implementation of the Group's industrial plans and opening up new growth opportunities.",
  "ABI Manufacturing International Ltd, a historic U.S. brand founded by Gary Ford, will continue to operate under its own brand and organizational structure, benefiting from integration with Progold’s technological expertise, financial resources, and innovative capabilities. Operational management will remain under the leadership of current CEO Nongluck Julsuwan and COO Noppadon Niwattannan, ensuring strategic continuity. The Board of Directors will be expanded to include Damiano Zito, President and CEO of Progold, Gemma Michelin, Deputy CEO of Progold, and Thomas Hammershøy Nyborg, Board Member of Progold.",
  "The acquisition has been actively supported by LBO France, a pioneer in private equity in France and a multi-specialist, multi-country investment platform. Active in the sectors of Private Equity, Real Estate, Venture Capital, and listed markets, LBO France has in recent years expanded its activity across Europe—particularly in Italy through Polis SGR—and into Africa via its subsidiary CGF Bourse. LBO France is one of the founding member of the international climate initiative and one of the first signatories of the France Invest Gender Equality Charter. Since December 2021, Progold S.p.A. has been backed by LBO France through the Small Caps Opportunities fund.",
  "With this transaction, Progold S.p.A. takes a decisive step in its international growth journey, combining strategic vision, industrial excellence, and technological innovation.",
];

const advisors = [
  "Chandler Mori Hamada Limited",
  "PWC",
  "Tilleke & Gibbins",
  "Greenberg Glusker LLP",
  "Advant NCTM",
  "Kroll Associates S.r.l.",
  "Ramboll Italy S.r.l.",
];

export default function ProgoldAcquiresAbiPage() {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-6">
          <Link
            href="/news/newsletter"
            className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
          >
            ← Back to Newsletter
          </Link>
        </p>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-2xl border border-[#ccc] bg-[#fafafa] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-wide text-[#14314b] sm:text-2xl">
              Newsletter Info
            </h2>
            <hr className="mt-3 w-16 border-0 border-t-2 border-[#696a6c]" />

            <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight text-[#14314b] sm:text-3xl">
              Progold acquires ABI Manufacturing International Ltd
            </h1>
            <p className="mt-2 font-display text-base font-semibold text-[#696a6c] sm:text-lg">
              A new phase of strategic expansion in Asia
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              ABI Manufacturing International Ltd becomes part of Progold S.p.A.
              ABI Manufacturing International Ltd is now part of Progold S.p.A.,
              an Italian company internationally recognised for its leadership
              in precious metal alloys and advanced additive technologies for
              the jewellery industry. ABI will continue to operate under its own
              brand and organisational structure, benefiting from integration
              with Progold’s technological expertise, financial resources, and
              innovative capabilities, while maintaining continuity under the
              leadership of CEO Nongluck Julsuwan and COO Noppadon Niwattannan.
              This strategic acquisition marks a new phase of growth and
              reinforces ABI’s position in the Asian market.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1MGJ_4if9ZD5TUy1bIAPKBvtDNvdqwxGG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
              >
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href="https://progold.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
              >
                <FontAwesomeIcon icon={faGlobe} className="h-4 w-4" />
                Visit Progold Website
              </a>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1748515356/abimetals/newsletter/progold-abi.jpg"
            alt="Progold acquires ABI Manufacturing International Ltd"
            className="h-auto w-full rounded-2xl object-contain shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-5 text-base leading-relaxed text-[#696a6c] sm:text-lg">
          {contentParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          <h2 className="mt-8 font-display text-2xl font-bold text-[#14314b] sm:text-3xl">
            Advisors involved in the transaction
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            {advisors.map((advisor) => (
              <li key={advisor}>{advisor}</li>
            ))}
          </ul>

          <h3 className="mt-6 font-display text-xl font-bold text-[#14314b] sm:text-2xl">
            Media contact
          </h3>
          <p>
            Meneghini &amp; Associati Inventia
            <br />
            Cinzia Di Rosa
            <br />
            E-mail:{" "}
            <a
              href="mailto:dirosa@meneghinieassociati.it"
              className="font-semibold text-[#14314b] underline-offset-2 hover:underline"
            >
              dirosa@meneghinieassociati.it
            </a>{" "}
            | M. +39 347/1010498
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1748516236/abimetals/newsletter/progold-abi-team.jpg"
            alt="ABI Manufacturing and Progold team"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />
        </div>
      </div>
    </article>
  );
}
