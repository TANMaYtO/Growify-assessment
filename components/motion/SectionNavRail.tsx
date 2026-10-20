"use client";

import React, { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  num: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: "hero", num: "01", label: "Overview" },
  { id: "our-plan", num: "02", label: "Our Plan" },
  { id: "pathfinder", num: "03", label: "Pathfinder" },
  { id: "scale", num: "04", label: "S.C.A.L.E." },
  { id: "commissions", num: "05", label: "Commissions" },
  { id: "technology", num: "06", label: "Lookify AI" },
  { id: "ecosystem", num: "07", label: "Ecosystem" },
  { id: "why-growify", num: "08", label: "Why Growify" },
  { id: "audit-intake", num: "09", label: "Audit Intake" },
];

/**
 * Pinned vertical section rail for desktop viewports, providing subtle scroll-spy
 * tracking, dynamic gold active indicators, and smooth navigation between editorial chapters.
 */
export function SectionNavRail(): React.JSX.Element | null {
  const [activeId, setActiveId] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll(): void {
      // Only show rail once scrolled slightly past the top hero fold
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active section based on viewport midpoint
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const item = SECTIONS[i];
        if (!item) continue;
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Scrolls smoothly to the target section container.
   */
  function scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Page chapter navigation"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3.5 pointer-events-auto transition-opacity duration-500 ease-out animate-in fade-in"
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id;
        const isHovered = hoveredId === section.id;

        return (
          <div
            key={section.id}
            className="group relative flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection(section.id)}
            onMouseEnter={() => setHoveredId(section.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Monospace Hover / Active Tooltip */}
            <div
              className={`transition-all duration-200 pointer-events-none select-none text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded ${
                isActive
                  ? "opacity-100 bg-[#0E0D0C] text-[#FAF8F5] border border-[#9E7D47]/40 shadow-xs"
                  : isHovered
                  ? "opacity-90 bg-[#FAF8F5] text-[#111111] border border-[#D9D2C5] shadow-xs translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
            >
              <span className="text-[#9E7D47] mr-1.5">{section.num}</span>
              <span>{section.label}</span>
            </div>

            {/* Tactile Indicator Dot */}
            <div className="relative flex items-center justify-center w-4 h-4">
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-[#9E7D47] animate-ping opacity-60"
                  style={{ animationDuration: "3s" }}
                />
              )}
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-2.5 h-2.5 bg-[#9E7D47] shadow-[0_0_8px_rgba(158,125,71,0.6)]"
                    : "w-1.5 h-1.5 bg-[#111111]/30 group-hover:bg-[#111111]/70 group-hover:scale-125"
                }`}
              />
            </div>
          </div>
        );
      })}
    </nav>
  );
}
