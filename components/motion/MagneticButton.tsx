"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  magneticRadius?: number;
  pullFactor?: number;
}

/**
 * Renders an interactive luxury button with subtle cursor magnetic attraction
 * and smooth spring physics. Supports both anchor navigation and button actions.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  magneticRadius = 60,
  pullFactor = 0.25,
}: MagneticButtonProps): React.JSX.Element {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < magneticRadius) {
      setOffset({
        x: deltaX * pullFactor,
        y: deltaY * pullFactor,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }

  function handleMouseLeave(): void {
    setOffset({ x: 0, y: 0 });
  }

  const transformStyle = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className="inline-block cursor-pointer">
      {content}
    </div>
  );
}
