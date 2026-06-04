import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Book a Private Viewing",
  description:
    "Request a private appointment at a Corvalier salon in Paris, Genève or New York. By appointment only — discreet, unhurried, and entirely yours.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="By Appointment"
        title={
          <>
            Book a
            <br />
            private viewing.
          </>
        }
        intro="The salon receives a single client at a time. Tell us a little, and an advisor will arrange an unhurried, entirely private appointment."
      />

      <section className="bg-ivory">
        <div className="maison-container py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* aside */}
            <Reveal>
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow">What to expect</p>
                <div className="mt-8 space-y-8">
                  {[
                    {
                      t: "Entirely private",
                      d: "You will be the only client in the salon. There is no showroom, no traffic, no rush.",
                    },
                    {
                      t: "An advisor, not a salesperson",
                      d: "You are received by someone who knows the pieces and the stones, and who is there to guide, not to sell.",
                    },
                    {
                      t: "Refreshment & time",
                      d: "Appointments are unhurried. Stay as long as the conversation requires.",
                    },
                  ].map((x) => (
                    <div key={x.t} className="border-t border-champagne/30 pt-6">
                      <h3 className="font-display text-2xl text-espresso">
                        {x.t}
                      </h3>
                      <p className="mt-3 font-serif text-lg leading-relaxed text-espresso/65">
                        {x.d}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 border-t border-champagne/30 pt-6">
                  <p className="eyebrow">Direct line</p>
                  <a
                    href="mailto:salon@corvalier.example"
                    className="mt-3 block font-serif text-xl text-champagne-deep underline decoration-champagne underline-offset-4"
                  >
                    salon@corvalier.example
                  </a>
                  <p className="mt-2 font-serif text-lg text-espresso/60">
                    +33 1 00 00 00 00
                  </p>
                </div>
              </div>
            </Reveal>

            {/* form */}
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
