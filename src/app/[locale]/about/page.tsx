import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";
import { maisonContact } from "@/lib/maison";
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
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.about.heroEyebrow}
        title={
          <>
            {dict.about.heroTitle}
            <br />
            <span className="italic foil">{dict.about.heroTitleItalic}</span>
          </>
        }
        intro={dict.about.heroIntro}
      />

      <section className="bg-ivory">
        <div className="maison-container py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
            <Reveal>
              <div className="max-w-2xl space-y-7 font-serif text-xl leading-relaxed text-espresso/75">
                {dict.about.story.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-2xl leading-relaxed text-espresso md:text-[1.7rem] md:leading-relaxed"
                        : undefined
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-champagne/20 bg-burgundy-deep shadow-[0_32px_80px_-24px_rgba(58,15,21,0.25)]">
                <ProductImage
                  src="/images/atelier.svg"
                  alt={dict.about.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-5 border border-champagne/15" />
                <div className="absolute bottom-5 left-5 font-sans text-[0.58rem] uppercase tracking-wide2 text-ivory/80">
                  {dict.about.imageCaption}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-20">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {dict.about.figures.map((f, i) => (
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

      <section className="bg-ivory-warm">
        <div className="maison-container py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">{dict.about.valuesEyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-espresso md:text-5xl">
              {dict.about.valuesTitle}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-champagne/30 bg-champagne/30 md:grid-cols-3">
            {dict.about.values.map((v) => (
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

      <section className="bg-espresso text-ivory">
        <div className="maison-container flex flex-col items-center gap-8 py-24 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-champagne">{dict.about.visitEyebrow}</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
              {dict.about.visitTitle.replace("{city}", maisonContact.address.line2)}
            </h2>
            <p className="mt-4 max-w-md font-serif text-lg text-ivory/65">
              {dict.about.visitBody
                .replace("{cities}", maisonContact.cities)
                .replace("{tagline}", dict.brand.appointmentOnly)}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <LocaleLink
              href="/booking"
              className="btn-outline border-champagne/50 text-ivory hover:bg-champagne/10"
            >
              {dict.cta.requestAppointment}
            </LocaleLink>
            <LocaleLink
              href="/jewelry"
              className="link-underline self-center font-sans text-[0.7rem] uppercase tracking-wide2 text-champagne"
            >
              {dict.cta.exploreCollectionLower}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
