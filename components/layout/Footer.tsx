"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Latest Offers", href: "/offers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

interface FooterProps {
  phone?: string;
  email?: string;
  address?: string;
  whatsappNumber?: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export default function Footer({
  phone = "+91 98765 43210",
  email = "hello@rddevelopers.com",
  address = "Ahmedabad, Gujarat, India",
  whatsappNumber = "919876543210",
  instagramUrl = "https://instagram.com",
  facebookUrl = "https://facebook.com",
}: FooterProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'd like to inquire about your venues.")}`;
  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${email}`;

  const socialIconStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid rgba(245,239,228,0.3)",
    color: "rgba(245,239,228,0.7)",
    transition: "border-color 0.3s, color 0.3s",
    textDecoration: "none",
  };
  const onSocialEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "#B8976A";
    e.currentTarget.style.color = "#B8976A";
  };
  const onSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "rgba(245,239,228,0.3)";
    e.currentTarget.style.color = "rgba(245,239,228,0.7)";
  };

  return (
    <footer style={{ backgroundColor: "#2D5F4F", color: "#F5EFE4" }}>
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 1.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "0.08em",
              color: "#F5EFE4",
              marginBottom: "1rem",
            }}
          >
            RD&apos;S VENUES
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "rgba(245,239,228,0.7)",
              marginBottom: "1.5rem",
              maxWidth: "260px",
            }}
          >
            Luxury hospitality across three iconic venues in Ahmedabad. Creating memories since 2010.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={socialIconStyle}
              onMouseEnter={onSocialEnter}
              onMouseLeave={onSocialLeave}
            >
              <Instagram size={18} />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={socialIconStyle}
              onMouseEnter={onSocialEnter}
              onMouseLeave={onSocialLeave}
            >
              <Facebook size={18} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={socialIconStyle}
              onMouseEnter={onSocialEnter}
              onMouseLeave={onSocialLeave}
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1.5rem",
            }}
          >
            Navigation
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(245,239,228,0.7)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5EFE4")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,239,228,0.7)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1.5rem",
            }}
          >
            Contact Us
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <MapPin size={16} style={{ color: "#B8976A", marginTop: "2px", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(245,239,228,0.7)",
                  lineHeight: 1.6,
                }}
              >
                {address}
              </span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Phone size={16} style={{ color: "#B8976A", flexShrink: 0 }} />
              <a
                href={phoneHref}
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(245,239,228,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5EFE4")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,239,228,0.7)")}
              >
                {phone}
              </a>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Mail size={16} style={{ color: "#B8976A", flexShrink: 0 }} />
              <a
                href={mailHref}
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(245,239,228,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5EFE4")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,239,228,0.7)")}
              >
                {email}
              </a>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.5rem",
                padding: "0.625rem 1.25rem",
                backgroundColor: "transparent",
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
                width: "fit-content",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#B8976A";
                e.currentTarget.style.backgroundColor = "rgba(184,151,106,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,239,228,0.4)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <MessageCircle size={14} />
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(245,239,228,0.12)", padding: "1.5rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif", fontSize: "0.8125rem", color: "rgba(245,239,228,0.5)" }}>
            &copy; {new Date().getFullYear()} RD&apos;s Venues. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif", fontSize: "0.8125rem", color: "rgba(245,239,228,0.5)" }}>
            Luxury Hospitality in Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
}
