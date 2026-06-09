"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useDictionary, useLocale } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

export function SiteHeader() {
  const dict = useDictionary();
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const homePath = `/${locale}`;
  const isHomeTop =
    (pathname === homePath || pathname === `${homePath}/`) && !scrolled;

  const NAV = [
    { href: "/jewelry", label: dict.nav.jewelry },
    { href: "/high-jewelry", label: dict.nav.highJewelry },
    { href: "/engagement", label: dict.nav.engagement },
    { href: "/bespoke", label: dict.nav.bespoke },
    { href: "/diamond-guide", label: dict.nav.diamondGuide },
    { href: "/about", label: dict.nav.maison },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const logoClass = isHomeTop ? "foil" : "text-burgundy";
  const linkClass = (active: boolean) =>
    isHomeTop
      ? active
        ? "text-champagne"
        : "text-ivory/75 hover:text-ivory"
      : active
        ? "text-burgundy"
        : "text-espresso/75 hover:text-burgundy";

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk ${
        isHomeTop && !scrolled
          ? "bg-gradient-to-b from-burgundy-deep/80 via-burgundy-deep/40 to-transparent"
          : scrolled || !isHomeTop
            ? "bg-ivory/92 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,166,107,0.3)]"
            : "bg-transparent"
      }`}
    >
      <div className="maison-container flex h-20 items-center justify-between md:h-24">
        <LocaleLink
          href="/"
          className={`font-display text-xl tracking-[0.34em] transition-colors md:text-2xl ${logoClass}`}
          aria-label={dict.nav.homeAria}
        >
          CORDELLIER
        </LocaleLink>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {NAV.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              className={`link-underline font-sans text-[0.62rem] uppercase tracking-wide2 transition-colors duration-500 ${linkClass(isActive(item.href))}`}
            >
              {item.label}
            </LocaleLink>
          ))}
          <LanguageSwitcher inverted={isHomeTop && !scrolled} />
          <LocaleLink
            href="/booking"
            className={`border px-4 py-2.5 font-sans text-[0.6rem] uppercase tracking-wide2 transition-all duration-500 ease-silk ${
              isHomeTop
                ? "border-champagne/70 text-ivory hover:bg-burgundy hover:border-burgundy"
                : "border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-ivory"
            }`}
          >
            {dict.nav.bookPrivateViewing}
          </LocaleLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher inverted={isHomeTop && !scrolled} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            aria-label={dict.nav.toggleMenu}
            aria-expanded={open}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-px w-6 transition-all duration-500 ${
                  isHomeTop && !scrolled ? "bg-ivory" : "bg-burgundy"
                } ${
                  i === 0 && open ? "translate-y-[6px] rotate-45" : ""
                } ${i === 1 && open ? "opacity-0" : ""} ${
                  i === 2 && open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-ivory/98 backdrop-blur-md transition-all duration-700 ease-silk lg:hidden ${
          open ? "max-h-[36rem] border-t border-champagne/20" : "max-h-0"
        }`}
      >
        <nav className="maison-container flex flex-col gap-1 py-6">
          {NAV.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              className="border-b border-champagne/10 py-4 font-display text-2xl text-burgundy"
            >
              {item.label}
            </LocaleLink>
          ))}
          <LocaleLink
            href="/booking"
            className="mt-4 border border-burgundy py-4 text-center font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
          >
            {dict.nav.bookPrivateViewing}
          </LocaleLink>
        </nav>
      </div>
    </header>
  );
}
