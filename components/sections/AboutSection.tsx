"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Rooms" },
  { value: "3", label: "Properties" },
  { value: "Est. 2010", label: "Founded" },
];

const DEFAULT_TITLE = "A Legacy of Warmth & Hospitality";
const DEFAULT_PARAGRAPHS = [
  "For over a decade, RD Developers has been synonymous with gracious hospitality in Ahmedabad. Founded with a singular vision — to create spaces where people come together and moments transform into lifelong memories — we have grown into a family of three distinct luxury venues, each with its own character and charm.",
  "From the refined elegance of RD's Hotel to the open-sky grandeur of RDS Farm and RDS Farm 2, every property reflects our unwavering commitment to personalised service, exquisite environments, and experiences that linger long after the celebration has ended. We do not simply host events — we curate memories.",
];

interface AboutSectionProps {
  title?: string;
  paragraphs?: string[];
}

export default function AboutSection({ title, paragraphs }: AboutSectionProps) {
  const heading = title || DEFAULT_TITLE;
  const body = paragraphs?.length ? paragraphs : DEFAULT_PARAGRAPHS;
  return (
    <section
      style={{
        backgroundColor: "#F5EFE4",
        padding: "7rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
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
            About Us
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.25,
              color: "#1C1A17",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            {heading}
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: "#B8976A",
              margin: "0 auto 2rem",
            }}
          />

          {/* Paragraphs */}
          {body.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#7A6F62",
                marginBottom: i < body.length - 1 ? "1.25rem" : 0,
              }}
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid #D9CDBF",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#2D5F4F",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7A6F62",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
