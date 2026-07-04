import Image from "next/image";

export const metadata = {
  title: "Gallery | RD's Venues",
  description:
    "Explore photos from RD's Hotel, RDS Farm, and RDS Farm 2 — luxury venues in Ahmedabad.",
};

const images = [
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", property: "RD's Hotel", category: "hotel" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", property: "RD's Hotel", category: "hotel" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80", property: "RD's Hotel", category: "hotel" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", property: "RD's Hotel", category: "hotel" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", property: "RDS Farm", category: "farm" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", property: "RDS Farm", category: "farm" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", property: "RDS Farm", category: "farm" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", property: "RDS Farm", category: "farm" },
  { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80", property: "RDS Farm 2", category: "farm2" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", property: "RDS Farm 2", category: "farm2" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", property: "RDS Farm 2", category: "farm2" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", property: "RDS Farm 2", category: "farm2" },
];

/** Renders the gallery index page with images grouped by property. */
export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-sm mb-4 font-inter">
            All Properties
          </p>
          <h1
            className="font-playfair italic text-[#F5EFE4]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#1C1A17] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hotel Section */}
          <div className="mb-16">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
              RD&apos;s Hotel
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {images.filter(i => i.category === "hotel").map((img, i) => (
                <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.property}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#F5EFE4]/10 mb-16" />

          {/* RDS Farm Section */}
          <div className="mb-16">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
              RDS Farm
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {images.filter(i => i.category === "farm").map((img, i) => (
                <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.property}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#F5EFE4]/10 mb-16" />

          {/* RDS Farm 2 Section */}
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
              RDS Farm 2
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {images.filter(i => i.category === "farm2").map((img, i) => (
                <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.property}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
