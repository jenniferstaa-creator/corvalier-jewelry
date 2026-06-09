"use client";

import { Reveal } from "@/components/reveal";
import { useDictionary } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

const pathwayMeta = [
  { href: "/jewelry", eyebrow: "01", tone: ["#5A1A22", "#C9A66B"] },
  { href: "/high-jewelry", eyebrow: "02", tone: ["#4A141B", "#E2CD9F"] },
  { href: "/engagement", eyebrow: "03", tone: ["#3B2C24", "#A8854B"] },
  { href: "/bespoke", eyebrow: "04", tone: ["#2B201A", "#C9A66B"] },
] as const;

export function MaisonPathways() {
  const dict = useDictionary();

  return (
    <section className="bg-ivory">
      <div className="maison-container py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">{dict.home.pathways.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl text-espresso md:text-5xl">
            {dict.home.pathways.title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pathwayMeta.map((p, i) => {
            const item = dict.home.pathways.items[i];
            return (
              <Reveal key={p.href} delay={i * 90}>
                <LocaleLink href={p.href} className="group block">
                  <div
                    className="relative aspect-[5/4] overflow-hidden rounded-[2px] transition-transform duration-700 ease-silk group-hover:scale-[1.01]"
                    style={{
                      background: `linear-gradient(155deg, ${p.tone[0]}, ${p.tone[1]}33)`,
                    }}
                  >
                    <div className="grain pointer-events-none absolute inset-0" />
                    <div className="absolute inset-5 border border-ivory/15 transition-all duration-700 group-hover:inset-4" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="font-sans text-[0.58rem] tracking-maison text-ivory/50">
                        {p.eyebrow}
                      </span>
                      <h3 className="mt-3 font-display text-3xl text-ivory">{item.title}</h3>
                      <p className="mt-3 max-w-xs font-serif text-lg leading-snug text-ivory/70">
                        {item.desc}
                      </p>
                      <span className="mt-6 inline-block font-sans text-[0.6rem] uppercase tracking-wide2 text-champagne opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {dict.cta.enter} →
                      </span>
                    </div>
                  </div>
                </LocaleLink>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
