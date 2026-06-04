"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/jewelry", label: "Jewelry" },
  { href: "/engagement-wedding", label: "Engagement & Wedding" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/diamond-guide", label: "Diamond Guide" },
  { href: "/about", label: "The Maison" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHomeTop = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const logoClass = isHomeTop
    ? "text-ivory"
    : "text-burgundy";
  const linkClass = (active: boolean) =>
    isHomeTop
      ? active
        ? "text-champagne"
        : "text-ivory/75 hover:text-ivory"
      : active
        ? "text-burgundy"
        : "text-espresso/75 hover:text-burgundy";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk ${
        scrolled || !isHomeTop
          ? "bg-ivory/92 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,166,107,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="maison-container flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          className={`font-display text-xl tracking-[0.34em] transition-colors md:text-2xl ${logoClass}`}
          aria-label="Corvalier home"
        >
          CORVALIER
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline font-sans text-[0.65rem] uppercase tracking-wide2 transition-colors duration-500 ${linkClass(active)}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className={`border px-5 py-2.5 font-sans text-[0.65rem] uppercase tracking-wide2 transition-all duration-500 ease-silk ${
              isHomeTop
                ? "border-champagne/70 text-ivory hover:bg-burgundy hover:border-burgundy"
                : "border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-ivory"
            }`}
          >
            Private Viewing
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Toggle menu"
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

      <div
        className={`overflow-hidden bg-ivory/98 backdrop-blur-md transition-all duration-700 ease-silk lg:hidden ${
          open ? "max-h-[32rem] border-t border-champagne/20" : "max-h-0"
        }`}
      >
        <nav className="maison-container flex flex-col gap-1 py-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-champagne/10 py-4 font-display text-2xl text-burgundy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="mt-4 border border-burgundy py-4 text-center font-sans text-[0.68rem] uppercase tracking-wide2 text-burgundy"
          >
            Book a Private Viewing
          </Link>
        </nav>
      </div>
    </header>
  );
}
