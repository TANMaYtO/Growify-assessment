"use client";

import React, { useRef, useState } from "react";

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * Wraps children with a subtle luxury 3D perspective tilt and dynamic cursor light reflection.
 * Resets smoothly to neutral alignment on mouse leave.
 */
export function ParallaxCard({
  children,
  className = "",
  maxTilt = 5,
}: ParallaxCardProps): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>("none");
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  /**
   * Calculates perspective tilt angle and glare reflection based on cursor coordinate deltas.
   */
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (y - 0.5) * -maxTilt * 2;
    const tiltY = (x - 0.5) * maxTilt * 2;

    setTransformStyle(
      `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
    );
    setGlarePosition({
      x: x * 100,
      y: y * 100,
      opacity: 0.12,
    });
  }

  /**
   * Resets transformation and hides specular reflection when pointer leaves the container.
   */
  function handleMouseLeave(): void {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 280ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic Specular Gold Sheen Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(158, 125, 71, 0.45) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
