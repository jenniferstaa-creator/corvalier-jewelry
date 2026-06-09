"use client";

import type { Product } from "@/data/products";
import { ProductImage } from "@/components/product-image";
import { useDictionary } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

type ProductHeroProps = {
  product: Product;
  parentHref: string;
  parentLabel: string;
};

export function ProductHero({
  product,
  parentHref,
  parentLabel,
}: ProductHeroProps) {
  const dict = useDictionary();

  return (
    <section className="relative overflow-hidden bg-burgundy-deep text-ivory">
      <div className="relative min-h-[48vh] md:min-h-[56vh]">
        <div className="absolute inset-0">
          <ProductImage
            src={product.image}
            alt={product.name}
            priority
            className="h-full w-full object-cover opacity-90"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(58,15,21,0.88) 0%, rgba(58,15,21,0.45) 45%, rgba(14,11,9,0.25) 100%)",
          }}
        />
        <div className="grain pointer-events-none absolute inset-0" />

        <div className="maison-container relative flex h-full min-h-[48vh] flex-col justify-end pb-12 pt-32 md:min-h-[56vh] md:pb-16 md:pt-36">
          <nav className="mb-8 flex flex-wrap items-center gap-2 font-sans text-[0.62rem] uppercase tracking-wide2 text-ivory/50">
            <LocaleLink href={parentHref} className="transition-colors hover:text-champagne">
              {parentLabel}
            </LocaleLink>
            <span>/</span>
            <span className="text-ivory/80">{product.collection}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <p className="font-sans text-[0.62rem] uppercase tracking-wide2 text-champagne">
              {product.reference}
            </p>
            <span className="border border-champagne/40 px-3 py-1 font-sans text-[0.55rem] uppercase tracking-wide2 text-ivory/90">
              {dict.product.labBadge}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl font-serif text-xl italic leading-snug text-champagne-light md:text-2xl">
            {product.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
