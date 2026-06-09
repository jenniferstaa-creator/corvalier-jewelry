import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { JewelryShowcaseVideos } from "@/components/jewelry-showcase-videos";
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
    title: dict.showcase.metaTitle,
    description: dict.showcase.metaDescription,
  };
}

export default async function ShowcasePage({
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
        eyebrow={dict.showcase.heroEyebrow}
        title={
          <>
            {dict.showcase.heroTitle}
            <br />
            <span className="italic foil">{dict.showcase.heroTitleItalic}</span>
          </>
        }
        intro={dict.showcase.heroIntro}
      />

      <JewelryShowcaseVideos />

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container py-20 text-center md:py-28">
          <Reveal>
            <p className="eyebrow text-champagne">{dict.showcase.ctaEyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl md:text-4xl">
              {dict.showcase.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <LocaleLink
              href="/booking"
              className="mt-10 inline-flex items-center gap-3 bg-champagne px-9 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
            >
              {dict.cta.requestAppointment}
            </LocaleLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
