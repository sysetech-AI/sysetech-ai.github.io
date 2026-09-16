"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const LOCALES = [
  { id: "pt", label: "PT" },
  { id: "en", label: "EN" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="inline-flex rounded-full border border-line p-0.5 text-xs font-semibold tracking-wide"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((item) => {
        const active = locale === item.id;
        return (
          <Link
            key={item.id}
            href={pathname}
            locale={item.id}
            className={
              active
                ? "rounded-full bg-navy px-2.5 py-1 text-white"
                : "rounded-full px-2.5 py-1 text-muted hover:text-navy"
            }
            hrefLang={item.id === "pt" ? "pt-BR" : "en"}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
