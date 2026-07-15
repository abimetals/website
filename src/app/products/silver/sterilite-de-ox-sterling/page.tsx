import Link from "next/link";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/silver/sterilite-de-ox-sterling",
      "Sterilite De-Ox Sterling | ABI Manufacturing Intl Ltd"
    ),
    description: "Sterilite™ De-Ox Sterling — patented de-ox sterling grains for torch and machine casting with superior casting performance and tarnish resistance.",
  };
}

const performanceRows = [
  {
    alloy: "Sterling Silver (Ref.)",
    href: null as string | null,
    tarnish: "X",
    asCast: "62 R/ 72 V",
    heatTreated: "73 R/ 90 V",
    comment: "Casting Fire Scale",
  },
  {
    alloy: "Sterilite 127",
    href: "https://drive.google.com/file/d/1hvlwoCDMs7Se6tsczZ-2seoDpacDGH7Q/view?usp=sharing",
    tarnish: "3X",
    asCast: "70 R/ 84 V",
    heatTreated: "88 R/130 V",
    comment: "Spring alloy/Good casting + Rolling",
  },
  {
    alloy: "Sterilite 250B",
    href: "https://drive.google.com/file/d/1_rRq1MPmkBoWaI4yYRhs5IvuzENMJBA8/view?usp=share_link",
    tarnish: "6X",
    asCast: "67 R/ 80 V",
    heatTreated: "76 R/ 97 V",
    comment:
      "High Tarnish Resistance Excellent Flow Properties, Casting/Rolling Alloy",
  },
  {
    alloy: "Sterilite 250M",
    href: "https://drive.google.com/file/d/1OyGBqg8bTtKtwLJfHQBsyMq6pOlj1xn3/view?usp=share_link",
    tarnish: "6X",
    asCast: "65 R/ 76 V",
    heatTreated: "76 R/ 97 V",
    comment:
      "High Tarnish Resistance Excellent Flow Properties, Casting/Rolling Alloy",
  },
  {
    alloy: "Sterilite 255",
    href: "https://drive.google.com/file/d/1hR0lk1cXxngejfJ3gOT6pPYi8gAQ_Kgc/view?usp=share_link",
    tarnish: "7X",
    asCast: "69 R/ 83 V",
    heatTreated: "78 R/ 102 V",
    comment:
      "High Tarnish Resistance, Bright color Excellent flow properties, Casting/Rolling Alloy",
  },
  {
    alloy: "Sterilite 256",
    href: "https://drive.google.com/file/d/1yFgtZHcsDLPRUUpL1k1uve5uYE6x1gh5/view?usp=share_link",
    tarnish: "4X",
    asCast: "67 R/ 79 V",
    heatTreated: "75 R/ 95 V",
    comment:
      "Medium high Tarnish Resistance Good Flow Properties/More Forgiving",
  },
  {
    alloy: "Sterilite 407",
    href: "https://drive.google.com/file/d/15mFMjad4pUfcCdG2Wg2hCqltndcrgGO0/view?usp=share_link",
    tarnish: "3X",
    asCast: "63 R/ 74 V",
    heatTreated: "74 R/ 92 V",
    comment: "Medium low De-Ox, Good flow Cast/Rolling Alloy",
  },
];

const benefits = [
  "Extreme Hardness",
  "Spring Properties",
  "Casting, Wire, Tubing Applications",
  "Tarnish Resistant",
];

export default async function SteriliteDeOxSterlingProductPage() {
  const override = await tryManagedOverride("/products/silver/sterilite-de-ox-sterling", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg"
            alt="Sterilite™ De-Ox Sterling polished silver bowl and spoons"
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
              — Silver Products
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#14314b] sm:text-4xl lg:text-5xl">
              Sterilite™ De-Ox Sterling
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              <p>
                ABI Manufacturing International offers a variety of patented
                de-ox sterling grains for torch and machine casting. Innovative
                metal alloys and outstanding service are our specialty, give us
                a call today.
              </p>
              <p>
                Sterilite™ sterling provides superior casting performance and
                the highest tarnish resistance in the industry. Sheet and wire
                product is also available.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#14314b]/10 bg-[#fafafa] p-5 sm:p-6">
              <p className="font-display text-lg font-bold text-[#14314b]">
                Benefits:
              </p>
              <ul className="mt-3 space-y-2 text-base text-[#696a6c] sm:text-lg">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14314b]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/technical-data/sterilite-de-ox-sterling"
              className="mt-8 inline-flex items-center rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#696a6c] sm:text-lg"
            >
              Get Technical Data
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl font-extrabold text-[#14314b] sm:text-4xl">
            Performance Characteristics
          </h2>
          <hr className="mt-4 w-16 border-0 border-t-2 border-[#696a6c]" />

          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#14314b]/10 shadow-[0_12px_30px_-16px_rgba(20,49,75,0.25)]">
            <table className="min-w-[900px] w-full border-collapse text-left text-sm sm:text-base">
              <thead className="bg-[#14314b] text-white">
                <tr>
                  <th className="px-4 py-3 font-display font-semibold">Alloy</th>
                  <th className="px-4 py-3 font-display font-semibold">
                    Tarnish Resistance
                  </th>
                  <th className="px-4 py-3 font-display font-semibold">
                    As Cast Hardness
                  </th>
                  <th className="px-4 py-3 font-display font-semibold">
                    Hardness Heat Treated
                  </th>
                  <th className="px-4 py-3 font-display font-semibold">
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceRows.map((row, index) => (
                  <tr
                    key={row.alloy}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                  >
                    <td className="border-t border-[#14314b]/10 px-4 py-3 font-semibold text-[#14314b]">
                      {row.href ? (
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-2 hover:underline"
                        >
                          {row.alloy}
                        </a>
                      ) : (
                        row.alloy
                      )}
                    </td>
                    <td className="border-t border-[#14314b]/10 px-4 py-3 text-[#696a6c]">
                      {row.tarnish}
                    </td>
                    <td className="border-t border-[#14314b]/10 px-4 py-3 text-[#696a6c]">
                      {row.asCast}
                    </td>
                    <td className="border-t border-[#14314b]/10 px-4 py-3 text-[#696a6c]">
                      {row.heatTreated}
                    </td>
                    <td className="border-t border-[#14314b]/10 px-4 py-3 text-[#696a6c]">
                      {row.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
