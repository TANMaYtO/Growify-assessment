"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

/**
 * High-performance scroll-driven reveal component utilizing IntersectionObserver
 * and GPU-accelerated transforms to introduce sections with luxury editorial choreography.
 */
export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.08,
  once = true,
}: ScrollRevealProps): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute transition styles based on active state and animation type
  const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

  const getTransformStyles = (): React.CSSProperties => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: "none",
        transition: baseTransition,
        willChange: "opacity, transform",
      };
    }

    let initialTransform = "translateY(28px)";
    if (animation === "fade-in") initialTransform = "none";
    if (animation === "fade-left") initialTransform = "translateX(-28px)";
    if (animation === "fade-right") initialTransform = "translateX(28px)";
    if (animation === "scale-up") initialTransform = "scale(0.95)";

    return {
      opacity: 0,
      transform: initialTransform,
      transition: baseTransition,
      willChange: "opacity, transform",
    };
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-container ${className}`}
      style={getTransformStyles()}
    >
      {children}
    </div>
  );
}
