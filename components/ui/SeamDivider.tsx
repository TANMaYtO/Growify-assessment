"use client";

import React, { useRef, useState, useEffect } from "react";

/**
 * Interface defining properties for the couture seam divider motif.
 */
interface SeamDividerProps {
  label?: string;
  variant?: "cross-stitch" | "running-stitch" | "dashed" | string;
  className?: string;
}

/**
 * Renders an editorial seam divider component inspired by high-fashion tailoring.
 * Features an animated on-scroll stitch expansion and subtle antique gold markers.
 */
export function SeamDivider({
  label,
  variant = "dashed",
  className = "",
}: SeamDividerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center py-6 overflow-hidden ${className}`}
    >
      {/* Background dashed seam with on-scroll expand */}
      <div
        className="absolute inset-0 flex items-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"
        style={{
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        }}
        aria-hidden="true"
      >
        {variant === "cross-stitch" ? (
          <div
            className="w-full h-1 opacity-35"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #9E7D47 0, #9E7D47 1.5px, transparent 0, transparent 8px), repeating-linear-gradient(-45deg, #8C6D38 0, #8C6D38 1.5px, transparent 0, transparent 8px)`,
            }}
          />
        ) : (
          <div className="w-full border-t border-dashed border-[#D9D2C5]" />
        )}
      </div>

      {/* Center notch / marker */}
      {label ? (
        <div
          className={`relative px-4 bg-[#FAF8F5] text-[11px] font-mono tracking-widest uppercase text-[#111111]/70 flex items-center gap-2 z-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="w-1.5 h-1.5 bg-[#9E7D47] rounded-full inline-block animate-pulse" />
          <span>{label}</span>
          <span className="w-1.5 h-1.5 bg-[#9E7D47] rounded-full inline-block animate-pulse" />
        </div>
      ) : (
        <div
          className={`relative px-3 bg-[#FAF8F5] flex items-center gap-1.5 z-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="w-1 h-3 border-l border-r border-[#D9D2C5] inline-block" />
          <span className="w-1.5 h-1.5 bg-[#9E7D47] rounded-full inline-block animate-pulse" />
          <span className="w-1 h-3 border-l border-r border-[#D9D2C5] inline-block" />
        </div>
      )}
    </div>
  );
}
