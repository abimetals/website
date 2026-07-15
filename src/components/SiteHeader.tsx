import Header from "@/components/Header";
import { getNavItemsWithManaged } from "@/lib/pages/nav";

export default async function SiteHeader() {
  const items = await getNavItemsWithManaged();
  return <Header items={items} />;
}
