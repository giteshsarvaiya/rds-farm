"use client";

import { useState } from "react";
import Image from "next/image";
import OffersPopup, { OfferItem } from "@/components/ui/OffersPopup";

interface OffersGridProps {
  offers: OfferItem[];
  whatsappNumber?: string;
}

export default function OffersGrid({ offers, whatsappNumber }: OffersGridProps) {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div
            key={offer.title}
            onClick={() => setPopupIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setPopupIndex(index)}
            className="bg-[#FAF7F2] group overflow-hidden cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.alt ?? offer.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#B8976A] text-[#F5EFE4] font-inter text-xs uppercase tracking-widest px-3 py-1">
                {offer.tag}
              </span>
            </div>
            <div className="p-6">
              {offer.property && (
                <p className="text-[#B8976A] font-inter text-xs uppercase tracking-widest mb-2">
                  {offer.property}
                </p>
              )}
              <h3 className="font-playfair text-[#1C1A17] text-xl mb-3">{offer.title}</h3>
              <p className="text-[#7A6F62] font-inter text-sm leading-relaxed mb-4 line-clamp-3">
                {offer.description}
              </p>
              <ul className="space-y-1 mb-6">
                {offer.highlights.map((h) => (
                  <li key={h} className="text-[#7A6F62] font-inter text-xs flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#B8976A] inline-block flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="block text-center bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-xs px-6 py-3">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>

      {popupIndex !== null && (
        <OffersPopup
          offers={offers}
          activeIndex={popupIndex}
          onClose={() => setPopupIndex(null)}
          onNavigate={setPopupIndex}
          whatsappNumber={whatsappNumber}
        />
      )}
    </>
  );
}
