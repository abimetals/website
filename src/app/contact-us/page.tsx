import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import FilloutEmbed from "@/components/FilloutEmbed";

export const metadata = {
  title: "Contact Us | ABI Manufacturing Intl Ltd",
  description:
    "Contact ABI Manufacturing Int Limited headquarters in Thailand, or our distributors in Indonesia and India.",
};

export default function ContactUsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          — Get in Touch
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#14314b] sm:text-5xl">
          Contact Us
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-[#14314b]/10 bg-white leading-none">
            <FilloutEmbed filloutId="9W2bbsJMggus" />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-[#14314b] sm:text-3xl">
              ABI MANUFACTURING INT LIMITED
            </h2>

            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/r_8/v1715011060/abimetals/manufacturing/ABI-Metals-Alloys-Company-Offices-Bangkok-Thailand.jpg"
              alt="ABI Manufacturing Int Limited offices in Bangkok, Thailand"
              className="mt-5 h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
            />

            <div className="mt-6 space-y-3 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              <p className="flex items-center gap-2 font-display text-xl font-semibold text-[#14314b]">
                <span aria-hidden="true">🇹🇭</span>
                Headquarters, Thailand
              </p>
              <p>
                <span className="font-semibold text-[#14314b]">Address:</span>{" "}
                38/66 Moo4 Tambon Lumlukka Ampher Lamlukka
                <br />
                Pathumthani 12150, Thailand
              </p>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-4 w-4 text-[#14314b]"
                  />
                  <span className="font-semibold text-[#14314b]">Phone:</span>
                  <a
                    href="tel:+6621506711"
                    className="font-semibold text-[#14314b] hover:underline"
                  >
                    662-150-6711
                  </a>
                </span>
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faFax}
                    className="h-4 w-4 text-[#14314b]"
                  />
                  <span className="font-semibold text-[#14314b]">Fax:</span>
                  662-987-1190
                </span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-4 w-4 text-[#14314b]"
                />
                <span className="font-semibold text-[#14314b]">E-mail:</span>
                <a
                  href="mailto:nongluck.julsuwan@abimanu.com"
                  className="font-semibold text-[#14314b] hover:underline"
                >
                  nongluck.julsuwan@abimanu.com
                </a>
              </p>
              <p className="flex flex-wrap items-center gap-2 pt-2 text-[#14314b]">
                <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                <span className="font-semibold">Nongluck Julsuwan</span>
                <span className="text-[#696a6c]">Chief Executive Officer</span>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-4 w-4 text-[#14314b]"
                />
                <span className="font-semibold text-[#14314b]">Phone:</span>
                <a
                  href="tel:+66817938582"
                  className="font-semibold text-[#14314b] hover:underline"
                >
                  08-1793-8582
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#14314b]/10 shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.0534897553935!2d100.78195737497389!3d13.955420786458006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d79f68b2ef2a3%3A0x50f169032f1c4018!2sABI%20Maufacturing!5e0!3m2!1sen!2sus!4v1701036228581!5m2!1sen!2sus"
            title="ABI Manufacturing location map"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold tracking-wide text-[#14314b] sm:text-3xl">
            Distributors
          </h2>
          <hr className="mt-3 w-16 border-0 border-t-2 border-[#696a6c]" />

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-3 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              <p className="flex items-center gap-2 font-display text-xl font-semibold text-[#14314b]">
                <span aria-hidden="true">🇮🇩</span>
                Bali, Indonesia
              </p>
              <p className="font-semibold text-[#14314b]">PT KAPIT MAS</p>
              <p>
                <span className="font-semibold text-[#14314b]">Address:</span>{" "}
                JIn Kebo Iwa No 10, Padang Sambian Denpasar
                <br />
                80117 - Bali, Indonesia
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-4 w-4 text-[#14314b]"
                />
                <span className="font-semibold text-[#14314b]">Phone:</span>
                <a
                  href="tel:+62361425762"
                  className="font-semibold text-[#14314b] hover:underline"
                >
                  +62-361-425762
                </a>
              </p>
              <p className="flex flex-wrap items-center gap-2 text-[#14314b]">
                <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                <span className="font-semibold">Ben Morice</span>
                <span className="text-[#696a6c]">Director</span>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-4 w-4 text-[#14314b]"
                />
                <a
                  href="mailto:ben@kapitmas.com"
                  className="font-semibold text-[#14314b] hover:underline"
                >
                  ben@kapitmas.com
                </a>
              </p>
            </div>

            <div className="space-y-3 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              <p className="flex items-center gap-2 font-display text-xl font-semibold text-[#14314b]">
                <span aria-hidden="true">🇮🇳</span>
                India
              </p>
              <p className="font-semibold text-[#14314b]">Progold India</p>
              <p>
                <span className="font-semibold text-[#14314b]">Address:</span>{" "}
                A-403, New India Chambers, Cross Road &apos;A&apos;, Off. MIDC,
                Andheri (East), Mumbai - 400 093 Maharashtra
                <br />
                India
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-4 w-4 text-[#14314b]"
                />
                <span className="font-semibold text-[#14314b]">Phone:</span>
                <a
                  href="tel:+919820017581"
                  className="font-semibold text-[#14314b] hover:underline"
                >
                  +91 9820017581
                </a>
              </p>
              <p className="flex flex-wrap items-center gap-2 text-[#14314b]">
                <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                <span className="font-semibold">Chintan Mehta</span>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-4 w-4 text-[#14314b]"
                />
                <a
                  href="mailto:contact@progoldindia.com"
                  className="font-semibold text-[#14314b] hover:underline"
                >
                  contact@progoldindia.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
