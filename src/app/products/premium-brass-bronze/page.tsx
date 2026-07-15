import ProductDetailPage from "@/components/ProductDetailPage";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/premium-brass-bronze",
      "Premium Brass & Bronze | ABI Manufacturing Intl Ltd"
    ),
    description: "ABI premium brass and bronze alloys for affordable jewelry — yellow, pink, and white bronze casting alloys with superior casting properties.",
  };
}

export default async function PremiumBrassBronzeProductPage() {
  const override = await tryManagedOverride("/products/premium-brass-bronze", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <ProductDetailPage
      product={{
        category: "Brass & Bronze Products",
        title: "Premium Brass & Bronze",
        description:
          "High quality brass and bronze alloys for more affordable jewelry manufacturing.",
        image:
          "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg",
        imageAlt: "Premium brass and bronze alloy casting grain",
        paragraphs: [
          "The dramatic increase in precious metal prices over the past few years has created a need to manufacture more affordable jewelry. ABI Manufacturing’s high quality brass and bronze alloys can fill this need.",
          "In white bronze, ABI offers nickel and nickel free blends that provide good white color, improved casting properties, and increased tarnish resistance. These alloys are an excellent sterling silver alternative. In colored bronze, ABI offers a variety of yellow and red colors with superior casting properties.",
        ],
        technicalDataHref: "/technical-data/premium-brass-and-bronze",
        tableTitle: "Alloy Selection and Characteristics",
        tableHeaders: [
          "Color",
          "Alloy",
          "Type",
          "Color",
          "Casting Temp.",
          "Hardness",
          "Density (G/cm³)",
          "Casting Comments",
        ],
        tableRows: [
          [
            { text: "Yellow" },
            { text: "696 Brass" },
            { text: "C.F" },
            { text: "Bright Yellow" },
            { text: "1000°C" },
            { text: "70 HV" },
            { text: "8.5" },
            {
              text: "Excellent metal flow, medium smoke, bright yellow casting, soft",
            },
          ],
          [
            { text: "Yellow" },
            { text: "817 Brass" },
            { text: "C,F" },
            { text: "Yellow" },
            { text: "1030°C" },
            { text: "90 HV" },
            { text: "8.5" },
            {
              text: "Good metal flow, low smoke, closed system casting suitable",
            },
          ],
          [
            { text: "Yellow" },
            { text: "926 Brass" },
            { text: "C,F" },
            { text: "Bright Yellow" },
            { text: "1000°C" },
            { text: "70 HV" },
            { text: "8.5" },
            {
              text: "Excellent metal flow, medium smoke, bright yellow casting, soft",
            },
          ],
          [
            { text: "Yellow" },
            { text: "902 Brass" },
            { text: "C" },
            { text: "Dark Yellow" },
            { text: "1030°C" },
            { text: "98 HV" },
            { text: "8.8" },
            {
              text: "Good metal flow, low smoke. Closed system casting suitable, low shrinkage",
            },
          ],
          [
            { text: "Yellow" },
            { text: "798 Brass" },
            { text: "C,F" },
            { text: "10K Yellow" },
            { text: "1010°C" },
            { text: "82 HV" },
            { text: "8.7" },
            {
              text: "Good casting and plating properties with medium smoke",
            },
          ],
          [
            { text: "Yellow" },
            { text: "8025 Brass" },
            { text: "C,F" },
            { text: "14K Yellow" },
            { text: "1020°C" },
            { text: "80 HV" },
            { text: "8.8" },
            {
              text: "Good metal flow, low smoke, high tarnish resistance, beautiful 14K gold color",
            },
          ],
          [
            { text: "Yellow" },
            { text: "890 Bronze" },
            { text: "C,F" },
            { text: "True Bronze" },
            { text: "1050°C" },
            { text: "74 HV" },
            { text: "8.8" },
            {
              text: "Good metal flow, low smoke, closed system casting suitable, good plating properties",
            },
          ],
          [
            { text: "Yellow" },
            { text: "955 Bronze" },
            { text: "C" },
            { text: "Reddish Brown" },
            { text: "1040°C" },
            { text: "90 HV" },
            { text: "8.6" },
            {
              text: "Good flow with low smoke, closed system casting suitable, excellent surface",
            },
          ],
          [
            { text: "Pink" },
            { text: "961 Bronze" },
            { text: "C,F" },
            { text: "Pink" },
            { text: "1070°C" },
            { text: "67 HV" },
            { text: "8.7" },
            { text: "Good metal flow, low smoke, normal quench cycle" },
          ],
          [
            { text: "White" },
            { text: "18-S Bronze" },
            { text: "C" },
            { text: "Grey Sterling" },
            { text: "1210°C" },
            { text: "110 HV" },
            { text: "8.6" },
            {
              text: "German silver with good metal flow and medium smoke",
            },
          ],
          [
            { text: "White" },
            { text: "21 Bronze" },
            { text: "C" },
            { text: "Grey Sterling" },
            { text: "1220°C" },
            { text: "120 HV" },
            { text: "8.7" },
            {
              text: "German silver with good metal flow and medium smoke, whiter finish",
            },
          ],
          [
            { text: "White" },
            { text: "2510 Bronze" },
            { text: "C" },
            { text: "Grey Sterling" },
            { text: "1030°C" },
            { text: "104 HV" },
            { text: "9.3" },
            {
              text: "With silver content, Excellent metal flow and hand fabrication properties, low smoke, good for master models",
            },
          ],
        ],
      }}
    />
  );
}
