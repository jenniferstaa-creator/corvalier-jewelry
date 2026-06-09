import { showcaseVideos } from "@/data/videos";
import { ShowcaseVideoCard } from "@/components/showcase-video-card";
import { Reveal } from "@/components/reveal";

export function JewelryShowcaseVideos() {
  return (
    <section className="bg-burgundy-deep py-16 md:py-24">
      <div className="maison-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {showcaseVideos.map((video, i) => (
            <Reveal key={video.id} delay={i * 60}>
              <ShowcaseVideoCard src={video.src} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
