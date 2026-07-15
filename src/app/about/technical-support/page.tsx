import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Meet Our Team | ABI Manufacturing Intl Ltd",
  description:
    "Meet the ABI Manufacturing International team of experts in marketing, customer service, product development, and technical support.",
};

const team = [
  {
    name: "Nongluck Julsuwan",
    title: "Chief Executive Officer",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/c_fill,w_350,h_375/abimetals/team/nongluck-julsuwan.jpg",
    bio: "Nongluck joined the company in 2006 with a background in accounting. She graduated from Sukhothai Thammathirat University with a Bachelor’s degree in accounting. Nongluck has developed extensive knowledge of our products and services and is ready to serve your needs.",
    career: [
      "Expert in products and services.",
      "Holds a Bachelor’s degree from Sukhothai Thammathirat University.",
    ],
    email: "nongluck.julsuwan@abimanu.com",
    phone: "08-1793-8582",
    phoneHref: "tel:+66817938582",
  },
  {
    name: "Noppandon Niwattananan",
    title: "Chief Operating Officer",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/c_fill,w_350,h_375/abimetals/team/noppandon-niwattananan.jpg",
    bio: "Noppadon joined the company in 2015 and has brought along extensive experience in jewelry manufacturing, processes and gem stone knowledge accumulated over 25 years. With hands-on work in jewelry casting and alloys, Noppadon can bring to you technical advice and support for your successful application of our alloys and products in your jewelry production. Do not hesitate to contact him should you need help.",
    career: [
      "Joined in 2015 with 25+ years in jewelry manufacturing.",
      "Specializes in casting and alloys for effective technical support.",
    ],
    email: "noppadon.niwattananan@abimanu.com",
    emailLabel: "(Nop) noppadon.niwattananan@abimanu.com",
    phone: "662-150-6711",
    phoneHref: "tel:+6621506711",
  },
  {
    name: "Ben Morice",
    title: "Director Distribution Kapit Mas, Bali Indonesia",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/c_fill,w_350,h_375/abimetals/team/ben-morice.jpg",
    bio: "Ben is a native new Zealander who graduated from Massey University in 1983 with a degree in business. In 1986 he relocated to Bali, Indonesia and started manufacturing Bali Style handmade silver jewelry. His Company PT Kapit Mas has evolved into one of the largest jewelry manufacturers in Bali. They are a leader in advanced manufacturing techniques using high quality alloys, and can provide you with contract casting and fabrication services",
    bioExtra:
      "Ben is also a foundation partner of CV KMB, a distribution company which acts as distributors for ABI Manufacturing International in Bangkok to manufacturers throughout Indonesia. PT Kapit Mas/CV KMB can provide you with full technical support in using our unique alloys.",
    career: [],
    email: "ben@kapitmas.com",
    phone: null,
    phoneHref: null,
  },
];

export default function MeetOurTeamPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-6 md:px-8 md:pt-14 md:pb-8">
          <div className="grid items-start gap-6 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="shrink-0">
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#14314b] [text-shadow:0_2px_8px_rgba(20,49,75,0.15)] sm:text-5xl">
                Meet Our Team
              </h1>
              <p className="mt-3 font-display text-xl font-semibold text-[#696a6c] sm:text-2xl">
                We are here to serve you.
              </p>
            </div>
            <p className="font-display text-lg font-semibold leading-relaxed text-[#14314b] md:justify-self-end md:pt-3 md:whitespace-nowrap md:text-right sm:text-xl">
              At ABI, we adhere to a simple premise in doing business with the
              customer:
            </p>
          </div>

          <div className="relative mt-8 pb-16 sm:pb-20 md:pb-24">
            <img
              src="https://res.cloudinary.com/dkbf7tvcx/image/upload/c_scale,w_1110,h_415/r_50/l_image:upload:abimetals:logo:logo-emblem/c_scale,fl_relative,w_0.15/o_80/fl_layer_apply,g_south_east,x_0.03,y_0.04/abimetals/team/team-2025-banner.jpg"
              alt="ABI Manufacturing International team"
              className="h-auto w-full rounded-[50px] object-cover"
            />

            <blockquote className="relative z-10 -mt-10 ml-0 w-[92%] max-w-xl rounded-xl border-l-4 border-[#14314b] bg-[#d4d4d4] px-6 py-6 shadow-[0_16px_40px_-18px_rgba(20,49,75,0.45)] sm:-mt-14 sm:ml-4 sm:w-[75%] sm:px-8 sm:py-7 md:absolute md:bottom-0 md:left-0 md:mt-0 md:ml-0 md:w-[48%] md:translate-y-[28%] lg:w-[42%] lg:px-9 lg:py-8">
              <p className="text-base italic leading-relaxed text-[#14314b] sm:text-lg lg:text-xl">
                “Give them great and innovative products first, then follow up
                with a team of experts to help in the application and solve any
                problems that may crop up, and always be there to talk technical
                with the folks.”
              </p>
              <footer className="mt-4 text-sm font-semibold text-[#14314b] sm:text-base">
                — ABI Manufacturing&apos;s Mission Statement
              </footer>
            </blockquote>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#696a6c] sm:mt-10 sm:text-lg md:mt-20 lg:mt-24">
            To that end, we made a commitment to put together a team of experts
            in marketing, customer service, product development, and technical
            support to assist you in all phases of your jewelry manufacturing
            process. With these experts and other consultants located across
            Asia, we look forward to serving your needs.
          </p>

          <hr className="mt-10 border-0 border-t border-[#ccc] md:mt-12" />
        </div>
      </section>

      <section className="bg-[#f7f8f9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 pt-8 pb-14 md:px-8 md:pt-10 lg:gap-10">
          {team.map((member) => (
            <article
              key={member.name}
              className="grid items-start gap-6 rounded-2xl bg-white p-6 shadow-[0_10px_30px_-18px_rgba(20,49,75,0.35)] sm:p-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto aspect-[350/375] w-full max-w-[320px] rounded-2xl border-2 border-[#14314b]/35 object-cover shadow-[0_0_0_4px_rgba(20,49,75,0.08)] md:mx-0"
              />

              <div>
                <h2 className="font-display text-2xl font-bold text-[#14314b] sm:text-3xl">
                  {member.name}
                </h2>
                <p className="mt-1 font-display text-base font-semibold text-[#696a6c] sm:text-lg">
                  {member.title}
                </p>

                <p className="mt-5 text-base leading-relaxed text-[#696a6c] sm:text-lg">
                  {member.bio}
                </p>
                {member.bioExtra && (
                  <p className="mt-4 text-base leading-relaxed text-[#696a6c] sm:text-lg">
                    {member.bioExtra}
                  </p>
                )}

                {member.career.length > 0 && (
                  <div className="mt-6">
                    <h3 className="flex items-center gap-2 font-display text-lg font-bold text-[#14314b]">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="h-4 w-4"
                      />
                      Career &amp; Experience
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[#696a6c] sm:text-lg">
                      {member.career.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 rounded-xl bg-[#e8e9ea] px-5 py-5">
                  <h3 className="font-display text-lg font-bold text-[#14314b]">
                    Contact Details
                  </h3>
                  <p className="mt-3 flex flex-wrap items-center gap-2 text-base text-[#696a6c] sm:text-lg">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-4 w-4 text-[#14314b]"
                    />
                    <span className="font-semibold text-[#14314b]">Email:</span>
                    <a
                      href={`mailto:${member.email}`}
                      className="break-all text-[#14314b] underline-offset-2 hover:underline"
                    >
                      {member.emailLabel ?? member.email}
                    </a>
                  </p>
                  {member.phone && member.phoneHref && (
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-base text-[#696a6c] sm:text-lg">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="h-4 w-4 text-[#14314b]"
                      />
                      <span className="font-semibold text-[#14314b]">
                        Phone:
                      </span>
                      <a
                        href={member.phoneHref}
                        className="text-[#14314b] underline-offset-2 hover:underline"
                      >
                        {member.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-14 text-center md:px-8">
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#696a6c]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
