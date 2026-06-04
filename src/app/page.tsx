import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { MaisonPathways } from "@/components/maison-pathways";
import { TrustMaison } from "@/components/trust-maison";
import {
  labGrownProducts,
  productsBySegment,
  products,
} from "@/lib/products";

export default function HomePage() {
  const labGrown = labGrownProducts();
  const engagement = productsBySegment("engagement");
  const featuredJewelry = products.filter((p) => p.segment === "jewelry").slice(0, 2);

  return (
    <>
      {/* Hero — deep burgundy jewelry box */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-burgundy-deep text-ivory">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(140% 120% at 38% -10%, #6E232C 0%, #5A1A22 42%, #3A0F15 100%)",
          }}
        />
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full bg-champagne/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

        <div className="maison-container relative grid items-center gap-16 py-32 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-champagne">
                Private fine jewelry maison · Paris
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-display text-[3.2rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.2rem]">
                Laboratory-grown diamonds.
                <span className="block italic foil">Bespoke by appointment.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-9 max-w-md font-serif text-xl leading-relaxed text-ivory/70">
                Corvalier is not a store. It is a salon — where stones are chosen,
                settings are drawn, and each piece is made for one wearer alone.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link href="/jewelry" className="btn-burgundy-outline">
                  Jewelry Collection
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-3 bg-champagne px-9 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
                >
                  Book a Private Viewing
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2px] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.65)]">
              <Image
                src="/images/hero.svg"
                alt="Corvalier high jewelry"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-4 border border-ivory/15" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commercial pathways — structure reference, maison design */}
      <MaisonPathways />

      {/* Diamond collection — lab-grown focus */}
      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">Diamond collection</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-espresso md:text-5xl">
                Laboratory-grown diamonds, maison standards
              </h2>
              <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-espresso/65">
                VVS clarity and Excellent cut as standard. Each stone is chosen in
                the salon — never listed anonymously online.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/diamond-guide"
                className="link-underline font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
              >
                Diamond guide
              </Link>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
            {labGrown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement & wedding */}
      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-burgundy-deep">
              <Image
                src="/images/vesper.svg"
                alt="Wedding bands"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Engagement & wedding</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              Solitaires & bands for one couple
            </h2>
            <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
              Configure metal, stone, and engraving across private appointments.
              Wedding bands may be linked to engagement commissions for lifetime
              resizing in the atelier.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/engagement-wedding" className="btn-primary">
                Engagement & Wedding
              </Link>
              <Link href="/booking" className="btn-outline">
                Book a Viewing
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="maison-container border-t border-champagne/30 pb-24 pt-16">
          <div className="grid gap-12 sm:grid-cols-2">
            {engagement.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured jewelry */}
      <section className="bg-espresso text-ivory">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-champagne">High jewelry</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              From the salon floor
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {featuredJewelry.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              href="/jewelry"
              className="link-underline mt-12 inline-block font-sans text-[0.68rem] uppercase tracking-wide2 text-champagne"
            >
              View full jewelry collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Bespoke */}
      <section className="relative overflow-hidden bg-burgundy text-ivory">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="maison-container relative py-28 text-center md:py-36">
          <Reveal>
            <p className="eyebrow text-champagne">Bespoke</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              A custom design, drawn for you alone.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl leading-relaxed text-ivory/70">
              Bring a stone, a memory, or simply an intention. The atelier will
              gouache, model, and set a piece that exists nowhere else.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <Link
              href="/bespoke"
              className="mt-12 inline-flex items-center gap-3 bg-champagne px-9 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
            >
              The Bespoke Service
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Private showroom */}
      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <Reveal>
            <p className="eyebrow">Private showroom</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
              One client in the salon at a time.
            </h2>
            <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
              18 Rue de la Paix — by appointment in Paris, Genève, and New York.
              No walk-ins. No sales floor. An advisor, a loupe, and the time the
              stone deserves.
            </p>
            <Link href="/booking" className="btn-primary mt-10">
              Book a Private Viewing
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square overflow-hidden rounded-[2px] bg-burgundy-deep">
              <Image
                src="/images/atelier.svg"
                alt="Corvalier private salon"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <TrustMaison variant="burgundy" />

      {/* Final CTA */}
      <section className="bg-ivory-warm">
        <div className="maison-container py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow">An introduction</p>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              The maison receives by appointment only.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link href="/booking" className="btn-primary mt-10">
              Book a Private Viewing
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
