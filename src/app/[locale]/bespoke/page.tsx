import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { LocaleLink } from "@/i18n/locale-link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.bespoke.metaTitle,
    description: dict.bespoke.metaDescription,
  };
}

export default async function BespokePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  const stepNumbers = ["I", "II", "III", "IV", "V"];

  return (
    <>
      <PageHero
        eyebrow={dict.bespoke.heroEyebrow}
        title={
          <>
            {dict.bespoke.heroTitle}
            <br />
            <span className="italic foil">{dict.bespoke.heroTitleItalic}</span>
          </>
        }
        intro={dict.bespoke.heroIntro}
      />

      <section className="bg-ivory">
        <div className="maison-container grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-champagne/20 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.35)]">
              <ProductImage
                src="/images/aurore.svg"
                alt={dict.bespoke.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="eyebrow">{dict.bespoke.storyEyebrow}</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-espresso md:text-5xl">
                {dict.bespoke.storyTitle}
              </h2>
              <p className="mt-7 font-serif text-lg leading-relaxed text-espresso/70">
                {dict.bespoke.storyP1}
              </p>
              <p className="mt-5 font-serif text-lg leading-relaxed text-espresso/70">
                {dict.bespoke.storyP2}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">{dict.bespoke.journeyEyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              {dict.bespoke.journeyTitle}
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px overflow-hidden border-y border-champagne/30">
            {dict.bespoke.steps.map((step, i) => (
              <Reveal key={stepNumbers[i]} delay={i * 80}>
                <div className="group grid items-baseline gap-6 border-b border-champagne/20 py-10 last:border-0 md:grid-cols-[auto_0.6fr_1.4fr] md:gap-12">
                  <span className="font-display text-3xl text-champagne-deep transition-colors duration-500 group-hover:text-espresso">
                    {stepNumbers[i]}
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

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-24 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            {dict.bespoke.assurances.map((a, i) => (
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

      <section className="relative overflow-hidden bg-noir text-ivory">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="maison-container relative py-28 text-center md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              {dict.bespoke.closingTitle}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <LocaleLink href="/booking" className="btn-champagne mt-12">
              {dict.cta.requestAppointment}
            </LocaleLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
