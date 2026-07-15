import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import SiteHeader from "@/components/SiteHeader";
import "@/lib/fontawesome";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "ABI Manufacturing Intl Ltd | Innovative Precious Metals & Alloys",
  description:
    "ABI Manufacturing International manufactures high quality gold and silver alloys, sterling grain, and brass/bronze alloys in Bangkok for jewelry manufacturers across Asia and the USA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#14314b]">
        <SiteChrome header={<SiteHeader />}>{children}</SiteChrome>
      </body>
    </html>
  );
}
