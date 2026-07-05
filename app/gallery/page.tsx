import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { galleriesQuery } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "Gallery | RD's Venues",
  description:
    "Explore photos from RD's Hotel, RDS Farm, and RDS Farm 2 — luxury venues in Ahmedabad.",
};

export default async function GalleryPage() {
  const galleries = await client.fetch(galleriesQuery);

  // Group images by property — works regardless of slug or name
  const byProperty: Record<string, { name: string; images: any[] }> = {};

  for (const gallery of galleries ?? []) {
    const id = gallery.property?._id;
    const name = gallery.property?.name;
    if (!id || !name) continue;

    if (!byProperty[id]) {
      byProperty[id] = { name, images: [] };
    }
    byProperty[id].images.push(...(gallery.images ?? []));
  }

  const propertyGroups = Object.values(byProperty);

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

          {propertyGroups.length === 0 && (
            <p className="text-[#F5EFE4]/40 text-center py-24 font-inter">
              No gallery images added yet.
            </p>
          )}

          {propertyGroups.map((group, index) => (
            <div key={group.name}>
              {index > 0 && (
                <div className="border-t border-[#F5EFE4]/10 mb-16" />
              )}
              <div className="mb-16">
                <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
                  {group.name}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {group.images.map((img: any, i: number) => (
                    <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
                      <Image
                        src={urlFor(img.asset).width(800).quality(80).url()}
                        alt={img.alt || img.caption || group.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
