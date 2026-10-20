"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Renders a floating circular back-to-top button with an integrated SVG scroll progress ring,
 * offering tactile programmatic elevation to the header with luxury feedback.
 */
export function ScrollToTop(): React.JSX.Element | null {
  const [progress, setProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let animationFrameId: number;

    function handleScroll(): void {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = window.scrollY / scrollHeight;
        setProgress(Math.min(1, Math.max(0, currentProgress)));
      }

      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
  }, []);

  /**
   * Smoothly scrolls the window to the very top fold.
   */
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#0E0D0C] text-[#FAF8F5] border border-[#9E7D47]/40 shadow-xl flex items-center justify-center group hover:scale-110 hover:border-[#9E7D47] transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#9E7D47]"
    >
      {/* Dynamic SVG Progress Ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#9E7D47"
          strokeWidth="2.2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out"
        />
      </svg>

      {/* Upward Arrow Icon */}
      <ArrowUp className="w-4 h-4 text-[#FAF8F5] group-hover:text-[#9E7D47] transition-colors duration-200 group-hover:-translate-y-0.5 transform" />
    </button>
  );
}
