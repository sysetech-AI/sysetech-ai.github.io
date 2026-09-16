import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CONTACT_EMAIL, LOGO_TAGLINE } from "@/lib/site";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,191,191,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(27,58,95,0.08),transparent_46%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-dark">
            {LOGO_TAGLINE}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t("lead")}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
          >
            {t("cta")}
          </a>
        </div>
        <div className="hidden justify-center lg:flex">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full border border-line" />
            <div className="absolute -inset-12 rounded-full border border-line/60" />
            <Image
              src="/sysetech-logo.jpg"
              alt=""
              width={288}
              height={288}
              className="relative h-72 w-72 rounded-full object-cover shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
