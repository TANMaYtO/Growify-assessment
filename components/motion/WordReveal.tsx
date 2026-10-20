"use client";

import React, { useEffect, useRef, useState } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number; // base delay in ms
  stagger?: number; // delay between each word in ms
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

/**
 * Editorial typography unmasking component that animates words upward with staggered
 * timing upon entering the viewport, evoking the tactile precision of luxury editorial print.
 */
export function WordReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 35,
  as: Component = "span",
}: WordRevealProps): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const currentEl = containerRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const words = text.split(" ");
  const Tag = Component as any;

  return (
    <Tag
      ref={containerRef}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          <span
            className={`inline-block will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${wordClassName}`}
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(110%)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${delay + idx * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
