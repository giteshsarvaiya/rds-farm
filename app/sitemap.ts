import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { allPropertySlugsQuery, allBlogSlugsQuery } from "@/lib/queries";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://rds-farm.nilimasahu2201.workers.dev";

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`,        lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
  { url: `${BASE_URL}/offers`,  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
  { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/blog`,    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [propertySlugs, blogSlugs] = await Promise.all([
    client.fetch(allPropertySlugsQuery).catch(() => []),
    client.fetch(allBlogSlugsQuery).catch(() => []),
  ]);

  const propertyRoutes: MetadataRoute.Sitemap = (propertySlugs ?? [])
    .filter((p: { slug: string }) => p.slug)
    .map((p: { slug: string }) => ({
      url: `${BASE_URL}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  const blogRoutes: MetadataRoute.Sitemap = (blogSlugs ?? [])
    .filter((p: { slug: string }) => p.slug)
    .map((p: { slug: string }) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...STATIC_ROUTES, ...propertyRoutes, ...blogRoutes];
}
