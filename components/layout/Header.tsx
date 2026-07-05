"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const STATIC_NAV = [
  { label: "Offers", href: "/offers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

interface HeaderProps {
  propertyLinks?: { label: string; href: string }[];
  whatsappNumber?: string;
}

export default function Header({
  propertyLinks = [],
  whatsappNumber = "919876543210",
}: HeaderProps) {
  const navLinks = [...propertyLinks, ...STATIC_NAV];
  const WHATSAPP_URL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'd like to inquire about your venues.")}`;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          backgroundColor: scrolled ? "#F5EFE4" : "transparent",
          boxShadow: scrolled ? "0 1px 0 #D9CDBF" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/logo.png"
                alt="RD's Venues"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  letterSpacing: "0.04em",
                  color: scrolled ? "#1C1A17" : "#F5EFE4",
                  transition: "color 0.4s ease",
                  lineHeight: 1.2,
                }}
              >
                RD&apos;s Venues
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: scrolled ? "#1C1A17" : "#F5EFE4",
                  textDecoration: "none",
                  transition: "color 0.3s ease, opacity 0.3s ease",
                  opacity: 0.9,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = "1";
                  (e.target as HTMLElement).style.color = scrolled ? "#2D5F4F" : "#B8976A";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = "0.9";
                  (e.target as HTMLElement).style.color = scrolled ? "#1C1A17" : "#F5EFE4";
                }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.25rem",
                fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                backgroundColor: scrolled ? "#2D5F4F" : "transparent",
                color: scrolled ? "#F5EFE4" : "#F5EFE4",
                border: scrolled ? "1px solid #2D5F4F" : "1px solid rgba(245,239,228,0.7)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#243f35";
                el.style.borderColor = "#243f35";
                el.style.color = "#F5EFE4";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = scrolled ? "#2D5F4F" : "transparent";
                el.style.borderColor = scrolled ? "#2D5F4F" : "rgba(245,239,228,0.7)";
                el.style.color = "#F5EFE4";
              }}
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#1C1A17" : "#F5EFE4",
              padding: "0.25rem",
            }}
            className="show-mobile"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "#2D5F4F",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
          }}
        >
          {/* Close button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/logo.png"
                alt="RD's Venues"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  letterSpacing: "0.04em",
                  color: "#F5EFE4",
                }}
              >
                RD&apos;s Venues
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#F5EFE4",
                padding: "0.25rem",
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              flex: 1,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#F5EFE4",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(245,239,228,0.15)",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem",
              marginTop: "2rem",
              backgroundColor: "#F5EFE4",
              color: "#2D5F4F",
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
