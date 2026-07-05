import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/sections/CTABanner";
import { client, urlFor } from "@/lib/sanity";
import { propertyBySlugQuery, allPropertySlugsQuery, roomsQuery } from "@/lib/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await client.fetch(allPropertySlugsQuery);
  return (slugs ?? []).map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await client.fetch(propertyBySlugQuery, { slug });
  if (!property) return {};
  return {
    title: `${property.name} | RD Developers`,
    description: property.description ?? "",
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await client.fetch(propertyBySlugQuery, { slug });

  if (!property) notFound();

  const isHotel = property.propertyType === "hotel";
  const whatsapp = property.whatsappNumber ?? "919876543210";

  // Extract plain text paragraphs from portable text aboutBody, fall back to description
  const aboutParagraphs: string[] = property.aboutBody
    ? (property.aboutBody as any[])
        .filter((b: any) => b._type === "block")
        .map((b: any) => (b.children ?? []).map((c: any) => c.text ?? "").join(""))
        .filter((s: string) => s.trim().length > 0)
    : property.description
    ? [property.description]
    : [];

  const heroImage = property.heroImage
    ? urlFor(property.heroImage).width(1920).quality(85).url()
    : "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80";

  const rooms = isHotel ? await client.fetch(roomsQuery) : [];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full">
        <Image
          src={heroImage}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            {property.tagline ?? ""}
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {property.name}
          </h1>
          {property.description && (
            <p className="text-[#F5EFE4]/80 font-inter max-w-xl text-lg">
              {property.description}
            </p>
          )}
        </div>
      </section>

      {/* About */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              About The {isHotel ? "Hotel" : "Venue"}
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              {property.aboutTitle ?? property.name}
            </h2>
            <div className="mb-8 space-y-4">
              {aboutParagraphs.map((para, i) => (
                <p key={i} className="text-[#7A6F62] font-inter leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`I'd like to inquire about ${property.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:opacity-90 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="relative h-[480px]">
            <Image
              src={heroImage}
              alt={property.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rooms — Hotel only */}
      {isHotel && rooms.length > 0 && (
        <section id="rooms" className="bg-[#EDE5D8] py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter text-center">
              Accommodation
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] text-center mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Our Rooms & Suites
            </h2>
            <p className="text-[#7A6F62] font-inter text-center max-w-xl mx-auto mb-16">
              No prices listed — contact us for a personalised quote.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {rooms.map((room: any) => {
                const roomImage = room.images?.[0]?.asset
                  ? urlFor(room.images[0].asset).width(800).quality(80).url()
                  : "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80";
                return (
                  <div key={room._id} className="bg-[#FAF7F2] group overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={roomImage} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-[#1C1A17] text-xl mb-1">{room.name}</h3>
                      {room.capacity && (
                        <p className="text-[#B8976A] text-sm font-inter uppercase tracking-widest mb-4">
                          {room.capacity} Guests
                        </p>
                      )}
                      {room.amenities?.length > 0 && (
                        <ul className="space-y-1 mb-6">
                          {room.amenities.map((f: string) => (
                            <li key={f} className="text-[#7A6F62] font-inter text-sm flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#B8976A] inline-block" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                      <a
                        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`I'm interested in the ${room.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-xs px-6 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
                      >
                        Send an Inquiry
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Amenities */}
      {property.amenities?.length > 0 && (
        <section className="bg-[#F5EFE4] py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              Facilities
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] mb-16"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              The Essentials, Considered
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {property.amenities.map((a: string) => (
                <div key={a} className="flex flex-col items-center gap-3">
                  <span className="text-[#1C1A17] font-inter text-sm uppercase tracking-widest">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      {(property.address || property.phone || property.googleMapsEmbedUrl) && (
        <section className="bg-[#EDE5D8] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              Find Us
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] mb-8"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Get in Touch
            </h2>
            {property.address && (
              <p className="text-[#7A6F62] font-inter mb-4">{property.address}</p>
            )}
            {property.phone && (
              <a href={`tel:${property.phone}`} className="text-[#2D5F4F] font-inter font-semibold block mb-8">
                {property.phone}
              </a>
            )}
            {property.googleMapsEmbedUrl && (
              <iframe
                src={property.googleMapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </section>
      )}

      {/* Gallery link */}
      <section className="bg-[#1C1A17] py-24 px-4 text-center">
        <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">Gallery</p>
        <h2
          className="font-playfair italic text-[#F5EFE4] mb-12"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
        >
          See The Venue
        </h2>
        <Link
          href="/gallery"
          className="inline-block border border-[#F5EFE4] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#F5EFE4] hover:text-[#1C1A17] transition-all duration-300"
        >
          View Full Gallery
        </Link>
      </section>

      <CTABanner />
    </>
  );
}
