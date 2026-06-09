import { ShowcaseVideoCard } from "@/components/showcase-video-card";

type ProductVideoProps = {
  src: string;
  className?: string;
};

/** Product salon film — silent luxury showcase card. */
export function ProductVideo({ src, className = "" }: ProductVideoProps) {
  return <ShowcaseVideoCard src={src} className={className} />;
}
