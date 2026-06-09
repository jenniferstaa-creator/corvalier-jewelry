import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductImage } from "@/components/product-image";
import { ProductFilterGrid } from "@/components/product-filter-grid";
import { TrustMaison } from "@/components/trust-maison";
import { Reveal } from "@/components/reveal";
import { productsByTier } from "@/lib/products";
import { engagementFilterOptions } from "@/lib/catalog";
import { localizeProducts } from "@/lib/localize-product";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { LocaleLink } from "@/i18n/locale-link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.engagement.metaTitle,
    description: dict.engagement.metaDescription,
  };
}

export default async function EngagementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  const engagementPieces = localizeProducts(
    productsByTier("Engagement"),
    dict
  );

  return (
    <>
      <PageHero
        eyebrow={dict.engagement.heroEyebrow}
        title={
          <>
            {dict.engagement.heroTitle}
            <br />
            <span className="italic foil">{dict.engagement.heroTitleItalic}</span>
          </>
        }
        intro={dict.engagement.heroIntro}
      />

      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-champagne/20 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.35)]">
              <ProductImage
                src={engagementPieces[0]?.image ?? "/images/aurore.svg"}
                alt={engagementPieces[0]?.name ?? dict.engagement.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{dict.engagement.labEyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              {dict.engagement.labTitle}
            </h2>
            <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
              {dict.engagement.labP1}
            </p>
            <p className="mt-5 font-serif text-lg leading-relaxed text-espresso/70">
              {dict.engagement.labP2}
            </p>
            <LocaleLink
              href="/diamond-guide"
              className="link-underline mt-8 inline-block font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
            >
              {dict.cta.diamondGuide}
            </LocaleLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container pb-24 md:pb-32">
          <Reveal>
            <p className="eyebrow">{dict.engagement.filterEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl text-espresso md:text-4xl">
              {dict.engagement.filterTitle}
            </h2>
          </Reveal>
          <div className="mt-12">
            <ProductFilterGrid
              items={engagementPieces}
              filters={engagementFilterOptions(dict)}
              showLabBadge
              consultationCopy={{
                title: dict.engagement.consultationTitle,
                body: dict.engagement.consultationBody,
                cta: dict.nav.bookPrivateViewing,
              }}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-champagne/30 bg-ivory">
        <div className="maison-container grid gap-10 py-16 md:grid-cols-3">
          {dict.engagement.pillars.map((x) => (
            <div key={x.t} className="border-t border-champagne/40 pt-6">
              <h3 className="font-display text-2xl text-burgundy">{x.t}</h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-espresso/65">
                {x.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-24 text-center md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              {dict.engagement.closingTitle}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LocaleLink href="/booking" className="btn-champagne">
                {dict.nav.bookPrivateViewing}
              </LocaleLink>
              <LocaleLink href="/bespoke" className="btn-burgundy-outline">
                {dict.cta.bespokeCommission}
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustMaison variant="ivory" />
    </>
  );
}
