import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export default function RedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
