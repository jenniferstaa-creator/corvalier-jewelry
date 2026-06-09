"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  type NavbarTheme,
  useNavbarTheme,
} from "@/components/navbar-theme";
import { useDictionary, useLocale } from "@/i18n/i18n-provider";
import { LocaleLink } from "@/i18n/locale-link";

const SCROLL_THRESHOLD = 80;
const NAV_HEIGHT = 96;

function isOverDarkHero(): boolean {
  const sections = document.querySelectorAll<HTMLElement>(
    '[data-nav-surface="dark"]'
  );
  return Array.from(sections).some((el) => {
    const { top, bottom } = el.getBoundingClientRect();
    return top < NAV_HEIGHT && bottom > 0;
  });
}

const DARK_HERO_START_PATHS = new Set([
  "/",
  "/about",
  "/jewelry",
  "/high-jewelry",
  "/engagement",
  "/bespoke",
  "/diamond-guide",
  "/showcase",
  "/booking",
]);

function pathWithoutLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|sv)/, "") || "/";
  if (stripped === "" || stripped === "/") return "/";
  return stripped.replace(/\/$/, "");
}

function defaultThemeForPath(pathname: string): NavbarTheme {
  const path = pathWithoutLocale(pathname);
  if (path === "/" || path.startsWith("/jewelry/")) return "dark";
  return DARK_HERO_START_PATHS.has(path) ? "dark" : "light";
}

export type SiteHeaderProps = {
  /** "dark" = light nav text over hero; "light" = burgundy text from the top. */
  initialTheme?: NavbarTheme;
};

export function SiteHeader({ initialTheme }: SiteHeaderProps = {}) {
  const dict = useDictionary();
  const locale = useLocale();
  const pathname = usePathname();
  const { theme: themeOverride } = useNavbarTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [overDarkHero, setOverDarkHero] = useState(() =>
    defaultThemeForPath(pathname) === "dark"
  );
  const [open, setOpen] = useState(false);

  const theme =
    themeOverride ?? initialTheme ?? defaultThemeForPath(pathname);

  // Transparent + light text only at the top over a dark hero — not throughout the page.
  const showTransparentNav =
    theme === "dark" && !isScrolled && overDarkHero;
  const useLightNav = showTransparentNav;
  const showSolidBg = !showTransparentNav;

  const NAV = [
    { href: "/jewelry", label: dict.nav.jewelry },
    { href: "/high-jewelry", label: dict.nav.highJewelry },
    { href: "/engagement", label: dict.nav.engagement },
    { href: "/bespoke", label: dict.nav.bespoke },
    { href: "/diamond-guide", label: dict.nav.diamondGuide },
    { href: "/about", label: dict.nav.maison },
  ];

  useEffect(() => {
    let raf = 0;

    const update = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      setOverDarkHero(isOverDarkHero());
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const t = window.setTimeout(update, 50);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setIsScrolled(false);
    setOverDarkHero(defaultThemeForPath(pathname) === "dark");
    setOpen(false);
  }, [pathname]);

  const logoClass = useLightNav ? "text-[#F7EFE3]" : "text-[#5A1620]";
  const linkClass = (active: boolean) =>
    useLightNav
      ? active
        ? "text-[#D8B56D]"
        : "text-[#F7EFE3] hover:text-[#D8B56D]"
      : active
        ? "text-[#5A1620]"
        : "text-[#5A1620]/80 hover:text-[#5A1620]";

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk ${
        showTransparentNav
          ? "bg-gradient-to-b from-burgundy-deep/80 via-burgundy-deep/40 to-transparent"
          : "border-b border-champagne/25 backdrop-blur-md"
      }`}
      style={
        showSolidBg
          ? { backgroundColor: "rgba(250, 246, 238, 0.88)" }
          : undefined
      }
    >
      <div className="maison-container flex h-20 items-center justify-between md:h-24">
        <LocaleLink
          href="/"
          className={`font-display text-xl tracking-[0.34em] transition-colors duration-500 md:text-2xl ${logoClass}`}
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
          <LanguageSwitcher inverted={useLightNav} />
          <LocaleLink
            href="/booking"
            className={`border px-4 py-2.5 font-sans text-[0.6rem] uppercase tracking-wide2 transition-all duration-500 ease-silk ${
              useLightNav
                ? "border-[#D8B56D] text-[#F7EFE3] hover:bg-burgundy/90 hover:border-[#F7EFE3]"
                : "border-[#5A1620]/40 text-[#5A1620] hover:border-[#5A1620] hover:bg-[#5A1620] hover:text-[#F7EFE3]"
            }`}
          >
            {dict.nav.bookPrivateViewing}
          </LocaleLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher inverted={useLightNav} />
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
                  useLightNav ? "bg-[#F7EFE3]" : "bg-[#5A1620]"
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
        className={`overflow-hidden border-t border-champagne/20 backdrop-blur-md transition-all duration-700 ease-silk lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
        style={{ backgroundColor: "rgba(250, 246, 238, 0.98)" }}
      >
        <nav className="maison-container flex flex-col gap-1 py-6">
          {NAV.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              className="border-b border-champagne/10 py-4 font-display text-2xl text-[#5A1620]"
            >
              {item.label}
            </LocaleLink>
          ))}
          <LocaleLink
            href="/booking"
            className="mt-4 border border-[#5A1620]/40 py-4 text-center font-sans text-[0.68rem] uppercase tracking-wide2 text-[#5A1620]"
          >
            {dict.nav.bookPrivateViewing}
          </LocaleLink>
        </nav>
      </div>
    </header>
  );
}

/** Alias for SiteHeader — scroll-adaptive luxury navbar. */
export const Navbar = SiteHeader;
