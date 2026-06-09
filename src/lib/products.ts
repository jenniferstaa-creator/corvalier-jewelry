export type {
  Product,
  ProductSegment,
  ProductTier,
  ProductCategory,
  CustomizationOption,
} from "@/data/products";

export {
  products,
  getProduct,
} from "@/data/products";

import type { ProductSegment, ProductTier } from "@/data/products";
import { products } from "@/data/products";

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

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function productsByCollection(slug: string) {
  return products.filter((p) => p.collectionSlug === slug);
}

export function productsBySegment(segment: ProductSegment) {
  return products.filter((p) => p.segment === segment);
}

export function productsByTier(tier: ProductTier) {
  return products.filter((p) => p.tier === tier);
}

export function labGrownProducts() {
  return products.filter((p) => p.labGrown);
}
