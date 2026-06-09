import type { Collection } from "@/lib/products";
import { collections } from "@/lib/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import { jewelryFilterOptions } from "@/lib/catalog";

export function localizeCollections(dict: Dictionary): Collection[] {
  return collections.map((c) => {
    const t = dict.collections[c.slug as keyof Dictionary["collections"]];
    if (!t) return c;
    return { ...c, name: t.name, subtitle: t.subtitle, description: t.description };
  });
}

export function localizedJewelryCategories(dict: Dictionary) {
  return jewelryFilterOptions(dict);
}
