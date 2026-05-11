import type { Metadata } from "next";
import { Outfit, Source_Sans_3, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import { BRAND } from "@/lib/constants";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans-pro" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });

export const metadata: Metadata = {
  title: `${BRAND.name} | Licensed & Insured Electricians in ${BRAND.serviceArea}`,
  description: `Professional residential electrical services in Fairfield and Westchester. Panel upgrades, smart home lighting, EV chargers, and 24/7 troubleshooting.`,
  keywords: ["electrician", "Fairfield County", "Westchester", "panel upgrade", "EV charger installation", "residential electrician"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${sourceSans.variable} ${workSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
