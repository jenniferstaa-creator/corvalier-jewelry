import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { TrustMaison } from "@/components/trust-maison";
import { Reveal } from "@/components/reveal";
import { productsBySegment } from "@/lib/products";

export const metadata: Metadata = {
  title: "Engagement & Wedding",
  description:
    "Corvalier engagement rings and wedding bands — laboratory-grown diamonds, platinum and champagne gold, configured in the private salon.",
};

export default function EngagementWeddingPage() {
  const engagement = productsBySegment("engagement");
  const wedding = productsBySegment("wedding");

  return (
    <>
      <PageHero
        eyebrow="Engagement & Wedding"
        title={
          <>
            Vows in platinum
            <br />
            and quiet fire.
          </>
        }
        intro="Solitaires and bands conceived for one couple — stones chosen in the salon, settings drawn by hand. Laboratory-grown diamonds as our standard; mined stones by bespoke request."
      />

      {/* lab-grown positioning — structure ref, not Sisi design */}
      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-burgundy-deep">
              <Image
                src="/images/aurore.svg"
                alt="Aurore solitaire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Laboratory-grown diamonds</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              The same crystal. A clearer origin.
            </h2>
            <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
              Our engagement collection defaults to laboratory-grown diamonds of
              VVS clarity and Excellent cut — selected under the salon loupe, not
              from an online grid. The experience is slower and more exacting than
              a retail counter, and deliberately so.
            </p>
            <Link
              href="/diamond-guide"
              className="link-underline mt-8 inline-block font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
            >
              Read the diamond guide
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Engagement rings</p>
            <h2 className="mt-4 font-display text-4xl text-espresso">Solitaires</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-2xl">
            {engagement.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Wedding bands</p>
            <h2 className="mt-4 font-display text-4xl text-espresso">
              Eternity & commitment bands
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-2xl">
            {wedding.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-champagne/30 bg-ivory-warm">
        <div className="maison-container grid gap-10 py-16 md:grid-cols-3">
          {[
            {
              t: "Configure in salon",
              d: "Metal, stone, carat, and engraving — decided across one or two unhurried appointments.",
            },
            {
              t: "Bespoke settings",
              d: "The Aurore gallery can be redrawn for your stone. Lead time quoted at approval.",
            },
            {
              t: "Wedding pairs",
              d: "Engagement and band commissions can be linked in the archive for lifetime care.",
            },
          ].map((x) => (
            <div key={x.t} className="border-t border-champagne/40 pt-6">
              <h3 className="font-display text-2xl text-burgundy">{x.t}</h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-espresso/65">
                {x.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-24 text-center md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              Begin with a private viewing — together or apart.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 bg-champagne px-9 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
              >
                Book a Private Viewing
              </Link>
              <Link href="/bespoke" className="btn-burgundy-outline">
                Bespoke Commission
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustMaison variant="ivory" />
    </>
  );
}
