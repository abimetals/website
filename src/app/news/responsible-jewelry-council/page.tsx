export const metadata = {
  title: "Responsible Jewelry Council | ABI Manufacturing Intl Ltd",
  description:
    "Discover ABI Manufacturing's Responsible Jewelry Council certificate, policy manual, grievance policy, and annual reports.",
};

const downloads = [
  {
    label: "Responsible Jewelry Council Certificate",
    href: "https://drive.google.com/file/d/1aTYf5OUwGS7TnliSRFr_iviZqcJ5K2gH/view?usp=share_link",
  },
  {
    label: "Responsible Jewelry Council Policy Manual",
    href: "https://drive.google.com/file/d/1u_YesekJTotxoAPsyQydpXNcJxATv3pT/view?usp=share_link",
  },
  {
    label: "Responsible Jewelry Council Grievance Policy",
    href: "https://drive.google.com/file/d/1K7Ukj5UQ1RPJhr75h9DijWLMCvRFzmVB/view?usp=share_link",
  },
  {
    label: "Responsible Jewelry Council Annual Report 2024",
    href: "https://drive.google.com/file/d/1kPS-0DgRUWTVOsw8aJNNhc_bpr7R1GHA/view?usp=share_link",
  },
];

export default function ResponsibleJewelryCouncilPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <img
              src="https://www.responsiblejewellery.com/wp-content/uploads/logo-rjc2020-rgb-1.png"
              alt="Responsible Jewellery Council logo"
              className="h-[260px] w-full rounded-2xl bg-white object-contain sm:h-[300px]"
            />
          </div>

          <div className="rounded-2xl bg-[#444444] p-8 text-[#ffffff] shadow-lg sm:p-10">
            <h1 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              Responsible Jewelry Council
              <br />
              <span className="mt-2 inline-block text-lg font-semibold text-white/80 sm:text-xl">
                Certificate &amp; Policies
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              Discover the Responsible Jewelry Council&apos;s commitment through
              its certificate and detailed Policy Manual. The Grievance Policy
              outlines procedures for concerns. Access the latest Annual Reports
              for a overview of ABI&apos;s dedication to responsible practices
              and achievements in the jewelry industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {downloads.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[#0445bf] px-5 py-3 text-base font-bold text-white transition hover:brightness-110"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
