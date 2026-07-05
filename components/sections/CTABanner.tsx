import { client } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import CTABannerClient from "./CTABannerClient";

export default async function CTABanner() {
  const s = await client.fetch(siteSettingsQuery).catch(() => null);
  const whatsappNumber = s?.whatsappNumber ?? "919876543210";
  return <CTABannerClient whatsappNumber={whatsappNumber} />;
}
