export type CustomizationOption = {
  label: string;
  choices: string[];
};

export type ProductSegment = "engagement" | "wedding" | "jewelry";

export type Product = {
  slug: string;
  name: string;
  collection: string;
  collectionSlug: string;
  /** Commercial segment for maison navigation */
  segment: ProductSegment;
  category: string;
  /** Laboratory-grown centre or principal stones */
  labGrown?: boolean;
  reference: string;
  material: string;
  gemstone: string;
  carat: string;
  /** Maison price label — pieces are priced on application */
  priceLabel: string;
  tagline: string;
  description: string;
  story: string;
  details: string[];
  customization: CustomizationOption[];
  /** Editorial poster image in /public/images */
  image: string;
  /** Path to a local GLB model in /public/models */
  modelUrl: string;
  /** Optional poster image shown before the model loads */
  poster?: string;
  /** Visual tones used for the editorial gradient overlays */
  tones: [string, string, string];
};

export type Collection = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  tones: [string, string];
};

export const collections: Collection[] = [
  {
    slug: "solene",
    name: "Solène",
    subtitle: "Solitaires & vows",
    description:
      "Light made permanent. Solène gathers our solitaires and vow rings — single stones set to breathe, each chosen for its quiet fire.",
    tones: ["#1A1410", "#7A6234"],
  },
  {
    slug: "nocturne",
    name: "Nocturne",
    subtitle: "High jewelry necklaces",
    description:
      "Pieces for the late hours. Nocturne is our haute joaillerie — articulated necklaces and devant-de-corsage conceived as wearable architecture.",
    tones: ["#0E0B09", "#8A6E3C"],
  },
  {
    slug: "meridienne",
    name: "Méridienne",
    subtitle: "Earrings & ear ornaments",
    description:
      "Composed for the line of the jaw. Méridienne moves between the day-lit drop and the chandelier made for candlelight.",
    tones: ["#1F1A16", "#B79A63"],
  },
  {
    slug: "heritage",
    name: "Héritage",
    subtitle: "Bracelets & cuffs",
    description:
      "Objects to be inherited. Héritage holds our cuffs and line bracelets — substantial, hand-finished, made to outlive their moment.",
    tones: ["#15110E", "#7A6234"],
  },
];

export const products: Product[] = [
  {
    slug: "solene-aurore-solitaire",
    name: "Aurore Solitaire",
    collection: "Solène",
    collectionSlug: "solene",
    segment: "engagement",
    category: "Engagement Ring",
    labGrown: true,
    reference: "SOL·001",
    material: "Platinum 950",
    gemstone: "Old-mine cushion diamond, D / VVS1",
    carat: "3.04 ct centre",
    priceLabel: "Price on application",
    tagline: "A single light, set to breathe.",
    description:
      "The Aurore is the maison's founding gesture — one exceptional stone lifted on an almost invisible platinum gallery so the diamond appears to float above the finger.",
    story:
      "Each Aurore begins with a stone selected in the salon before the setting is ever drawn. The gallery is pierced by hand so light enters from beneath, and the band is tapered to disappear against the skin.",
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
    image: "https://images.unsplash.com/photo-1605100804763-247f67b355f4?w=1200&q=85",
    modelUrl: "/models/ring.glb",
    tones: ["#6E232C", "#C9A66B", "#E2CD9F"],
  },
  {
    slug: "nocturne-rivage-necklace",
    name: "Rivage Necklace",
    collection: "Nocturne",
    collectionSlug: "nocturne",
    segment: "jewelry",
    category: "Necklace",
    reference: "NOC·014",
    material: "18k Champagne Gold",
    gemstone: "Graduated Burmese rubies & rose-cut diamonds",
    carat: "18.6 ct total",
    priceLabel: "Price on application — atelier commission",
    tagline: "Wearable architecture for the late hours.",
    description:
      "Rivage is articulated across forty-one links so the necklace pours like water against the décolleté, each ruby caught in a champagne-gold tide.",
    story:
      "Eleven hundred hours pass between the first gouache and the finished Rivage. The articulation is built link by link so the piece holds the body rather than resting on it.",
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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=85",
    modelUrl: "/models/necklace.glb",
    tones: ["#4A141B", "#A8854B", "#C9A66B"],
  },
  {
    slug: "meridienne-ondine-earrings",
    name: "Ondine Drop Earrings",
    collection: "Méridienne",
    collectionSlug: "meridienne",
    segment: "jewelry",
    category: "Earrings",
    reference: "MER·022",
    material: "Platinum 950",
    gemstone: "Pear-cut Paraíba tourmalines & diamonds",
    carat: "6.2 ct pair",
    priceLabel: "Price on application",
    tagline: "Composed for candlelight.",
    description:
      "Two pear-cut Paraíba tourmalines hang from a fringe of pavé, designed to swing a fraction of a degree with every turn of the head.",
    story:
      "The Ondine is balanced on a jeweller's scale so each drop falls true. The detachable top stud allows the piece to be worn from the office to the opera.",
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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c754af398?w=1200&q=85",
    modelUrl: "/models/earrings.glb",
    tones: ["#5A1A22", "#7FB8C9", "#E2CD9F"],
  },
  {
    slug: "heritage-meridien-cuff",
    name: "Méridien Cuff",
    collection: "Héritage",
    collectionSlug: "heritage",
    segment: "jewelry",
    category: "Bracelet",
    reference: "HER·007",
    material: "18k Champagne Gold",
    gemstone: "Channel-set baguette diamonds",
    carat: "9.4 ct total",
    priceLabel: "Price on application",
    tagline: "An object to be inherited.",
    description:
      "A substantial open cuff in brushed champagne gold, scored by a single meridian of baguette diamonds that catches the light like a horizon.",
    story:
      "Carved from a solid billet and finished with a hand-applied satin grain, the Méridien is engineered to spring open by a few millimetres and close to the wrist exactly.",
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
    image: "https://images.unsplash.com/photo-1611598438219-a8013b3b5b99?w=1200&q=85",
    modelUrl: "/models/cuff.glb",
    tones: ["#3B2C24", "#C9A66B", "#E2CD9F"],
  },
  {
    slug: "solene-vesper-band",
    name: "Vesper Eternity Band",
    collection: "Solène",
    collectionSlug: "solene",
    segment: "wedding",
    category: "Wedding Band",
    labGrown: true,
    reference: "SOL·009",
    material: "Platinum 950",
    gemstone: "Full circle round brilliant diamonds",
    carat: "2.1 ct total",
    priceLabel: "Price on application",
    tagline: "An unbroken line of light.",
    description:
      "A full-circle eternity band set in a shared-prong gallery so the diamonds meet with no metal between them — a continuous ribbon of fire.",
    story:
      "The Vesper is matched stone for stone within a single tolerance, then set so the line of light never breaks across the circumference.",
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
    image: "https://images.unsplash.com/photo-1617038260897-c2a1ae572e96?w=1200&q=85",
    modelUrl: "/models/eternity.glb",
    tones: ["#5A1A22", "#E2CD9F", "#C9A66B"],
  },
  {
    slug: "nocturne-comtesse-devant",
    name: "Comtesse Devant-de-Corsage",
    collection: "Nocturne",
    collectionSlug: "nocturne",
    segment: "jewelry",
    category: "Brooch",
    reference: "NOC·031",
    material: "Platinum 950 & 18k gold",
    gemstone: "Cushion sapphire & diamond cascade",
    carat: "24.0 ct total",
    priceLabel: "Price on application — atelier commission",
    tagline: "A ceremonial cascade.",
    description:
      "A devant-de-corsage in the grand tradition — a cushion Ceylon sapphire crowning an articulated cascade of diamonds meant to tremble against silk.",
    story:
      "The Comtesse is a one-of-one commission, conceived as a contemporary answer to the corsage ornaments of the belle époque, and convertible into a pendant and two brooches.",
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
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb407278?w=1200&q=85",
    modelUrl: "/models/necklace.glb",
    tones: ["#4A141B", "#3A5A8C", "#C9A66B"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function productsByCollection(slug: string): Product[] {
  return products.filter((p) => p.collectionSlug === slug);
}

export function productsBySegment(segment: ProductSegment): Product[] {
  return products.filter((p) => p.segment === segment);
}

export function labGrownProducts(): Product[] {
  return products.filter((p) => p.labGrown);
}

export const jewelryCategories = [
  "All",
  "Necklace",
  "Earrings",
  "Bracelet",
  "Brooch",
] as const;
