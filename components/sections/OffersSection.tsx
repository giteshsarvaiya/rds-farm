"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import OffersPopup from "@/components/ui/OffersPopup";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'd like to inquire about your current offers."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const offers = [
  {
    title: "Wedding Season Special",
    description:
      "Celebrate your most important day with our comprehensive wedding package — from mandap to reception, every detail thoughtfully arranged across our expansive farm venues.",
    highlights: ["Customised mandap decor", "Catering for 200–2000 guests", "Dedicated event coordinator"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Elegant wedding celebration at RDS Farm",
    tag: "Weddings",
  },
  {
    title: "Corporate Retreat Package",
    description:
      "Inspire your team in a refreshing setting. Our corporate retreat package offers premium meeting facilities, team activities, and rejuvenating accommodations.",
    highlights: ["Conference rooms with AV setup", "Team-building activities", "Group dining & recreation"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Corporate meeting and retreat space at RD's Hotel",
    tag: "Corporate",
  },
  {
    title: "Festive Dining Experience",
    description:
      "Indulge in seasonal menus crafted by our chefs during festival seasons. Private dining rooms available for intimate family gatherings and celebrations.",
    highlights: ["Seasonal festive menus", "Private dining rooms", "Live music & cultural performances"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining experience at RD's Hotel restaurant",
    tag: "Dining",
  },
];

/** Offers section showing active packages with WhatsApp inquiry CTAs. */
export default function OffersSection() {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  return (
    <>
    <section
      style={{
        backgroundColor: "#2D5F4F",
        padding: "7rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1.25rem",
            }}
          >
            Latest Offers
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.25,
              color: "#F5EFE4",
              letterSpacing: "-0.01em",
              marginBottom: "1.25rem",
            }}
          >
            Curated Packages, Just for You
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,239,228,0.7)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Contact us for personalised packages — no prices listed, everything tailored to your vision and needs.
          </p>
        </motion.div>

        {/* Offer cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "4rem",
          }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                onClick={() => setPopupIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setPopupIndex(index)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  backgroundColor: "rgba(245,239,228,0.05)",
                  border: "1px solid rgba(245,239,228,0.1)",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                  cursor: "pointer",
                }}
                className="offer-card"
              >
                <style>{`
                  @media (min-width: 768px) {
                    .offer-card {
                      grid-template-columns: 380px 1fr !important;
                    }
                  }
                  .offer-card:hover {
                    border-color: rgba(184,151,106,0.4) !important;
                  }
                `}</style>

                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    overflow: "hidden",
                    minHeight: "220px",
                  }}
                >
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      padding: "0.25rem 0.75rem",
                      backgroundColor: "#B8976A",
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#F5EFE4",
                      borderRadius: "1px",
                    }}
                  >
                    {offer.tag}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                      color: "#F5EFE4",
                      lineHeight: 1.3,
                    }}
                  >
                    {offer.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "rgba(245,239,228,0.7)",
                    }}
                  >
                    {offer.description}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    {offer.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                          fontSize: "0.8125rem",
                          color: "rgba(245,239,228,0.65)",
                        }}
                      >
                        <span
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "#B8976A",
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.625rem 1.375rem",
                        border: "1px solid rgba(245,239,228,0.4)",
                        color: "#F5EFE4",
                        fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: "2px",
                        transition: "border-color 0.3s, background-color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "#B8976A";
                        el.style.backgroundColor = "rgba(184,151,106,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(245,239,228,0.4)";
                        el.style.backgroundColor = "transparent";
                      }}
                    >
                      <MessageCircle size={14} />
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {popupIndex !== null && (
      <OffersPopup
        offers={offers}
        activeIndex={popupIndex}
        onClose={() => setPopupIndex(null)}
        onNavigate={setPopupIndex}
      />
    )}
    </>
  );
}
