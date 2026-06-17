import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.yousweb.nl";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/website-laten-maken`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${baseUrl}/kosten-website-laten-maken`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/website-laten-maken-zzp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/wordpress-website-laten-maken`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/nextjs-website-laten-maken`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/website-builder`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/portfolio-websites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-landingspaginas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
