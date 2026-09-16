import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": SITE_URL,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${SITE_URL}/privacidade`,
          en: `${SITE_URL}/en/privacy`,
        },
      },
    },
  ];
}
