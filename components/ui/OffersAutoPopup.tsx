"use client";

import { useState, useEffect } from "react";
import OffersPopup, { OfferItem } from "@/components/ui/OffersPopup";

interface OffersAutoPopupProps {
  offers: OfferItem[];
  whatsappNumber?: string;
}

const SESSION_KEY = "rds_offers_popup_seen";

export default function OffersAutoPopup({ offers, whatsappNumber }: OffersAutoPopupProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!offers.length) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 1000);
    return () => clearTimeout(timer);
  }, [offers.length]);

  if (!open) return null;

  return (
    <OffersPopup
      offers={offers}
      activeIndex={activeIndex}
      onClose={() => setOpen(false)}
      onNavigate={setActiveIndex}
      whatsappNumber={whatsappNumber}
    />
  );
}
