import { HomeHero } from "@/components/home-hero";
import { BrandStory } from "@/components/brand-story";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { FeaturedProductFilms } from "@/components/featured-product-films";
import { MaisonPathways } from "@/components/maison-pathways";
import { TrustMaison } from "@/components/trust-maison";
import { Reveal } from "@/components/reveal";
import { labGrownProducts, productsByTier, products } from "@/lib/products";
import { localizeProducts } from "@/lib/localize-product";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { LocaleLink } from "@/i18n/locale-link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  const catalog = localizeProducts(products, dict);
  const labGrown = localizeProducts(labGrownProducts(), dict);
  const engagement = localizeProducts(productsByTier("Engagement"), dict);
  const featuredJewelry = localizeProducts(productsByTier("Jewelry"), dict);
  const featuredHighJewelry = localizeProducts(productsByTier("High Jewelry"), dict);

  return (
    <>
      <HomeHero />
      <BrandStory />
      <MaisonPathways />

      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">{dict.home.collection.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              {dict.home.collection.title}
              <span className="block italic text-burgundy">
                {dict.home.collection.titleItalic}
              </span>
            </h2>
            <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-espresso/65">
              {dict.home.collection.body}
            </p>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {featuredJewelry.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <LocaleLink
              href="/jewelry"
              className="link-underline mt-12 inline-block font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
            >
              {dict.cta.viewJewelryCollection}
            </LocaleLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="maison-container py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">{dict.home.labGrown.eyebrow}</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-espresso md:text-5xl">
                {dict.home.labGrown.title}
                <span className="block italic text-burgundy">
                  {dict.home.labGrown.titleItalic}
                </span>
              </h2>
              <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-espresso/65">
                {dict.home.labGrown.body}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <LocaleLink
                href="/diamond-guide"
                className="link-underline font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
              >
                {dict.cta.diamondGuide}
              </LocaleLink>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {labGrown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-champagne/20 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.35)]">
              <ProductImage
                src={engagement[0]?.image ?? "/images/aurore.svg"}
                alt={engagement[0]?.name ?? dict.home.engagement.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{dict.home.engagement.eyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              {dict.home.engagement.title}
            </h2>
            <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
              {dict.home.engagement.body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LocaleLink href="/engagement" className="btn-primary">
                {dict.nav.engagement}
              </LocaleLink>
              <LocaleLink href="/booking" className="btn-outline">
                {dict.cta.requestAppointment}
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-champagne">{dict.home.highJewelry.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {dict.home.highJewelry.title}
            </h2>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-ivory/65">
              {dict.home.highJewelry.body}
            </p>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {featuredHighJewelry.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <LocaleLink
              href="/high-jewelry"
              className="link-underline mt-12 inline-block font-sans text-[0.68rem] uppercase tracking-wide2 text-champagne"
            >
              {dict.nav.highJewelry}
            </LocaleLink>
          </Reveal>
        </div>
      </section>

      <FeaturedProductFilms
        products={catalog.slice(0, 3)}
        eyebrow={dict.home.films.eyebrow}
        title={dict.home.films.title}
      />

      <section className="relative overflow-hidden bg-burgundy text-ivory">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="maison-container relative py-28 text-center md:py-36">
          <Reveal>
            <p className="eyebrow text-champagne">{dict.home.bespoke.eyebrow}</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              {dict.home.bespoke.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl leading-relaxed text-ivory/70">
              {dict.home.bespoke.body}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <LocaleLink href="/bespoke" className="btn-champagne mt-12">
              {dict.cta.bespokeService}
            </LocaleLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <Reveal>
            <p className="eyebrow">{dict.home.salon.eyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              {dict.home.salon.title}
            </h2>
            <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
              {dict.home.salon.body}
            </p>
            <LocaleLink href="/booking" className="btn-primary mt-10">
              {dict.cta.requestAppointment}
            </LocaleLink>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square overflow-hidden rounded-[2px] border border-champagne/20 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.3)]">
              <ProductImage
                src="/images/hero.svg"
                alt={dict.home.salon.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
            </div>
          </Reveal>
        </div>
      </section>

      <TrustMaison variant="burgundy" />

      <section className="relative overflow-hidden bg-ivory-warm">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
        <div className="maison-container py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow">{dict.home.intro.eyebrow}</p>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              {dict.home.intro.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LocaleLink href="/jewelry" className="btn-primary min-w-[240px]">
                {dict.cta.exploreCollection}
              </LocaleLink>
              <LocaleLink href="/booking" className="btn-outline min-w-[240px]">
                {dict.cta.requestAppointment}
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
