"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  decimals?: number;
  className?: string;
}

/**
 * Renders a silky on-scroll numeric counter with exponential ease-out interpolation.
 * Activates once when scrolled into the viewport via IntersectionObserver.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1800,
  decimals = 0,
  className = "",
}: AnimatedCounterProps): React.JSX.Element {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();

          function updateNumber(now: number): void {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);

            // Silky exponential ease-out curve
            const easeOutProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const current = easeOutProgress * value;
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              setDisplayValue(value);
            }
          }

          requestAnimationFrame(updateNumber);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, durationMs, hasAnimated]);

  return (
    <span ref={containerRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}
