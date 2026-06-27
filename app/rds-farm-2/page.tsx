import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "RDS Farm 2 | Resort & Party Plot in Ahmedabad",
  description:
    "RDS Farm 2 — adjacent to RDS Farm, ideal for large-scale weddings and events in Ahmedabad.",
};

/** Renders the RDS Farm 2 landing page with combined venue highlight and gallery. */
export default function RDSFarm2Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80"
          alt="RDS Farm 2"
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
            RDS Farm 2
          </h1>
          <p className="text-[#F5EFE4]/80 font-inter max-w-xl text-lg">
            Adjacent to RDS Farm — together, they become Ahmedabad&apos;s grandest event venue.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
              alt="RDS Farm 2 grounds"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              About RDS Farm 2
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Twice the Space, Same Warmth
            </h2>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-4">
              RDS Farm 2 is situated adjacent to RDS Farm, offering an equally stunning natural
              setting with additional capacity for larger events. Whether you&apos;re planning a
              grand wedding or a large corporate gathering, RDS Farm 2 provides the perfect backdrop.
            </p>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-8">
              When booked together with RDS Farm, the combined venue can accommodate over 1000
              guests — making it one of the largest private event spaces in Ahmedabad.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/919876543210?text=I'd like to inquire about RDS Farm 2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:opacity-90 transition-all duration-300"
              >
                Send an Inquiry
              </a>
              <Link
                href="/rds-farm"
                className="inline-block border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
              >
                View RDS Farm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Venue Highlight */}
      <section className="bg-[#2D5F4F] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
            Combined Venue
          </p>
          <h2
            className="font-playfair italic text-[#F5EFE4] mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            RDS Farm + RDS Farm 2
          </h2>
          <p className="text-[#F5EFE4]/70 font-inter leading-relaxed max-w-2xl mx-auto mb-12">
            Both properties are located just 20–30 metres apart and can be booked together for
            large-scale events. The combined space offers unmatched capacity and flexibility for
            weddings, corporate events, and multi-day celebrations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: "1000+", label: "Guest Capacity" },
              { stat: "2", label: "Adjacent Properties" },
              { stat: "20–30m", label: "Apart" },
            ].map((item) => (
              <div key={item.label} className="border border-[#F5EFE4]/20 p-8">
                <p className="font-playfair text-[#B8976A] text-4xl mb-2">{item.stat}</p>
                <p className="text-[#F5EFE4]/70 font-inter text-sm uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/919876543210?text=I'd like to book both RDS Farm properties"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F5EFE4] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-10 py-4 hover:bg-[#B8976A] hover:text-[#F5EFE4] transition-all duration-300"
          >
            Inquire for Combined Venue
          </a>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-[#EDE5D8] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter text-center">
            Gallery
          </p>
          <h2
            className="font-playfair italic text-[#1C1A17] text-center mb-12"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            The Venue in Pictures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10">
            {[
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
              "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
              "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                <Image
                  src={src}
                  alt={`Farm 2 gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
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
