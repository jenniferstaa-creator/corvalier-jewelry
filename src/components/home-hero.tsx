"use client";

import { Reveal } from "@/components/reveal";
import { heroVideo } from "@/data/videos";
import { useDictionary } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

export function HomeHero() {
  const dict = useDictionary();

  return (
    <section
      data-nav-surface="dark"
      className="relative min-h-screen overflow-hidden bg-burgundy-deep text-ivory"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(58,15,21,0.82) 0%, rgba(58,15,21,0.45) 40%, rgba(14,11,9,0.88) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 50% 45%, rgba(90,26,34,0.25) 0%, rgba(58,15,21,0.75) 70%, rgba(14,11,9,0.95) 100%)",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-burgundy-deep to-transparent" />

      <div className="maison-container relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:pt-36">
        <Reveal>
          <p className="eyebrow text-champagne-light/90">{dict.home.hero.eyebrow}</p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-[2.8rem] leading-none tracking-[0.38em] foil sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            CORDELLIER
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        </Reveal>

        <Reveal delay={280}>
          <p className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-snug text-ivory/90 md:text-3xl">
            {dict.brand.tagline}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-champagne-light md:text-2xl">
            {dict.brand.ethos}
          </p>
        </Reveal>

        <Reveal delay={440}>
          <p className="mx-auto mt-6 max-w-lg font-serif text-lg leading-relaxed text-ivory/60">
            {dict.home.hero.body}
          </p>
        </Reveal>

        <Reveal delay={520}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <LocaleLink href="/jewelry" className="btn-burgundy-outline min-w-[240px]">
              {dict.cta.exploreCollection}
            </LocaleLink>
            <LocaleLink href="/booking" className="btn-champagne min-w-[240px]">
              {dict.cta.requestAppointment}
            </LocaleLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
