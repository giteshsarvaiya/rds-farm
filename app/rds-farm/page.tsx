import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "RDS Farm | Resort & Party Plot in Ahmedabad",
  description:
    "RDS Farm — a sprawling resort and party plot in Ahmedabad. Ideal for weddings, corporate retreats, and private celebrations.",
};

const eventTypes = [
  { label: "Weddings & Receptions", icon: "💍" },
  { label: "Corporate Retreats", icon: "🤝" },
  { label: "Birthday Celebrations", icon: "🎂" },
  { label: "Anniversary Parties", icon: "🥂" },
  { label: "Cultural Events", icon: "🎭" },
  { label: "Family Gatherings", icon: "👨‍👩‍👧‍👦" },
];

/** Renders the RDS Farm landing page with event types, combined venue note, and gallery. */
export default function RDSFarmPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="RDS Farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            Resort & Party Plot · Ahmedabad
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            RDS Farm
          </h1>
          <p className="text-[#F5EFE4]/80 font-inter max-w-xl text-lg">
            Where nature sets the stage for your most cherished celebrations.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              About The Venue
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              A Stay Made for Stillness
            </h2>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-4">
              RDS Farm is a sprawling resort and party plot set amidst lush greenery on the
              outskirts of Ahmedabad. Designed for those who seek an escape from the city without
              compromising on luxury.
            </p>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-8">
              With expansive open grounds, elegant indoor spaces, and state-of-the-art event
              infrastructure, RDS Farm is the preferred choice for weddings, corporate retreats,
              and grand celebrations.
            </p>
            <a
              href="https://wa.me/919876543210?text=I'd like to inquire about RDS Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:opacity-90 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="relative h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
              alt="RDS Farm grounds"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-[#2D5F4F] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
            Events & Occasions
          </p>
          <h2
            className="font-playfair italic text-[#F5EFE4] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Crafted for Every Occasion
          </h2>
          <p className="text-[#F5EFE4]/70 font-inter max-w-xl mx-auto mb-16">
            From intimate gatherings to grand celebrations — we make every event unforgettable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {eventTypes.map((e) => (
              <div
                key={e.label}
                className="border border-[#F5EFE4]/20 p-8 hover:border-[#B8976A] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{e.icon}</div>
                <p className="text-[#F5EFE4] font-inter text-sm uppercase tracking-widest">
                  {e.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Venue Note */}
      <section className="bg-[#EDE5D8] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-l-4 border-[#B8976A] pl-6 text-left inline-block">
            <p className="text-[#1C1A17] font-playfair italic text-xl mb-2">
              Planning a large-scale event?
            </p>
            <p className="text-[#7A6F62] font-inter">
              RDS Farm and RDS Farm 2 are adjacent properties that can be booked together for
              large events — accommodating 1000+ guests across a combined venue space.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/rds-farm-2"
              className="text-[#2D5F4F] font-inter font-semibold underline underline-offset-4 text-sm"
            >
              Learn about RDS Farm 2 →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-[#1C1A17] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter text-center">
            Gallery
          </p>
          <h2
            className="font-playfair italic text-[#F5EFE4] text-center mb-12"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            A Glimpse of the Farm
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
              "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
              "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                <Image
                  src={src}
                  alt={`Farm gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border border-[#F5EFE4] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#F5EFE4] hover:text-[#1C1A17] transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
