import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveLocale } from "@/i18n/locale";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: {
      canonical: locale === "en" ? `${SITE_URL}/en/privacy` : `${SITE_URL}/privacidade`,
    },
  };
}

const SECTION_IDS = [
  "controller",
  "collection",
  "email",
  "hosting",
  "rights",
  "changes",
] as const;

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <main id="conteudo" className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-navy">{t("title")}</h1>
      <p className="mt-3 text-sm text-muted">{t("updated")}</p>
      <div className="mt-10 space-y-8">
        {SECTION_IDS.map((id) => (
          <section key={id}>
            <h2 className="text-xl font-semibold text-navy">{t(`sections.${id}.title`)}</h2>
            <p className="mt-2 leading-relaxed text-muted">{t(`sections.${id}.body`)}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
