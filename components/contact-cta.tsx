import { getTranslations } from "next-intl/server";
import { CONTACT_EMAIL } from "@/lib/site";

export async function ContactCta() {
  const t = await getTranslations("contact");

  return (
    <section id="contato" className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{t("body")}</p>
          <p className="mt-6 text-sm">
            <span className="text-white/60">{t("emailLabel")}: </span>
            <a className="font-semibold text-teal hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex w-fit items-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy-deep transition hover:bg-white"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
