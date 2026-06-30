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
} from "@/lib/queries";

export const revalidate = 3600;

export default async function HomePage() {
  const [rawProperties, rawOffers, rawTestimonials, siteSettings] =
    await Promise.all([
      client.fetch(propertiesQuery),
      client.fetch(activeOffersQuery),
      client.fetch(activeTestimonialsQuery),
      client.fetch(siteSettingsQuery),
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

  return (
    <>
      <HeroSection />
      <AboutSection />
      <PropertiesSection properties={properties} />
      <OffersSection offers={offers} whatsappNumber={whatsappNumber} />
      <ExperiencesSection />
      <GallerySection />
      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  );
}
