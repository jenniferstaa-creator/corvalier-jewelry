export type GuideSection = {
  id: string;
  title: string;
  eyebrow: string;
  body: string[];
  points?: string[];
};

export const guideIntro = {
  title: "Certified lab-grown diamonds",
  subtitle: "The Cordellier standard — conscious, transparent, modern",
  lead:
    "Cordellier works exclusively with certified lab-grown diamonds. Same brilliance. Clearer origin. A more ethical way to choose fine jewelry — without the opacity of the old market.",
};

export const guideSections: GuideSection[] = [
  {
    id: "standard",
    eyebrow: "Our promise",
    title: "Certified lab-grown diamonds only",
    body: [
      "Every Cordellier diamond is laboratory-grown and certified — reviewed under magnification in our private salon, never sold from an anonymous online grid.",
      "We do not offer mined diamonds. This is deliberate: we believe fine jewelry should be beautiful, traceable, and aligned with how our clients live today.",
    ],
    points: [
      "Cut grade: Excellent or Ideal only",
      "Colour: D–F for colourless pieces",
      "Clarity: VVS1 or higher as standard",
      "Certification: GIA or IGI, verified in salon",
    ],
  },
  {
    id: "ethical",
    eyebrow: "Conscious fine jewelry",
    title: "A more ethical alternative",
    body: [
      "Lab-grown diamonds share the same crystal structure as mined diamonds. They are not simulants — they are diamonds, created under controlled conditions with full traceability.",
      "For many of our clients, this is the ethical alternative they have been looking for: the fire and permanence of diamond, without the uncertainty that once came with the category.",
    ],
    points: [
      "Chemically and optically identical to mined diamond",
      "Fully traceable provenance",
      "Responsible choice, without compromise on quality",
    ],
  },
  {
    id: "value",
    eyebrow: "Honest value",
    title: "Modern luxury, more accessible",
    body: [
      "Traditional diamond jewelry often carries premiums that have little to do with the stone itself. Cordellier takes a different view.",
      "By working with certified lab-grown diamonds and selling by appointment, we remove unnecessary layers — so investment goes into cut, setting, and craft. The result is accessible fine jewelry: high-end by design, more attainable by principle.",
      "This is not about being inexpensive. It is about being honest.",
    ],
    points: [
      "Transparent pricing discussed in the salon",
      "Budget directed toward quality, not markup",
      "Fine luxury without the old rules",
    ],
  },
  {
    id: "four-cs",
    eyebrow: "Cut · Colour · Clarity · Carat",
    title: "How we guide you — privately",
    body: [
      "Cut is where we begin. A perfectly colourless stone in a mediocre cut will appear dull; we would rather refine carat than compromise cut.",
      "Colour and clarity are discussed together with your setting metal — champagne gold reads differently than platinum in northern light.",
      "Carat is the last conversation, not the first.",
    ],
  },
  {
    id: "viewing",
    eyebrow: "See the stone",
    title: "Why a private appointment matters",
    body: [
      "Diamonds cannot be judged from a screen. In our Stockholm salon you compare stones under consistent light, with a loupe, and without time pressure.",
      "Your advisor prepares no more than three certified stones per appointment — each chosen for your brief before you arrive.",
    ],
  },
];

export const guideFaqs = [
  {
    q: "Does Cordellier sell mined diamonds?",
    a: "No. We work exclusively with certified lab-grown diamonds. It is central to who we are as a Swedish jewelry maison.",
  },
  {
    q: "Are lab-grown diamonds real diamonds?",
    a: "Yes. They share the same chemical and optical properties as mined diamonds. The difference is origin — and the transparency that comes with it.",
  },
  {
    q: "Why are Cordellier pieces more accessible than traditional fine jewelry?",
    a: "We sell by appointment, use certified lab-grown diamonds only, and keep our process direct. That allows honest value: modern luxury with less of the traditional markup — never at the expense of craft.",
  },
  {
    q: "Can I commission a bespoke piece?",
    a: "Yes. Bespoke commissions are the heart of the maison. Your advisor will guide stone selection, design, and delivery across private appointments.",
  },
];
