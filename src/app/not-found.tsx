import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-burgundy-deep text-ivory">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 120% at 50% -10%, #6E232C 0%, #5A1A22 45%, #3A0F15 100%)",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="maison-container relative text-center">
        <p className="eyebrow text-champagne">Page not found</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl">
          <span className="foil">404</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-relaxed text-ivory/70">
          This door does not open. Let us show you back to the salon.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-champagne px-9 py-4 font-sans text-[0.72rem] uppercase tracking-wide2 text-espresso transition-all duration-500 ease-silk hover:bg-champagne-light"
          >
            Return Home
          </Link>
          <Link href="/jewelry" className="btn-outline border-ivory/40 text-ivory hover:bg-ivory/10">
            Jewelry Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
