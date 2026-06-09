import type { Product } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";

export function getCategoryLabel(
  product: Product,
  dict: Dictionary
): string {
  const key = product.category as keyof typeof dict.categories;
  const t = dict.products[product.slug as keyof Dictionary["products"]];
  return dict.categories[key] ?? t?.category ?? product.category;
}

export function localizeProduct(
  product: Product,
  dict: Dictionary
): Product {
  const t = dict.products[product.slug as keyof Dictionary["products"]];
  return {
    ...product,
    name: t?.name ?? product.name,
    collection: t?.collection ?? product.collection,
    material: t?.material ?? product.material,
    gemstone: t?.gemstone ?? product.gemstone,
    carat: t?.carat ?? product.carat,
    priceLabel: t?.priceLabel ?? product.priceLabel,
    tagline: t?.tagline ?? product.tagline,
    description: t?.description ?? product.description,
    story: t?.story ?? product.story,
    details: t?.details ?? product.details,
    customization: t?.customization ?? product.customization,
    occasion: t?.occasion ?? product.occasion,
  };
}

export function localizeProducts(
  items: Product[],
  dict: Dictionary
): Product[] {
  return items.map((p) => localizeProduct(p, dict));
}
