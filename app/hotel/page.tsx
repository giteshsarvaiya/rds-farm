import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "RD's Hotel | Luxury Hotel & Restaurant in Ahmedabad",
  description:
    "50+ elegantly appointed rooms, fine dining, and warm hospitality at RD's Hotel, Ahmedabad.",
};

const rooms = [
  {
    name: "Deluxe Room",
    capacity: "2 Guests",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    features: ["King Bed", "City View", "En-suite Bathroom"],
  },
  {
    name: "Premium Suite",
    capacity: "2–3 Guests",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    features: ["King Bed", "Sitting Area", "Private Terrace"],
  },
  {
    name: "Family Room",
    capacity: "4 Guests",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    features: ["Twin Beds", "Extra Sofa Bed", "Spacious Bathroom"],
  },
];

const amenities = [
  { icon: "🍽️", label: "Restaurant & Bar" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "💆", label: "Wellness Spa" },
  { icon: "🎉", label: "Banquet Hall" },
  { icon: "🧳", label: "Concierge" },
  { icon: "🚗", label: "Airport Transfer" },
];

/** Renders the RD's Hotel landing page with rooms, restaurant, amenities, and gallery. */
export default function HotelPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
          alt="RD's Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            Hotel & Restaurant · Ahmedabad
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            RD&apos;s Hotel
          </h1>
          <p className="text-[#F5EFE4]/80 font-inter max-w-xl text-lg">
            50+ elegantly appointed rooms where comfort meets timeless hospitality.
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
              A Stay Crafted for Stillness
            </h2>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-4">
              RD&apos;s Hotel is Ahmedabad&apos;s finest 3-star property, offering over 50 thoughtfully
              designed rooms across multiple categories. Every detail is considered — from the
              quality of linens to the warmth of our staff.
            </p>
            <p className="text-[#7A6F62] font-inter leading-relaxed mb-8">
              Our in-house restaurant serves a curated menu of regional and continental cuisine,
              while our banquet facilities cater to intimate gatherings and grand celebrations alike.
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
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80"
              alt="Hotel Interior"
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
            {rooms.map((room) => (
              <div key={room.name} className="bg-[#FAF7F2] group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-[#1C1A17] text-xl mb-1">{room.name}</h3>
                  <p className="text-[#B8976A] text-sm font-inter uppercase tracking-widest mb-4">
                    {room.capacity}
                  </p>
                  <ul className="space-y-1 mb-6">
                    {room.features.map((f) => (
                      <li key={f} className="text-[#7A6F62] font-inter text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#B8976A] inline-block" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/919876543210?text=I'm interested in the ${room.name}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border border-[#2D5F4F] text-[#2D5F4F] font-inter font-semibold uppercase tracking-widest text-xs px-6 py-3 hover:bg-[#2D5F4F] hover:text-[#F5EFE4] transition-all duration-300"
                  >
                    Send an Inquiry
                  </a>
                </div>
              </div>
            ))}
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
            <p className="text-[#F5EFE4]/70 font-inter leading-relaxed mb-4">
              Our in-house restaurant brings together the finest regional flavours and continental
              classics. Whether it&apos;s a quiet breakfast or a celebratory dinner, every meal is an
              occasion.
            </p>
            <p className="text-[#F5EFE4]/70 font-inter leading-relaxed mb-8">
              Private dining arrangements available on request. Ideal for business lunches,
              anniversary dinners, and family gatherings.
            </p>
            <a
              href="https://wa.me/919876543210?text=I'd like to make a dining reservation"
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
            {amenities.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-3">
                <span className="text-3xl">{a.icon}</span>
                <span className="text-[#1C1A17] font-inter text-sm uppercase tracking-widest">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
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
            A Glimpse Inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10">
            {[
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
              "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
              "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
              "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
              "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
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
