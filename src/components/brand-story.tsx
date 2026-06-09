"use client";

import { Reveal } from "@/components/reveal";
import { ProductImage } from "@/components/product-image";
import { useDictionary } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

export function BrandStory() {
  const dict = useDictionary();

  return (
    <section className="bg-ivory">
      <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow">{dict.home.brandStory.eyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              {dict.home.brandStory.title}
              <span className="block italic text-burgundy">
                {dict.home.brandStory.titleItalic}
              </span>
            </h2>
            <p className="mt-8 font-serif text-xl leading-relaxed text-espresso/75">
              {dict.home.brandStory.p1}
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-espresso/65">
              {dict.home.brandStory.p2}
            </p>
            <LocaleLink
              href="/about"
              className="link-underline mt-10 inline-block font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
            >
              {dict.cta.ourStory}
            </LocaleLink>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-champagne/20 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.35)]">
            <ProductImage
              src="/images/atelier.svg"
              alt={dict.home.brandStory.imageAlt}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
