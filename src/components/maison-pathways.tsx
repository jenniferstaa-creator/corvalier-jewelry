import Link from "next/link";
import { Reveal } from "@/components/reveal";

const pathways = [
  {
    href: "/jewelry",
    eyebrow: "01",
    title: "Jewelry Collection",
    desc: "Necklaces, earrings, cuffs, and high jewelry — presented by appointment.",
    tone: ["#5A1A22", "#C9A66B"],
  },
  {
    href: "/engagement-wedding",
    eyebrow: "02",
    title: "Engagement & Wedding",
    desc: "Solitaires and bands in laboratory-grown diamond and platinum.",
    tone: ["#4A141B", "#E2CD9F"],
  },
  {
    href: "/bespoke",
    eyebrow: "03",
    title: "Bespoke",
    desc: "A stone, a memory, an intention — drawn and set for one wearer.",
    tone: ["#3B2C24", "#A8854B"],
  },
  {
    href: "/diamond-guide",
    eyebrow: "04",
    title: "Diamond Guide",
    desc: "The maison standard for cut, clarity, and laboratory-grown stones.",
    tone: ["#2B201A", "#C9A66B"],
  },
];

export function MaisonPathways() {
  return (
    <section className="bg-ivory">
      <div className="maison-container py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Enter the maison</p>
          <h2 className="mt-4 font-display text-4xl text-espresso md:text-5xl">
            Four doors, one private salon
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pathways.map((p, i) => (
            <Reveal key={p.href} delay={i * 90}>
              <Link href={p.href} className="group block">
                <div
                  className="relative aspect-[5/4] overflow-hidden rounded-[2px] transition-transform duration-700 ease-silk group-hover:scale-[1.01]"
                  style={{
                    background: `linear-gradient(155deg, ${p.tone[0]}, ${p.tone[1]}33)`,
                  }}
                >
                  <div className="grain pointer-events-none absolute inset-0" />
                  <div className="absolute inset-5 border border-ivory/15 transition-all duration-700 group-hover:inset-4" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="font-sans text-[0.58rem] tracking-maison text-ivory/50">
                      {p.eyebrow}
                    </span>
                    <h3 className="mt-3 font-display text-3xl text-ivory">{p.title}</h3>
                    <p className="mt-3 max-w-xs font-serif text-lg leading-snug text-ivory/70">
                      {p.desc}
                    </p>
                    <span className="mt-6 inline-block font-sans text-[0.6rem] uppercase tracking-wide2 text-champagne opacity-0 transition-all duration-500 group-hover:opacity-100">
                      Enter →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
