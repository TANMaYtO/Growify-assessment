"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  speed?: number; // e.g. 0.08 - subtle luxury drift
  priority?: boolean;
}

/**
 * Editorial image container featuring subtle scroll-depth parallax motion.
 * As the user scrolls through the page, the image moves at a slightly differentiated
 * rate within its masked frame to provide tactile physical depth.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-16/10",
  speed = 0.08,
  priority = false,
}: ParallaxImageProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;

    function handleScroll(): void {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate when element is in or near viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const relativeCenter = rect.top + rect.height / 2 - windowHeight / 2;
        const calculatedOffset = relativeCenter * speed * -1;
        setOffsetY(calculatedOffset);
      }
    }

    function onScroll(): void {
      animationFrameId = requestAnimationFrame(handleScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-full object-cover scale-110 will-change-transform transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.1)`,
        }}
      />
    </div>
  );
}
