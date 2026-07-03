"use client";

import { useState, useEffect } from "react";
import OffersPopup, { OfferItem } from "@/components/ui/OffersPopup";

const offers: OfferItem[] = [
  {
    title: "Wedding Season Special",
    property: "RDS Farm · RDS Farm 2",
    description:
      "Celebrate your big day amidst lush greenery and open skies. Our wedding packages cover decor, catering coordination, and venue setup — all tailored to your vision.",
    highlights: ["Exclusive venue access", "Customisable decor", "Catering coordination", "Dedicated event manager"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Elegant wedding celebration at RDS Farm",
    tag: "Most Popular",
  },
  {
    title: "Corporate Retreat Package",
    property: "RD's Hotel · RDS Farm",
    description:
      "Step away from the office and into a space designed for focus and connection. Ideal for leadership offsites, team-building events, and strategic planning sessions.",
    highlights: ["Conference room access", "Team activities", "Accommodation", "All meals included"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Corporate meeting and retreat space",
    tag: "Corporate",
  },
  {
    title: "Festive Dining Experience",
    property: "RD's Hotel Restaurant",
    description:
      "Mark the season with a curated festive menu featuring regional specialties and contemporary classics. Perfect for family gatherings and celebratory dinners.",
    highlights: ["Seasonal menu", "Private dining available", "Customisable for groups", "Festive ambience"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining experience at RD's Hotel",
    tag: "Seasonal",
  },
  {
    title: "Farm Retreat Weekend",
    property: "RDS Farm",
    description:
      "Unplug and recharge with a weekend getaway at RDS Farm. Enjoy the natural setting, outdoor activities, and the warmth of our hospitality.",
    highlights: ["2-night stay", "Outdoor activities", "Farm-fresh meals", "Bonfire evening"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Farm retreat weekend at RDS Farm",
    tag: "Getaway",
  },
];

/** Auto-shows the offers popup 1 second after the page loads. */
export default function OffersAutoPopup() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <OffersPopup
      offers={offers}
      activeIndex={activeIndex}
      onClose={() => setOpen(false)}
      onNavigate={setActiveIndex}
    />
  );
}
