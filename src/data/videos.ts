/**
 * Canonical video list — must match /public/videos exactly.
 * Filenames only; paths are used internally, never shown in the UI.
 *
 * Current files:
 *   brand-box-01.mp4
 *   diamond-hand-01.mp4
 *   diamond-hand-02.mp4
 *   earrings-detail-01.mp4
 *   jennifer-salon-01.mp4
 *   jennifer-salon-02.mp4
 */

export type ShowcaseVideo = {
  id: string;
  src: string;
};

const VIDEO_FILES = [
  "brand-box-01.mp4",
  "diamond-hand-01.mp4",
  "diamond-hand-02.mp4",
  "earrings-detail-01.mp4",
  "jennifer-salon-01.mp4",
  "jennifer-salon-02.mp4",
] as const;

export type VideoFile = (typeof VIDEO_FILES)[number];

/** All valid video paths served from /public/videos */
export const videoPaths: Record<VideoFile, string> = Object.fromEntries(
  VIDEO_FILES.map((file) => [file, `/videos/${file}`])
) as Record<VideoFile, string>;

/** Every showcase film on the site — one entry per file on disk */
export const showcaseVideos: ShowcaseVideo[] = VIDEO_FILES.map((file) => ({
  id: file.replace(/\.mp4$/, ""),
  src: `/videos/${file}`,
}));

/** Hero film for the homepage */
export const heroVideo = videoPaths["jennifer-salon-01.mp4"];
