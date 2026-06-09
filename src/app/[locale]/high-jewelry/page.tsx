import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductFilterGrid } from "@/components/product-filter-grid";
import { FeaturedProductFilms } from "@/components/featured-product-films";
import { Reveal } from "@/components/reveal";
import { productsByTier } from "@/lib/products";
import { highJewelryFilterOptions } from "@/lib/catalog";
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
    title: dict.highJewelry.metaTitle,
    description: dict.highJewelry.metaDescription,
  };
}

export default async function HighJewelryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  const pieces = localizeProducts(productsByTier("High Jewelry"), dict);

  return (
    <>
      <PageHero
        eyebrow={dict.highJewelry.heroEyebrow}
        title={
          <>
            {dict.highJewelry.heroTitle}
            <br />
            <span className="italic foil">{dict.highJewelry.heroTitleItalic}</span>
          </>
        }
        intro={dict.highJewelry.heroIntro}
      />

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-champagne">{dict.highJewelry.salonEyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              {dict.highJewelry.salonTitle}
            </h2>
            <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-ivory/65">
              {dict.highJewelry.salonBody}
            </p>
          </Reveal>

          <div className="mt-16">
            <ProductFilterGrid
              items={pieces}
              filters={highJewelryFilterOptions(dict)}
              variant="salon"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">{dict.highJewelry.privateEyebrow}</p>
            <p className="mt-4 max-w-2xl font-serif text-2xl leading-relaxed text-espresso/80">
              {dict.highJewelry.privateBody}
            </p>
          </Reveal>
        </div>
      </section>

      <FeaturedProductFilms
        products={pieces}
        eyebrow={dict.home.films.eyebrow}
        title={dict.highJewelry.filmsTitle}
      />

      <section className="relative overflow-hidden bg-noir text-ivory">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="maison-container relative py-28 text-center md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              {dict.highJewelry.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-serif text-xl leading-relaxed text-ivory/65">
              {dict.highJewelry.ctaBody}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <LocaleLink href="/booking" className="btn-champagne mt-12">
              {dict.nav.bookPrivateViewing}
            </LocaleLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
