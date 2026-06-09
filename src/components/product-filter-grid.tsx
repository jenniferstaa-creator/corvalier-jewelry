"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import type { FilterOption } from "@/lib/catalog";
import { matchesCategoryFilter } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { useDictionary } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

type ProductFilterGridProps = {
  items: Product[];
  filters: FilterOption[];
  showLabBadge?: boolean;
  variant?: "default" | "salon";
  consultationFilter?: string;
  consultationCopy?: {
    title: string;
    body: string;
    cta: string;
  };
};

export function ProductFilterGrid({
  items,
  filters,
  showLabBadge = false,
  variant = "default",
  consultationFilter = "bridal-consultation",
  consultationCopy,
}: ProductFilterGridProps) {
  const dict = useDictionary();
  const [active, setActive] = useState(filters[0]?.slug ?? "all");

  const filtered = useMemo(() => {
    if (active === consultationFilter) return [];
    return items.filter((p) => matchesCategoryFilter(p, active));
  }, [items, active, consultationFilter]);

  const isSalon = variant === "salon";
  const showConsultation =
    active === consultationFilter && consultationCopy !== undefined;

  return (
    <>
      <div
        className={
          isSalon
            ? "flex flex-wrap gap-x-8 gap-y-3 border-b border-ivory/15 pb-8"
            : "flex flex-wrap gap-3"
        }
      >
        {filters.map((f) => (
          <button
            key={f.slug}
            type="button"
            onClick={() => setActive(f.slug)}
            className={
              isSalon
                ? `font-sans text-[0.62rem] uppercase tracking-wide2 transition-colors duration-500 ${
                    active === f.slug
                      ? "text-champagne"
                      : "text-ivory/45 hover:text-ivory/75"
                  }`
                : `border px-5 py-2.5 font-sans text-[0.65rem] uppercase tracking-wide2 transition-all duration-500 ease-silk ${
                    active === f.slug
                      ? "border-burgundy bg-burgundy text-ivory"
                      : "border-champagne/50 text-espresso/70 hover:border-champagne hover:bg-champagne/10"
                  }`
            }
          >
            {f.label}
            {isSalon && active === f.slug && (
              <span className="ml-2 inline-block h-px w-6 bg-champagne align-middle" />
            )}
          </button>
        ))}
      </div>

      {showLabBadge && !isSalon && (
        <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-espresso/65">
          {dict.jewelryGrid.labNote}{" "}
          <LocaleLink
            href="/diamond-guide"
            className="text-burgundy underline decoration-champagne underline-offset-4"
          >
            {dict.jewelryGrid.labLink}
          </LocaleLink>
          .
        </p>
      )}

      {showConsultation ? (
        <div className="mt-20 max-w-xl border-t border-champagne/30 pt-12">
          <p className="eyebrow">{consultationCopy.title}</p>
          <p className="mt-6 font-serif text-xl leading-relaxed text-espresso/75">
            {consultationCopy.body}
          </p>
          <LocaleLink href="/booking" className="btn-primary mt-10">
            {consultationCopy.cta}
          </LocaleLink>
        </div>
      ) : (
        <div
          className={
            isSalon
              ? "mt-16 space-y-24"
              : "mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80}>
              {isSalon ? (
                <div className="grid items-center gap-12 border-t border-ivory/10 pt-16 lg:grid-cols-[0.9fr_1.1fr]">
                  <ProductCard product={product} />
                  <div className="hidden lg:block">
                    <p className="font-serif text-xl italic leading-relaxed text-ivory/60">
                      {product.tagline}
                    </p>
                    <p className="mt-6 font-sans text-[0.58rem] uppercase tracking-wide2 text-champagne/70">
                      {dict.product.byAppointment}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {showLabBadge && product.labGrown && (
                    <span className="absolute right-0 top-0 z-10 -translate-y-3 border border-champagne/50 bg-ivory px-3 py-1 font-sans text-[0.55rem] uppercase tracking-wide2 text-burgundy">
                      {dict.jewelryGrid.labBadge}
                    </span>
                  )}
                  <ProductCard product={product} />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      )}

      {!showConsultation && filtered.length === 0 && (
        <p
          className={`mt-16 font-serif text-xl ${
            isSalon ? "text-ivory/50" : "text-espresso/50"
          }`}
        >
          {dict.jewelryGrid.empty}
        </p>
      )}
    </>
  );
}
