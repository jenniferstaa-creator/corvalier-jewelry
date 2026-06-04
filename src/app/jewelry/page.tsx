import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { JewelryGrid } from "@/components/jewelry-grid";
import { TrustMaison } from "@/components/trust-maison";
import { Reveal } from "@/components/reveal";
import { collections, products, jewelryCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Jewelry Collection",
  description:
    "The Corvalier jewelry collection — necklaces, earrings, bracelets, and high jewelry. Laboratory-grown diamonds and rare gemstones, by private appointment.",
};

const jewelryOnly = products.filter((p) => p.segment === "jewelry");

export default function JewelryCollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Jewelry Collection"
        title={
          <>
            High jewelry,
            <br />
            <span className="italic foil">without a window.</span>
          </>
        }
        intro="Necklaces, earrings, cuffs, and ceremonial pieces — each shown in the salon before it is ever offered. No cart. No catalogue rush."
      />

      {/* collection houses — editorial, not shop categories */}
      <section className="bg-ivory">
        <div className="maison-container py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">The four houses</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {collections.map((c) => (
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
            <h2 className="font-display text-3xl text-espresso md:text-4xl">
              Pieces in the salon
            </h2>
          </Reveal>
          <div className="mt-12">
            <JewelryGrid
              items={jewelryOnly}
              categories={jewelryCategories}
              showLabBadge={false}
            />
          </div>
        </div>
      </section>

      <section className="bg-burgundy text-ivory">
        <div className="maison-container flex flex-col items-center gap-8 py-20 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-champagne">Private salon</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              See the collection by appointment
            </h2>
          </div>
          <Link href="/booking" className="btn-burgundy-outline shrink-0">
            Book a Private Viewing
          </Link>
        </div>
      </section>

      <TrustMaison />
    </>
  );
}
