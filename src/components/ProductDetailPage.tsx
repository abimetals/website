import Link from "next/link";

export type ProductBenefit = string;

export type ProductTableCell = {
  text: string;
  href?: string;
  colSpan?: number;
  isSection?: boolean;
};

export type ProductDetail = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  benefits?: ProductBenefit[];
  technicalDataHref: string;
  tableTitle?: string;
  tableHeaders?: string[];
  tableRows?: ProductTableCell[][];
};

export default function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
          />

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
              — {product.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#14314b] sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#696a6c] sm:text-lg">
              {product.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {product.benefits && product.benefits.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#14314b]/10 bg-[#fafafa] p-5 sm:p-6">
                <p className="font-display text-lg font-bold text-[#14314b]">
                  Benefits:
                </p>
                <ul className="mt-3 space-y-2 text-base text-[#696a6c] sm:text-lg">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14314b]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href={product.technicalDataHref}
              className="mt-8 inline-flex items-center rounded-md bg-[#14314b] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#696a6c] sm:text-lg"
            >
              Get Technical Data
            </Link>
          </div>
        </div>

        {product.tableHeaders && product.tableRows && (
          <div className="mt-16">
            <h2 className="font-display text-3xl font-extrabold text-[#14314b] sm:text-4xl">
              {product.tableTitle ?? "Performance Characteristics"}
            </h2>
            <hr className="mt-4 w-16 border-0 border-t-2 border-[#696a6c]" />

            <div className="mt-8 overflow-x-auto rounded-2xl border border-[#14314b]/10 shadow-[0_12px_30px_-16px_rgba(20,49,75,0.25)]">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#14314b] text-white">
                  <tr>
                    {product.tableHeaders.map((header) => (
                      <th
                        key={header}
                        className="px-4 py-3 font-display font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.tableRows.map((row, index) => {
                    if (row[0]?.isSection) {
                      return (
                        <tr key={`section-${row[0].text}`} className="bg-[#e9e9e9]">
                          <td
                            colSpan={row[0].colSpan ?? product.tableHeaders!.length}
                            className="px-4 py-3 font-display text-base font-bold text-[#14314b]"
                          >
                            {row[0].text}
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr
                        key={`${row[0]?.text}-${index}`}
                        className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${cell.text}-${cellIndex}`}
                            className={`border-t border-[#14314b]/10 px-4 py-3 ${
                              cellIndex === 0
                                ? "font-semibold text-[#14314b]"
                                : "text-[#696a6c]"
                            }`}
                          >
                            {cell.href ? (
                              <a
                                href={cell.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline-offset-2 hover:underline"
                              >
                                {cell.text}
                              </a>
                            ) : (
                              cell.text
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
