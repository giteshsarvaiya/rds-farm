import { client, urlFor } from "@/lib/sanity";
import { activeOffersQuery, siteSettingsQuery } from "@/lib/queries";
import OffersAutoPopup from "@/components/ui/OffersAutoPopup";
import { OfferItem } from "@/components/ui/OffersPopup";

const PROPERTY_LABELS: Record<string, string> = {
  hotel: "RD's Hotel",
  farm: "RDS Farm",
  all: "All Properties",
};

export default async function OffersAutoPopupServer() {
  const [rawOffers, siteSettings] = await Promise.all([
    client.fetch(activeOffersQuery).catch(() => []),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  const offers: OfferItem[] = (rawOffers ?? [])
    .filter((o: any) => o.image)
    .map((o: any) => ({
      title: o.title,
      description: o.description ?? "",
      highlights: o.highlights ?? [],
      image: urlFor(o.image).width(800).quality(80).url(),
      tag: o.tag ?? "Offer",
      property: PROPERTY_LABELS[o.property] ?? o.property ?? undefined,
    }));

  if (!offers.length) return null;

  return (
    <OffersAutoPopup
      offers={offers}
      whatsappNumber={siteSettings?.whatsappNumber ?? "919876543210"}
    />
  );
}
