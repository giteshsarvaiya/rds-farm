"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FALLBACK_EXPERIENCES = [
  { title: "Weddings & Celebrations", description: "Opulent ceremonies and receptions across our sprawling outdoor venues.", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", alt: "Luxurious wedding celebration" },
  { title: "Corporate Events", description: "State-of-the-art facilities for conferences, offsites, and team gatherings.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Professional corporate event space" },
  { title: "Farm Retreats", description: "Serene getaways surrounded by nature — perfect for rejuvenation and reflection.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", alt: "Peaceful farm retreat landscape" },
  { title: "Fine Dining", description: "Culinary journeys crafted with seasonal ingredients and artful presentation.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Elegant fine dining restaurant" },
];

interface Experience {
  title: string;
  description: string;
  image: string;
  alt?: string;
}

interface ExperiencesSectionProps {
  experiences?: Experience[];
}

export default function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  const items = experiences?.length ? experiences : FALLBACK_EXPERIENCES;
  return (
    <section
      style={{
        backgroundColor: "#F5EFE4",
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
            Experiences
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.25,
              color: "#1C1A17",
              letterSpacing: "-0.01em",
            }}
          >
            Crafted for Every Occasion
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((exp, index) => (
            <motion.div
              key={exp.title}
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
                  position: "relative",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <Image
                  src={exp.image}
                  alt={exp.alt ?? exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                />

                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(28,26,23,0.85) 0%, rgba(28,26,23,0.2) 60%, transparent 100%)",
                  }}
                />

                {/* Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "1.25rem",
                      color: "#F5EFE4",
                      marginBottom: "0.375rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                      color: "rgba(245,239,228,0.75)",
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
