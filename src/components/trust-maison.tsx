import { trustItems, clientVoices } from "@/lib/trust";
import { Reveal } from "@/components/reveal";

type TrustMaisonProps = {
  showVoices?: boolean;
  variant?: "ivory" | "burgundy";
};

export function TrustMaison({
  showVoices = true,
  variant = "ivory",
}: TrustMaisonProps) {
  const dark = variant === "burgundy";

  return (
    <section className={dark ? "bg-burgundy-deep text-ivory" : "bg-ivory-warm text-espresso"}>
      <div className="maison-container py-24 md:py-32">
        <Reveal>
          <p className={`eyebrow ${dark ? "text-champagne" : ""}`}>Maison assurances</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Trust earned in the salon, not at checkout.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-champagne/25 bg-champagne/20 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className={`flex h-full flex-col p-8 ${dark ? "bg-burgundy-soft/40" : "bg-ivory"}`}>
                <h3 className="font-display text-2xl text-champagne-deep">{item.title}</h3>
                <p className="mt-3 font-sans text-[0.65rem] uppercase tracking-wide2 opacity-60">
                  {item.summary}
                </p>
                <p className="mt-5 flex-1 font-serif text-lg leading-relaxed opacity-75">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
          {showVoices && (
            <Reveal delay={240}>
              <div className={`flex h-full flex-col p-8 ${dark ? "bg-burgundy-soft/40" : "bg-ivory"}`}>
                <h3 className="font-display text-2xl text-champagne-deep">
                  {trustItems[3].title}
                </h3>
                <p className="mt-3 font-sans text-[0.65rem] uppercase tracking-wide2 opacity-60">
                  {trustItems[3].summary}
                </p>
                <p className="mt-5 font-serif text-lg leading-relaxed opacity-75">
                  {trustItems[3].detail}
                </p>
              </div>
            </Reveal>
          )}
        </div>

        {showVoices && (
          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {clientVoices.map((v, i) => (
              <Reveal key={v.attribution} delay={i * 100}>
                <blockquote className="border-t border-champagne/40 pt-8">
                  <p className="font-serif text-xl leading-relaxed italic opacity-85">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <footer className="mt-6 font-sans text-[0.62rem] uppercase tracking-wide2 text-champagne-deep">
                    {v.attribution} · {v.city}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
