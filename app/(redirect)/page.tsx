import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "SYSETECH",
  alternates: {
    canonical: `${SITE_URL}/pt/`,
  },
};

export default function ApexPage() {
  return (
    <main className="flex min-h-full items-center justify-center p-8">
      <script
        dangerouslySetInnerHTML={{
          __html: "location.replace('pt/');",
        }}
      />
      <p>
        <a className="font-semibold text-navy underline" href="pt/">
          Continuar para SYSETECH
        </a>
      </p>
    </main>
  );
}
