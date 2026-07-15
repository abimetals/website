import ProductDetailPage from "@/components/ProductDetailPage";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/gold/gold-alloys",
      "Gold Alloys | ABI Manufacturing Intl Ltd"
    ),
    description: "ABI high purity gold alloys for casting and sheet/wire fabrication — yellow, red, and white gold formulations.",
  };
}

export default async function GoldAlloysProductPage() {
  const override = await tryManagedOverride("/products/gold/gold-alloys", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <ProductDetailPage
      product={{
        category: "Gold Products",
        title: "Gold Alloys",
        description:
          "High purity and superior casting gold alloys for casting and sheet/wire fabrication.",
        image:
          "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700250849/abimetals/products/allura-metals-gold-alloys-new.jpg",
        imageAlt: "Gold alloys casting grain",
        paragraphs: [
          "ABI Manufacturing offers a variety of high purity and superior casting gold alloys to meet the specific needs of your casting and sheet/wire fabrication applications.",
          "In this technical data section you will find a selection of our most popular alloys. Other formulations are available upon request or we can blend a custom alloy to meet your needs.",
        ],
        benefits: [
          "High Purity & Superior Casting",
          "Adaptability for Casting Machines",
          "Customizable Formulations",
          "Wide Range of Variations",
        ],
        technicalDataHref: "/technical-data/gold-alloys",
        tableHeaders: ["Alloy", "Karat Type", "Color", "Comment"],
        tableRows: [
          [
            {
              text: "10-14 Karat Yellow & Red Alloys",
              isSection: true,
              colSpan: 4,
            },
          ],
          [
            { text: "192-T" },
            { text: "10-14k Casting" },
            { text: "Rich Yellow" },
            {
              text: "Deoxidized blend for closed & open systems (medium silicon). High fluidity, lower casting temperatures",
            },
          ],
          [
            { text: "200" },
            { text: "10-14K Casting" },
            { text: "Rich Yellow" },
            {
              text: "Deoxidized blend for closed and open systems (medium silicon)",
            },
          ],
          [
            { text: "120" },
            { text: "10-14k Casting" },
            { text: "Bright Yellow" },
            {
              text: "Deoxidized blend for closed & open systems (low silicon)",
            },
          ],
          [
            { text: "120R" },
            { text: "14-k Rolling" },
            { text: "Rich Yellow" },
            {
              text: "No silicon blend for extrusion and rolling, good reusability",
            },
          ],
          [
            { text: "178" },
            { text: "18-22K Casting" },
            { text: "Pink" },
            {
              text: "Deoxidized blend for closed and open systems (medium silicon)",
            },
          ],
          [
            { text: "51" },
            { text: "10-18k Casting" },
            { text: "Red" },
            {
              text: "Deoxidized blend for closed & open systems (low silicon)",
            },
          ],
          [
            {
              text: "18-22 Karat Yellow Alloys",
              isSection: true,
              colSpan: 4,
            },
          ],
          [
            { text: "700-C" },
            { text: "18k Rolling/Casting" },
            { text: "Rich Yellow" },
            {
              text: "Deoxidized & silicon free for closed & open systems",
            },
          ],
          [
            { text: "670" },
            { text: "18-22k Casting" },
            { text: "Bright Yellow" },
            {
              text: "Grain refined & deoxidized blend for closed & open systems",
            },
          ],
          [
            {
              text: "10-18 Karat White Gold Alloys",
              isSection: true,
              colSpan: 4,
            },
          ],
          [
            { text: "850" },
            { text: "10-14k Casting" },
            { text: "White" },
            { text: "Nickel free alloy, good reusability lower cost" },
          ],
          [
            { text: "467" },
            { text: "10-18K Casting" },
            { text: "Bright White" },
            { text: "low nickel & silicon white." },
          ],
          [
            { text: "8214" },
            { text: "14k Casting" },
            { text: "White" },
            { text: "Nickel free Palladium white" },
          ],
        ],
      }}
    />
  );
}
