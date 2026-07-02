import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { galleriesQuery } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "Gallery | RD Developers",
  description:
    "Explore photos from RD's Hotel, RDS Farm, and RDS Farm 2 — luxury venues in Ahmedabad.",
};

export default async function GalleryPage() {
  const galleries = await client.fetch(galleriesQuery);

  const hotelImages = galleries
    .filter((g: any) => g.property?.propertyType === "hotel")
    .flatMap((g: any) => g.images ?? []);

  const farmImages = galleries
    .filter((g: any) => g.property?.propertyType === "farm")
    .flatMap((g: any) => g.images ?? []);

  const farm2Images = galleries
    .filter((g: any) => g.property?.propertyType === "farm2")
    .flatMap((g: any) => g.images ?? []);

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

          {hotelImages.length > 0 && (
            <div className="mb-16">
              <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
                RD&apos;s Hotel
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {hotelImages.map((img: any, i: number) => (
                  <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                    <Image
                      src={urlFor(img.asset).width(800).quality(80).url()}
                      alt={img.alt || img.caption || "RD's Hotel"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {farmImages.length > 0 && (
            <>
              <div className="border-t border-[#F5EFE4]/10 mb-16" />
              <div className="mb-16">
                <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
                  RDS Farm
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {farmImages.map((img: any, i: number) => (
                    <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                      <Image
                        src={urlFor(img.asset).width(800).quality(80).url()}
                        alt={img.alt || img.caption || "RDS Farm"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {farm2Images.length > 0 && (
            <>
              <div className="border-t border-[#F5EFE4]/10 mb-16" />
              <div>
                <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
                  RDS Farm 2
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {farm2Images.map((img: any, i: number) => (
                    <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                      <Image
                        src={urlFor(img.asset).width(800).quality(80).url()}
                        alt={img.alt || img.caption || "RDS Farm 2"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {hotelImages.length === 0 && farmImages.length === 0 && farm2Images.length === 0 && (
            <p className="text-[#F5EFE4]/40 text-center py-24 font-inter">
              No gallery images added yet.
            </p>
          )}

        </div>
      </section>
    </>
  );
}
