import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope, faFax } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Account Application | ABI Manufacturing Intl Ltd",
  description:
    "Apply for a credit account with ABI Manufacturing International to simplify procurement and terms for precious metals, alloys, and jewelry needs.",
};

export default function AccountApplicationPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
              — Support
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[#14314b] sm:text-5xl">
              Open A Credit Account
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              Apply for a credit account with ABI Manufacturing International to
              simplify your procurement and terms for your precious metals,
              alloys, and jewelry needs.
            </p>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1ikA0ywpDjcdqXkPgtcsYiCnvUUMmWKEy/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_14px_rgba(20,49,75,0.35)] transition hover:bg-[#696a6c] sm:text-lg"
              >
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                Download Application
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-[#14314b]/10 bg-[#fafafa] p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#14314b] sm:text-2xl">
                Please send it to us at:
              </h2>
              <ul className="mt-5 space-y-4 text-base text-[#696a6c] sm:text-lg">
                <li className="flex flex-wrap items-center gap-2">
                  <FontAwesomeIcon
                    icon={faFax}
                    className="h-4 w-4 text-[#14314b]"
                  />
                  <span className="font-semibold text-[#14314b]">Fax:</span>
                  662-987-1190
                </li>
                <li className="flex flex-wrap items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-4 w-4 text-[#14314b]"
                  />
                  <span className="font-semibold text-[#14314b]">Email:</span>
                  <a
                    href="mailto:nongluck.julsuwan@abimanu.com"
                    className="font-semibold text-[#14314b] hover:underline"
                  >
                    nongluck.julsuwan@abimanu.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/c_crop,w_630,h_400/r_30/v1716405041/abimetals/logo/logo-emblem-large.png"
              alt="ABI Manufacturing emblem"
              className="h-auto w-full max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
