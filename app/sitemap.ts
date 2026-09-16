import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/pt/`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${SITE_URL}/pt/`,
          en: `${SITE_URL}/en/`,
        },
      },
    },
    {
      url: `${SITE_URL}/pt/privacy/`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${SITE_URL}/pt/privacy/`,
          en: `${SITE_URL}/en/privacy/`,
        },
      },
    },
  ];
}
