import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import OffersGrid from "@/components/sections/OffersGrid";
import type { OfferItem } from "@/components/ui/OffersPopup";

export const metadata = {
  title: "Offers | RD's Venues",
  description:
    "Explore seasonal packages and special offers across RD's Hotel, RDS Farm, and RDS Farm 2. Contact us for personalised pricing.",
};

const offers: OfferItem[] = [
  {
    title: "Wedding Season Special",
    property: "RDS Farm · RDS Farm 2",
    description:
      "Celebrate your big day amidst lush greenery and open skies. Our wedding packages cover decor, catering coordination, and venue setup — all tailored to your vision.",
    highlights: ["Exclusive venue access", "Customisable decor", "Catering coordination", "Dedicated event manager"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    tag: "Most Popular",
  },
  {
    title: "Corporate Retreat Package",
    property: "RD's Hotel · RDS Farm",
    description:
      "Step away from the office and into a space designed for focus and connection. Ideal for leadership offsites, team-building events, and strategic planning sessions.",
    highlights: ["Conference room access", "Team activities", "Accommodation", "All meals included"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tag: "Corporate",
  },
  {
    title: "Festive Dining Experience",
    property: "RD's Hotel Restaurant",
    description:
      "Mark the season with a curated festive menu featuring regional specialties and contemporary classics. Perfect for family gatherings and celebratory dinners.",
    highlights: ["Seasonal menu", "Private dining available", "Customisable for groups", "Festive ambience"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tag: "Seasonal",
  },
  {
    title: "Farm Retreat Weekend",
    property: "RDS Farm",
    description:
      "Unplug and recharge with a weekend getaway at RDS Farm. Enjoy the natural setting, outdoor activities, and the warmth of our hospitality.",
    highlights: ["2-night stay", "Outdoor activities", "Farm-fresh meals", "Bonfire evening"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    tag: "Getaway",
  },
  {
    title: "Birthday Celebration Package",
    property: "All Venues",
    description:
      "Make their day truly special. From intimate gatherings to grand parties, we handle every detail so you can focus on the celebration.",
    highlights: ["Venue decoration", "Custom cake arrangement", "Photography setup", "Personalised service"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    tag: "Celebrations",
  },
  {
    title: "Anniversary Dinner",
    property: "RD's Hotel Restaurant",
    description:
      "Rekindle the romance with a private candlelit dinner curated exclusively for the two of you. Every moment designed with love and attention.",
    highlights: ["Private table setup", "Candlelit ambience", "Custom menu", "Complimentary dessert"],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    tag: "Romance",
  },
];

/** Renders the offers page listing all active packages with WhatsApp inquiry CTAs. */
export default function OffersPage() {
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
          <OffersGrid offers={offers} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
