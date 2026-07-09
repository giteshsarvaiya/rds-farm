"use client";

import { useEffect, useState } from "react";

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(target: number): Remaining | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

interface OfferCountdownProps {
  validUntil?: string;
  /** "dark" for the near-black popup card, "light" for the cream grid card. */
  variant?: "dark" | "light";
}

export default function OfferCountdown({ validUntil, variant = "dark" }: OfferCountdownProps) {
  const target = validUntil ? new Date(validUntil).getTime() : null;
  const [remaining, setRemaining] = useState<Remaining | null>(() =>
    target ? getRemaining(target) : null
  );

  useEffect(() => {
    if (!target) return;

    setRemaining(getRemaining(target));
    const interval = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!target || !remaining) return null;

  const textColor = variant === "dark" ? "#F5EFE4" : "#1C1A17";
  const mutedColor = variant === "dark" ? "rgba(245,239,228,0.5)" : "rgba(28,26,23,0.48)";

  const units = [
    { value: remaining.hours, label: "hours" },
    { value: remaining.minutes, label: "mins" },
    { value: remaining.seconds, label: "secs" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
      {remaining.days > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              position: "relative",
              background: "#1C1A17",
              borderRadius: "3px",
              minWidth: "2.4rem",
              padding: "0.15rem 0.5rem",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 700,
                fontSize: "1.6rem",
                color: "#F5EFE4",
              }}
            >
              {remaining.days}
            </span>
            <div
              style={{
                position: "absolute",
                left: "0.2rem",
                right: "0.2rem",
                top: "50%",
                height: "1px",
                background: "rgba(245,239,228,0.25)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: textColor,
            }}
          >
            {remaining.days === 1 ? "day left" : "days left"}
          </span>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
        {units.map((unit, i) => (
          <div key={unit.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
            <div style={{ textAlign: "center", minWidth: "1.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: textColor,
                  lineHeight: 1,
                }}
              >
                {pad(unit.value)}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "0.55rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: mutedColor,
                  marginTop: "0.1rem",
                }}
              >
                {unit.label}
              </div>
            </div>
            {i < units.length - 1 && (
              <span style={{ fontWeight: 700, fontSize: "1rem", color: mutedColor, lineHeight: 1 }}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
