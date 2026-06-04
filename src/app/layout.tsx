import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ModelViewerLoader } from "@/components/model-viewer-loader";

export const metadata: Metadata = {
  metadataBase: new URL("https://corvalier.example"),
  title: {
    default: "CORVALIER — Maison de Haute Joaillerie",
    template: "%s · CORVALIER",
  },
  description:
    "CORVALIER is a private fine jewelry maison. Laboratory-grown diamonds, engagement rings, bespoke commissions — by appointment in our Paris salon.",
  keywords: [
    "fine jewelry",
    "haute joaillerie",
    "bespoke jewelry",
    "private salon",
    "Corvalier",
  ],
  openGraph: {
    title: "CORVALIER — Maison de Haute Joaillerie",
    description:
      "A private fine jewelry maison. Bespoke high jewelry and rare gemstones, by appointment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ModelViewerLoader />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
