import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  guideIntro,
  guideSections,
  guideFaqs,
} from "@/lib/diamond-guide";

export const metadata: Metadata = {
  title: "Diamond Guide",
  description:
    "The Corvalier diamond guide — laboratory-grown standards, the four Cs, and why stones are chosen in the private salon.",
};

export default function DiamondGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Diamond knowledge"
        title={guideIntro.title}
        intro={guideIntro.lead}
      />

      <section className="bg-ivory">
        <div className="maison-container py-20 md:py-28">
          <p className="mx-auto max-w-3xl text-center font-serif text-2xl leading-relaxed text-espresso/80 md:text-3xl">
            {guideIntro.subtitle}
          </p>
        </div>
      </section>

      {guideSections.map((section, idx) => (
        <section
          key={section.id}
          className={idx % 2 === 0 ? "bg-ivory-warm" : "bg-ivory"}
        >
          <div className="maison-container py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
              <Reveal>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-4 font-display text-3xl text-espresso md:text-4xl">
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6">
                  {section.body.map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="font-serif text-lg leading-relaxed text-espresso/75"
                    >
                      {para}
                    </p>
                  ))}
                  {section.points && (
                    <ul className="mt-4 space-y-3 border-t border-champagne/30 pt-8">
                      {section.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-3 font-serif text-lg text-espresso/70"
                        >
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-burgundy" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-champagne">Questions</p>
            <h2 className="mt-4 font-display text-4xl">Frequently discussed in the salon</h2>
          </Reveal>
          <dl className="mt-14 space-y-0">
            {guideFaqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 80}>
                <div className="border-t border-ivory/15 py-8">
                  <dt className="font-display text-2xl text-champagne-light">{faq.q}</dt>
                  <dd className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ivory/75">
                    {faq.a}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="maison-container py-24 text-center md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl text-espresso md:text-5xl">
              See three stones. Not three hundred.
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-serif text-xl leading-relaxed text-espresso/65">
              Your advisor prepares a maximum of three diamonds for each appointment
              — each chosen against your brief before you arrive.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Link href="/booking" className="btn-primary mt-12">
              Book a Private Viewing
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
