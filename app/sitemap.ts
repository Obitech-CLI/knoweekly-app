import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://knoweekly.world",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://knoweekly.world/news-discoveries",
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://knoweekly.world/about-us",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://knoweekly.world/contact-us",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://knoweekly.world/terms-service",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://knoweekly.world/privacy-policy",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://knoweekly.world/editorial-policy",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://knoweekly.world/copyright-policy",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://knoweekly.world/disclaimer",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
