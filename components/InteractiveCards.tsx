"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

type CardConfig = {
  src: string;
  alt: string;
  baseRotate: number;
  depth: number;
};

const cards: CardConfig[] = [
  { src: "/assets/media/spline-cards/Build.png",       alt: "Let's build — design and development card", baseRotate: -4, depth: 1.1 },
  { src: "/assets/media/spline-cards/Expertise.png",   alt: "Expertise card",                            baseRotate: 3,  depth: 0.85 },
  { src: "/assets/media/spline-cards/WebDesigner.png", alt: "Web Designer process card",                 baseRotate: -2, depth: 0.95 },
  { src: "/assets/media/spline-cards/STUDIO.png",      alt: "Studio portrait card",                      baseRotate: 4,  depth: 0.9 },
  { src: "/assets/media/spline-cards/Connect.png",     alt: "Connect card",                              baseRotate: -3, depth: 1 },
  { src: "/assets/media/spline-cards/GetInTouch.png",  alt: "Get in touch card",                         baseRotate: 5,  depth: 1.15 }
];

type InteractiveCardsProps = {
  className?: string;
};

export function InteractiveCards({ className = "" }: InteractiveCardsProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper || !stage) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsHover = window.matchMedia("(hover: hover)").matches;

    cardRefs.current.forEach((card, i) => {
      if (card) gsap.set(card, { rotate: cards[i].baseRotate });
    });

    if (reducedMotion || !supportsHover) return;

    const stageRotX = gsap.quickTo(stage, "rotateX", { duration: 0.9, ease: "power2.out" });
    const stageRotY = gsap.quickTo(stage, "rotateY", { duration: 0.9, ease: "power2.out" });

    const onMove = (event: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const xNorm = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const yNorm = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      stageRotY(xNorm * 9);
      stageRotX(-yNorm * 6);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const depth = cards[i].depth;
        gsap.to(card, {
          x: xNorm * 18 * depth,
          y: yNorm * 12 * depth,
          duration: 0.9,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    };

    const onLeave = () => {
      stageRotX(0);
      stageRotY(0);
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: "power2.out", overwrite: "auto" });
      });
    };

    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    return () => {
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${className}`}
      style={{ perspective: "1400px" }}
      role="img"
      aria-label="Interactive collage of six work cards that respond to the cursor"
    >
      <div
        ref={stageRef}
        className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {cards.map((card, i) => (
          <div
            key={card.src}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveCards;
