import type { Product } from "@/data/products";
import { ShowcaseVideoCard } from "@/components/showcase-video-card";
import { Reveal } from "@/components/reveal";

type FeaturedProductFilmsProps = {
  products: Product[];
  eyebrow?: string;
  title?: string;
};

export function FeaturedProductFilms({
  products,
  eyebrow = "In motion",
  title = "Light, gesture, and quiet fire",
}: FeaturedProductFilmsProps) {
  return (
    <section className="bg-burgundy-deep py-20 md:py-28">
      <div className="maison-container">
        <Reveal>
          <p className="eyebrow text-champagne">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl text-champagne md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80}>
              <ShowcaseVideoCard src={product.video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
