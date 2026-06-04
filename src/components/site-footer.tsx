import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-px overflow-hidden bg-burgundy-deep text-ivory/80">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="maison-container relative py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.28em] text-ivory">
              CORVALIER
            </p>
            <p className="mt-6 max-w-xs font-serif text-lg leading-relaxed text-ivory/60">
              A private maison of laboratory-grown diamonds, bespoke commissions,
              and high jewelry — by appointment only.
            </p>
          </div>

          <FooterCol
            title="Collections"
            links={[
              { href: "/jewelry", label: "Jewelry" },
              { href: "/engagement-wedding", label: "Engagement & Wedding" },
              { href: "/diamond-guide", label: "Diamond Guide" },
            ]}
          />
          <FooterCol
            title="Maison"
            links={[
              { href: "/about", label: "Our Story" },
              { href: "/bespoke", label: "Bespoke" },
              { href: "/booking", label: "Private Viewing" },
            ]}
          />
          <div>
            <p className="eyebrow text-champagne">Salon</p>
            <address className="mt-5 space-y-1 font-serif text-lg not-italic leading-relaxed text-ivory/60">
              <span className="block">18 Rue de la Paix</span>
              <span className="block">75002 Paris</span>
              <span className="mt-3 block">By appointment only</span>
              <a
                href="mailto:salon@corvalier.example"
                className="mt-3 block text-ivory/80 transition-colors hover:text-champagne"
              >
                salon@corvalier.example
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-[0.62rem] uppercase tracking-wide2 text-ivory/40 md:flex-row">
          <span>© {new Date().getFullYear()} Corvalier Maison. All rights reserved.</span>
          <span className="flex flex-wrap justify-center gap-6">
            <span>Insured delivery</span>
            <span>Lifetime resizing</span>
            <span>Paris · Genève · New York</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="eyebrow text-champagne">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="font-serif text-lg text-ivory/60 transition-colors duration-500 hover:text-champagne"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
