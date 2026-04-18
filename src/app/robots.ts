import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/static/media/*.woff2$",
    },
    sitemap: "https://www.schlafnerds.de/sitemap.xml",
  };
}
