import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resolveLocale } from "@/i18n/locale";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);
  const t = await getTranslations({ locale, namespace: "meta" });
  const home = `${SITE_URL}/${locale}/`;
  const languages = {
    "pt-BR": `${SITE_URL}/pt/`,
    en: `${SITE_URL}/en/`,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: home,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      url: home,
      siteName: "SYSETECH",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/sysetech-logo.jpg",
          width: 1024,
          height: 1024,
          alt: "SYSETECH",
        },
      ],
    },
    icons: {
      icon: "/sysetech-logo.jpg",
      apple: "/sysetech-logo.jpg",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);

  setRequestLocale(locale);

  const t = await getTranslations("nav");

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"} className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-navy antialiased">
        <NextIntlClientProvider>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
          >
            {t("skip")}
          </a>
          <SiteHeader />
          <div className="flex min-h-full flex-col">
            {children}
            <SiteFooter />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
