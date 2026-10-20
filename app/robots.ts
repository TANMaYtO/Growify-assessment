import type { MetadataRoute } from "next";

/**
 * Generates the robots.txt file for search engine crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://growify.in/sitemap.xml",
  };
}
