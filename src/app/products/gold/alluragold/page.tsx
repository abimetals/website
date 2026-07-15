import ProductDetailPage from "@/components/ProductDetailPage";

import {
  managedPageTitle,
  tryManagedOverride,
} from "@/lib/pages/resolve";
export async function generateMetadata() {
  return {
    title: await managedPageTitle(
      "/products/gold/alluragold",
      "Alluragold™ | ABI Manufacturing Intl Ltd"
    ),
    description: "Alluragold™ gold and palladium alloys — low karat alternatives with colors similar to white and yellow karat gold at a fraction of the cost.",
  };
}

export default async function AlluragoldProductPage() {
  const override = await tryManagedOverride("/products/gold/alluragold", {
    backHref: "/products",
    backLabel: "Back to Products",
  });
  if (override) return override;

  return (
    <ProductDetailPage
      product={{
        category: "Gold Products",
        title: "Alluragold™ Gold and Palladium Alloy",
        description:
          "Alluragold™ low karat gold and palladium alloys for more affordable jewelry.",
        image:
          "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1699442117/abimetals/products/Alluragold-Alloy-Allura-Metals-Inc_new.jpg",
        imageAlt: "Alluragold™ gold and palladium alloy jewelry",
        paragraphs: [
          "The recent change in the USA laws allowing the marketing and stamping of karat gold alloys below 10K has created a demand for lower karat jewelry alloys to create more affordable jewelry.",
          "ABI Manufacturing offers a wide variety of alloys to serve this need from 1KT to 6KT blends. Our new 5% gold blend is available in yellow and white with colors similar to 14K gold. Create your own new brand of low karat jewelry today at a fraction of the cost of 14K gold.",
        ],
        benefits: [
          "Perceived Value 65% To 90% Lower Cost Than 14K Gold",
          "Colors Similar To White And Yellow Karat Gold",
          "Increased Hardness and Durability",
          "Excellent Tarnish Resistance Similar To 10K Gold",
        ],
        technicalDataHref: "/technical-data/alluragold",
        tableHeaders: ["Color", "Alloy", "Composition", "Comment"],
        tableRows: [
          [
            { text: "Yellow" },
            { text: "7650" },
            { text: "5% Gold Alloy" },
            { text: "14K yellow color / medium tarnish resistance" },
          ],
          [
            { text: "Yellow" },
            { text: "1010" },
            { text: "10% Gold / Palladium" },
            { text: "10K yellow color / medium tarnish resistance" },
          ],
          [
            { text: "Yellow" },
            { text: "1500" },
            { text: "15% Gold / Palladium" },
            { text: "Rich 10K yellow color / medium tarnish resistance" },
          ],
          [
            { text: "Yellow" },
            { text: "1900" },
            { text: "19% Gold / Palladium" },
            { text: "14K peach color / high tarnish resistance" },
          ],
          [
            { text: "Yellow" },
            { text: "A48" },
            { text: "25% Gold / Palladium" },
            { text: "14K yellow color / high tarnish resistance" },
          ],
          [
            { text: "White" },
            { text: "2205" },
            { text: "5% Gold / Nickel" },
            { text: "10K white gold color/ medium tarnish resistance" },
          ],
          [
            { text: "White" },
            { text: "1000" },
            { text: "10% Palladium / High Silver" },
            { text: "Bright white color / high tarnish resistance" },
          ],
          [
            { text: "White" },
            { text: "1005" },
            { text: "5% Palladium / High Silver" },
            { text: "Bright white color / medium tarnish resistance" },
          ],
          [
            { text: "White" },
            { text: "7005" },
            { text: "7% Palladium / 5% Platinum" },
            { text: "Rhodium white color / high tarnish resistance" },
          ],
        ],
      }}
    />
  );
}
