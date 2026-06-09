import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductFilterGrid } from "@/components/product-filter-grid";
import { TrustMaison } from "@/components/trust-maison";
import { FeaturedProductFilms } from "@/components/featured-product-films";
import { Reveal } from "@/components/reveal";
import { productsByTier } from "@/lib/products";
import { localizeCollections, localizedJewelryCategories } from "@/lib/localize-collections";
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
    title: dict.jewelry.metaTitle,
    description: dict.jewelry.metaDescription,
  };
}

export default async function JewelryCollectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  const jewelryOnly = localizeProducts(productsByTier("Jewelry"), dict);
  const houses = localizeCollections(dict);

  return (
    <>
      <PageHero
        eyebrow={dict.jewelry.heroEyebrow}
        title={
          <>
            {dict.jewelry.heroTitle}
            <br />
            <span className="italic foil">{dict.jewelry.heroTitleItalic}</span>
          </>
        }
        intro={dict.jewelry.heroIntro}
      />

      <section className="bg-ivory">
        <div className="maison-container py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">{dict.jewelry.housesEyebrow}</p>
            <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-espresso/65">
              {dict.jewelry.housesBody}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {houses.map((c) => (
              <div
                key={c.slug}
                className="border border-champagne/30 bg-ivory-warm p-6 transition-colors duration-500 hover:border-champagne"
              >
                <h3 className="font-display text-2xl text-burgundy">{c.name}</h3>
                <p className="mt-2 font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
                  {c.subtitle}
                </p>
                <p className="mt-4 font-serif text-base leading-relaxed text-espresso/65">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container pb-24 md:pb-32">
          <Reveal>
            <p className="eyebrow">{dict.jewelry.floorEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl text-espresso md:text-4xl">
              {dict.jewelry.floorTitle}
            </h2>
            <p className="mt-4 max-w-xl font-serif text-lg text-espresso/65">
              {dict.jewelry.floorBody}
            </p>
          </Reveal>
          <div className="mt-12">
            <ProductFilterGrid
              items={jewelryOnly}
              filters={localizedJewelryCategories(dict)}
            />
          </div>
        </div>
      </section>

      <FeaturedProductFilms
        products={jewelryOnly}
        eyebrow={dict.home.films.eyebrow}
        title={dict.jewelry.filmsTitle}
      />

      <section className="bg-burgundy text-ivory">
        <div className="maison-container flex flex-col items-center gap-8 py-20 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-champagne">{dict.jewelry.ctaEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              {dict.jewelry.ctaTitle}
            </h2>
          </div>
          <LocaleLink href="/booking" className="btn-burgundy-outline shrink-0">
            {dict.nav.bookPrivateViewing}
          </LocaleLink>
        </div>
      </section>

      <TrustMaison />
    </>
  );
}
