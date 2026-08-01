export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  intro: string;
  items: ServiceItem[];
  outcomes: string[];
}

export const SERVICES: ServiceCategory[] = [
  {
    slug: "software-technology",
    name: "Software & Technology",
    eyebrow: "01 · Build",
    tagline: "Custom software engineered on truth.",
    description:
      "Custom software, web applications, mobile apps, AI and automation, and API integrations engineered for reliability, scale and long-term value.",
    intro:
      "We architect software the way trusted infrastructure is built, with clarity of purpose, disciplined engineering and honest reporting. From internal tools that erase manual work to customer-facing platforms that carry your brand, we build systems your team can rely on.",
    items: [
      { name: "Custom Software Development", description: "Bespoke platforms designed around your operations, not a template." },
      { name: "Web Application Development", description: "Fast, secure, SEO-ready web apps built on modern frameworks." },
      { name: "Mobile App Development", description: "Native-quality iOS and Android experiences from a single codebase." },
      { name: "AI & Business Automation", description: "Practical AI and workflow automation that measurably saves time." },
      { name: "API Integration", description: "Connect your CRM, payments, marketing and internal systems into one truth." },
    ],
    outcomes: [
      "Reduce manual work by automating repetitive processes",
      "Ship reliable software with clear timelines and honest reporting",
      "Own your code, data and roadmap",
    ],
  },
  {
    slug: "web",
    name: "Web",
    eyebrow: "02 · Web",
    tagline: "Websites that earn trust in seconds.",
    description:
      "Business websites, e-commerce, ongoing maintenance and performance optimisation, engineered for search, speed and conversion.",
    intro:
      "Your website is often the first honest signal a customer receives about your business. We craft sites that load instantly, rank strongly on Google, and speak clearly to the people you serve.",
    items: [
      { name: "Business Websites", description: "Beautifully designed marketing sites that convert visitors into customers." },
      { name: "E-commerce Websites", description: "Fast, secure online stores with clean checkout and inventory workflows." },
      { name: "Website Maintenance", description: "Ongoing updates, security patches, backups and content changes." },
      { name: "Website Optimisation", description: "Performance, Core Web Vitals and SEO improvements with measurable results." },
    ],
    outcomes: [
      "Rank higher on Google with technical SEO from day one",
      "Load in under 2 seconds on mobile networks",
      "Convert more visitors with clear, human copy and design",
    ],
  },
  {
    slug: "creative",
    name: "Creative",
    eyebrow: "03 · Creative",
    tagline: "Identity systems that mean something.",
    description:
      "Branding, logo design, UI/UX and graphic design that translate your values into a visual language customers remember.",
    intro:
      "Great brands are not decoration. They are the visible edge of a company's values. We design identity systems, product interfaces and marketing collateral that stay honest to who you are.",
    items: [
      { name: "Branding & Identity Design", description: "Complete visual identity systems: strategy, palette, typography, guidelines." },
      { name: "Logo Design", description: "Distinctive marks that work at every scale, in colour, black and white." },
      { name: "UI/UX Design", description: "Digital product design grounded in real user research and clarity." },
      { name: "Graphic Design", description: "Pitch decks, brochures, packaging and print collateral with polish." },
    ],
    outcomes: [
      "Look like the trusted category leader from day one",
      "Ship consistent brand assets across every channel",
      "Design that guides users, not just decorates screens",
    ],
  },
  {
    slug: "media",
    name: "Media",
    eyebrow: "04 · Media",
    tagline: "Photography and video that tell the truth beautifully.",
    description:
      "Photography, videography, commercial content and social-first storytelling that make your business visible and credible.",
    intro:
      "Every business has a real story worth showing. We produce photography and video that captures the honest character of your team, your product and your customers.",
    items: [
      { name: "Photography", description: "Portrait, product, event and lifestyle photography with editorial polish." },
      { name: "Videography", description: "Brand films, testimonials and event coverage shot to broadcast standard." },
      { name: "Commercial Content Creation", description: "Ad-ready creative built around your campaign and audience." },
      { name: "Social Media Content", description: "Short-form Reels, TikTok cuts and vertical content that performs." },
    ],
    outcomes: [
      "Show up on social with content that stops the scroll",
      "Build trust with real, unstaged brand storytelling",
      "One shoot, months of content across every channel",
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    eyebrow: "05 · Grow",
    tagline: "Growth built on measurable truth.",
    description:
      "Digital strategy, social media management, SEO and Google Business Profile setup grounded in analytics, not guesswork.",
    intro:
      "Marketing without honesty is noise. We build strategies where every dollar and every hour is measured, reported and defended. Growth is a decision, not a hope.",
    items: [
      { name: "Digital Strategy", description: "Roadmaps that align brand, product, content and paid channels." },
      { name: "Social Media Management", description: "Planning, publishing, community and reporting across platforms." },
      { name: "Search Engine Optimisation (SEO)", description: "Technical, on-page and content SEO tuned for Australian and global search." },
      { name: "Google Business Profile Setup", description: "Local SEO foundation that puts you on the map." },
    ],
    outcomes: [
      "Attract qualified traffic from Google, not vanity clicks",
      "Report on marketing performance in plain language",
      "Own an audience across email, search and social",
    ],
  },
];

export const CORE_VALUES = [
  { name: "Truth", description: "We are transparent and honest in every recommendation, quote and update." },
  { name: "Excellence", description: "We pursue craft-level quality in everything we design, build and ship." },
  { name: "Innovation", description: "We embrace creativity and modern technology to solve real problems." },
  { name: "Collaboration", description: "We grow through teamwork and genuine partnership with our clients." },
  { name: "Impact", description: "We measure success by the value we create for the businesses we serve." },
] as const;
