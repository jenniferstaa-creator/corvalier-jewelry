"use client";

import { maisonContact } from "@/lib/maison";
import { useDictionary } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

export function SiteFooter() {
  const dict = useDictionary();

  return (
    <footer className="relative mt-px overflow-hidden bg-burgundy-deep text-ivory/80">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="maison-container relative py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.28em] foil">CORDELLIER</p>
            <p className="mt-6 max-w-xs font-serif text-lg leading-relaxed text-ivory/60">
              {dict.footer.tagline}
            </p>
          </div>

          <FooterCol
            title={dict.footer.collections}
            links={[
              { href: "/jewelry", label: dict.footer.jewelry },
              { href: "/high-jewelry", label: dict.nav.highJewelry },
              { href: "/engagement", label: dict.nav.engagement },
              { href: "/diamond-guide", label: dict.footer.diamondGuide },
              { href: "/showcase", label: dict.footer.salonFilms },
            ]}
          />
          <FooterCol
            title={dict.footer.maison}
            links={[
              { href: "/about", label: dict.footer.ourStory },
              { href: "/bespoke", label: dict.footer.bespoke },
              { href: "/booking", label: dict.footer.privateViewing },
            ]}
          />
          <div>
            <p className="eyebrow text-champagne">{dict.footer.salon}</p>
            <address className="mt-5 space-y-1 font-serif text-lg not-italic leading-relaxed text-ivory/60">
              <span className="block">{maisonContact.address.line1}</span>
              <span className="block">{maisonContact.address.line2}</span>
              <span className="mt-3 block">{dict.brand.appointmentOnly}</span>
              <a
                href={`mailto:${maisonContact.email}`}
                className="mt-3 block text-ivory/80 transition-colors hover:text-champagne"
              >
                {maisonContact.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-[0.62rem] uppercase tracking-wide2 text-ivory/40 md:flex-row">
          <span>
            © {new Date().getFullYear()} {dict.footer.copyright}
          </span>
          <span className="flex flex-wrap justify-center gap-6">
            <span>{dict.footer.insuredDelivery}</span>
            <span>{dict.footer.lifetimeCare}</span>
            <span>{maisonContact.cities}</span>
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
          <li key={l.href}>
            <LocaleLink
              href={l.href}
              className="font-serif text-lg text-ivory/60 transition-colors duration-500 hover:text-champagne"
            >
              {l.label}
            </LocaleLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
