import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductViewer } from "@/components/product-viewer";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { TrustMaison } from "@/components/trust-maison";
import { getProduct, products } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getProduct(slug);
  if (!data) return { title: "Piece" };
  return {
    title: data.name,
    description: data.description,
  };
}

export default async function JewelryProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = getProduct(slug);
  if (!data) notFound();

  const related = products
    .filter((p) => p.slug !== data.slug && p.segment === data.segment)
    .slice(0, 3);
  const bookingHref = `/booking?piece=${encodeURIComponent(data.name)}`;
  const parentHref =
    data.segment === "engagement" || data.segment === "wedding"
      ? "/engagement-wedding"
      : "/jewelry";
  const parentLabel =
    data.segment === "engagement"
      ? "Engagement"
      : data.segment === "wedding"
        ? "Wedding Bands"
        : "Jewelry Collection";

  return (
    <>
      <div className="bg-ivory pt-28 md:pt-32">
        <div className="maison-container">
          <nav className="flex flex-wrap items-center gap-2 font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/40">
            <Link href={parentHref} className="transition-colors hover:text-burgundy">
              {parentLabel}
            </Link>
            <span>/</span>
            <span className="text-espresso/70">{data.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-ivory">
        <div className="maison-container py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ProductViewer
                src={data.modelUrl}
                alt={data.name}
                poster={data.poster ?? data.image}
                tones={data.tones}
              />
            </div>

            <div className="lg:py-4">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-sans text-[0.62rem] uppercase tracking-wide2 text-champagne-deep">
                  {data.collection} · {data.reference}
                </p>
                {data.labGrown && (
                  <span className="border border-champagne/50 px-3 py-1 font-sans text-[0.55rem] uppercase tracking-wide2 text-burgundy">
                    Laboratory-grown diamond
                  </span>
                )}
              </div>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] text-espresso md:text-6xl">
                {data.name}
              </h1>
              <p className="mt-6 font-serif text-2xl italic leading-snug text-burgundy">
                {data.tagline}
              </p>
              <p className="mt-7 max-w-md font-serif text-lg leading-relaxed text-espresso/70">
                {data.description}
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-champagne/30 bg-champagne/30 sm:grid-cols-2">
                <SpecCell label="Material" value={data.material} />
                <SpecCell label="Carat" value={data.carat} />
                <SpecCell label="Gemstone" value={data.gemstone} wide />
                <SpecCell label="Category" value={data.category} />
                <SpecCell label="Reference" value={data.reference} />
              </dl>

              <div className="mt-12">
                <p className="eyebrow">Configure in the salon</p>
                <div className="mt-6 space-y-8">
                  {data.customization.map((opt) => (
                    <div key={opt.label}>
                      <p className="font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/50">
                        {opt.label}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {opt.choices.map((choice, i) => (
                          <span
                            key={choice}
                            className={`cursor-default border px-5 py-2.5 font-sans text-[0.66rem] uppercase tracking-wide2 transition-all duration-500 ease-silk ${
                              i === 0
                                ? "border-burgundy bg-burgundy text-ivory"
                                : "border-champagne/50 text-espresso/70 hover:border-champagne hover:bg-champagne/10"
                            }`}
                          >
                            {choice}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-champagne/30 pt-8">
                <p className="font-serif text-xl text-espresso">{data.priceLabel}</p>
                <p className="mt-1 font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/40">
                  Quoted to the stone chosen in your private viewing
                </p>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <Link href={bookingHref} className="btn-primary flex-1 text-center">
                    Request Details
                  </Link>
                  <Link href={bookingHref} className="btn-outline flex-1 text-center">
                    Book a Private Viewing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep text-ivory">
        <div className="maison-container grid gap-12 py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
          <Reveal>
            <p className="eyebrow text-champagne">The making</p>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="font-serif text-2xl leading-relaxed text-ivory/85 md:text-3xl md:leading-[1.5]">
                {data.story}
              </p>
              <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {data.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 border-t border-ivory/15 pt-4 font-serif text-lg text-ivory/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ivory-warm">
          <div className="maison-container py-24 md:py-32">
            <h2 className="font-display text-3xl text-espresso md:text-4xl">
              Further pieces to consider
            </h2>
            <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustMaison variant="ivory" showVoices={false} />
    </>
  );
}

function SpecCell({
  label,
  value,
  wide,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={`bg-ivory px-6 py-5 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="font-sans text-[0.58rem] uppercase tracking-wide2 text-espresso/40">
        {label}
      </dt>
      <dd className="mt-1.5 font-serif text-lg text-espresso">{value}</dd>
    </div>
  );
}
