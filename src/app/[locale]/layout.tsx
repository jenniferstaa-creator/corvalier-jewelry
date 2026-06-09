import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavbarThemeProvider } from "@/components/navbar-theme";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { I18nProvider } from "@/i18n/i18n-provider";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.meta.defaultTitle,
      template: dict.meta.template,
    },
    description: dict.meta.defaultDescription,
    keywords: [
      "Swedish fine jewelry",
      "lab-grown diamonds",
      "certified diamonds",
      "conscious fine jewelry",
      "bespoke jewelry",
      "Cordellier",
    ],
    openGraph: {
      siteName: dict.meta.siteName,
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      type: "website",
      locale: locale === "sv" ? "sv_SE" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <I18nProvider locale={locale} dict={dict}>
      <NavbarThemeProvider>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </NavbarThemeProvider>
    </I18nProvider>
  );
}
