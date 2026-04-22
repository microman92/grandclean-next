export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grandclean.uz";
  const locales = ["ru", "uz"];
  const now = new Date();

  const staticPages = [
    { page: "", priority: 1.0 },
    { page: "/services", priority: 0.8 },
    { page: "/about", priority: 0.8 },
    { page: "/pricing", priority: 0.8 },
    { page: "/reviews", priority: 0.8 },
    { page: "/contact", priority: 0.8 },
    { page: "/blog", priority: 0.6 },
  ];

  const staticEntries = locales.flatMap((lang) =>
    staticPages.map(({ page, priority }) => ({
      url: `${baseUrl}/${lang}${page}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
  );

  const serviceEntries = locales.flatMap((lang) =>
    servicesData.map((service) => ({
      url: `${baseUrl}/${lang}/services/${service.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...staticEntries, ...serviceEntries];
}
