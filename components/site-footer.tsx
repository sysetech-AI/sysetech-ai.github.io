import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL, LEGAL_NAME } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-semibold text-navy">{LEGAL_NAME}</p>
          <p>
            © {year} {t("footer.rights")}
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a className="text-navy hover:text-teal-dark" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <Link href="/privacy" className="hover:text-navy">
            {t("nav.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
