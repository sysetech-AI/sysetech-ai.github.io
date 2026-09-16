import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BRAND } from "@/lib/site";
import { LanguageSwitcher } from "./language-switcher";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block h-11 w-11 overflow-hidden rounded-full bg-white">
            <Image
              src="/sysetech-mark.jpg"
              alt={BRAND}
              width={88}
              height={88}
              className="h-11 w-11 object-contain"
              priority
            />
          </span>
          <span className="hidden text-lg font-bold tracking-tight text-navy sm:inline">
            {BRAND}
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-navy sm:gap-6">
          <Link href={{ pathname: "/", hash: "servicos" }} className="hover:text-teal-dark">
            {t("services")}
          </Link>
          <Link href={{ pathname: "/", hash: "sobre" }} className="hover:text-teal-dark">
            {t("about")}
          </Link>
          <Link href={{ pathname: "/", hash: "contato" }} className="hover:text-teal-dark">
            {t("contact")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
