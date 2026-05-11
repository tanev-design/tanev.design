"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { DetailPage } from "@/data/site";

export type DetailKind = "Project" | "Service" | "Blog";

type DetailModalProps = {
  page: DetailPage | null;
  kind: DetailKind;
  origin?: { x: number; y: number };
  onClose: () => void;
};

export function DetailModal({ page, kind, origin, onClose }: DetailModalProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!page) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [page, onClose]);

  if (typeof window === "undefined") return null;

  const originPoint = origin ? `${origin.x}px ${origin.y}px` : "50% 50%";
  const isService = kind === "Service";
  const overlayInitial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, clipPath: `circle(0px at ${originPoint})` };
  const overlayAnimate = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, clipPath: `circle(150vmax at ${originPoint})` };
  const overlayExit = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, clipPath: `circle(0px at ${originPoint})` };

  const renderDefaultContent = (activePage: DetailPage) => {
    const blog = activePage as DetailPage & { date?: string; readTime?: string };
    const isBlog = kind === "Blog";
    const formattedDate = blog.date
      ? new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      : null;

    return (
      <>
        <motion.header
          className="detail-modal__hero"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.16 : 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="elite-kicker">{kind}</p>
          <h2 id="detail-modal-title">{activePage.title}</h2>
          <p className="detail-modal__subtitle">{activePage.subtitle}</p>
          <div className="detail-modal__meta">
            <div>
              <span>{activePage.categoryLabel}</span>
              <strong>{activePage.categories.join(" / ")}</strong>
            </div>
            <div>
              <span>{isBlog && formattedDate ? "Published" : activePage.typeLabel}</span>
              <strong>
                {isBlog && formattedDate
                  ? `${formattedDate}${blog.readTime ? ` — ${blog.readTime} read` : ""}`
                  : activePage.typeValue}
              </strong>
            </div>
          </div>
        </motion.header>

        <motion.figure
          className="detail-modal__cover"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.16 : 0.6, ease: [0.2, 0.8, 0.2, 1], delay: reduceMotion ? 0 : 0.08 }}
        >
          <Image
            src={activePage.cover}
            width={1600}
            height={920}
            alt={`${activePage.title} cover`}
            sizes="(max-width: 900px) 92vw, 920px"
          />
        </motion.figure>

        {activePage.blocks.map((block, index) => (
          <motion.section
            className="detail-modal__block"
            key={block.eyebrow}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.16 : 0.46,
              ease: [0.2, 0.8, 0.2, 1],
              delay: reduceMotion ? 0 : 0.14 + index * 0.08
            }}
          >
            <p className="elite-kicker">{block.eyebrow}</p>
            <div>
              {block.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.section>
        ))}
      </>
    );
  };

  const renderServiceContent = (activePage: DetailPage) => {
    const service = activePage as DetailPage & { deliverables?: string[]; summary?: string };
    const deliverables = service.deliverables?.length ? service.deliverables : activePage.categories;

    return (
      <motion.div
        className="service-modal"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduceMotion ? 0 : 0.07, delayChildren: reduceMotion ? 0 : 0.08 } }
        }}
      >
        <motion.header
          className="service-modal__hero"
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] } }
          }}
        >
          <div className="service-modal__copy">
            <p className="elite-kicker">{activePage.compactTitle}</p>
            <h2 id="detail-modal-title">{activePage.title}</h2>
            <p className="service-modal__subtitle">{activePage.subtitle}</p>

            <div className="service-modal__chips" aria-label="Included focus areas">
              {deliverables.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <figure className="service-modal__visual">
            <Image
              src={activePage.cover}
              width={1200}
              height={820}
              alt={`${activePage.title} service preview`}
              sizes="(max-width: 900px) 92vw, 420px"
            />
            <figcaption>
              <span>{activePage.typeLabel}</span>
              <strong>{activePage.typeValue}</strong>
            </figcaption>
          </figure>
        </motion.header>

        <motion.div
          className="service-modal__summary"
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: [0.2, 0.8, 0.2, 1] } }
          }}
        >
          <span>{activePage.categoryLabel}</span>
          <strong>{activePage.categories.join(" / ")}</strong>
          <p>{service.summary ?? activePage.subtitle}</p>
        </motion.div>

        <section className="service-modal__route" aria-label={`${activePage.title} service details`}>
          {activePage.blocks.map((block, index) => (
            <motion.article
              className="service-modal__step"
              key={block.eyebrow}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.2, 0.8, 0.2, 1] } }
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="elite-kicker">{block.eyebrow}</p>
                {block.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </section>
      </motion.div>
    );
  };

  const content = (
    <AnimatePresence>
      {page ? (
        <motion.div
          key={page.slug}
          className={`detail-modal detail-modal--${kind.toLowerCase()}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
          initial={overlayInitial}
          animate={overlayAnimate}
          exit={overlayExit}
          transition={{ duration: reduceMotion ? 0.16 : 0.42, ease: [0.2, 0.8, 0.2, 1] }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="detail-modal__panel"
            initial={{ y: reduceMotion ? 0 : 42, opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: reduceMotion ? 0 : 16, opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            transition={{ duration: reduceMotion ? 0.16 : 0.46, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button
              type="button"
              className="detail-modal__close"
              onClick={onClose}
              aria-label="Close"
              data-cursor="CLOSE"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="detail-modal__scroll">
              {isService ? renderServiceContent(page) : renderDefaultContent(page)}

              <div className="detail-modal__pair">
                <Image
                  src={page.detailImages[0]}
                  width={860}
                  height={680}
                  alt={`${page.title} detail one`}
                  sizes="(max-width: 900px) 92vw, 440px"
                />
                <Image
                  src={page.detailImages[1]}
                  width={860}
                  height={680}
                  alt={`${page.title} detail two`}
                  sizes="(max-width: 900px) 92vw, 440px"
                />
              </div>

              <div className="detail-modal__cta">
                <Link
                  className="elite-pill elite-pill--light"
                  href={page.ctaHref}
                  target={page.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={page.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="OPEN"
                >
                  {page.ctaLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
