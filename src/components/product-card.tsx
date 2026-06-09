"use client";

import type { Product } from "@/data/products";
import { ProductImage } from "@/components/product-image";
import { useDictionary } from "@/i18n/i18n-provider";
import { getCategoryLabel } from "@/lib/localize-product";
import { LocaleLink } from "@/i18n/locale-link";

export function ProductCard({ product }: { product: Product }) {
  const dict = useDictionary();
  const categoryLabel = getCategoryLabel(product, dict);

  return (
    <LocaleLink href={`/jewelry/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-burgundy-deep">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 font-sans text-[0.58rem] uppercase tracking-wide2 text-ivory/70">
          {product.reference}
        </span>
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap border border-ivory/40 px-6 py-2.5 font-sans text-[0.6rem] uppercase tracking-wide2 text-ivory opacity-0 transition-all duration-700 ease-silk group-hover:translate-y-0 group-hover:opacity-100">
          {dict.product.viewPiece}
        </span>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">{product.collection}</p>
          <h3 className="mt-2 font-display text-2xl text-espresso transition-colors duration-500 group-hover:text-burgundy">
            {product.name}
          </h3>
        </div>
        <span className="shrink-0 font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/50">
          {categoryLabel}
        </span>
      </div>
      <p className="mt-3 font-serif text-lg leading-snug text-espresso/60">
        {product.material} · {product.gemstone}
      </p>
      <p className="mt-2 font-sans text-[0.62rem] uppercase tracking-wide2 text-champagne-deep">
        {dict.product.byAppointment}
      </p>
    </LocaleLink>
  );
}
