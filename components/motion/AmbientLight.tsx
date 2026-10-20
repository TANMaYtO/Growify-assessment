"use client";

import React, { useState } from "react";

interface AmbientLightProps {
  children: React.ReactNode;
  className?: string;
  glowRadius?: number;
  glowOpacity?: number;
}

/**
 * Creates a subtle, atmospheric warm antique gold ambient spotlight that tracks
 * cursor coordinates across dark architectural canvas sections.
 */
export function AmbientLight({
  children,
  className = "",
  glowRadius = 600,
  glowOpacity = 0.07,
}: AmbientLightProps): React.JSX.Element {
  const [position, setPosition] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }

  function handleMouseLeave(): void {
    setPosition((prev) => ({ ...prev, active: false }));
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
        style={{
          opacity: position.active ? 1 : 0,
          background: `radial-gradient(${glowRadius}px circle at ${position.x}px ${position.y}px, rgba(158, 125, 71, ${glowOpacity}), transparent 70%)`,
        }}
      />

      {children}
    </div>
  );
}
