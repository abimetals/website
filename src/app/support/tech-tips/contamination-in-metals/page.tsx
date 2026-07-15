import {
  tryManagedOverride,
} from "@/lib/pages/resolve";
import { notFound } from "next/navigation";
import TechTipPage from "@/components/TechTipPage";
import { getTechTip } from "@/data/tech-tips";

export const metadata = {
  title: "Contamination In Metals | ABI Manufacturing Intl Ltd",
  description:
    "Tech tip on finding and addressing contamination problems in sterling and De-Ox sterling silvers.",
};

export default async function ContaminationInMetalsPage() {
  const override = await tryManagedOverride("/support/tech-tips/contamination-in-metals", {
    backHref: "/support/tech-tips",
    backLabel: "Back to Tech Tips",
  });
  if (override) return override;

  const tip = getTechTip("contamination-in-metals");
  if (!tip) notFound();
  return <TechTipPage tip={tip} />;
}
