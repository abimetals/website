import ProductDetailPage from "@/components/ProductDetailPage";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/platinum-palladium-sterling",
      "Platinum & Palladium Sterling | ABI Manufacturing Intl Ltd"
    ),
    description: "ABI platinum and palladium sterling — bright white color, increased hardness, excellent tarnish resistance, and high perceived value.",
  };
}

export default async function PlatinumPalladiumSterlingProductPage() {
  const override = await tryManagedOverride("/products/platinum-palladium-sterling", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <ProductDetailPage
      product={{
        category: "Platinum & Palladium",
        title: "Platinum & Palladium Sterling",
        description:
          "Premium platinum and palladium sterling silver or white gold alternatives.",
        image:
          "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700305378/abimetals/products/Palladium-Sterling-Alloy-Allura-Metals-Inc.jpg",
        imageAlt: "Platinum and palladium sterling alloy jewelry",
        paragraphs: [
          "The marriage of platinum and palladium with silver create a premium sterling silver or white gold alternative with unique metal properties.",
          "Our platinum and palladium sterling has a bright white color, increased hardness, excellent tarnish resistant and high perceived value that is ideal for branding a design line.",
        ],
        benefits: [
          "Platinum-Palladium Fusion",
          "Bright White Elegance",
          "Ideal for Design Branding",
          "Premium Metal Blend",
        ],
        technicalDataHref: "/technical-data/platinum-palladium-sterling",
        tableHeaders: [
          "Alloy",
          "Casting Temp.",
          "Hardness",
          "Tarnish Resistance",
          "Density",
          "Casting Comments",
        ],
        tableRows: [
          [
            { text: "1.0% PT/STG" },
            { text: "980°C" },
            { text: "85V" },
            { text: "7.5 X" },
            { text: "10.5 G/CM³" },
            {
              text: "Excellent metal flow/Firescale free High lustre finish",
            },
          ],
          [
            { text: "3.5% PT/STG" },
            { text: "1010°C" },
            { text: "80V" },
            { text: "7 X" },
            { text: "10.6 G/CM³" },
            {
              text: "Very good metal flow/Firescale free High lustre finish",
            },
          ],
          [
            { text: "5.0% PT/STG" },
            { text: "1020°C" },
            { text: "90V" },
            { text: "6 X" },
            { text: "10.7 G/CM³" },
            { text: "Good metal flow/Firescale free Bright lustre finish" },
          ],
          [
            { text: "1% Palladium Sterling" },
            { text: "1000°C" },
            { text: "85V" },
            { text: "6 X" },
            { text: "10.4 G/CM³" },
            { text: "Good flow, white color" },
          ],
          [
            { text: "3% Palladium Sterling" },
            { text: "1030°C" },
            { text: "90V" },
            { text: "6 X" },
            { text: "10.6 G/CM³" },
            { text: "Good flow, white color" },
          ],
          [
            { text: "Sterling Silver (Ref.)" },
            { text: "980°C" },
            { text: "70V" },
            { text: "X" },
            { text: "10.4 G/CM³" },
            { text: "Dark castings with firescale" },
          ],
        ],
      }}
    />
  );
}
