import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { client } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "Contact | RD Developers",
  description:
    "Get in touch with RD Developers. Reach us by phone, WhatsApp, or email for inquiries about RD's Hotel, RDS Farm, and RDS Farm 2.",
};

export default async function ContactPage() {
  const s = await client.fetch(siteSettingsQuery).catch(() => null);

  const phone = s?.phone ?? "+91 98765 43210";
  const email = s?.email ?? "hello@rddevelopers.com";
  const address = s?.address ?? "Ahmedabad, Gujarat, India";
  const whatsapp = s?.whatsappNumber ?? "919876543210";
  const instagramUrl = s?.instagramUrl ?? "https://instagram.com";
  const facebookUrl = s?.facebookUrl ?? "https://facebook.com";
  const mapsUrl = s?.homepageGoogleMapsEmbedUrl ?? null;

  const whatsappHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello! I'd like to inquire about your venues.")}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1A17] pt-40 pb-24 px-4 text-center">
        <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
          Get In Touch
        </p>
        <h1
          className="font-playfair italic text-[#F5EFE4]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Contact Us
        </h1>
        <p className="text-[#F5EFE4]/60 font-inter mt-6 max-w-lg mx-auto">
          We respond fastest on WhatsApp. For event inquiries, bookings, or any questions — reach out and we'll get back to you promptly.
        </p>
      </section>

      {/* Contact details + map */}
      <section className="bg-[#F5EFE4] py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: contact info */}
          <div>
            <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-8 font-inter">
              Reach Us
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#B8976A] mt-0.5 shrink-0" />
                <p className="text-[#7A6F62] font-inter leading-relaxed">{address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#B8976A] shrink-0" />
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-[#1C1A17] font-inter hover:text-[#2D5F4F] transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-[#B8976A] shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-[#1C1A17] font-inter hover:text-[#2D5F4F] transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2D5F4F] text-[#F5EFE4] font-inter font-semibold uppercase tracking-widest text-sm px-8 py-4 hover:opacity-90 transition-all duration-300 mb-10"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            {/* Social */}
            <div>
              <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-4 font-inter">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-2 text-[#7A6F62] font-inter text-sm hover:text-[#2D5F4F] transition-colors"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center gap-2 text-[#7A6F62] font-inter text-sm hover:text-[#2D5F4F] transition-colors"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right: map or placeholder */}
          <div>
            {mapsUrl ? (
              <iframe
                src={mapsUrl}
                width="100%"
                height="480"
                style={{ border: 0, borderRadius: "4px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-[480px] bg-[#EDE5D8] flex flex-col items-center justify-center text-center px-8">
                <MapPin size={40} className="text-[#B8976A] mb-4" />
                <p className="text-[#7A6F62] font-inter text-sm leading-relaxed">
                  {address}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Properties quick links */}
      <section className="bg-[#EDE5D8] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#B8976A] uppercase tracking-[0.2em] text-xs mb-6 font-inter">
            Our Venues
          </p>
          <p className="text-[#7A6F62] font-inter max-w-xl mx-auto">
            Have a specific venue in mind? Each property has its own WhatsApp line for faster responses.
            Visit the property page and use the Chat button there.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
