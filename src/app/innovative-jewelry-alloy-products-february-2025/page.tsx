import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "Innovative Jewelry Alloy Products February 2025 | ABI Manufacturing Intl Ltd",
  description:
    "Visit ABI at the Bangkok Gem Jewelry Fair and discover brass/bronze alloys, Sterilite De-Ox Sterling, Allura Gold, Platinum Sterling, scrap recycling, and RJC-certified green production.",
};

const sections = [
  {
    title: "Brass/Bronze Alloys",
    body: "The costume jewelry market around the world continues to grow as customers seek more affordable fashion jewelry. ABI offers a variety of alloys in different colors and casting performance. Try new low cost yellow 696 brass engineered to meet the color, hardness, and casting performance that you need. Call us today for a free sample.",
  },
  {
    title: "Sterilite Patented Sterling De-Ox Alloy",
    body: "ABI offers a variety of sterling de-ox alloy that offers superior casting quality, bright white color, and high tarnish resistance. A variety of hardness levels are available. Ask our technical team to determine the best alloy for your needs. The growing demand for thin, lightweight sterling bracelets has created the need for a strong casting and wire alloy. ABI’s new patented #127-B2 alloy can achieve extreme hardness (160HV) and spring properties to improve the durability of the new thin sterling bracelet designs.",
  },
  {
    title: "Allura Gold",
    body: 'The recent unprecedented price increases in gold and other precious metals has negatively affected the customer\'s ability to own a piece of jewelry. ABI has developed an alternative formulation of low karat gold with other precious metals including platinum, palladium, and silver, "Allura Metals". They are as beautiful as karat gold but only a fraction of the cost. ABI offers a variety of blends and colors.',
  },
  {
    title: "Platinum Sterling",
    body: "Our patented 1%, 3.5%, and 5% platinum sterling has a bright white color, increased hardness, and excellent tarnish resistance at a fraction of the cost of platinum jewelry. If branded properly, you can create a high perceived value that is excellent for a design line.",
  },
  {
    title: "Clean Scrap Recycling Program",
    body: "ABI has developed a proprietary brass and sterling silver recycling program that enables customers to recycle clean old trees and buttons to eliminate the need to refine the scrap. The program results in significant cost savings. Call us today for a quote.",
  },
  {
    title: "RJC Certification/Green Production",
    body: 'ABI Mfg Int\'l was recently certified by the Responsible Jewelry council that we maintain the highest standards in manufacturing quality alloys. We can certify our alloys are "Green" due to the high quality elements and manufacturing process which has minimal environmental effect.',
  },
];

export default function InnovativeJewelryAlloyProductsPage() {
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
              Innovative Jewelry Alloy Products
            </h1>
            <p className="mt-2 font-display text-base font-semibold text-[#696a6c] sm:text-lg">
              February 2025
            </p>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              <p>
                <strong className="font-bold text-[#14314b]">
                  Bangkok Gem Jewelry Fair February 22-26, 2025
                </strong>
              </p>
              <p>
                Visit us at 70 Th, during the Bangkok Gem Jewelry Fair at the
                Fair Fair{" "}
                <span aria-hidden="true">📍</span> Queen Sirikit National
                Convention Center. We&apos;re excited to showcase our products
                and connect with you during this renowned event. Discover the
                latest in jewelry design and innovation.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/13Qqz1M_ilnwfvHyqH4Ks9SeYwKjJeVyq/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
              >
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href="https://g.co/kgs/E3Goi2L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#14314b] px-5 py-3 text-base font-bold text-white transition hover:bg-[#696a6c]"
              >
                <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dkbf7tvcx/image/upload/v1739751471/abimetals/newsletter/ABIFEB2025_ylyq37.webp"
            alt="Innovative Jewelry Alloy Products February 2025"
            className="h-auto w-full rounded-2xl object-contain shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-8 text-base leading-relaxed text-[#696a6c] sm:text-lg">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold text-[#14314b] sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
