"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type PropertyCard = {
  _id: string;
  name: string;
  slug: string;
  tagline?: string;
  description?: string;
  imageUrl: string;
  href: string;
};

/** Properties section displaying the three venue cards with links. */
export default function PropertiesSection({ properties }: { properties: PropertyCard[] }) {
  return (
    <section
      style={{
        backgroundColor: "#EDE5D8",
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
            Our Venues
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
            Explore Our Properties
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                style={{
                  backgroundColor: "#F5EFE4",
                  overflow: "hidden",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={property.imageUrl}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ padding: "1.75rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#B8976A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {property.tagline}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "1.375rem",
                      color: "#1C1A17",
                      marginBottom: "0.875rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {property.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "#7A6F62",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {property.description}
                  </p>
                  <Link
                    href={property.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#2D5F4F",
                      textDecoration: "none",
                      borderBottom: "1px solid #2D5F4F",
                      paddingBottom: "2px",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#B8976A";
                      (e.currentTarget as HTMLElement).style.borderColor = "#B8976A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#2D5F4F";
                      (e.currentTarget as HTMLElement).style.borderColor = "#2D5F4F";
                    }}
                  >
                    Explore
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
