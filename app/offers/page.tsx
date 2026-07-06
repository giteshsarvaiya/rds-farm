import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import OffersGrid from "@/components/sections/OffersGrid";
import { client, urlFor } from "@/lib/sanity";
import { activeOffersQuery, siteSettingsQuery } from "@/lib/queries";
import type { OfferItem } from "@/components/ui/OffersPopup";

export const revalidate = 3600;

export const metadata = {
  title: "Offers | RD's Venues",
  description:
    "Explore seasonal packages and special offers across RD's Hotel, RDS Farm, and RDS Farm 2. Contact us for personalised pricing.",
};

const PROPERTY_LABELS: Record<string, string> = {
  hotel: "RD's Hotel",
  farm: "RDS Farm",
  all: "All Properties",
};

export default async function OffersPage() {
  const [rawOffers, siteSettings] = await Promise.all([
    client.fetch(activeOffersQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const whatsapp = siteSettings?.whatsappNumber ?? "919876543210";

  const offers: OfferItem[] = (rawOffers ?? []).map((o: any) => ({
    title: o.title,
    description: o.description ?? "",
    image: o.image
      ? urlFor(o.image).width(800).quality(80).url()
      : "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    property: PROPERTY_LABELS[o.property] ?? o.property ?? undefined,
    tag: o.tag ?? "Offer",
    highlights: o.highlights ?? [],
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
          alt="Offers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            Packages & Experiences
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Our Offers
          </h1>
        </div>
      </section>

      {/* Notice */}
      <section className="bg-[#2D5F4F] py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5EFE4]/90 font-inter text-sm">
            No prices are listed. Every package is tailored to your needs — contact us on WhatsApp
            or fill an inquiry for a personalised quote.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {offers.length === 0 ? (
            <p className="text-[#7A6F62] font-inter text-center py-16">
              No offers available right now. Check back soon.
            </p>
          ) : (
            <OffersGrid offers={offers} whatsappNumber={whatsapp} />
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
