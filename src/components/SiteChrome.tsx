"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function SiteChrome({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
  }

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
