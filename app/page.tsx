import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import OffersSection from "@/components/sections/OffersSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import { client, urlFor } from "@/lib/sanity";
import {
  propertiesQuery,
  activeOffersQuery,
  activeTestimonialsQuery,
  siteSettingsQuery,
  galleriesQuery,
} from "@/lib/queries";

export const revalidate = 3600;

export default async function HomePage() {
  const [rawProperties, rawOffers, rawTestimonials, siteSettings, rawGalleries] =
    await Promise.all([
      client.fetch(propertiesQuery),
      client.fetch(activeOffersQuery),
      client.fetch(activeTestimonialsQuery),
      client.fetch(siteSettingsQuery),
      client.fetch(galleriesQuery),
    ]);

  const properties = (rawProperties ?? []).map((p: any) => ({
    _id: p._id,
    name: p.name,
    slug: p.slug,
    tagline: p.tagline ?? "",
    description: p.description ?? "",
    imageUrl: p.heroImage
      ? urlFor(p.heroImage).width(800).quality(80).url()
      : "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    href: `/${p.slug}`,
  }));

  const offers = (rawOffers ?? []).map((o: any) => ({
    _id: o._id,
    title: o.title,
    description: o.description ?? "",
    imageUrl: o.image
      ? urlFor(o.image).width(800).quality(80).url()
      : "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    property: o.property ?? "",
    ctaText: o.ctaText ?? "Get in Touch",
    validUntil: o.validUntil ?? null,
  }));

  const testimonials = (rawTestimonials ?? []).map((t: any) => ({
    _id: t._id,
    name: t.name,
    property: t.property ?? "",
    quote: t.quote,
    rating: t.rating ?? 5,
  }));

  const whatsappNumber = siteSettings?.whatsappNumber ?? "919876543210";
  const mapsEmbedUrl: string | null = siteSettings?.homepageGoogleMapsEmbedUrl ?? null;

  const heroImageUrl: string | undefined = siteSettings?.heroImage
    ? urlFor(siteSettings.heroImage).width(1920).quality(85).url()
    : undefined;
  const heroEyebrow: string | undefined = siteSettings?.heroEyebrow ?? undefined;
  const heroHeadline: string | undefined = siteSettings?.heroHeadline ?? undefined;
  const heroSubtext: string | undefined = siteSettings?.heroSubtext ?? undefined;

  // Gallery images: flatten all published gallery images across all properties, take first 5
  const galleryImages = (rawGalleries ?? [])
    .flatMap((g: any) => g.images ?? [])
    .filter((img: any) => img?.asset)
    .slice(0, 5)
    .map((img: any) => ({
      src: urlFor(img.asset).width(800).quality(80).url(),
      alt: img.alt || img.caption || "Gallery image",
    }));

  // Experiences from Site Settings
  const experiences = (siteSettings?.experiences ?? [])
    .filter((e: any) => e.title && e.image)
    .map((e: any) => ({
      title: e.title,
      description: e.description ?? "",
      image: urlFor(e.image).width(800).quality(80).url(),
      alt: e.title,
    }));

  const aboutTitle: string | undefined = siteSettings?.homepageAboutTitle ?? undefined;
  const aboutParagraphs: string[] | undefined = siteSettings?.homepageAboutBody
    ? (siteSettings.homepageAboutBody as any[])
        .filter((b: any) => b._type === "block")
        .map((b: any) =>
          (b.children ?? []).map((c: any) => c.text ?? "").join("")
        )
        .filter((s: string) => s.trim().length > 0)
    : undefined;

  return (
    <>
      <HeroSection
        imageUrl={heroImageUrl}
        eyebrow={heroEyebrow}
        headline={heroHeadline}
        subtext={heroSubtext}
      />
      <AboutSection title={aboutTitle} paragraphs={aboutParagraphs} />
      <PropertiesSection properties={properties} />
      <OffersSection offers={offers} whatsappNumber={whatsappNumber} />
      <ExperiencesSection experiences={experiences.length ? experiences : undefined} />
      <GallerySection images={galleryImages.length ? galleryImages : undefined} />
      <TestimonialsSection testimonials={testimonials} />

      {mapsEmbedUrl && (
        <section className="bg-[#F5EFE4] py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter text-center">
              Find Us
            </p>
            <h2
              className="font-playfair italic text-[#1C1A17] text-center mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              How to Reach Us
            </h2>
            {siteSettings?.address && (
              <p className="text-[#7A6F62] font-inter text-center mb-10">
                {siteSettings.address}
              </p>
            )}
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "4px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
