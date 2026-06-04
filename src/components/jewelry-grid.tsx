"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

type JewelryGridProps = {
  items: Product[];
  categories: readonly string[];
  showLabBadge?: boolean;
};

export function JewelryGrid({
  items,
  categories,
  showLabBadge = false,
}: JewelryGridProps) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((p) => p.category.includes(active));
  }, [items, active]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-5 py-2.5 font-sans text-[0.65rem] uppercase tracking-wide2 transition-all duration-500 ease-silk ${
              active === cat
                ? "border-burgundy bg-burgundy text-ivory"
                : "border-champagne/50 text-espresso/70 hover:border-champagne hover:bg-champagne/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {showLabBadge && (
        <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-espresso/65">
          Pieces marked with a laboratory-grown diamond are selected stone-by-stone
          in the salon.{" "}
          <a href="/diamond-guide" className="text-burgundy underline decoration-champagne underline-offset-4">
            Read the diamond guide
          </a>
          .
        </p>
      )}

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <Reveal key={product.slug} delay={i * 80}>
            <div className="relative">
              {showLabBadge && product.labGrown && (
                <span className="absolute right-0 top-0 z-10 -translate-y-3 border border-champagne/50 bg-ivory px-3 py-1 font-sans text-[0.55rem] uppercase tracking-wide2 text-burgundy">
                  Lab-grown diamond
                </span>
              )}
              <ProductCard product={product} />
            </div>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 font-serif text-xl text-espresso/50">
          No pieces in this category are currently presented in the salon.
        </p>
      )}
    </>
  );
}
