type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Native img — reliable for local SVG/PNG/JPG in /public/images */
export function ProductImage({
  src,
  alt,
  className = "h-full w-full object-cover",
  priority,
}: ProductImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
