"use client";

import React, { useEffect, useState } from "react";

/**
 * Editorial bespoke cursor follower for desktop viewports.
 * Features an instantaneous gold micro-point and an inertia-lagged outer brass ring
 * that morphs state dynamically upon hovering interactive elements.
 */
export function CustomCursor(): React.JSX.Element | null {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [laggedPos, setLaggedPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on desktop pointer devices that support hover without reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    function handleMouseMove(e: MouseEvent): void {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });

      // Check if target is an interactive element
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest("[role='button']") ||
        target?.closest("[data-cursor-interactive]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    }

    function handleMouseDown(): void {
      setIsClicking(true);
    }

    function handleMouseUp(): void {
      setIsClicking(false);
    }

    function renderLoop(): void {
      // Smooth linear interpolation for the lagging outer ring
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      setLaggedPos({ x: currentX, y: currentY });

      animationFrameId = requestAnimationFrame(renderLoop);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isEnabled || pos.x < 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
    >
      {/* Lagged Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out will-change-transform ${
          isHovering
            ? "w-12 h-12 -ml-6 -mt-6 border border-[#9E7D47] bg-[#9E7D47]/10 scale-105"
            : isClicking
            ? "w-6 h-6 -ml-3 -mt-3 border border-[#9E7D47] bg-[#9E7D47]/20 scale-90"
            : "w-8 h-8 -ml-4 -mt-4 border border-[#9E7D47]/60"
        }`}
        style={{
          transform: `translate3d(${laggedPos.x}px, ${laggedPos.y}px, 0)`,
        }}
      />

      {/* Immediate Micro-Point */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#9E7D47] shadow-[0_0_4px_#9E7D47] will-change-transform"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </div>
  );
}
