"use client";

import { motion } from "framer-motion";

export type Testimonial = {
  _id: string;
  name: string;
  property: string;
  quote: string;
  rating: number;
};

/** Testimonials section with stacked guest quotes and gold quotation marks. */
export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section
      style={{
        backgroundColor: "#F5EFE4",
        padding: "7rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            Guest Stories
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
            What Our Guests Remember
          </h2>
        </motion.div>

        {/* Testimonials stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: "2.5rem",
                backgroundColor: "#EDE5D8",
                position: "relative",
              }}
            >
              {/* Opening quote mark */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                  color: "#B8976A",
                  position: "absolute",
                  top: "1.5rem",
                  left: "2rem",
                  opacity: 0.5,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              <blockquote
                style={{
                  paddingTop: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
                    lineHeight: 1.75,
                    color: "#1C1A17",
                    marginBottom: "1.5rem",
                  }}
                >
                  {t.quote}
                </p>

                <footer style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <cite
                    style={{
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "#1C1A17",
                    }}
                  >
                    {t.name}
                  </cite>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#B8976A",
                    }}
                  >
                    {t.property}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
