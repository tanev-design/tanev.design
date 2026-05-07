export type DetailBlock = {
  eyebrow: string;
  body: string[];
};

export type DetailPage = {
  slug: string;
  title: string;
  compactTitle: string;
  subtitle: string;
  categoryLabel: string;
  categories: string[];
  typeLabel: string;
  typeValue: string;
  cover: string;
  detailImages: [string, string];
  blocks: [DetailBlock, DetailBlock, DetailBlock];
  ctaLabel: string;
  ctaHref: string;
  closingImage: string;
};

export type Project = DetailPage & {
  year: string;
  outcome: string;
  externalUrl?: string;
};

export type BlogPost = DetailPage & {
  date: string;
  readTime: string;
};

export type Service = DetailPage & {
  label: string;
  summary: string;
  deliverables: string[];
  price: string;
  visual: string;
};

export const site = {
  name: "tanev.design",
  legalName: "Tanev Design",
  person: "Stoyan Tanev",
  location: "Plovdiv, BG",
  timezone: "Europe/Sofia",
  url: "https://tanev.design",
  description:
    "Premium web design, UI/UX, SEO, and front-end builds by Stoyan Tanev."
};

export const contactHref = "#contact";

export const image = {
  portrait: "/assets/newherowithbackground.png?v=masked-hero-20260429",
  style: {
    websiteDesign: "/assets/mockup.png",
    uiux: "/assets/UIUXDesignService.png",
    seo: "/assets/SEO.png",
    landingPage: "/assets/landingpage.jpg",
    businessWebsite: "/assets/BusinessWebsitesService.png",
    performance: "/assets/PerformanceOptimizationService.png",
    responsive: "/assets/ResponsiveDesignService.png",
    why: "/assets/whymesec.jpg",
    faq: "/assets/FAQ Section.png",
    tools: "/assets/Tools&TechnologiesBlock.png",
    blogUx: "/assets/BlogCoverUXMistakes.png",
    blogSeo: "/assets/BlogCoverSEOBasics.png",
    blogLanding: "/assets/BlogCoverLandingvsMultipage.png",
    darkMetro: "/assets/mockup.png",
    darkStreet: "/assets/BlogCoverUXMistakes.png",
    graff: "/assets/BusinessWebsitesService.png",
    concept: "/assets/Tools&TechnologiesBlock.png",
    rust: "/assets/ResponsiveDesignService.png",
    oldBall: "/assets/BlogCoverLandingvsMultipage.png",
    underwater: "/assets/BlogCoverSEOBasics.png",
    vlood: "/assets/SEO.png",
    vloodHand: "/assets/FAQ Section.png",
    targetBoard: "/assets/UIUXDesignService.png",
    midnightStreet: "/assets/PerformanceOptimizationService.png",
    brokenSkate: "/assets/landingpage.jpg"
  },
  works: {
    speedlink: "/assets/media/works/speedlink.png",
    pekarniSiana: "/assets/media/works/pekarnisiana.png",
    nusiClima: "/assets/media/works/nusiclima.png",
    wonderplayStudio: "/assets/media/works/wonderplaystudio.png",
    elk: "/assets/media/works/elk.png"
  }
};

const projectBlocks = (name: string): [DetailBlock, DetailBlock, DetailBlock] => [
  {
    eyebrow: "CONTEXT",
    body: [
      `${name} needed a site people could trust quickly.`,
      "Clear offer. Strong first impression. No template feel."
    ]
  },
  {
    eyebrow: "METHOD",
    body: [
      "I mapped the key decisions first.",
      "Then I shaped the layout, proof, motion, and responsive details around one clear next step."
    ]
  },
  {
    eyebrow: "OUTCOME",
    body: [
      "The result is lean, sharp, and easy to act on."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "speedlink-eu",
    title: "Speedlink EU",
    compactTitle: "SPEEDLINKEU",
    subtitle: "A logistics web presence rebuilt for trust, routes, and quote requests.",
    categoryLabel: "SERVICES",
    categories: ["UI/UX", "DEVELOPMENT", "SEO"],
    typeLabel: "Project Type",
    typeValue: "Business website",
    year: "2026",
    outcome: "Quote-first site system",
    cover: image.works.speedlink,
    detailImages: [image.works.speedlink, image.style.performance],
    blocks: projectBlocks("Speedlink EU"),
    ctaLabel: "VIEW LIVE SITE",
    ctaHref: "https://speedlink-eu.vercel.app/",
    externalUrl: "https://speedlink-eu.vercel.app/",
    closingImage: image.works.speedlink
  },
  {
    slug: "pekarni-siana",
    title: "Pekarni Siana",
    compactTitle: "PEKARNISIANA",
    subtitle: "A warm bakery site translated into a sharper ordering and discovery flow.",
    categoryLabel: "SERVICES",
    categories: ["BRANDING", "WEBSITE", "LOCAL SEO"],
    typeLabel: "Project Type",
    typeValue: "Local business",
    year: "2026",
    outcome: "Local demand engine",
    cover: image.works.pekarniSiana,
    detailImages: [image.works.pekarniSiana, image.style.businessWebsite],
    blocks: projectBlocks("Pekarni Siana"),
    ctaLabel: "VIEW LIVE SITE",
    ctaHref: "https://pekarnisiana.github.io/site/",
    externalUrl: "https://pekarnisiana.github.io/site/",
    closingImage: image.works.pekarniSiana
  },
  {
    slug: "nusi-clima",
    title: "Nusi Clima",
    compactTitle: "NUSICLIMA",
    subtitle: "A climate services site built around fast quotes and local trust.",
    categoryLabel: "SERVICES",
    categories: ["UI/UX", "DEVELOPMENT", "SEO"],
    typeLabel: "Project Type",
    typeValue: "Service business",
    year: "2026",
    outcome: "Quote-led service site",
    cover: image.works.nusiClima,
    detailImages: [image.works.nusiClima, image.style.seo],
    blocks: projectBlocks("Nusi Clima"),
    ctaLabel: "VIEW LIVE SITE",
    ctaHref: "https://nusiclima.vercel.app/",
    externalUrl: "https://nusiclima.vercel.app/",
    closingImage: image.works.nusiClima
  },
  {
    slug: "wonderplay-studio",
    title: "Wonderplay Studio",
    compactTitle: "WONDERPLAYSTUDIO",
    subtitle: "A creative studio surface with motion-led storytelling and editorial pacing.",
    categoryLabel: "SERVICES",
    categories: ["BRANDING", "UI/UX", "MOTION"],
    typeLabel: "Project Type",
    typeValue: "Creative studio",
    year: "2026",
    outcome: "Studio launch surface",
    cover: image.works.wonderplayStudio,
    detailImages: [image.works.wonderplayStudio, image.style.uiux],
    blocks: projectBlocks("Wonderplay Studio"),
    ctaLabel: "VIEW LIVE SITE",
    ctaHref: "https://wonderplay-studio-preview.vercel.app/",
    externalUrl: "https://wonderplay-studio-preview.vercel.app/",
    closingImage: image.works.wonderplayStudio
  },
  {
    slug: "elk",
    title: "Elk Konsol",
    compactTitle: "ELKKONSOL",
    subtitle: "A specialist supplier site shaped for fast catalog scanning and direct contact.",
    categoryLabel: "SERVICES",
    categories: ["WEBSITE", "CATALOG", "SEO"],
    typeLabel: "Project Type",
    typeValue: "Industrial supplier",
    year: "2025",
    outcome: "Catalog-led site system",
    cover: image.works.elk,
    detailImages: [image.works.elk, image.style.responsive],
    blocks: projectBlocks("Elk Konsol"),
    ctaLabel: "VIEW LIVE SITE",
    ctaHref: "https://exelkonsol.github.io/elk/",
    externalUrl: "https://exelkonsol.github.io/elk/",
    closingImage: image.works.elk
  }
];

const serviceBlocks = (fit: string, outcome: string): [DetailBlock, DetailBlock, DetailBlock] => [
  {
    eyebrow: "WHAT IT FIXES",
    body: [
      fit,
      outcome
    ]
  },
  {
    eyebrow: "HOW I BUILD",
    body: [
      "I start with the offer, audience, proof, and action.",
      "Then I design and build the page until the next step feels obvious."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "A clear, responsive, SEO-ready website. Designed and built by one person."
    ]
  }
];

export const services: Service[] = [
  {
    slug: "website-design",
    label: "WEBSITE DESIGN",
    title: "Website Design",
    compactTitle: "WEBDESIGN",
    summary: "A sharper first impression. Clear visuals. Fast trust.",
    deliverables: ["Visual direction", "Page layout", "UI system"],
    price: "custom quote",
    subtitle: "A website that looks right before anyone reads a word.",
    categoryLabel: "DELIVERABLES",
    categories: ["VISUAL DESIGN", "LOCAL BUSINESS", "TRUST"],
    typeLabel: "Best For",
    typeValue: "Local businesses",
    cover: image.style.websiteDesign,
    visual: image.style.websiteDesign,
    detailImages: [image.style.websiteDesign, image.style.tools],
    blocks: serviceBlocks(
      "Your site looks generic, dated, or hard to trust.",
      "I give it a clear visual system and a stronger first impression."
    ),
    ctaLabel: "PLAN SITE",
    ctaHref: contactHref,
    closingImage: image.style.why
  },
  {
    slug: "ui-ux",
    label: "UI/UX DESIGN",
    title: "UI UX Design",
    compactTitle: "UIUXDESIGN",
    summary: "Cleaner flows. Easier choices. One clear next step.",
    deliverables: ["User flow", "Mobile layout", "Responsive UI"],
    price: "custom quote",
    subtitle: "Less friction. More clarity.",
    categoryLabel: "DELIVERABLES",
    categories: ["UX", "INTERFACE", "MOBILE FIRST"],
    typeLabel: "Best For",
    typeValue: "Service websites",
    cover: image.style.uiux,
    visual: image.style.uiux,
    detailImages: [image.style.uiux, image.style.responsive],
    blocks: serviceBlocks(
      "People land on the page, but the next step is not obvious.",
      "I tighten the flow so visitors understand, scan, and act."
    ),
    ctaLabel: "SHAPE FLOW",
    ctaHref: contactHref,
    closingImage: image.style.faq
  },
  {
    slug: "seo-optimization",
    label: "SEO OPTIMIZATION",
    title: "SEO Optimization",
    compactTitle: "SEOOPTIMIZATION",
    summary: "Search-ready pages with clean structure, speed, and metadata.",
    deliverables: ["On-page SEO", "Semantic HTML", "Speed"],
    price: "custom quote",
    subtitle: "Built to be found. Built to feel fast.",
    categoryLabel: "DELIVERABLES",
    categories: ["ON-PAGE SEO", "PERFORMANCE", "SEARCH"],
    typeLabel: "Best For",
    typeValue: "Local search",
    cover: image.style.seo,
    visual: image.style.seo,
    detailImages: [image.style.seo, image.style.blogSeo],
    blocks: serviceBlocks(
      "Search engines cannot read what your business does.",
      "I clean up headings, metadata, content structure, and technical basics."
    ),
    ctaLabel: "FIX SEO",
    ctaHref: contactHref,
    closingImage: image.style.performance
  },
  {
    slug: "landing-pages",
    label: "LANDING PAGES",
    title: "Landing Pages",
    compactTitle: "LANDINGPAGES",
    summary: "One offer. One page. One action.",
    deliverables: ["Offer structure", "One-page build", "CTA path"],
    price: "custom quote",
    subtitle: "A focused page for a focused offer.",
    categoryLabel: "DELIVERABLES",
    categories: ["CAMPAIGN", "CONVERSION", "LAUNCH"],
    typeLabel: "Best For",
    typeValue: "Campaigns",
    cover: image.style.landingPage,
    visual: image.style.landingPage,
    detailImages: [image.style.landingPage, image.style.blogLanding],
    blocks: serviceBlocks(
      "You need a page for one launch, service, or campaign.",
      "I strip the noise and build around the action that matters."
    ),
    ctaLabel: "BUILD PAGE",
    ctaHref: contactHref,
    closingImage: image.style.uiux
  },
  {
    slug: "performance-optimization",
    label: "PERFORMANCE",
    title: "Performance Optimization",
    compactTitle: "PERFORMANCE",
    summary: "Speed fixes for lighter, faster, smoother pages.",
    deliverables: ["Audit", "Speed fixes", "Core Web Vitals"],
    price: "custom quote",
    subtitle: "Make the site feel instant.",
    categoryLabel: "DELIVERABLES",
    categories: ["AUDITS", "SPEED", "LIGHTHOUSE"],
    typeLabel: "Best For",
    typeValue: "Existing websites",
    cover: image.style.performance,
    visual: image.style.performance,
    detailImages: [image.style.performance, image.style.seo],
    blocks: serviceBlocks(
      "Your site feels heavy or unstable.",
      "I find the slow parts and clean up what visitors feel first."
    ),
    ctaLabel: "SPEED IT UP",
    ctaHref: contactHref,
    closingImage: image.style.tools
  },
  {
    slug: "responsive-design",
    label: "RESPONSIVE DESIGN",
    title: "Responsive Design",
    compactTitle: "RESPONSIVEDESIGN",
    summary: "Polished layouts across phone, tablet, and desktop.",
    deliverables: ["Breakpoint polish", "Browser checks", "Responsive QA"],
    price: "custom quote",
    subtitle: "Same site. Every screen. Still sharp.",
    categoryLabel: "DELIVERABLES",
    categories: ["MOBILE", "BROWSERS", "QA"],
    typeLabel: "Best For",
    typeValue: "All launches",
    cover: image.style.responsive,
    visual: image.style.responsive,
    detailImages: [image.style.responsive, image.style.uiux],
    blocks: serviceBlocks(
      "Your layout breaks, crowds, or loses polish on smaller screens.",
      "I tune the interface so it holds up everywhere."
    ),
    ctaLabel: "FIX LAYOUT",
    ctaHref: contactHref,
    closingImage: image.style.responsive
  }
];

const blogBlocks = (topic: string): [DetailBlock, DetailBlock, DetailBlock] => [
  {
    eyebrow: "FRAME",
    body: [
      `${topic} is a short note on making websites clearer.`,
      "Less noise. Better decisions."
    ]
  },
  {
    eyebrow: "DETAILS",
    body: [
      "I break down what to keep, what to remove, and what to test before launch."
    ]
  },
  {
    eyebrow: "TAKEAWAY",
    body: [
      "Good design makes the decision feel obvious."
    ]
  }
];

export const blogs: BlogPost[] = [
  {
    slug: "ux-mistakes",
    title: "UX Mistakes",
    compactTitle: "UXMISTAKES",
    subtitle: "Small choices that cost trust.",
    date: "2026-04-12",
    readTime: "6 min",
    categoryLabel: "TOPICS",
    categories: ["UX", "CONVERSION", "CLARITY"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.blogUx,
    detailImages: [image.style.blogUx, image.style.uiux],
    blocks: blogBlocks("UX mistakes"),
    ctaLabel: "FIX THE FLOW",
    ctaHref: contactHref,
    closingImage: image.style.faq
  },
  {
    slug: "user-flow",
    title: "User Flow",
    compactTitle: "USERFLOW",
    subtitle: "Make the next step obvious.",
    date: "2026-03-28",
    readTime: "5 min",
    categoryLabel: "TOPICS",
    categories: ["IA", "COPY", "ACTION"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.uiux,
    detailImages: [image.style.uiux, image.style.websiteDesign],
    blocks: blogBlocks("User flow"),
    ctaLabel: "MAP A FLOW",
    ctaHref: contactHref,
    closingImage: image.style.responsive
  },
  {
    slug: "seo-basics",
    title: "SEO Basics",
    compactTitle: "SEOBASICS",
    subtitle: "Small page details. Better search signals.",
    date: "2026-03-04",
    readTime: "7 min",
    categoryLabel: "TOPICS",
    categories: ["SEO", "SEMANTIC HTML", "SPEED"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.blogSeo,
    detailImages: [image.style.blogSeo, image.style.performance],
    blocks: blogBlocks("SEO basics"),
    ctaLabel: "IMPROVE SEO",
    ctaHref: contactHref,
    closingImage: image.style.seo
  },
  {
    slug: "landing-vs-multipage",
    title: "Landing vs Multi-page",
    compactTitle: "LANDINGVSMULTIPAGE",
    subtitle: "One page or full site. Choose with intent.",
    date: "2026-02-18",
    readTime: "4 min",
    categoryLabel: "TOPICS",
    categories: ["LANDING PAGE", "BUSINESS SITE", "STRATEGY"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.blogLanding,
    detailImages: [image.style.landingPage, image.style.businessWebsite],
    blocks: blogBlocks("Landing page vs multi-page"),
    ctaLabel: "CHOOSE THE RIGHT SITE",
    ctaHref: contactHref,
    closingImage: image.style.blogLanding
  },
  {
    slug: "logo-basics",
    title: "Logo Basics",
    compactTitle: "LOGOBASICS",
    subtitle: "A useful mark should survive the browser tab.",
    date: "2026-01-30",
    readTime: "5 min",
    categoryLabel: "TOPICS",
    categories: ["BRAND", "IDENTITY", "SYSTEM"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.websiteDesign,
    detailImages: [image.style.websiteDesign, image.style.businessWebsite],
    blocks: blogBlocks("Logo basics"),
    ctaLabel: "SHARPEN A BRAND",
    ctaHref: contactHref,
    closingImage: image.style.tools
  },
  {
    slug: "clean-layout",
    title: "Clean Layout",
    compactTitle: "CLEANLAYOUT",
    subtitle: "Spacing is not decoration. It is hierarchy.",
    date: "2025-12-10",
    readTime: "6 min",
    categoryLabel: "TOPICS",
    categories: ["LAYOUT", "TYPE", "GRID"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.responsive,
    detailImages: [image.style.responsive, image.style.performance],
    blocks: blogBlocks("Clean layout"),
    ctaLabel: "REDESIGN A PAGE",
    ctaHref: contactHref,
    closingImage: image.style.websiteDesign
  },
  {
    slug: "grid-play",
    title: "Grid Play",
    compactTitle: "GRIDPLAY",
    subtitle: "How to make strict layouts feel less stiff.",
    date: "2025-11-22",
    readTime: "4 min",
    categoryLabel: "TOPICS",
    categories: ["GRID", "MOTION", "EDITORIAL"],
    typeLabel: "Blog Author",
    typeValue: "Stoyan Tanev",
    cover: image.style.tools,
    detailImages: [image.style.tools, image.style.uiux],
    blocks: blogBlocks("Grid play"),
    ctaLabel: "EXPLORE A GRID",
    ctaHref: contactHref,
    closingImage: image.style.blogUx
  }
];

export const faqs = [
  {
    q: "How soon can a website start?",
    a: "Usually within one to two weeks, if the scope and content are ready."
  },
  {
    q: "Do you only work with Bulgarian businesses?",
    a: "No. I work with clients in Bulgaria, Europe, and remote-first markets."
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. I start with a quick audit, keep what works, and fix what slows people down."
  },
  {
    q: "Do you handle copy and SEO basics?",
    a: "Yes. I can shape page copy, metadata, headings, structure, and launch SEO."
  },
  {
    q: "Do you build landing pages and multi-page sites?",
    a: "Yes. A focused offer fits one page. A broader business usually needs structure."
  },
  {
    q: "What happens after launch?",
    a: "I can support fixes, analytics, new sections, speed checks, and careful iteration."
  }
];

export const testimonials = [
  {
    quote: "A SHARPER FIRST IMPRESSION. BUILT FOR TRUST.",
    name: "Focus",
    role: "Website design",
    avatar: image.style.websiteDesign
  },
  {
    quote: "CLEAR FLOWS. FEWER DOUBTS. BETTER ACTION.",
    name: "Focus",
    role: "UI/UX design",
    avatar: image.style.uiux
  },
  {
    quote: "SEO BUILT INTO THE STRUCTURE, NOT ADDED LATER.",
    name: "Focus",
    role: "SEO optimization",
    avatar: image.style.seo
  },
  {
    quote: "ONE OFFER. ONE PAGE. ONE CLEAR PATH.",
    name: "Focus",
    role: "Conversion pages",
    avatar: image.style.landingPage
  },
  {
    quote: "FAST, ACCESSIBLE, RESPONSIVE BEFORE LAUNCH.",
    name: "Focus",
    role: "Technical polish",
    avatar: image.style.responsive
  }
];

export const awards = [
  ["SERVICE", "Website Design", "Brand-aligned visuals", image.style.websiteDesign],
  ["SERVICE", "UI/UX Design", "Clear user flows", image.style.uiux],
  ["SERVICE", "SEO Optimization", "Search-ready structure", image.style.seo],
  ["SERVICE", "Landing Pages", "Focused offer pages", image.style.landingPage],
  ["SERVICE", "Business Websites", "Clear site systems", image.style.businessWebsite]
] as const;

export const education = [
  {
    era: "2018 - 2020",
    items: [
      ["Front-end Foundations", "HTML5, CSS3, JavaScript"],
      ["Visual Design Practice", "Clean, brand-aligned web layouts"]
    ]
  },
  {
    era: "2021 - 2024",
    items: [
      ["Freelance Web Design", "Small business websites"],
      ["UI/UX and Responsive Design", "Mobile-first layouts and user flows"],
      ["SEO and Content Structure", "Local service pages"]
    ]
  },
  {
    era: "2025 - NOW",
    items: [
      ["Tanev Design", "Independent practice"],
      ["React and Vite Builds", "Custom front-end websites"],
      ["Performance and Launch Support", "Core Web Vitals, analytics, and iteration"]
    ]
  }
];

export const pricing = [
  {
    name: "LANDING PAGE",
    monthly: 0,
    description: "One focused page for one clear offer.",
    features: ["Offer structure", "One-page design", "Responsive build", "SEO basics"]
  },
  {
    name: "BUSINESS WEBSITE",
    monthly: 0,
    description: "A clear site system for a serious business.",
    features: [
      "UX structure",
      "Custom visual system",
      "Multi-page build",
      "Responsive design",
      "SEO-ready sections",
      "Analytics setup"
    ],
    recommended: true
  },
  {
    name: "OPTIMIZATION",
    monthly: 0,
    description: "A focused pass for speed, structure, and polish.",
    features: [
      "Performance audit",
      "Core Web Vitals",
      "Responsive QA",
      "Accessibility pass",
      "Technical SEO",
      "Search Console setup",
      "Launch support"
    ]
  }
];

export const clientLogos = ["SIANA", "SPEEDLINK", "NUSI CLIMA", "WONDERPLAY", "ELK"];

export const secondaryCarousel = [
  [image.style.websiteDesign, "WEBSITE DESIGN"],
  [image.style.uiux, "UI/UX FLOWS"],
  [image.style.seo, "SEO STRUCTURE"],
  [image.style.responsive, "RESPONSIVE BUILDS"]
] as const;
