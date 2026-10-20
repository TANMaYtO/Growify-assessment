"use client";

import React from "react";

interface RunningMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  variant?: "gold" | "obsidian" | "subtle";
  separator?: string;
  className?: string;
}

/**
 * Renders a buttery-smooth, GPU-accelerated infinite horizontal running marquee ribbon.
 * Duplicates content for gapless looping and supports pause on cursor hover.
 */
export function RunningMarquee({
  items,
  direction = "left",
  variant = "subtle",
  separator = "✦",
  className = "",
}: RunningMarqueeProps): React.JSX.Element {
  const variantStyles = {
    gold: "bg-[#9E7D47] text-[#0E0D0C] font-mono font-medium border-y border-[#8C6D38]/50",
    obsidian: "bg-[#0E0D0C] text-[#FAF8F5] font-serif border-y border-white/10",
    subtle: "bg-white/70 text-[#111111] font-mono border-y border-[#D9D2C5]/80 backdrop-blur-md",
  };

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`relative w-full overflow-hidden py-3 sm:py-3.5 select-none ${variantStyles[variant]} ${className}`}
      aria-hidden="true"
    >
      <div className={animationClass}>
        {/* Render twice for gapless infinite seamless loop */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center shrink-0">
            {items.map((item, itemIndex) => (
              <span
                key={`${copyIndex}-${itemIndex}`}
                className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest px-4 sm:px-6 whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="ml-4 sm:ml-6 opacity-40 text-xs">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
