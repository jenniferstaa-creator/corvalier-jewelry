import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section
      data-nav-surface="dark"
      className="relative overflow-hidden bg-burgundy-deep pt-40 text-ivory md:pt-48"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 130% at 50% -20%, #6E232C 0%, #5A1A22 42%, #3A0F15 100%)",
        }}
      />
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-[40vh] w-[40vh] rounded-full bg-champagne/10 blur-[120px]" />
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <div className="maison-container relative pb-24 md:pb-32">
        <Reveal>
          <p className="eyebrow text-champagne">{eyebrow}</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={220}>
            <p className="mt-9 max-w-xl font-serif text-xl leading-relaxed text-ivory/70">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
