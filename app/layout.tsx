import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RD's Venues | Luxury Venues in Ahmedabad",
  description:
    "RD's Venues offers three iconic luxury venues in Ahmedabad — RD's Hotel, RDS Farm, and RDS Farm 2. Exceptional hospitality for weddings, events, and retreats.",
  keywords: [
    "luxury hotel Ahmedabad",
    "wedding venue Ahmedabad",
    "farm resort Ahmedabad",
    "RD's Venues",
    "RDS Farm",
    "party plot Ahmedabad",
  ],
  openGraph: {
    title: "RD's Venues | Luxury Venues in Ahmedabad",
    description:
      "Three iconic venues. One unforgettable experience. Discover RD's Venues — luxury hospitality in the heart of Ahmedabad.",
    type: "website",
  },
};

/** Root layout wrapping every page with shared fonts, metadata, header, and footer. */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
