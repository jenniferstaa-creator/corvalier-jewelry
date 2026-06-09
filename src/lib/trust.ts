export type TrustItem = {
  title: string;
  summary: string;
  detail: string;
};

export const trustItems: TrustItem[] = [
  {
    title: "Certified stones only",
    summary: "Lab-grown diamonds, fully traceable.",
    detail:
      "Every Cordellier diamond is certified and laboratory-grown — chosen in private, never from an anonymous catalogue.",
  },
  {
    title: "Insured delivery",
    summary: "White-glove courier, unmarked packaging.",
    detail:
      "Finished pieces travel under full insurance with a bonded courier. Packaging is deliberately discreet.",
  },
  {
    title: "Lifetime care",
    summary: "Rings return to the atelier, not a counter.",
    detail:
      "Solène and wedding bands commissioned through Cordellier may be resized for life. Each adjustment is logged in the maison archive.",
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
      "We chose a certified lab-grown centre stone in the salon. The fire was extraordinary — and knowing the origin made the decision feel right.",
    attribution: "Commission · Solène Aurore",
    city: "Stockholm",
  },
  {
    quote:
      "The atelier resized my Vesper band twice across a decade. They remembered the original gouache.",
    attribution: "Héritage · Vesper Eternity",
    city: "Göteborg",
  },
  {
    quote:
      "No window, no rush. Three afternoons in the salon before the drawing was even approved.",
    attribution: "Bespoke · Nocturne Rivage",
    city: "Malmö",
  },
];
