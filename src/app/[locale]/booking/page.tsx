import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";
import { maisonContact } from "@/lib/maison";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.booking.metaTitle,
    description: dict.booking.metaDescription,
  };
}

export default async function BookingPage({
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
        eyebrow={dict.booking.heroEyebrow}
        title={
          <>
            {dict.booking.heroTitle}
            <br />
            <span className="italic foil">{dict.booking.heroTitleItalic}</span>
          </>
        }
        intro={dict.booking.heroIntro}
      />

      <section className="bg-ivory">
        <div className="maison-container py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow">{dict.booking.expectEyebrow}</p>
                <div className="mt-8 space-y-8">
                  {dict.booking.expect.map((x) => (
                    <div key={x.t} className="border-t border-champagne/30 pt-6">
                      <h3 className="font-display text-2xl text-espresso">{x.t}</h3>
                      <p className="mt-3 font-serif text-lg leading-relaxed text-espresso/65">
                        {x.d}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 border-t border-champagne/30 pt-6">
                  <p className="eyebrow">{dict.booking.salonEyebrow}</p>
                  <address className="mt-4 space-y-1 font-serif text-lg not-italic leading-relaxed text-espresso/70">
                    <span className="block">{maisonContact.address.line1}</span>
                    <span className="block">{maisonContact.address.line2}</span>
                    <span className="mt-2 block text-espresso/55">
                      {maisonContact.cities} · {dict.brand.appointmentOnly}
                    </span>
                  </address>
                  <a
                    href={`mailto:${maisonContact.email}`}
                    className="link-underline mt-5 inline-block font-serif text-xl text-burgundy"
                  >
                    {maisonContact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Suspense fallback={<div className="h-96" />}>
                <BookingForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
