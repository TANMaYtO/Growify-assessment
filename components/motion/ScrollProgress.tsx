"use client";

import React, { useEffect, useState } from "react";

/**
 * Renders a high-precision hairline scroll progress indicator at the top of the viewport,
 * providing subtle visual feedback on reading progress through long-form editorial sections.
 */
export function ScrollProgress(): React.JSX.Element {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    function updateProgress(): void {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = window.scrollY / scrollHeight;
        setProgress(Math.min(1, Math.max(0, currentProgress)));
      }
    }

    function onScroll(): void {
      animationFrameId = requestAnimationFrame(updateProgress);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-[60] pointer-events-none"
    >
      <div
        className="h-full bg-[#9E7D47] transition-transform duration-75 ease-out origin-left will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
