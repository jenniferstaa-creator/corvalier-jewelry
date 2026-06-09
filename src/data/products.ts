/**
 * Product catalog — asset paths match exact files in /public/images, /public/videos, /public/models.
 *
 * Images:  aurore.svg, rivage.svg, ondine.svg, meridien.svg, vesper.svg, comtesse.svg, hero.svg, atelier.svg
 * Videos:  see src/data/videos.ts (VIDEO_FILES)
 * Models:  cuff.glb, diamond-ring.glb, earrings.glb, eternity.glb, necklace.glb, ring.glb
 */

export type CustomizationOption = {
  label: string;
  choices: string[];
};

import { videoPaths } from "@/data/videos";

/** @deprecated Use tier — kept for legacy filters */
export type ProductSegment = "engagement" | "wedding" | "jewelry";

export type ProductTier = "Jewelry" | "High Jewelry" | "Engagement";

export type ProductCategory =
  | "rings"
  | "necklaces"
  | "earrings"
  | "bracelets"
  | "engagement-rings"
  | "wedding-bands"
  | "statement-pieces"
  | "exceptional-diamonds"
  | "one-of-a-kind"
  | "private-collection";

export type Product = {
  name: string;
  slug: string;
  tier: ProductTier;
  category: ProductCategory;
  collection: string;
  collectionSlug: string;
  occasion?: string;
  appointmentOnly: boolean;
  image: string;
  video: string;
  model: string;
  /** @deprecated Use tier */
  segment: ProductSegment;
  labGrown?: boolean;
  reference: string;
  material: string;
  gemstone: string;
  carat: string;
  priceLabel: string;
  tagline: string;
  description: string;
  story: string;
  details: string[];
  customization: CustomizationOption[];
  tones: [string, string, string];
};

export const products: Product[] = [
  {
    name: "Aurore Solitaire",
    slug: "solene-aurore-solitaire",
    tier: "Engagement",
    category: "engagement-rings",
    collection: "Solène",
    collectionSlug: "solene",
    occasion: "Bridal",
    appointmentOnly: true,
    image: "/images/aurore.svg",
    video: videoPaths["diamond-hand-01.mp4"],
    model: "/models/diamond-ring.glb",
    segment: "engagement",
    labGrown: true,
    reference: "SOL·001",
    material: "Platinum 950",
    gemstone: "Old-mine cushion diamond, D / VVS1",
    carat: "3.04 ct centre",
    priceLabel: "Price on application",
    tagline: "A single light, set to breathe.",
    description:
      "The Aurore is the maison's founding gesture — one exceptional stone lifted on an almost invisible platinum gallery, held in quiet fire above the finger. Certified brilliance, chosen with clarity.",
    story:
      "Each Aurore begins with a stone selected in the salon before the setting is ever drawn — not from a screen, but beneath the loupe, in conversation. The gallery is pierced by hand so light enters from beneath, and the band is tapered to disappear against the skin. A vow, refined in private.",
    details: [
      "Centre stone selected by appointment",
      "Hand-pierced floating gallery",
      "Comb-tapered band, 1.8mm",
      "Engraved interior with maison cipher",
    ],
    customization: [
      { label: "Metal", choices: ["Platinum 950", "18k Champagne Gold", "18k Rose Gold"] },
      { label: "Centre stone", choices: ["Old-mine diamond", "Ceylon sapphire", "Colombian emerald"] },
      { label: "Carat", choices: ["1.5 – 2 ct", "2 – 3 ct", "3 ct and above"] },
      { label: "Engraving", choices: ["None", "Initials", "Date"] },
    ],
    tones: ["#6E232C", "#C9A66B", "#E2CD9F"],
  },
  {
    name: "Rivage Necklace",
    slug: "nocturne-rivage-necklace",
    tier: "High Jewelry",
    category: "statement-pieces",
    collection: "Nocturne",
    collectionSlug: "nocturne",
    occasion: "Evening",
    appointmentOnly: true,
    image: "/images/rivage.svg",
    video: videoPaths["jennifer-salon-02.mp4"],
    model: "/models/necklace.glb",
    segment: "jewelry",
    reference: "NOC·014",
    material: "18k Champagne Gold",
    gemstone: "Graduated Burmese rubies & rose-cut diamonds",
    carat: "18.6 ct total",
    priceLabel: "Price on application — atelier commission",
    tagline: "Wearable architecture for the late hours.",
    description:
      "Rivage is articulated across forty-one links so the necklace pours like water against the décolleté — each ruby caught in a champagne-gold tide, composed for the woman who moves through evening light with intention.",
    story:
      "Eleven hundred hours pass between the first gouache and the finished Rivage. The articulation is built link by link so the piece holds the body rather than resting on it — conscious luxury, made to be felt as much as seen.",
    details: [
      "41 individually articulated links",
      "Burmese rubies, unheated",
      "Convertible clasp — wearable two lengths",
      "Atelier commission, 9–12 months",
    ],
    customization: [
      { label: "Metal", choices: ["18k Champagne Gold", "Platinum 950"] },
      { label: "Principal stone", choices: ["Burmese ruby", "Ceylon sapphire", "Paraíba tourmaline"] },
      { label: "Length", choices: ["Collier, 40cm", "Sautoir, 70cm", "Convertible"] },
    ],
    tones: ["#4A141B", "#A8854B", "#C9A66B"],
  },
  {
    name: "Ondine Drop Earrings",
    slug: "meridienne-ondine-earrings",
    tier: "Jewelry",
    category: "earrings",
    collection: "Méridienne",
    collectionSlug: "meridienne",
    occasion: "Evening",
    appointmentOnly: true,
    image: "/images/ondine.svg",
    video: videoPaths["earrings-detail-01.mp4"],
    model: "/models/earrings.glb",
    segment: "jewelry",
    reference: "MER·022",
    material: "Platinum 950",
    gemstone: "Pear-cut Paraíba tourmalines & diamonds",
    carat: "6.2 ct pair",
    priceLabel: "Price on application",
    tagline: "Composed for candlelight.",
    description:
      "Two pear-cut Paraíba tourmalines hang from a fringe of pavé, designed to tremble a fraction of a degree with every turn of the head — quiet fire for the line of the jaw.",
    story:
      "The Ondine is balanced on a jeweller's scale so each drop falls true. The detachable top stud allows the piece to move from day to evening — beauty with clarity, worn with ease.",
    details: [
      "Detachable pavé top — two ways to wear",
      "Neon Paraíba, Mozambique origin",
      "Knife-edge pavé fringe",
      "French clip fitting, hand-adjusted",
    ],
    customization: [
      { label: "Metal", choices: ["Platinum 950", "18k Champagne Gold"] },
      { label: "Drop stone", choices: ["Paraíba tourmaline", "Aquamarine", "Yellow diamond"] },
      { label: "Fitting", choices: ["Post & clip", "Lever back"] },
    ],
    tones: ["#5A1A22", "#7FB8C9", "#E2CD9F"],
  },
  {
    name: "Méridien Cuff",
    slug: "heritage-meridien-cuff",
    tier: "Jewelry",
    category: "bracelets",
    collection: "Héritage",
    collectionSlug: "heritage",
    occasion: "Everyday",
    appointmentOnly: true,
    image: "/images/meridien.svg",
    video: videoPaths["diamond-hand-02.mp4"],
    model: "/models/cuff.glb",
    segment: "jewelry",
    reference: "HER·007",
    material: "18k Champagne Gold",
    gemstone: "Channel-set baguette diamonds",
    carat: "9.4 ct total",
    priceLabel: "Price on application",
    tagline: "An object to be inherited.",
    description:
      "A substantial open cuff in brushed champagne gold, scored by a single meridian of baguette diamonds that catches the light like a horizon — substantial, quiet, made to outlive its moment.",
    story:
      "Carved from a solid billet and finished with a hand-applied satin grain, the Méridien is engineered to spring open by a few millimetres and close to the wrist exactly. Swedish fine jewelry, conceived as an heirloom.",
    details: [
      "Solid 18k, hand-satin finish",
      "Channel-set baguette meridian",
      "Sprung open-cuff form",
      "Sized to the individual wrist",
    ],
    customization: [
      { label: "Metal", choices: ["18k Champagne Gold", "18k Rose Gold", "Platinum 950"] },
      { label: "Finish", choices: ["Satin grain", "High polish"] },
      { label: "Stone line", choices: ["Baguette diamond", "Calibré sapphire", "Plain"] },
    ],
    tones: ["#3B2C24", "#C9A66B", "#E2CD9F"],
  },
  {
    name: "Vesper Eternity Band",
    slug: "solene-vesper-band",
    tier: "Engagement",
    category: "wedding-bands",
    collection: "Solène",
    collectionSlug: "solene",
    occasion: "Bridal",
    appointmentOnly: true,
    image: "/images/vesper.svg",
    video: videoPaths["diamond-hand-01.mp4"],
    model: "/models/eternity.glb",
    segment: "wedding",
    labGrown: true,
    reference: "SOL·009",
    material: "Platinum 950",
    gemstone: "Full circle round brilliant diamonds",
    carat: "2.1 ct total",
    priceLabel: "Price on application",
    tagline: "An unbroken line of light.",
    description:
      "A full-circle eternity band set in a shared-prong gallery so the diamonds meet with no metal between them — a continuous ribbon of certified brilliance, worn as a quiet promise.",
    story:
      "The Vesper is matched stone for stone within a single tolerance, then set so the line of light never breaks across the circumference. A vow in platinum, refined in private.",
    details: [
      "Shared-prong full eternity",
      "Stones matched to a single grade",
      "Comfort-fit interior",
      "Made to exact finger size",
    ],
    customization: [
      { label: "Metal", choices: ["Platinum 950", "18k Champagne Gold", "18k Rose Gold"] },
      { label: "Stone", choices: ["Round diamond", "Calibré ruby", "Calibré sapphire"] },
      { label: "Width", choices: ["2.0mm", "2.6mm", "3.2mm"] },
    ],
    tones: ["#5A1A22", "#E2CD9F", "#C9A66B"],
  },
  {
    name: "Comtesse Devant-de-Corsage",
    slug: "nocturne-comtesse-devant",
    tier: "High Jewelry",
    category: "one-of-a-kind",
    collection: "Nocturne",
    collectionSlug: "nocturne",
    occasion: "Ceremonial",
    appointmentOnly: true,
    image: "/images/comtesse.svg",
    video: videoPaths["brand-box-01.mp4"],
    model: "/models/necklace.glb",
    segment: "jewelry",
    reference: "NOC·031",
    material: "Platinum 950 & 18k gold",
    gemstone: "Cushion sapphire & diamond cascade",
    carat: "24.0 ct total",
    priceLabel: "Price on application — atelier commission",
    tagline: "A ceremonial cascade.",
    description:
      "A devant-de-corsage in the grand tradition — a cushion Ceylon sapphire crowning an articulated cascade of diamonds meant to tremble against silk, composed for the rarest evenings.",
    story:
      "The Comtesse is a one-of-one commission, conceived as a contemporary answer to the corsage ornaments of the belle époque — conscious luxury at its most ceremonial, convertible into a pendant and two brooches.",
    details: [
      "One-of-one atelier commission",
      "Convertible into three pieces",
      "Trembleuse cascade mounts",
      "Unheated Ceylon centre sapphire",
    ],
    customization: [
      { label: "Configuration", choices: ["Devant-de-corsage", "Pendant", "Brooch pair"] },
      { label: "Centre stone", choices: ["Ceylon sapphire", "Emerald", "Padparadscha"] },
    ],
    tones: ["#4A141B", "#3A5A8C", "#C9A66B"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
