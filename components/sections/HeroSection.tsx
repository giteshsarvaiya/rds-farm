"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/** Full-screen hero section with background image, headline, and animated scroll chevron. */
export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
        alt="Luxury resort exterior — RD's Venues"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(28,26,23,0.3) 0%, rgba(28,26,23,0.15) 40%, rgba(28,26,23,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "900px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow label */}
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1.5rem",
            }}
          >
            RD&apos;s Venues · Ahmedabad
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.15,
              color: "#F5EFE4",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Where Every Moment
            <br />
            Becomes a Memory
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
              fontWeight: 300,
              color: "rgba(245,239,228,0.85)",
              letterSpacing: "0.02em",
              lineHeight: 1.6,
            }}
          >
            Three iconic venues. One unforgettable experience.
          </p>
        </motion.div>
      </div>

      {/* Animated scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ color: "rgba(245,239,228,0.7)" }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
