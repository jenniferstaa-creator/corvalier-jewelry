import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/messages/schema";

export type { Dictionary };

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/messages/en").then((m) => m.default),
  sv: () => import("@/messages/sv").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
