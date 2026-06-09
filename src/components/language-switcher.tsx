"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { useLocale } from "@/i18n/i18n-provider";

const labels: Record<Locale, string> = {
  en: "EN",
  sv: "SV",
};

export function LanguageSwitcher({ inverted }: { inverted?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();

  const rest = pathname.replace(/^\/(en|sv)/, "") || "";

  return (
    <div
      className={`flex items-center gap-1 font-sans text-[0.58rem] uppercase tracking-wide2 ${
        inverted ? "text-ivory/70" : "text-espresso/50"
      }`}
      aria-label="Language"
    >
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          <Link
            href={`/${code}${rest}`}
            className={`px-1.5 py-1 transition-colors duration-500 ${
              locale === code
                ? inverted
                  ? "text-champagne"
                  : "text-burgundy"
                : inverted
                  ? "hover:text-ivory"
                  : "hover:text-burgundy"
            }`}
            aria-current={locale === code ? "page" : undefined}
          >
            {labels[code]}
          </Link>
        </span>
      ))}
    </div>
  );
}
