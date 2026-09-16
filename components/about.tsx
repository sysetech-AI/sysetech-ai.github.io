import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("about");

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.22em] text-teal-dark">
        {t("eyebrow")}
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy">
        {t("title")}
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{t("body")}</p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy">{t("note")}</p>
    </section>
  );
}
