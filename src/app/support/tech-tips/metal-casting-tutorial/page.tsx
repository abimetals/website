import {
  tryManagedOverride,
} from "@/lib/pages/resolve";
import { notFound } from "next/navigation";
import TechTipPage from "@/components/TechTipPage";
import { getTechTip } from "@/data/tech-tips";

export const metadata = {
  title: "Metal Casting Tutorial | ABI Manufacturing Intl Ltd",
  description:
    "Metal casting tutorial and support from ABI Manufacturing International. Call 662-150-6711 for help.",
};

export default async function MetalCastingTutorialPage() {
  const override = await tryManagedOverride("/support/tech-tips/metal-casting-tutorial", {
    backHref: "/support/tech-tips",
    backLabel: "Back to Tech Tips",
  });
  if (override) return override;

  const tip = getTechTip("metal-casting-tutorial");
  if (!tip) notFound();
  return <TechTipPage tip={tip} />;
}
