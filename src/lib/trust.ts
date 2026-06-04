export type TrustItem = {
  title: string;
  summary: string;
  detail: string;
};

/** Maison assurances — editorial, not e-commerce badge strips. */
export const trustItems: TrustItem[] = [
  {
    title: "Insured delivery",
    summary: "White-glove courier, unmarked packaging.",
    detail:
      "Finished pieces travel under full insurance with a bonded courier. Packaging is deliberately discreet — no branding visible from the street.",
  },
  {
    title: "Lifetime resizing",
    summary: "Rings return to the atelier, not a counter.",
    detail:
      "Solène and wedding bands commissioned through Corvalier may be resized for life. Each adjustment is logged in the maison archive and performed by the same bench.",
  },
  {
    title: "Exchange & care",
    summary: "Clear terms, never hidden in fine print.",
    detail:
      "Bespoke commissions are made to order and cannot be exchanged. Salon-ready pieces may be reviewed for exchange within fourteen days, by appointment only.",
  },
  {
    title: "Client voices",
    summary: "Private testimonials, never star ratings.",
    detail:
      "Our clients choose discretion. The words below are shared with permission — each describes a commission, not a transaction.",
  },
];

export const clientVoices = [
  {
    quote:
      "We chose a lab-grown centre stone in the salon. The fire was indistinguishable from what I had seen at the grandes maisons — but the journey felt entirely ours.",
    attribution: "Commission · Solène Aurore",
    city: "Paris",
  },
  {
    quote:
      "The atelier resized my Vesper band twice across a decade. They remembered the original gouache.",
    attribution: "Héritage · Vesper Eternity",
    city: "Genève",
  },
  {
    quote:
      "No window, no rush. Three afternoons in the salon before the drawing was even approved.",
    attribution: "Bespoke · Nocturne Rivage",
    city: "New York",
  },
];
