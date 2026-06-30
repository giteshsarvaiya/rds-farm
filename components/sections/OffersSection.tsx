"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export type Offer = {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  property: string;
  ctaText?: string;
  validUntil?: string;
};

/** Offers section showing active packages with WhatsApp inquiry CTAs. */
export default function OffersSection({
  offers,
  whatsappNumber,
}: {
  offers: Offer[];
  whatsappNumber: string;
}) {
  const WHATSAPP_URL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'd like to inquire about your current offers.")}`;
  return (
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
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  backgroundColor: "rgba(245,239,228,0.05)",
                  border: "1px solid rgba(245,239,228,0.1)",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
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
                    src={offer.imageUrl}
                    alt={offer.title}
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
                    {offer.property}
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
                      {offer.ctaText || "Get in Touch"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
