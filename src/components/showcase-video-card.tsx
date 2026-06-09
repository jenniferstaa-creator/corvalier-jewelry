type ShowcaseVideoCardProps = {
  src: string;
  className?: string;
};

/** Luxury visual showcase card — autoplay, silent, no controls or labels. */
export function ShowcaseVideoCard({ src, className = "" }: ShowcaseVideoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-champagne/30 bg-burgundy-deep shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="aspect-[4/5] w-full">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-4 rounded-xl border border-champagne/15 opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/30 via-transparent to-transparent" />
    </div>
  );
}
