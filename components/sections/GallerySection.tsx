"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FALLBACK_IMAGES = [
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Elegant hotel lobby interior" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Luxury pool with resort backdrop" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", alt: "Panoramic farm landscape at golden hour" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Fine dining restaurant ambience" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", alt: "Grand wedding event setup" },
];

interface GallerySectionProps {
  images?: { src: string; alt: string }[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  const galleryImages = images?.length ? images.slice(0, 5) : FALLBACK_IMAGES;
  return (
    <section
      style={{
        backgroundColor: "#1C1A17",
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
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            Gallery
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
            }}
          >
            A Glimpse of Paradise
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "280px 280px",
            gap: "0.75rem",
          }}
          className="gallery-grid"
        >
          <style>{`
            @media (max-width: 767px) {
              .gallery-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                grid-template-rows: auto !important;
              }
              .gallery-item-tall {
                grid-row: auto !important;
              }
              .gallery-item-wide {
                grid-column: span 2 !important;
              }
            }
          `}</style>

          {/* Image 1 — tall left, spans 2 rows */}
          <div className="gallery-item-tall" style={{ position: "relative", gridRow: "span 2", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
          >
            <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
          </div>

          {/* Image 2 — top center */}
          <div style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
          >
            <Image src={galleryImages[1]?.src ?? galleryImages[0].src} alt={galleryImages[1]?.alt ?? ""} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
          </div>

          {/* Image 3 — top right, tall */}
          <div className="gallery-item-tall" style={{ position: "relative", gridRow: "span 2", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
          >
            <Image src={galleryImages[2]?.src ?? galleryImages[0].src} alt={galleryImages[2]?.alt ?? ""} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
          </div>

          {/* Image 4 — bottom center, wide */}
          <div className="gallery-item-wide" style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
          >
            <Image src={galleryImages[3]?.src ?? galleryImages[0].src} alt={galleryImages[3]?.alt ?? ""} fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <Link
            href="/gallery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 2rem",
              border: "1px solid rgba(245,239,228,0.4)",
              color: "#F5EFE4",
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "border-color 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#B8976A";
              el.style.backgroundColor = "rgba(184,151,106,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(245,239,228,0.4)";
              el.style.backgroundColor = "transparent";
            }}
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
