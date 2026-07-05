"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

interface CTABannerClientProps {
  whatsappNumber: string;
}

export default function CTABannerClient({ whatsappNumber }: CTABannerClientProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'd like to create memories at one of your venues. Please get in touch.")}`;

  return (
    <section
      style={{
        backgroundColor: "#2D5F4F",
        padding: "7rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1.5rem",
            }}
          >
            Begin Your Journey
          </p>

          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              lineHeight: 1.2,
              color: "#F5EFE4",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
            }}
          >
            Ready to Create Memories?
          </h2>

          <div
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: "#B8976A",
              margin: "0 auto 2rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,239,228,0.75)",
              maxWidth: "540px",
              margin: "0 auto 2.5rem",
            }}
          >
            We believe every celebration deserves a personal touch. Reach out to our hospitality
            team and we will craft a bespoke experience tailored entirely to you — no fixed packages,
            no listed prices, just pure personalised luxury.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                backgroundColor: "#F5EFE4",
                color: "#2D5F4F",
                fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#EDE5D8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#F5EFE4"; }}
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                backgroundColor: "transparent",
                border: "1px solid rgba(245,239,228,0.5)",
                color: "#F5EFE4",
                fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "border-color 0.3s, background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#B8976A";
                e.currentTarget.style.backgroundColor = "rgba(184,151,106,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,239,228,0.5)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Mail size={15} />
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
