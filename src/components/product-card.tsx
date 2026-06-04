import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/jewelry/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-noir">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.06]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-4 border border-ivory/10 transition-all duration-700 group-hover:inset-3" />

        <span className="absolute left-5 top-5 font-sans text-[0.58rem] uppercase tracking-wide2 text-ivory/70">
          {product.reference}
        </span>

        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap border border-ivory/40 px-6 py-2.5 font-sans text-[0.6rem] uppercase tracking-wide2 text-ivory opacity-0 transition-all duration-700 ease-silk group-hover:translate-y-0 group-hover:opacity-100">
          View the piece
        </span>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">{product.collection}</p>
          <h3 className="mt-2 font-display text-2xl text-espresso transition-colors duration-500 group-hover:text-champagne-deep">
            {product.name}
          </h3>
        </div>
        <span className="shrink-0 font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/50">
          {product.category}
        </span>
      </div>
      <p className="mt-3 font-serif text-lg leading-snug text-espresso/60">
        {product.material} · {product.gemstone}
      </p>
      <p className="mt-2 font-sans text-[0.62rem] uppercase tracking-wide2 text-champagne-deep">
        {product.priceLabel}
      </p>
    </Link>
  );
}
