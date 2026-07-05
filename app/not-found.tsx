import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#1C1A17",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
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
        Error 404
      </p>

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
        Page Not Found
      </h1>

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
          color: "rgba(245,239,228,0.6)",
          maxWidth: "420px",
          marginBottom: "3rem",
        }}
      >
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.875rem 2rem",
            backgroundColor: "#F5EFE4",
            color: "#1C1A17",
            fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
          }}
        >
          Back to Home
        </Link>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "0.875rem 2rem",
            backgroundColor: "transparent",
            border: "1px solid rgba(245,239,228,0.4)",
            color: "#F5EFE4",
            fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
