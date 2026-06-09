"use client";

import { LocaleLink } from "@/i18n/locale-link";
import { useDictionary } from "@/i18n/i18n-provider";

export default function NotFound() {
  const dict = useDictionary();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-burgundy-deep text-ivory">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 120% at 50% -10%, #6E232C 0%, #5A1A22 45%, #3A0F15 100%)",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="maison-container relative text-center">
        <p className="eyebrow text-champagne">{dict.notFound.title}</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl">
          <span className="foil">404</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-relaxed text-ivory/70">
          {dict.notFound.body}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LocaleLink
            href="/"
            className="inline-flex items-center gap-3 bg-champagne px-9 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
          >
            {dict.notFound.home}
          </LocaleLink>
          <LocaleLink
            href="/jewelry"
            className="btn-outline border-ivory/40 text-ivory hover:bg-ivory/10"
          >
            {dict.nav.jewelry}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
