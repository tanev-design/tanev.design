"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogs, faqs, image, services } from "@/data/site";
import type { DetailPage } from "@/data/site";
import { DetailModal, type DetailKind } from "@/components/DetailModal";
import { FAQ } from "@/components/FAQ";
import { PortraitHero } from "@/components/PortraitHero";
import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { Component as CoolBlobEffect } from "@/components/ui/cool-blob-effect";
import { InteractiveCards } from "@/components/InteractiveCards";
import {
  ParallaxFeatureSection,
  ParallaxImage,
  type ParallaxFeatureItem
} from "@/components/ui/parallax-scroll-feature-section";

const reasons: ParallaxFeatureItem[] = [
  {
    id: "offer",
    eyebrow: "01",
    title: "Built Around The Offer",
    description:
      "Every section earns its place. What you do. Why it matters. What happens next.",
    imageUrl: image.style.businessWebsite,
    imageAlt: "Business website layout planning",
    reverse: false
  },
  {
    id: "mobile",
    eyebrow: "02",
    title: "Mobile-first UX",
    description:
      "Designed for real screens first. Clear on mobile. Strong everywhere else.",
    imageUrl: image.style.responsive,
    imageAlt: "Responsive mobile-first layout",
    reverse: true
  },
  {
    id: "seo",
    eyebrow: "03",
    title: "SEO and Speed Included",
    description:
      "Clean structure, fast pages, and launch basics are built in from day one.",
    imageUrl: image.style.seo,
    imageAlt: "On-page SEO and performance work",
    reverse: false
  }
];

const technicalStack = [
  {
    title: "React / Vite",
    copy: "Custom front-end builds when the project needs them.",
    tags: ["React", "Vite"]
  },
  {
    title: "HTML5 / CSS3 / JavaScript",
    copy: "Clean structure. Responsive styling. Predictable behavior.",
    tags: ["HTML5", "CSS3", "JS"]
  },
  {
    title: "SVG Animations",
    copy: "Small motion details that support the interface.",
    tags: ["SVG", "Motion"]
  },
  {
    title: "Fast Deployment",
    copy: "Launch-ready setup for Vercel, Netlify, or Cloudflare Pages.",
    tags: ["Vercel", "Netlify", "Cloudflare"]
  },
  {
    title: "Accessibility",
    copy: "Readable UI, clear labels, contrast, and keyboard states.",
    tags: ["WCAG", "A11y"]
  },
  {
    title: "Analytics Setup",
    copy: "Analytics and Search Console set up cleanly.",
    tags: ["GA", "Search Console"]
  }
] as const;

export default function Home() {
  const [active, setActive] = useState<{ kind: DetailKind; page: DetailPage; origin?: { x: number; y: number } } | null>(null);
  const openDetail = (kind: DetailKind, page: DetailPage, event?: MouseEvent<HTMLElement>) => {
    const rect = event?.currentTarget.getBoundingClientRect();
    setActive({
      kind,
      page,
      origin: rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : undefined
    });
  };
  const closeDetail = () => setActive(null);

  return (
    <div className="elite-home" style={{ position: "relative", zIndex: 1 }}>
      <PortraitHero />

      <CapabilityMarquee />

      <section className="elite-section page-shell elite-intro" id="work">
        <div className="elite-intro__rail" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="elite-intro__eyebrow reveal">
          <span>{"// Intro"}</span>
          <span>Independent designer &amp; developer</span>
        </div>

        <div className="elite-intro__layout">
          <div className="elite-intro__copy">
            <h2 className="elite-intro__headline" data-split-intro>
              I design and build <span className="elite-intro__accent">premium websites</span> for people who want the{" "}
              <span className="elite-intro__accent">details handled</span> without the agency layer.
            </h2>

            <div className="elite-intro__panel reveal">
              <span className="elite-intro__mark" aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
              <div>
                <p>
                  One person. Strategy, design, build, polish, launch. No handoffs.
                </p>

                <div className="elite-intro__actions">
                  <a className="elite-pill" href="#contact" data-cursor="START">
                    Let&apos;s get in touch
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="elite-intro__visual reveal" aria-hidden="true">
            <div className="elite-intro__visual-frame">
              <CoolBlobEffect />
            </div>
          </div>
        </div>
      </section>

      <section className="elite-section page-shell elite-why" id="about">
        <div className="elite-section__head reveal">
          <p className="elite-kicker">Why it works</p>
          <h2>Clear to read. Fast to use. Easy to trust.</h2>
        </div>

        <ParallaxFeatureSection items={reasons} className="elite-why__parallax" />
      </section>

      <section className="elite-section page-shell" id="services">
        <div className="elite-section__head reveal">
          <p className="elite-kicker">Services</p>
          <h2>Pick what needs to move.</h2>
        </div>

        <div className="elite-service-grid">
          {services.map((service) => (
            <button
              type="button"
              className="elite-service-card reveal"
              key={service.slug}
              data-cursor="OPEN"
              onClick={(event) => openDetail("Service", service, event)}
            >
              <span>{service.price}</span>
              <h3>{service.label}</h3>
              <p>{service.summary}</p>
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      <section className="elite-section page-shell elite-experience" id="stack">
        <div className="elite-section__head reveal">
          <p className="elite-kicker">Tools &amp; Technologies</p>
          <h2>The stack behind the finish.</h2>
        </div>

        <InteractiveCards className="mb-12 sm:mb-16" />

        <div className="elite-experience__grid">
          {technicalStack.map((item) => (
            <article className="elite-exp-card reveal" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <div>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="elite-section page-shell elite-faq">
        <div className="elite-section__head reveal">
          <p className="elite-kicker">FAQ</p>
          <h2>Before I build.</h2>
        </div>

        <div className="elite-faq__grid">
          <figure className="elite-faq__media reveal">
            <ParallaxImage
              src={image.style.faq}
              alt="Website project briefing cards"
              width={900}
              height={900}
              rounded={false}
            />
          </figure>
          <div className="elite-faq__list">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="elite-section page-shell" id="journal">
        <div className="elite-section__head reveal">
          <p className="elite-kicker">Design notes</p>
          <h2>Short notes. Useful ideas.</h2>
        </div>

        <div className="elite-blog-grid">
          {blogs.slice(0, 3).map((post) => (
            <button
              type="button"
              className="elite-blog-card reveal"
              key={post.slug}
              data-cursor="READ"
              onClick={(event) => openDetail("Blog", post, event)}
            >
              <Image
                src={post.cover}
                width={800}
                height={520}
                alt={`${post.title} article cover`}
                sizes="(max-width: 760px) 92vw, (max-width: 1200px) 33vw, 400px"
                loading="eager"
                fetchPriority="high"
                className="elite-blog-card__img"
              />
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <h3>{post.subtitle}</h3>
              <p>
                Read note
                <ArrowRight size={14} aria-hidden="true" />
              </p>
            </button>
          ))}
        </div>
      </section>

      <DetailModal page={active?.page ?? null} kind={active?.kind ?? "Project"} origin={active?.origin} onClose={closeDetail} />
    </div>
  );
}
