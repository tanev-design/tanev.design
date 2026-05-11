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

const websiteDesignBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE PROBLEM",
    body: [
      "Most small-business websites look identical: a stock-photo hero, three vague service cards, and a contact form nobody fills out. Visitors land, scan for two seconds, and bounce — not because the offer is bad, but because the visual language doesn't earn trust on a 2026 web.",
      "Generic sites tell a generic story. Yours doesn't have to."
    ]
  },
  {
    eyebrow: "MY APPROACH",
    body: [
      "Every project starts with one question: what is the one thing this site must do? Quote requests, bookings, brand credibility — pick one, design every pixel around it.",
      "I build a small custom visual system per project: a single display typeface paired with a workhorse body font, two or three calibrated colors, a spacing scale, and a motion language. No themes. No templates. Each component earns its place.",
      "Imagery gets curated, never decorated. If a stock photo doesn't move the story forward, it doesn't ship."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "A complete Figma file with every section, state, and breakpoint, plus a production-ready Next.js or Webflow build (your call).",
      "Custom favicon and OG share image. Animation tokens. A short Loom walkthrough so you can edit copy confidently after launch.",
      "Two rounds of revision are baked in. After that, weekly retainers are available."
    ]
  }
];

const uiuxBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE PROBLEM",
    body: [
      "Traffic isn't usually the issue. The issue is friction: too many choices, unclear next steps, forms that ask for too much, mobile layouts that punish thumbs.",
      "Beautiful designs that don't convert are wallpaper. The job is to make the right action feel inevitable."
    ]
  },
  {
    eyebrow: "MY APPROACH",
    body: [
      "I map the journey from first click to completed action — every page, every CTA, every drop-off point. Heatmaps and session recordings tell me where users hesitate.",
      "Mobile-first, always. I design phone-width before desktop because that's where most of your traffic actually lives. Tap targets get sized for thumbs, not mice. Forms get shorter. Decisions get fewer.",
      "Then accessibility: WCAG AA contrast, focus rings, keyboard navigation, ARIA where it matters. Not a checkbox — a default."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "User flow diagrams, low-fi wireframes, and a clickable prototype before a single pixel of final UI is drawn.",
      "Component library in Figma with hover, focus, active, disabled, and error states defined.",
      "A short usability test with 3 real users before launch, recorded and annotated."
    ]
  }
];

const seoBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE PROBLEM",
    body: [
      "Google can't read what your site doesn't say. Most small-business sites bury their actual service behind clever taglines, decorative headings, and JavaScript that crawlers stumble over.",
      "Worse — image-heavy hero sections push critical text below the fold, and slow Largest Contentful Paint quietly tanks rankings."
    ]
  },
  {
    eyebrow: "MY APPROACH",
    body: [
      "I start with keyword research grounded in what your actual customers type — not what marketing decks suggest. Local intent, commercial intent, informational intent — each gets its own page.",
      "Then technical SEO: semantic HTML, proper heading hierarchy, structured data (JSON-LD for LocalBusiness, Service, FAQ, Article), Open Graph tags, sitemap, robots.txt, canonical URLs.",
      "Core Web Vitals get tuned: LCP under 2.5s, INP under 200ms, CLS near zero. Lighthouse green across all four pillars before launch."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "Search Console and Analytics 4 connected and verified. A 90-day ranking baseline so you can measure what changes.",
      "On-page audit document covering every URL: title, meta, headings, internal links, image alt text, schema.",
      "A 6-page content brief for blog posts that target the keywords you're closest to ranking for."
    ]
  }
];

const landingPageBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE PROBLEM",
    body: [
      "A homepage tries to serve everyone. A landing page serves exactly one visitor — the one ready to act on one offer.",
      "Mixing the two is the most common waste of paid ad spend I see. You pay for traffic, then send it to a page that talks about five other things."
    ]
  },
  {
    eyebrow: "MY APPROACH",
    body: [
      "Single offer. Single audience. Single CTA, repeated 3–5 times down the page in different voices.",
      "Above the fold: headline that names the outcome, subhead that names the audience, primary button, and one piece of social proof. That's it.",
      "Below: objection-handling sections — pricing transparency, FAQ, testimonials, guarantee, comparison vs. doing nothing. Each block exists because a real prospect would otherwise ask the question.",
      "Speed obsessed: under 1.5s LCP on 4G. Conversion is fragile — a single slow render kills it."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "A standalone page on your domain or a subdomain (your choice), wired to your CRM or email tool with hidden UTM tracking.",
      "Two headline variants and two CTA variants built and A/B testable from day one.",
      "Heatmap and session recording integration so you can watch real visitors and iterate."
    ]
  }
];

const performanceBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE PROBLEM",
    body: [
      "Every 100ms of load time costs roughly 1% of conversions, and Google has been ranking on Core Web Vitals since 2021.",
      "Most slowness isn't one big problem — it's twenty small ones: oversized hero images, render-blocking scripts, layout shifts from late-loading fonts, third-party tags that drag in megabytes of analytics."
    ]
  },
  {
    eyebrow: "MY APPROACH",
    body: [
      "I start with a full Lighthouse + WebPageTest + CrUX audit. Field data beats lab data — I want to see what real users on real phones are experiencing.",
      "Image pipeline gets rebuilt: modern formats (AVIF/WebP), responsive srcset, lazy-loading below the fold, eager-loading the LCP hero, blurred placeholders.",
      "JavaScript gets ruthlessly audited. Remove what isn't earning its weight. Defer or async what can wait. Move the rest behind interaction. Self-host critical fonts to kill CLS.",
      "Server response, caching headers, and CDN config get tuned last — usually the lowest-leverage and highest-effort fix."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "Before/after Lighthouse reports and a CrUX trend chart you can show stakeholders.",
      "A documented performance budget — JS bytes, image bytes, third-party count — so future changes can't quietly regress.",
      "Monitoring hooked up: real-user metrics streaming into Search Console so you'll know within days if something breaks."
    ]
  }
];

const responsiveBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE PROBLEM",
    body: [
      "Over 60% of B2C traffic is mobile, but most sites still feel like the phone view was an afterthought — squeezed desktop columns, overflowing menus, tap targets that miss.",
      "And it's not just phones. Foldables, tablets in landscape, ultra-wide monitors, in-app webviews — each has its own quirks, and your site has to look intentional on every one."
    ]
  },
  {
    eyebrow: "MY APPROACH",
    body: [
      "Fluid typography (clamp-based) so type scales smoothly between breakpoints rather than jumping at fixed widths.",
      "Container queries where they help — components that respond to their own slot, not just viewport size.",
      "I test on real devices: physical iPhone, physical Android, iPad in both orientations, plus BrowserStack for the long tail (Samsung Internet, Brave iOS, in-app Instagram browser, Safari 15).",
      "Touch states get designed alongside hover states — they aren't the same interaction."
    ]
  },
  {
    eyebrow: "WHAT YOU GET",
    body: [
      "Documented breakpoint system in Figma and code: mobile (375), tablet (768), laptop (1024), desktop (1440), wide (1920).",
      "Cross-browser QA report with screenshots from 12+ device/browser combinations.",
      "A short style guide on accessibility patterns: focus rings, skip links, reduced-motion, prefers-color-scheme."
    ]
  }
];

const uxMistakesBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "I've audited hundreds of small-business sites in the last three years, and the same UX mistakes show up over and over. None of them are about visual design — they're about decision-making.",
      "Pretty doesn't convert. Clear converts. Here are the seven mistakes I see most often, and how to fix each one in an afternoon."
    ]
  },
  {
    eyebrow: "THE SEVEN MISTAKES",
    body: [
      "1. Carousel heroes. Nobody reads slide 2. Pick one message and commit.",
      "2. Vague CTAs. \"Learn more\" tells me nothing. \"Get a quote in 24 hours\" sets an expectation.",
      "3. Contact forms with 8+ fields. Every optional field cuts completion by ~5%. Ask for name, email, and one question. Get the rest in the follow-up.",
      "4. Hidden pricing. If you can't share pricing, share starting points. \"Projects from €3,500\" filters serious leads.",
      "5. Auto-playing video with sound. Don't.",
      "6. Animation everywhere. Motion should reward attention, not demand it. Reserve animation for state changes.",
      "7. No social proof above the fold. One real client name beats five generic testimonials."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "Every UX decision is a tradeoff between what you want to say and what the visitor wants to know. The visitor wins, every time.",
      "Audit your site against this list this week. If any one fix moves a number, you'll know what to do next."
    ]
  }
];

const userFlowBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "User flow isn't a diagram in Figma. It's the actual answer to a simple question: when someone lands on your site, what's the single most important next step, and how obvious is it?",
      "Most sites have eight equal next-steps competing for attention. The cursor hovers, then leaves."
    ]
  },
  {
    eyebrow: "THE METHOD",
    body: [
      "Step 1 — Define one primary action per page. Homepage: book a call. Service page: get a quote. Blog post: subscribe.",
      "Step 2 — Audit current paths. Open Analytics, look at the top 5 landing pages, and ask: where do users go next? If the answer is \"home page\" or \"exit,\" the flow is broken.",
      "Step 3 — Reduce decisions. Every additional link is a fork in the road. Cut secondary navigation on landing pages. Anchor CTAs that follow the scroll.",
      "Step 4 — Test with real humans. Five quick usability tests will surface the friction faster than any analytics dashboard. Watch them, don't ask them."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "A great user flow feels like a conversation, not a maze. Each page answers one question and points to the next one.",
      "If you can describe the ideal flow in three sentences, your visitors can follow it. If you can't, neither can they."
    ]
  }
];

const seoBasicsBlogBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "SEO in 2026 isn't about gaming algorithms. Google has gotten very good at ranking pages that actually answer questions clearly and load fast.",
      "Most of the wins for small businesses come from getting the boring fundamentals right, not from clever tricks."
    ]
  },
  {
    eyebrow: "THE FOUR ESSENTIALS",
    body: [
      "1. Title tag + meta description that name the search intent. Not your tagline — what the user typed.",
      "2. One H1 per page, matching the search query. H2s for sub-sections. Don't skip heading levels.",
      "3. Internal links with descriptive anchor text. \"Read our pricing\" beats \"click here.\" Link from high-traffic pages to high-value pages.",
      "4. Structured data — JSON-LD schema for LocalBusiness, Service, FAQ. It's the difference between a plain blue link and a rich snippet with stars, hours, and FAQ accordion in the SERP."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "Do these four things well and you'll outrank 70% of competitors who don't.",
      "Then add Core Web Vitals tuning, original content with first-hand experience, and consistent publishing. That's the whole game."
    ]
  }
];

const landingVsMultipageBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "Should this be a landing page or a full site? The wrong answer wastes either budget or conversions.",
      "It's not about size — it's about intent. Are you serving one purchase decision or building long-term brand equity?"
    ]
  },
  {
    eyebrow: "THE DECISION RULES",
    body: [
      "Choose a landing page when: you're driving paid traffic to one offer, the buying decision happens in a single session, social proof + offer + CTA is all the prospect needs.",
      "Choose a multi-page site when: visitors come from multiple sources with different questions, the sales cycle is longer than a week, brand credibility matters more than immediate conversion, you'll publish content over time.",
      "Some businesses need both — a multi-page brand site, plus dedicated landing pages per campaign. They don't conflict, they compound."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "Don't let \"a website\" become a default. Decide what the page is for, then choose the architecture that serves it.",
      "If you can't answer \"what one thing does this site do?\", you're not ready to build it yet."
    ]
  }
];

const logoBlogBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "A useful logo isn't art — it's identification. It has to survive at 16×16 pixels in a browser tab, at 24px on a mobile nav, and at 200px on a billboard. Most logos fail one of those tests.",
      "If your mark only works at one size, you don't have a logo. You have an illustration."
    ]
  },
  {
    eyebrow: "WHAT MAKES IT WORK",
    body: [
      "Simplicity. Two or three shapes maximum. Detail dies first when scaled down.",
      "One color version that still reads. If it only works in full color, it'll break on every printed receipt, embroidered uniform, and dark social avatar.",
      "A clear silhouette. Hold up the negative space. Is the shape still recognizable? That's the silhouette test.",
      "Distinctness. If your mark could be your competitor's mark with a different color, start over.",
      "Timelessness over trend. Gradient meshes age. Geometric clarity doesn't."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "Test your logo at 16×16, in black-and-white, and against three industry competitors side by side. Pass all three tests and you're set for a decade.",
      "And remember: a great logo doesn't replace a brand. A brand is the experience around the mark."
    ]
  }
];

const cleanLayoutBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "Spacing isn't empty. It's the single most powerful tool in layout design — and the most consistently misused.",
      "Most cramped sites aren't cramped because there's too much content. They're cramped because all the spacing is the same value."
    ]
  },
  {
    eyebrow: "THE PRINCIPLES",
    body: [
      "Use a modular spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Never use values outside the scale. Consistency reads as intent.",
      "Related elements get small gaps. Unrelated elements get large gaps. Proximity is hierarchy.",
      "Sections need to breathe. A safe rule: vertical section padding ≥ 1.5× your largest type. Anything less feels cluttered.",
      "Line length matters. Body text stays between 50–75 characters per line. Wider feels editorial; narrower feels mobile.",
      "Asymmetry is your friend. Centered everything = static. Off-axis layouts create tension and direction."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "Reduce the layout to grayscale. If hierarchy still reads clearly, the structure is sound. If it doesn't, no amount of color will save it.",
      "Whitespace is luxury. Cheap brands fill space. Premium brands earn it."
    ]
  }
];

const gridPlayBlocks: [DetailBlock, DetailBlock, DetailBlock] = [
  {
    eyebrow: "THE FRAME",
    body: [
      "A strict 12-column grid is a great starting point and a terrible ending point. Sites that snap to grid feel like spreadsheets.",
      "The trick is using the grid as scaffolding, then deliberately breaking it where breaks tell the story."
    ]
  },
  {
    eyebrow: "THE TECHNIQUES",
    body: [
      "Asymmetric columns: pair a 7-col content block with a 4-col accent. The off-balance ratio reads as editorial, not careless.",
      "Pull-out elements: let one image, quote, or number break out of its column. Use sparingly — once per scroll length, max.",
      "Vertical rhythm: align horizontal elements to a baseline grid (multiples of 4 or 8). Even when columns vary, vertical alignment keeps it composed.",
      "Negative space columns: leave an entire column empty next to dense content. The empty column is doing work.",
      "Diagonal motion: rotate one element 3–6 degrees against a strict grid. The eye finds it instantly without feeling chaotic."
    ]
  },
  {
    eyebrow: "THE TAKEAWAY",
    body: [
      "Grids exist so you can break them on purpose. Set the rule, then earn the exception.",
      "Look at any great editorial spread — Vanity Fair, The Gentlewoman, Apostrophe. The grid is invisible because it's doing exactly what it should: holding everything together while letting the content lead."
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
    blocks: websiteDesignBlocks,
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
    blocks: uiuxBlocks,
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
    blocks: seoBlocks,
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
    blocks: landingPageBlocks,
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
    blocks: performanceBlocks,
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
    blocks: responsiveBlocks,
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
    blocks: uxMistakesBlocks,
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
    blocks: userFlowBlocks,
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
    blocks: seoBasicsBlogBlocks,
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
    blocks: landingVsMultipageBlocks,
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
    blocks: logoBlogBlocks,
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
    blocks: cleanLayoutBlocks,
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
    blocks: gridPlayBlocks,
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
