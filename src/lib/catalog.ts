import type { Product, ProductTier } from "@/data/products";
import { products } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";

export type FilterOption = { slug: string; label: string };

export const JEWELRY_FILTERS = [
  "all-jewelry",
  "rings",
  "necklaces",
  "earrings",
  "bracelets",
] as const;

export const HIGH_JEWELRY_FILTERS = [
  "all",
  "statement-pieces",
  "exceptional-diamonds",
  "one-of-a-kind",
  "private-collection",
] as const;

export const ENGAGEMENT_FILTERS = [
  "all",
  "engagement-rings",
  "wedding-bands",
  "bridal-consultation",
] as const;

export function productsByTier(tier: ProductTier): Product[] {
  return products.filter((p) => p.tier === tier);
}

export function matchesCategoryFilter(
  product: Product,
  filterSlug: string
): boolean {
  if (filterSlug === "all" || filterSlug === "all-jewelry") return true;
  return product.category === filterSlug;
}

export function jewelryFilterOptions(dict: Dictionary): FilterOption[] {
  return JEWELRY_FILTERS.map((slug) => ({
    slug,
    label: dict.categories[slug] ?? slug,
  }));
}

export function highJewelryFilterOptions(dict: Dictionary): FilterOption[] {
  return HIGH_JEWELRY_FILTERS.map((slug) => ({
    slug,
    label: dict.categories[slug] ?? slug,
  }));
}

export function engagementFilterOptions(dict: Dictionary): FilterOption[] {
  return ENGAGEMENT_FILTERS.map((slug) => ({
    slug,
    label: dict.categories[slug] ?? slug,
  }));
}

export function parentRouteForTier(tier: ProductTier): string {
  switch (tier) {
    case "High Jewelry":
      return "/high-jewelry";
    case "Engagement":
      return "/engagement";
    default:
      return "/jewelry";
  }
}

export function parentLabelForTier(
  tier: ProductTier,
  dict: Dictionary
): string {
  switch (tier) {
    case "High Jewelry":
      return dict.product.parentHighJewelry;
    case "Engagement":
      return dict.product.parentEngagement;
    default:
      return dict.product.parentJewelry;
  }
}

export function tierLabel(tier: ProductTier, dict: Dictionary): string {
  switch (tier) {
    case "High Jewelry":
      return dict.nav.highJewelry;
    case "Engagement":
      return dict.nav.engagement;
    default:
      return dict.nav.jewelry;
  }
}
