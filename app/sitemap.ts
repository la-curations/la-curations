import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lacurations.co.in";
  const theaterUrl = "https://theater.lacurations.co.in";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: theaterUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${theaterUrl}/privacy-policy`,
      lastModified: new Date("2026-01-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date("2026-01-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
