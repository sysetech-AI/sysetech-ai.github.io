import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/about";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { resolveLocale } from "@/i18n/locale";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: localeParam } = await params;
  setRequestLocale(resolveLocale(localeParam));

  return (
    <main id="conteudo" className="flex-1">
      <Hero />
      <Services />
      <About />
      <ContactCta />
    </main>
  );
}
