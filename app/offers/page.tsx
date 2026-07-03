import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import { client, urlFor } from "@/lib/sanity";
import { activeOffersQuery, siteSettingsQuery } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "Offers | RD Developers",
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

  const offers = (rawOffers ?? []).map((o: any) => ({
    _id: o._id,
    title: o.title,
    description: o.description ?? "",
    imageUrl: o.image
      ? urlFor(o.image).width(800).quality(80).url()
      : "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    property: PROPERTY_LABELS[o.property] ?? o.property ?? "",
    ctaText: o.ctaText ?? "Get in Touch",
    tag: o.tag ?? null,
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer: typeof offers[number]) => (
                <div key={offer._id} className="bg-[#FAF7F2] group overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={offer.imageUrl}
                      alt={offer.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {offer.tag && (
                      <span className="absolute top-4 left-4 bg-[#B8976A] text-[#F5EFE4] font-inter text-xs uppercase tracking-widest px-3 py-1">
                        {offer.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    {offer.property && (
                      <p className="text-[#B8976A] font-inter text-xs uppercase tracking-widest mb-2">
                        {offer.property}
                      </p>
                    )}
                    <h3 className="font-playfair text-[#1C1A17] text-xl mb-3">{offer.title}</h3>
                    {offer.description && (
                      <p className="text-[#7A6F62] font-inter text-sm leading-relaxed mb-4">
                        {offer.description}
                      </p>
                    )}
                    {offer.highlights.length > 0 && (
                      <ul className="space-y-1 mb-6">
                        {offer.highlights.map((h: string) => (
                          <li key={h} className="text-[#7A6F62] font-inter text-xs flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#B8976A] inline-block flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <a
                      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`I'm interested in the ${offer.title} package`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-xs px-6 py-3 hover:opacity-90 transition-all duration-300"
                    >
                      {offer.ctaText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
