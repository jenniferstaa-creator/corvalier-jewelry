import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Bespoke",
  description:
    "The Corvalier bespoke service — a private commission journey from first conversation to finished jewel, drawn and set by hand in our Paris atelier.",
};

const steps = [
  {
    n: "I",
    title: "The conversation",
    body: "We begin in the salon, in confidence. You bring an intention — a celebration, an inheritance, a stone. We listen, and the piece begins to take shape in words before a single line is drawn.",
  },
  {
    n: "II",
    title: "The stone",
    body: "Our gemmologists present a private selection sourced for your commission. Each stone is examined under the loupe together with you, until the right one is chosen.",
  },
  {
    n: "III",
    title: "The drawing",
    body: "The atelier renders your piece in gouache, the traditional way, then in a precise 3D model you may turn in your hand and refine until it is exactly right.",
  },
  {
    n: "IV",
    title: "The hand",
    body: "Our setters and goldsmiths bring the model to metal — pierced, polished, and set entirely by hand over the weeks the piece requires. Nothing is rushed.",
  },
  {
    n: "V",
    title: "The delivery",
    body: "Your finished jewel is presented in the salon within its Corvalier case, accompanied by its certificate, its gouache, and a record kept in the maison archive.",
  },
];

export default function BespokePage() {
  return (
    <>
      <PageHero
        eyebrow="The Bespoke Service"
        title={
          <>
            A piece that exists
            <br />
            nowhere else.
          </>
        }
        intro="The truest expression of the maison is the commission — a jewel conceived for one person, drawn and set entirely by hand."
      />

      {/* intro split */}
      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-noir">
              <Image
                src="/images/aurore.svg"
                alt="A bespoke solitaire in progress"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Haute joaillerie, à la commande</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
                Between you and the atelier, nothing is standard.
              </h2>
              <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
                A Corvalier commission is a collaboration measured in months, not
                minutes. From the choice of a single stone to the final hand
                polish, you are present at every threshold — and the finished
                piece carries that intimacy for the rest of its life.
              </p>
              <p className="mt-5 font-serif text-lg leading-relaxed text-espresso/70">
                Commissions typically unfold over six to twelve months, and
                begin at a level befitting the rarity of the stones involved.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">The commission journey</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              Five thresholds, one finished jewel
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px overflow-hidden border-y border-champagne/30">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="group grid items-baseline gap-6 border-b border-champagne/20 py-10 last:border-0 md:grid-cols-[auto_0.6fr_1.4fr] md:gap-12">
                  <span className="font-display text-3xl text-champagne-deep transition-colors duration-500 group-hover:text-espresso">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl text-espresso md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="max-w-xl font-serif text-lg leading-relaxed text-espresso/65">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* assurances */}
      <section className="bg-espresso text-ivory">
        <div className="maison-container py-24 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                t: "Sourced with conscience",
                d: "Every stone arrives with full provenance. We work only with houses that share our standards of origin and care.",
              },
              {
                t: "Kept in the archive",
                d: "Each commission is recorded in the maison archive — its gouache, its certificate, and the hands that made it.",
              },
              {
                t: "Cared for, always",
                d: "A Corvalier piece returns to us for life: cleaning, resizing, and restoration are part of owning one.",
              },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 100}>
                <div className="border-t border-ivory/15 pt-7">
                  <h3 className="font-display text-2xl text-ivory">{a.t}</h3>
                  <p className="mt-4 font-serif text-lg leading-relaxed text-ivory/65">
                    {a.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-noir text-ivory">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="maison-container relative py-28 text-center md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Begin your commission with a private conversation.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/booking"
              className="mt-12 inline-flex items-center gap-3 bg-champagne px-10 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
            >
              Book a Private Viewing
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
