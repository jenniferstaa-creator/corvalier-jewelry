import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "The Maison",
  description:
    "The story of Corvalier — a private fine jewelry maison founded on rare stones, the hand of the atelier, and the conviction that the finest jewels are never sold from a window.",
};

const figures = [
  { value: "1100+", label: "Hours in a high-jewelry commission" },
  { value: "1 of 1", label: "Most pieces are unique" },
  { value: "By appt.", label: "The salon is private, always" },
  { value: "Paris", label: "Atelier, Rue de la Paix" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Maison"
        title={
          <>
            Quiet luxury,
            <br />
            kept behind a door.
          </>
        }
        intro="Corvalier is a small maison by design — devoted to rare stones, the hand of its atelier, and a way of working that the great houses have nearly forgotten."
      />

      {/* manifesto */}
      <section className="bg-ivory">
        <div className="maison-container py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
            <Reveal>
              <div className="max-w-2xl space-y-7 font-serif text-xl leading-relaxed text-espresso/75">
                <p className="text-2xl leading-relaxed text-espresso md:text-[1.7rem] md:leading-relaxed">
                  We founded Corvalier on a single, almost old-fashioned belief:
                  that the finest jewels are never sold from a window.
                </p>
                <p>
                  The maison takes its name from the corvalier — the keeper of a
                  noble house&apos;s treasures, trusted with what was rare and
                  not to be displayed. We kept the name because it describes
                  exactly what we do. We are custodians of stones before we are
                  jewellers, and of our clients&apos; confidence before all else.
                </p>
                <p>
                  Everything is made by hand in our Paris atelier, a few streets
                  from where the trade has gathered for two centuries. We do not
                  produce collections to a calendar. We make pieces when the
                  right stone and the right intention meet — and rarely more than
                  a few of any one design.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-noir">
                <Image
                  src="/images/atelier.svg"
                  alt="The Corvalier atelier in Paris"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 font-sans text-[0.58rem] uppercase tracking-wide2 text-ivory/80">
                  The atelier · Paris
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* figures */}
      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-20">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {figures.map((f, i) => (
              <Reveal key={f.label} delay={i * 90}>
                <div className="text-center">
                  <p className="font-display text-4xl text-champagne md:text-5xl">
                    {f.value}
                  </p>
                  <p className="mx-auto mt-3 max-w-[12rem] font-sans text-[0.6rem] uppercase tracking-wide2 text-ivory/60">
                    {f.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">What we hold to</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              The principles of the house
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-champagne/30 bg-champagne/30 md:grid-cols-3">
            {[
              {
                t: "The stone first",
                d: "We design around the gem, never the reverse. A piece exists to let one extraordinary stone be itself.",
              },
              {
                t: "The hand, not the machine",
                d: "Piercing, setting, polishing — done by people whose names we know, at a bench, with time.",
              },
              {
                t: "Discretion as a value",
                d: "What is made here, and for whom, stays between the maison and its client. Privacy is part of the luxury.",
              },
            ].map((v) => (
              <div key={v.t} className="bg-ivory p-9">
                <h3 className="font-display text-2xl text-champagne-deep">{v.t}</h3>
                <p className="mt-4 font-serif text-lg leading-relaxed text-espresso/65">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso text-ivory">
        <div className="maison-container flex flex-col items-center gap-8 py-24 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-champagne">An introduction</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
              We would be glad to receive you in the salon.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/booking" className="btn-outline border-champagne/50 text-ivory hover:bg-champagne/10">
              Book a Private Viewing
            </Link>
            <Link href="/jewelry" className="link-underline self-center font-sans text-[0.7rem] uppercase tracking-wide2 text-champagne">
              Explore the jewelry collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
