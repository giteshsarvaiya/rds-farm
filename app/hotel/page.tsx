import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import { client, urlFor } from "@/lib/sanity";
import { roomsQuery, hotelPropertyQuery } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "RD's Hotel | Luxury Hotel & Restaurant in Ahmedabad",
  description:
    "50+ elegantly appointed rooms, fine dining, and warm hospitality at RD's Hotel, Ahmedabad.",
};

export default async function HotelPage() {
  const [rooms, property] = await Promise.all([
    client.fetch(roomsQuery),
    client.fetch(hotelPropertyQuery),
  ]);

  const heroImage = property?.heroImage
    ? urlFor(property.heroImage).width(1920).quality(85).url()
    : "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80";

  const whatsapp = property?.whatsappNumber ?? "919876543210";
  const amenities = property?.amenities ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full">
        <Image
          src={heroImage}
          alt={property?.name ?? "RD's Hotel"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            {property?.tagline ?? "Hotel & Restaurant · Ahmedabad"}
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {property?.name ?? "RD's Hotel"}
          </h1>
          <p className="text-[#F5EFE4]/80 font-inter max-w-xl text-lg">
            {property?.description ?? "50+ elegantly appointed rooms where comfort meets timeless hospitality."}
          </p>
        </div>
      </section>

      {/* About Hotel */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              About The Hotel
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              {property?.aboutTitle ?? "A Stay Crafted for Stillness"}
            </h2>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-8">
              {property?.description ?? "RD's Hotel is Ahmedabad's finest 3-star property, offering over 50 thoughtfully designed rooms across multiple categories."}
            </p>
            <Link
              href="#rooms"
              className="inline-block border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
            >
              View Rooms →
            </Link>
          </div>
          <div className="relative h-[480px]">
            <Image
              src={heroImage}
              alt={property?.name ?? "Hotel Interior"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rooms */}
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
            No prices listed — contact us for a personalised quote tailored to your stay.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {(rooms ?? []).map((room: any) => {
              const roomImage = room.images?.[0]?.asset
                ? urlFor(room.images[0].asset).width(800).quality(80).url()
                : "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80";
              return (
                <div key={room._id} className="bg-[#FAF7F2] group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={roomImage}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
            {(!rooms || rooms.length === 0) && (
              <p className="text-[#7A6F62] font-inter col-span-3 text-center py-12">
                Room details coming soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section className="bg-[#1C1A17] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Restaurant"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
              Dining
            </p>
            <h2
              className="font-playfair italic text-[#F5EFE4] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              The Restaurant
            </h2>
            <p className="text-[#F5EFE4]/70 font-inter leading-relaxed mb-8">
              Our in-house restaurant brings together the finest regional flavours and continental
              classics. Whether it&apos;s a quiet breakfast or a celebratory dinner, every meal is an
              occasion.
            </p>
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("I'd like to make a dining reservation")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F5EFE4] text-[#1C1A17] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#B8976A] hover:text-[#F5EFE4] transition-all duration-300"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* Amenities */}
      {amenities.length > 0 && (
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
              {amenities.map((a: string) => (
                <div key={a} className="flex flex-col items-center gap-3">
                  <span className="text-[#1C1A17] font-inter text-sm uppercase tracking-widest">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Preview */}
      <section className="bg-[#EDE5D8] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
            Gallery
          </p>
          <h2
            className="font-playfair italic text-[#1C1A17] mb-12"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            A Glimpse Inside
          </h2>
          <Link
            href="/gallery"
            className="inline-block border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
