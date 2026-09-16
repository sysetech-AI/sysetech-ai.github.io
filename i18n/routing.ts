import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/privacy": {
      pt: "/privacidade",
      en: "/privacy",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
