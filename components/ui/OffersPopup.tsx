"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export interface OfferItem {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  alt?: string;
  tag: string;
  property?: string;
}

interface OffersPopupProps {
  offers: OfferItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const WHATSAPP_BASE = "https://wa.me/919876543210?text=";

export default function OffersPopup({
  offers,
  activeIndex,
  onClose,
  onNavigate,
}: OffersPopupProps) {
  const offer = offers[activeIndex];
  const multiple = offers.length > 1;

  const prev = useCallback(() => {
    onNavigate((activeIndex - 1 + offers.length) % offers.length);
  }, [activeIndex, offers.length, onNavigate]);

  const next = useCallback(() => {
    onNavigate((activeIndex + 1) % offers.length);
  }, [activeIndex, offers.length, onNavigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const whatsappUrl =
    WHATSAPP_BASE + encodeURIComponent(`I'm interested in the ${offer.title} package`);

  return (
    <>
      <style>{`
        .op-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0,0,0,0.72);
          display: flex;
          align-items: center;
          justify-content: center;
          /* visible gap around card on mobile */
          padding: 3rem 1rem;
        }
        @media (min-width: 640px) {
          .op-backdrop { padding: 2rem; }
        }

        .op-card {
          position: relative;
          background: #1C1A17;
          width: 100%;
          max-width: 860px;
          border: 1px solid rgba(184,151,106,0.2);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          /* Mobile: compact floating card */
          max-height: 100%;
        }
        @media (min-width: 640px) {
          .op-card {
            flex-direction: row;
            height: 500px;
          }
        }

        .op-image-pane {
          position: relative;
          width: 100%;
          /* Mobile: image is ~42% of viewport height */
          height: 42vw;
          min-height: 180px;
          max-height: 240px;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .op-image-pane {
            width: 44%;
            height: 100%;
            max-height: none;
          }
        }

        .op-content-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 1.1rem 1.25rem 1rem;
        }
        @media (min-width: 640px) {
          .op-content-pane { padding: 2rem 2rem 1.5rem; }
        }

        .op-description { display: none; }
        @media (min-width: 640px) {
          .op-description { display: block; }
        }

        /* Nav bar: arrows + dots together */
        .op-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding-top: 0.75rem;
        }

        .op-nav-arrow {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          border: 1px solid rgba(245,239,228,0.25);
          background: rgba(245,239,228,0.06);
          color: #F5EFE4;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
        }
        .op-nav-arrow:hover {
          border-color: #B8976A;
          background: rgba(184,151,106,0.2);
        }
      `}</style>

      {/* Backdrop */}
      <div className="op-backdrop" onClick={onClose}>
        {/* Card */}
        <div className="op-card" onClick={(e) => e.stopPropagation()}>

          {/* ── Image pane ── */}
          <div className="op-image-pane">
            <Image
              src={offer.image}
              alt={offer.alt ?? offer.title}
              fill
              sizes="(max-width: 640px) 100vw, 380px"
              style={{ objectFit: "cover" }}
              priority
            />
            {/* bottom fade into card bg */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 55%, rgba(28,26,23,0.55) 100%)",
            }} />

            {/* Tag */}
            <span style={{
              position: "absolute", top: "0.75rem", left: "0.75rem",
              padding: "0.2rem 0.6rem",
              background: "#B8976A", color: "#F5EFE4",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              {offer.tag}
            </span>

            {/* Close — top-right of image */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute", top: "0.75rem", right: "0.75rem", zIndex: 10,
                width: "1.875rem", height: "1.875rem", borderRadius: "50%",
                border: "1px solid rgba(245,239,228,0.35)",
                background: "rgba(20,18,15,0.72)", color: "#F5EFE4",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={13} />
            </button>
          </div>

          {/* ── Content pane ── */}
          <div className="op-content-pane">

            {/* Property label */}
            {offer.property && (
              <p style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "0.6rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#B8976A", marginBottom: "0.3rem",
              }}>
                {offer.property}
              </p>
            )}

            {/* Title */}
            <h2 style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.05rem, 4vw, 1.55rem)",
              fontWeight: 600, lineHeight: 1.2,
              color: "#F5EFE4",
              marginBottom: "0.6rem",
            }}>
              {offer.title}
            </h2>

            {/* Description — desktop only */}
            <p className="op-description" style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "0.8rem", lineHeight: 1.6,
              color: "rgba(245,239,228,0.62)",
              marginBottom: "0.875rem",
            }}>
              {offer.description}
            </p>

            {/* Highlights */}
            <ul style={{
              listStyle: "none", display: "flex", flexDirection: "column",
              gap: "0.3rem", marginBottom: "auto",
            }}>
              {offer.highlights.map((h) => (
                <li key={h} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "0.78rem", color: "rgba(245,239,228,0.68)",
                }}>
                  <span style={{
                    width: "4px", height: "4px", borderRadius: "50%",
                    background: "#B8976A", flexShrink: 0,
                  }} />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.45rem", marginTop: "0.875rem",
                padding: "0.65rem 1rem",
                background: "#2D5F4F", color: "#F5EFE4",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "0.68rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              <MessageCircle size={12} />
              Get in Touch on WhatsApp
            </a>

            {/* ── Nav: arrows + dots below CTA ── */}
            {multiple && (
              <div className="op-nav">
                <button onClick={prev} aria-label="Previous offer" className="op-nav-arrow">
                  <ChevronLeft size={14} />
                </button>

                {offers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigate(i)}
                    aria-label={`Offer ${i + 1}`}
                    style={{
                      width: i === activeIndex ? "1.2rem" : "0.42rem",
                      height: "0.42rem",
                      borderRadius: "9999px",
                      border: "none", padding: 0,
                      background: i === activeIndex ? "#B8976A" : "rgba(245,239,228,0.2)",
                      cursor: "pointer",
                      transition: "width 0.3s ease, background 0.3s ease",
                    }}
                  />
                ))}

                <button onClick={next} aria-label="Next offer" className="op-nav-arrow">
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
