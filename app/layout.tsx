import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "@/lib/sanity";
import { siteSettingsQuery, propertyNavQuery } from "@/lib/queries";
import OffersAutoPopupServer from "@/components/ui/OffersAutoPopupServer";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteSettings, propertyLinks] = await Promise.all([
    client.fetch(siteSettingsQuery).catch(() => null),
    client.fetch(propertyNavQuery).catch(() => []),
  ]);

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header
          propertyLinks={(propertyLinks ?? []).map((p: { name: string; slug: string }) => ({
            label: p.name,
            href: `/${p.slug}`,
          }))}
          whatsappNumber={siteSettings?.whatsappNumber}
        />
        <main>{children}</main>
        <OffersAutoPopupServer />
        <Footer
          phone={siteSettings?.phone}
          email={siteSettings?.email}
          address={siteSettings?.address}
          whatsappNumber={siteSettings?.whatsappNumber}
          instagramUrl={siteSettings?.instagramUrl}
          facebookUrl={siteSettings?.facebookUrl}
        />
      </body>
    </html>
  );
}
