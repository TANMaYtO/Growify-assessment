"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Sparkles,
  Layers,
  Users,
  Cpu,
  Monitor,
  ArrowRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2,
} from "lucide-react";

interface Hotspot {
  id: string;
  progressPercent: number; // 0 to 100
  title: string;
  department: string;
  description: string;
  coordinates: { x: number; y: number }; // percentage on canvas
  keyDetail: string;
}

const hotspots: Hotspot[] = [
  {
    id: "h-1",
    progressPercent: 12,
    title: "The Heritage Brand Wall & Reception",
    department: "Executive & Client Welcome",
    description:
      "The entrance gallery displays archival campaign lookbooks and digital flagship milestones for Tarun Tahiliani, Mahima Mahajan, and House of Masaba.",
    coordinates: { x: 28, y: 45 },
    keyDetail: "Founded in New Delhi in 2019 • 35+ full-time strategists and developers.",
  },
  {
    id: "h-2",
    progressPercent: 38,
    title: "The Growth War Room",
    department: "Strategy & Performance Architecture",
    description:
      "Where high-stakes End-of-Season (EOS) campaigns and multi-territory US/GCC scaling sprints are engineered in real time with live telemetry monitors.",
    coordinates: { x: 52, y: 40 },
    keyDetail: "Live GMV tickers, CAPI server health monitors, and daily attribution briefs.",
  },
  {
    id: "h-3",
    progressPercent: 68,
    title: "Lookify Computer Vision & AI Lab",
    department: "In-House R&D",
    description:
      "Dedicated workspace for our machine learning and 3D garment physics team developing neural draping algorithms and Lookify mobile WebGL engines.",
    coordinates: { x: 74, y: 55 },
    keyDetail: "High-spec GPU rigs running continuous fabric tension and landmarking simulations.",
  },
  {
    id: "h-4",
    progressPercent: 92,
    title: "Shopify Engineering & Concierge Sales Bullpen",
    department: "Commerce Operations & Assisted Selling",
    description:
      "Full-stack developers assembling Liquid 2.0 themes alongside our 18+ hour assisted sales concierge desk answering high-AOV bridal queries across global timezones.",
    coordinates: { x: 85, y: 38 },
    keyDetail: "Zero outsourced code • Multi-timezone luxury sales desk handling direct WhatsApp consultations.",
  },
];

/**
 * Interactive virtual studio walkthrough component featuring an HTML5 Canvas
 * rendering engine, scrubbing controls, hotspot tooltips, and a responsive Lite Mode snap carousel.
 */
export function OfficeTourWalkthrough(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState<number>(15);
  const [isLiteMode, setIsLiteMode] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(hotspots[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Detect low-power devices on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isMobile || prefersReducedMotion) {
        setIsLiteMode(true);
      }
    }
  }, []);

  // Procedural studio visual rendering on canvas to ensure buttery 60fps across all devices
  useEffect(() => {
    if (isLiteMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    function renderCanvas(): void {
      if (!canvas || !ctx) return;
      const width = canvas.width;
      const height = canvas.height;

      // Clear screen
      ctx.fillStyle = "#17102A";
      ctx.fillRect(0, 0, width, height);

      // Studio architectural perspective grid
      const normProgress = progress / 100;
      const vanishX = width * (0.3 + normProgress * 0.4);
      const vanishY = height * 0.45;

      // Draw perspective room lines
      ctx.strokeStyle = "rgba(107, 59, 166, 0.25)";
      ctx.lineWidth = 1.5;

      for (let i = 0; i <= width; i += 80) {
        ctx.beginPath();
        ctx.moveTo(i, height);
        ctx.lineTo(vanishX, vanishY);
        ctx.stroke();
      }

      for (let i = 0; i <= width; i += 80) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(vanishX, vanishY);
        ctx.stroke();
      }

      // Draw studio floor horizon
      const horizonGradient = ctx.createLinearGradient(0, vanishY, 0, height);
      horizonGradient.addColorStop(0, "rgba(23, 16, 42, 0.95)");
      horizonGradient.addColorStop(0.5, "rgba(36, 27, 59, 0.8)");
      horizonGradient.addColorStop(1, "rgba(10, 6, 20, 0.95)");

      ctx.fillStyle = horizonGradient;
      ctx.fillRect(0, vanishY, width, height - vanishY);

      // Architectural studio pillars moving with progress
      ctx.fillStyle = "rgba(31, 122, 140, 0.2)";
      for (let p = 1; p <= 4; p++) {
        const pillarX = (width * 0.25 * p - normProgress * 300) % width;
        ctx.fillRect(pillarX, 40, 24, height - 80);
      }

      // Ambient studio lighting
      const lightGrad = ctx.createRadialGradient(
        vanishX,
        vanishY,
        10,
        vanishX,
        vanishY,
        width * 0.6
      );
      lightGrad.addColorStop(0, "rgba(31, 122, 140, 0.25)");
      lightGrad.addColorStop(0.5, "rgba(107, 59, 166, 0.15)");
      lightGrad.addColorStop(1, "transparent");

      ctx.fillStyle = lightGrad;
      ctx.fillRect(0, 0, width, height);

      // Render hotspot anchors on canvas
      hotspots.forEach((h) => {
        const hDistance = Math.abs(h.progressPercent - progress);
        if (hDistance < 25) {
          const alpha = 1 - hDistance / 25;
          const hX = (width * h.coordinates.x) / 100;
          const hY = (height * h.coordinates.y) / 100;

          // Pulse ring
          ctx.strokeStyle = `rgba(31, 122, 140, ${alpha * 0.8})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(hX, hY, 14 + Math.sin(Date.now() / 200) * 3, 0, Math.PI * 2);
          ctx.stroke();

          // Core circle
          ctx.fillStyle = `rgba(245, 241, 234, ${alpha})`;
          ctx.beginPath();
          ctx.arc(hX, hY, 6, 0, Math.PI * 2);
          ctx.fill();

          // Label
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.font = "11px Inter, sans-serif";
          ctx.fillText(h.title, hX + 16, hY + 4);
        }
      });

      // Overlay frame index & telemetry
      ctx.fillStyle = "rgba(217, 210, 197, 0.7)";
      ctx.font = "10px monospace";
      ctx.fillText(
        `STUDIO CAM 01 // FRAME ${Math.round(normProgress * 240)}/240 // VIRTUAL WALKTHROUGH`,
        24,
        32
      );
    }

    renderCanvas();
    animationFrameId = requestAnimationFrame(function loop(): void {
      renderCanvas();
      animationFrameId = requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, isLiteMode]);

  // Update active hotspot when scrubbing near one
  useEffect(() => {
    const closest = hotspots.reduce((prev, curr) =>
      Math.abs(curr.progressPercent - progress) < Math.abs(prev.progressPercent - progress)
        ? curr
        : prev
    );
    if (Math.abs(closest.progressPercent - progress) < 18) {
      setActiveHotspot(closest);
    }
  }, [progress]);

  /**
   * Toggles playback simulation of the studio walkthrough.
   */
  function handleTogglePlay(): void {
    setIsPlaying((prev) => !prev);
  }

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 2 : prev + 1));
    }, 80);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="space-y-8">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D9D2C5]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#17102A]">
            Campus: South Delhi Flagship HQ (Green Park)
          </span>
        </div>

        {/* Capability Gate / Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLiteMode(false)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              !isLiteMode
                ? "bg-[#17102A] text-white shadow-xs"
                : "bg-white text-[#17102A]/70 hover:bg-[#F5F1EA] border border-[#D9D2C5]"
            }`}
          >
            Enhanced Canvas Mode
          </button>
          <button
            onClick={() => setIsLiteMode(true)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              isLiteMode
                ? "bg-[#17102A] text-white shadow-xs"
                : "bg-white text-[#17102A]/70 hover:bg-[#F5F1EA] border border-[#D9D2C5]"
            }`}
          >
            Lite Snap Carousel
          </button>
        </div>
      </div>

      {!isLiteMode ? (
        /* MODE A: Enhanced Canvas Interactive Experience */
        <div className="relative rounded-2xl overflow-hidden border border-[#D9D2C5] shadow-2xl bg-[#17102A]">
          {/* Main Canvas Viewport */}
          <canvas
            ref={canvasRef}
            width={1200}
            height={600}
            className="w-full h-[400px] sm:h-[550px] object-cover cursor-ew-resize"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickPercent = ((e.clientX - rect.left) / rect.width) * 100;
              setProgress(Math.round(clickPercent));
            }}
          />

          {/* Active Hotspot HUD Overlay */}
          {activeHotspot && (
            <div className="absolute top-6 right-6 max-w-sm bg-[#17102A]/90 backdrop-blur-md border border-white/20 rounded-xl p-5 text-white shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#1F7A8C]">
                <span>{activeHotspot.department}</span>
                <span>{activeHotspot.progressPercent}% Depth</span>
              </div>
              <h4 className="font-serif text-lg font-medium text-white">
                {activeHotspot.title}
              </h4>
              <p className="text-xs text-[#D9D2C5] leading-relaxed font-sans">
                {activeHotspot.description}
              </p>
              <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-[#D9D2C5]/80">
                {activeHotspot.keyDetail}
              </div>
            </div>
          )}

          {/* Bottom Scrubbing Toolbar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17102A] via-[#17102A]/80 to-transparent p-6 text-white space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#D9D2C5]">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  {isPlaying ? "Pause Tour" : "Auto-Walkthrough"}
                </button>
                <span>Drag slider or scrub horizontal position</span>
              </div>
              <span>Timeline: {progress}%</span>
            </div>

            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#1F7A8C]"
              />

              {/* Milestone Dots */}
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setProgress(h.progressPercent)}
                  style={{ left: `${h.progressPercent}%` }}
                  className={`absolute -top-1 w-4 h-4 -ml-2 rounded-full border-2 transition-all ${
                    Math.abs(h.progressPercent - progress) < 8
                      ? "bg-[#1F7A8C] border-white scale-125"
                      : "bg-[#17102A] border-white/60 hover:scale-110"
                  }`}
                  title={h.title}
                />
              ))}
            </div>

            {/* Hotspot Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setProgress(h.progressPercent)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    Math.abs(h.progressPercent - progress) < 8
                      ? "bg-[#1F7A8C] text-white"
                      : "bg-white/5 text-[#D9D2C5]/70 hover:bg-white/10"
                  }`}
                >
                  {h.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* MODE B: Lite Snap Carousel (Optimized for Mobile & Low Power) */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotspots.map((spot, idx) => (
              <div
                key={spot.id}
                className="bg-white border border-[#D9D2C5] rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B3BA6]">
                    Milestone 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-[#1F7A8C]">
                    {spot.department}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#17102A]">
                  {spot.title}
                </h3>

                <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
                  {spot.description}
                </p>

                <div className="p-4 rounded-lg bg-[#F5F1EA] border border-[#D9D2C5] text-xs font-mono text-[#17102A]/80">
                  <strong className="block text-[#17102A] mb-1 font-medium">Headquarters Insight:</strong>
                  {spot.keyDetail}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-[#F5F1EA] border border-[#D9D2C5] flex items-center justify-between text-xs font-mono text-[#17102A]/70">
            <span>Viewing in Lite Mode for maximum battery &amp; frame rate efficiency.</span>
            <button
              onClick={() => setIsLiteMode(false)}
              className="text-[#6B3BA6] underline hover:text-[#17102A]"
            >
              Switch to Enhanced Canvas Mode
            </button>
          </div>
        </div>
      )}

      {/* Cultural Manifesto & Operating Pillars */}
      <div className="pt-16 border-t border-[#D9D2C5]">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
            Our Operating Ethos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
            The Principles That Shape Our Studio
          </h2>
          <p className="text-sm text-[#17102A]/70 font-sans">
            We reject the traditional agency model of junior handoffs and superficial vanity metrics. Growify is an engineering and commerce firm built on five core disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-3">
            <span className="text-xs font-mono text-[#1F7A8C]">Principle 01</span>
            <h4 className="font-serif text-lg font-medium text-[#17102A]">Evidence Over Assumption</h4>
            <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
              Every design decision, campaign budget, and architecture choice is backed by verifiable store telemetry, not subjective intuition.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-3">
            <span className="text-xs font-mono text-[#6B3BA6]">Principle 02</span>
            <h4 className="font-serif text-lg font-medium text-[#17102A]">100% In-House Engineering</h4>
            <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
              Zero outsourced contractor relays. Every line of Liquid, React, and Python is written and maintained by practitioners under our Delhi roof.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-3">
            <span className="text-xs font-mono text-[#1F7A8C]">Principle 03</span>
            <h4 className="font-serif text-lg font-medium text-[#17102A]">Direct CXO Collaboration</h4>
            <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
              Brand founders work directly with lead engineers and growth architects, avoiding layers of account managers and relay friction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
