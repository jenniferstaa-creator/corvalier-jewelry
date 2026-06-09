import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductViewer } from "@/components/product-viewer";
import { ProductHero } from "@/components/product-hero";
import { ProductImage } from "@/components/product-image";
import { ProductVideo } from "@/components/product-video";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { TrustMaison } from "@/components/trust-maison";
import { getProduct, products } from "@/data/products";
import {
  localizeProduct,
  localizeProducts,
  getCategoryLabel,
} from "@/lib/localize-product";
import {
  parentRouteForTier,
  parentLabelForTier,
  tierLabel,
} from "@/lib/catalog";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { LocaleLink } from "@/i18n/locale-link";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);
  const data = getProduct(slug);
  if (!data) return { title: "Piece" };
  const localized = localizeProduct(data, dict);
  return { title: localized.name, description: localized.description };
}

export default async function JewelryProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  const rawProduct = getProduct(slug);
  if (!rawProduct) notFound();

  const data = localizeProduct(rawProduct, dict);
  const catalog = localizeProducts(products, dict);

  const related = catalog
    .filter((p) => p.slug !== data.slug && p.tier === data.tier)
    .slice(0, 3);

  const bookingHref = `/booking?piece=${encodeURIComponent(data.name)}`;
  const parentHref = parentRouteForTier(data.tier);
  const parentLabel = parentLabelForTier(data.tier, dict);
  const categoryLabel = getCategoryLabel(data, dict);
  const tierDisplay = tierLabel(data.tier, dict);

  return (
    <>
      <ProductHero
        product={data}
        parentHref={parentHref}
        parentLabel={parentLabel}
      />

      <section className="bg-ivory">
        <div className="maison-container py-16 md:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-champagne/30 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.25)]">
                <ProductImage
                  src={data.image}
                  alt={data.name}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">{dict.product.thePiece}</p>
              <h2 className="mt-4 font-display text-3xl text-espresso md:text-4xl">
                {data.name}
              </h2>
              <p className="mt-6 font-serif text-xl leading-relaxed text-espresso/75">
                {data.description}
              </p>
              <p className="mt-4 font-serif text-lg italic text-champagne-deep">
                {data.tagline}
              </p>
              <p className="mt-6 font-serif text-base leading-relaxed text-espresso/60">
                {dict.product.positioning}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container py-16 md:py-24">
          <div className="mb-10 border-b border-champagne/30 pb-8">
            <p className="eyebrow">{dict.product.inYourHands}</p>
            <h2 className="mt-3 font-display text-3xl text-espresso md:text-4xl">
              {dict.product.turnJewel}
            </h2>
            <p className="mt-4 max-w-xl font-serif text-lg text-espresso/65">
              {dict.product.viewerHint}
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ProductViewer
                src={data.model}
                alt={data.name}
                poster={data.image}
                tones={data.tones}
              />
            </div>

            <div className="lg:py-2">
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-champagne/30 bg-champagne/30 sm:grid-cols-2">
                <SpecCell label={dict.product.specs.material} value={data.material} />
                <SpecCell label={dict.product.specs.carat} value={data.carat} />
                <SpecCell label={dict.product.specs.gemstone} value={data.gemstone} wide />
                <SpecCell label={dict.product.specs.tier} value={tierDisplay} />
                <SpecCell label={dict.product.specs.category} value={categoryLabel} />
                {data.occasion && (
                  <SpecCell label={dict.product.specs.occasion} value={data.occasion} />
                )}
                <SpecCell label={dict.product.specs.collection} value={data.collection} />
                <SpecCell label={dict.product.specs.reference} value={data.reference} />
              </dl>

              <div className="mt-12">
                <p className="eyebrow">{dict.product.refinedInPrivate}</p>
                <p className="mt-4 font-serif text-lg leading-relaxed text-espresso/70">
                  {dict.product.refinedBody}
                </p>
                <ul className="mt-8 space-y-6">
                  {data.customization.map((opt) => (
                    <li key={opt.label} className="border-t border-champagne/25 pt-5">
                      <p className="font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/50">
                        {opt.label}
                      </p>
                      <p className="mt-2 font-serif text-lg text-espresso/80">
                        {opt.choices.join(" · ")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 border-t border-champagne/30 pt-8">
                <p className="font-serif text-xl italic text-espresso/80">
                  {dict.product.offeredBy}
                </p>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <LocaleLink href={bookingHref} className="btn-primary flex-1 text-center">
                    {dict.cta.requestAppointment}
                  </LocaleLink>
                  <LocaleLink href={bookingHref} className="btn-outline flex-1 text-center">
                    {dict.cta.discussPiece}
                  </LocaleLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep py-16 md:py-24">
        <div className="maison-container">
          <p className="eyebrow text-champagne">{dict.product.inMotion}</p>
          <h2 className="mt-3 font-display text-3xl text-champagne md:text-4xl">
            {dict.product.salonLight}
          </h2>
          <div className="mt-10 max-w-3xl">
            <ProductVideo src={data.video} />
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container grid gap-12 py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
          <Reveal>
            <p className="eyebrow text-champagne">{dict.product.theMaking}</p>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="font-serif text-2xl leading-relaxed text-ivory/85 md:text-3xl md:leading-[1.5]">
                {data.story}
              </p>
              <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {data.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 border-t border-ivory/15 pt-4 font-serif text-lg text-ivory/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container py-16 text-center md:py-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LocaleLink href={bookingHref} className="btn-primary min-w-[240px]">
              {dict.cta.requestAppointment}
            </LocaleLink>
            <LocaleLink href={bookingHref} className="btn-outline min-w-[240px]">
              {dict.cta.discussPiece}
            </LocaleLink>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ivory">
          <div className="maison-container py-24 md:py-32">
            <h2 className="font-display text-3xl text-espresso md:text-4xl">
              {dict.product.furtherPieces}
            </h2>
            <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustMaison variant="ivory" showVoices={false} />
    </>
  );
}

function SpecCell({
  label,
  value,
  wide,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={`bg-ivory px-6 py-5 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="font-sans text-[0.58rem] uppercase tracking-wide2 text-espresso/40">
        {label}
      </dt>
      <dd className="mt-1.5 font-serif text-lg text-espresso">{value}</dd>
    </div>
  );
}
