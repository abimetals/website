import {
  tryManagedOverride,
} from "@/lib/pages/resolve";
import { notFound } from "next/navigation";
import TechTipPage from "@/components/TechTipPage";
import { getTechTip } from "@/data/tech-tips";

export const metadata = {
  title: "Brass and Bronze Alloy Casting | ABI Manufacturing Intl Ltd",
  description:
    "Tech tip on casting brass and bronze alloys for affordable jewelry designs.",
};

export default async function BrassAndBronzeAlloyCastingPage() {
  const override = await tryManagedOverride("/support/tech-tips/brass-and-bronze-alloy-casting", {
    backHref: "/support/tech-tips",
    backLabel: "Back to Tech Tips",
  });
  if (override) return override;

  const tip = getTechTip("brass-and-bronze-alloy-casting");
  if (!tip) notFound();
  return <TechTipPage tip={tip} />;
}
