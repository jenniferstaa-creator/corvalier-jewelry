export type ProductTranslation = {
  name: string;
  category: string;
  occasion?: string;
  collection: string;
  material: string;
  gemstone: string;
  carat: string;
  priceLabel: string;
  tagline: string;
  description: string;
  story: string;
  details: string[];
  customization: { label: string; choices: string[] }[];
};

export type Dictionary = {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    template: string;
  };
  nav: {
    jewelry: string;
    highJewelry: string;
    engagement: string;
    engagementWedding: string;
    bespoke: string;
    diamondGuide: string;
    films: string;
    maison: string;
    privateAppointment: string;
    bookPrivateViewing: string;
    requestAppointment: string;
    homeAria: string;
    toggleMenu: string;
  };
  footer: {
    tagline: string;
    collections: string;
    maison: string;
    salon: string;
    jewelry: string;
    engagementWedding: string;
    diamondGuide: string;
    salonFilms: string;
    ourStory: string;
    bespoke: string;
    privateViewing: string;
    copyright: string;
    insuredDelivery: string;
    lifetimeCare: string;
  };
  cta: {
    exploreCollection: string;
    requestAppointment: string;
    discussPiece: string;
    diamondGuide: string;
    ourStory: string;
    bespokeService: string;
    enter: string;
    viewJewelryCollection: string;
    bespokeCommission: string;
    exploreCollectionLower: string;
  };
  common: {
    labGrown: string;
    priceOnApplication: string;
    all: string;
    regarding: string;
    pleaseSelect: string;
  };
  categories: Record<string, string>;
  collections: Record<
    string,
    { name: string; subtitle: string; description: string }
  >;
  home: {
    hero: {
      eyebrow: string;
      ethos: string;
      body: string;
    };
    brandStory: {
      eyebrow: string;
      title: string;
      titleItalic: string;
      p1: string;
      p2: string;
      imageAlt: string;
    };
    pathways: {
      eyebrow: string;
      title: string;
      items: { title: string; desc: string }[];
    };
    collection: {
      eyebrow: string;
      title: string;
      titleItalic: string;
      body: string;
    };
    labGrown: {
      eyebrow: string;
      title: string;
      titleItalic: string;
      body: string;
    };
    engagement: {
      eyebrow: string;
      title: string;
      body: string;
      imageAlt: string;
    };
    highJewelry: {
      eyebrow: string;
      title: string;
      body: string;
    };
    films: {
      eyebrow: string;
      title: string;
    };
    bespoke: {
      eyebrow: string;
      title: string;
      body: string;
    };
    salon: {
      eyebrow: string;
      title: string;
      body: string;
      imageAlt: string;
    };
    intro: {
      eyebrow: string;
      title: string;
    };
  };
  jewelry: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    housesEyebrow: string;
    housesBody: string;
    floorEyebrow: string;
    floorTitle: string;
    floorBody: string;
    filmsTitle: string;
    ctaEyebrow: string;
    ctaTitle: string;
  };
  engagement: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    labEyebrow: string;
    labTitle: string;
    labP1: string;
    labP2: string;
    pillars: { t: string; d: string }[];
    filterEyebrow: string;
    filterTitle: string;
    consultationTitle: string;
    consultationBody: string;
    closingTitle: string;
    imageAlt: string;
  };
  highJewelry: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    salonEyebrow: string;
    salonTitle: string;
    salonBody: string;
    privateEyebrow: string;
    privateBody: string;
    filmsTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };
  bespoke: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    storyEyebrow: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    journeyEyebrow: string;
    journeyTitle: string;
    steps: { title: string; body: string }[];
    assurances: { t: string; d: string }[];
    closingTitle: string;
    imageAlt: string;
  };
  diamondGuide: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    intro: { title: string; subtitle: string; lead: string };
    sections: {
      id: string;
      eyebrow: string;
      title: string;
      body: string[];
      points?: string[];
    }[];
    faqEyebrow: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    closingTitle: string;
    closingBody: string;
  };
  showcase: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    ctaEyebrow: string;
    ctaTitle: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    story: string[];
    imageCaption: string;
    imageAlt: string;
    figures: { value: string; label: string }[];
    valuesEyebrow: string;
    valuesTitle: string;
    values: { t: string; d: string }[];
    visitEyebrow: string;
    visitTitle: string;
    visitBody: string;
  };
  booking: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroIntro: string;
    expectEyebrow: string;
    expect: { t: string; d: string }[];
    salonEyebrow: string;
    form: {
      submittedEyebrow: string;
      submittedTitle: string;
      submittedBody: string;
      anotherRequest: string;
      firstName: string;
      lastName: string;
      email: string;
      telephone: string;
      preferredSalon: string;
      preferredDate: string;
      preferredTime: string;
      visitNature: string;
      noteLabel: string;
      notePlaceholder: string;
      noteDefault: string;
      privacy: string;
      mailSubject: string;
      salons: string[];
      interests: string[];
      times: string[];
    };
  };
  product: {
    parentEngagement: string;
    parentWedding: string;
    parentJewelry: string;
    parentHighJewelry: string;
    thePiece: string;
    positioning: string;
    inYourHands: string;
    turnJewel: string;
    viewerHint: string;
    refinedInPrivate: string;
    refinedBody: string;
    offeredBy: string;
    inMotion: string;
    salonLight: string;
    theMaking: string;
    furtherPieces: string;
    specs: {
      material: string;
      carat: string;
      gemstone: string;
      category: string;
      tier: string;
      occasion: string;
      collection: string;
      reference: string;
    };
    labBadge: string;
    viewPiece: string;
    byAppointment: string;
  };
  jewelryGrid: {
    labNote: string;
    labLink: string;
    labBadge: string;
    empty: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    items: { title: string; summary: string; detail: string }[];
    voices: { quote: string; attribution: string; city: string }[];
  };
  brand: {
    tagline: string;
    ethos: string;
    promise: string;
    appointmentOnly: string;
  };
  products: Record<string, ProductTranslation>;
  notFound: {
    title: string;
    body: string;
    home: string;
  };
};
