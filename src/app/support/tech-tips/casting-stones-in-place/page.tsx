import {
  tryManagedOverride,
} from "@/lib/pages/resolve";
import { notFound } from "next/navigation";
import TechTipPage from "@/components/TechTipPage";
import { getTechTip } from "@/data/tech-tips";

export const metadata = {
  title: "Casting Stones In Place | ABI Manufacturing Intl Ltd",
  description:
    "Method for casting stones using Boric Acid — ABI Manufacturing International tech tip.",
};

export default async function CastingStonesInPlacePage() {
  const override = await tryManagedOverride("/support/tech-tips/casting-stones-in-place", {
    backHref: "/support/tech-tips",
    backLabel: "Back to Tech Tips",
  });
  if (override) return override;

  const tip = getTechTip("casting-stones-in-place");
  if (!tip) notFound();
  return <TechTipPage tip={tip} />;
}
