import React from "react";

/**
 * Interface defining properties for the couture seam divider motif.
 */
interface SeamDividerProps {
  label?: string;
  variant?: "cross-stitch" | "running-stitch" | "dashed" | string;
  className?: string;
}

/**
 * Renders an editorial seam divider component inspired by high-fashion tailoring,
 * featuring running-stitch, cross-stitch, or subtle dashed patterns.
 */
export function SeamDivider({
  label,
  variant = "dashed",
  className = "",
}: SeamDividerProps): React.JSX.Element {
  return (
    <div className={`relative flex items-center justify-center py-6 overflow-hidden ${className}`}>
      {/* Background dashed seam */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        {variant === "cross-stitch" ? (
          <div
            className="w-full h-1 opacity-40"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #6B3BA6 0, #6B3BA6 2px, transparent 0, transparent 8px), repeating-linear-gradient(-45deg, #1F7A8C 0, #1F7A8C 2px, transparent 0, transparent 8px)`,
            }}
          />
        ) : (
          <div className="w-full border-t border-dashed border-[#D9D2C5]" />
        )}
      </div>

      {/* Center notch / marker */}
      {label ? (
        <div className="relative px-4 bg-[#F5F1EA] text-[11px] font-mono tracking-widest uppercase text-[#17102A]/60 flex items-center gap-2 z-10">
          <span className="w-1.5 h-1.5 bg-[#6B3BA6] rounded-full inline-block" />
          <span>{label}</span>
          <span className="w-1.5 h-1.5 bg-[#6B3BA6] rounded-full inline-block" />
        </div>
      ) : (
        <div className="relative px-3 bg-[#F5F1EA] flex items-center gap-1.5 z-10">
          <span className="w-1 h-3 border-l border-r border-[#D9D2C5] inline-block" />
          <span className="w-1.5 h-1.5 bg-[#1F7A8C] rounded-full inline-block" />
          <span className="w-1 h-3 border-l border-r border-[#D9D2C5] inline-block" />
        </div>
      )}
    </div>
  );
}
