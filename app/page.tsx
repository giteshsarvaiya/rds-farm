import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import OffersSection from "@/components/sections/OffersSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";

/** Renders the homepage composed of all section components in sequence. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <OffersSection />
      <ExperiencesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
