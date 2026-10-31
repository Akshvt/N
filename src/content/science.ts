// All Science page copy lives here. Everything marked PLACEHOLDER must be
// replaced with brand-approved, verified copy before launch.

export const ticker = [
  "Whole-food based",
  "Rooted in Ayurveda",
  "Third-party tested",
  "Made for real women",
  "Free shipping over ₹999",
];

export const nav = [
  { label: "Shop", to: "/" as const },
  { label: "About", to: "/" as const },
  { label: "Science", to: "/science" as const },
  { label: "Lab Reports", to: "/lab-reports" as const },
];

export const hero = {
  eyebrow: "The Science Behind N°",
  headline: ["Science you can see.", "Nutrition you can feel."],
  bubbles: [
    { title: "Whole-food based", sub: "Placeholder" },
    { title: "Lab tested", sub: "Placeholder" },
    { title: "Rooted in Ayurveda", sub: "Placeholder" },
  ],
};

export const approach = {
  eyebrow: "Our Approach",
  headline: ["Ancient wisdom,", "modern formulation."],
  paragraphs: [
    "PLACEHOLDER: N° blends time-honoured Ayurvedic principles with modern, lab-tested formulation, starting from whole foods rather than isolated synthetics.",
    "PLACEHOLDER: Every formula is built around one question: how well does your body actually use what you take? That shapes what goes in, and what stays out.",
  ],
};

export const howItWorks = [
  { n: "01", title: "Whole-food sourcing", body: "PLACEHOLDER: We start with real ingredients from trusted growers, chosen for quality and traceability.", image: "mol1" },
  { n: "02", title: "Smart formulation", body: "PLACEHOLDER: Ingredients are combined thoughtfully so they work together, guided by Ayurveda and modern research.", image: "mol3" },
  { n: "03", title: "Better daily use", body: "PLACEHOLDER: Designed to fit easily into your day, so consistency feels effortless.", image: "body" },
] as const;

export const molecule = {
  eyebrow: "The Science of Nutrition",
  headline: "See how N° works.",
  note: "Placeholder science copy. To be reviewed by the N° formulation team.",
  steps: [
    { title: "Whole food meets formula", body: "PLACEHOLDER: Whole-food ingredients come together in a single daily formula." },
    { title: "Breaking it down", body: "PLACEHOLDER: As you digest, the formula begins to break down into smaller parts." },
    { title: "Active ingredients at work", body: "PLACEHOLDER: Key ingredients get to work during digestion." },
    { title: "Carried through the gut", body: "PLACEHOLDER: Nutrients travel through the digestive tract." },
    { title: "Ready for your body", body: "PLACEHOLDER: What you take is ready for your body to use." },
  ],
};

export const transparency = {
  eyebrow: "Total Transparency",
  headline: "Tested. Verified. Trusted.",
  line: "Every batch is third-party tested.",
  cards: [
    { icon: "factory", title: "GMP certified facility", body: "PLACEHOLDER: Certification details to be added." },
    { icon: "flask", title: "Independent lab testing", body: "PLACEHOLDER: Testing partner details to be added." },
  ],
};

export const sourcing = {
  headline: "Sourced without compromise.",
  body: "PLACEHOLDER: We work with growers who share our standards, so you always know where your ingredients come from.",
  qrText: "Scan or click to view lab reports",
};

export const labReports = {
  note: "Sample data — not real test results.",
  rows: [
    { product: "Daily Essentials (sample)", batch: "NM-0001", test: "Heavy metals", date: "Jan 2026" },
    { product: "Focus + Energy (sample)", batch: "NM-0002", test: "Microbial", date: "Feb 2026" },
    { product: "Daily Essentials (sample)", batch: "NM-0003", test: "Potency", date: "Mar 2026" },
  ],
};

export const consult = {
  headline: "Need help choosing your daily formula?",
  sub: "Talk to us today.",
  cta: "Consult for free",
};

export const footer = {
  tagline: "Whole-food nutrition, rooted in Ayurveda.",
  columns: [
    { title: "Company", links: ["Our story", "Science", "Lab reports"] },
    { title: "Help", links: ["Shipping", "Returns", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms"] },
  ],
};
