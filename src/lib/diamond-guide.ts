export type GuideSection = {
  id: string;
  title: string;
  eyebrow: string;
  body: string[];
  points?: string[];
};

export const guideIntro = {
  title: "The Corvalier diamond",
  subtitle: "Lab-grown stones, maison standards",
  lead:
    "We work with laboratory-grown diamonds that meet the same optical and structural criteria as the finest mined stones — selected in the salon, never from a catalogue grid.",
};

export const guideSections: GuideSection[] = [
  {
    id: "standard",
    eyebrow: "The maison standard",
    title: "What we accept — and what we refuse",
    body: [
      "Every Corvalier diamond is chosen under magnification in the private salon. We publish no bulk inventory and list no anonymous cert numbers online.",
      "Stones below our clarity and cut thresholds are declined regardless of carat weight. A large stone poorly cut will never enter the maison.",
    ],
    points: [
      "Cut grade: Excellent or Ideal only",
      "Colour: D–F for colourless commissions",
      "Clarity: VVS1 or higher as standard",
      "Certificate: GIA or IGI, reviewed in salon",
    ],
  },
  {
    id: "lab-grown",
    eyebrow: "Laboratory-grown",
    title: "Why lab-grown at Corvalier",
    body: [
      "Laboratory-grown diamonds share the same crystal structure as mined diamonds. They are not simulants — they are diamonds, grown under controlled conditions rather than extracted from earth.",
      "For our clients, the appeal is threefold: traceable origin, consistent quality at equivalent grades, and the ability to allocate budget toward cut and setting rather than mining premium.",
    ],
    points: [
      "Chemically and optically identical to mined diamond",
      "Fully traceable provenance",
      "Selected stone-by-stone in the salon",
    ],
  },
  {
    id: "four-cs",
    eyebrow: "Cut · Colour · Clarity · Carat",
    title: "How we explain the four Cs — privately",
    body: [
      "Cut is where we begin. A perfectly colourless stone in a mediocre cut will appear dull; we would rather reduce carat than compromise cut.",
      "Colour and clarity are discussed together with your setting metal — champagne gold forgives differently than platinum.",
      "Carat is the last conversation, not the first.",
    ],
  },
  {
    id: "viewing",
    eyebrow: "See the stone",
    title: "Why a private viewing matters",
    body: [
      "Diamonds cannot be judged from a screen. In the salon you compare stones under the same north light we use at the bench, with a loupe, and without time pressure.",
      "Your advisor will show you no more than three stones per appointment — each chosen for your brief before you arrive.",
    ],
  },
];

export const guideFaqs = [
  {
    q: "Do you sell mined diamonds?",
    a: "By appointment we can source exceptional mined stones for bespoke commissions. Our salon collection defaults to laboratory-grown diamonds of equivalent grade.",
  },
  {
    q: "Can I bring my own stone?",
    a: "Yes. The atelier will assess suitability for your chosen setting and advise on recut or repolish if required.",
  },
  {
    q: "How long does a bespoke diamond commission take?",
    a: "Typically six to twelve months from approved gouache to delivery, depending on stone sourcing and setting complexity.",
  },
];
