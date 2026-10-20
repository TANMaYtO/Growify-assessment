"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  Camera,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
  Eye,
  Layers,
  Activity,
  Maximize2,
  Info,
  Sliders,
  ChevronLeft,
  ChevronRight,
  Split,
  ZoomIn,
} from "lucide-react";

/**
 * Garment specification interface for Lookify Virtual Try-On catalog.
 */
interface GarmentOption {
  id: string;
  name: string;
  category: string;
  fabric: string;
  color: string;
  accent: string;
  image: string;
  weight: string;
  vertices: string;
  stitchCount: string;
  fitNotes: string;
}

const garments: GarmentOption[] = [
  {
    id: "g-1",
    name: "Zardozi Hand-Embroidered Bridal Lehenga",
    category: "Bridal Couture",
    fabric: "Raw Silk & Handcrafted Gold Zardozi Threadwork",
    color: "#8B1E3F", // Deep Crimson
    accent: "Antique Gold",
    image: "/images/lookify/lehenga_crimson.jpg",
    weight: "480 g/m² Raw Silk",
    vertices: "24,800 Polygons",
    stitchCount: "240,000 Hand Stitches",
    fitNotes: "High-waist contour, calibrated 142cm hemline sweep with flared kalis",
  },
  {
    id: "g-2",
    name: "Heritage Bandhgala Velvet Sherwani",
    category: "Menswear Couture",
    fabric: "Micro-Velvet with Antique Brass Button Detailing",
    color: "#17102A", // Royal Ink
    accent: "Burnished Brass",
    image: "/images/lookify/sherwani_navy.jpg",
    weight: "360 g/m² Micro-Velvet",
    vertices: "18,400 Polygons",
    stitchCount: "110,000 Tonal Stitches",
    fitNotes: "Structured canvas chest piece, tailored mandarin collar, 18cm drop",
  },
  {
    id: "g-3",
    name: "Pleated Liquid Lamé Sculpted Gown",
    category: "Contemporary Luxury",
    fabric: "Liquid Metallic Lamé & Organza Fluting",
    color: "#B38F4D", // Champagne Gold
    accent: "Platinum Sheen",
    image: "/images/lookify/gown_gold.jpg",
    weight: "220 g/m² Liquid Lamé",
    vertices: "21,200 Polygons",
    stitchCount: "95,000 Micro-Pleats",
    fitNotes: "Architectural bodice, fluid asymmetric fluting with zero tension drag",
  },
];

/**
 * Shopper silhouette profile for virtual fit testing.
 */
interface ModelProfile {
  id: string;
  label: string;
  height: string;
  bustWaistHip: string;
  posture: string;
  image: string;
}

const modelProfiles: ModelProfile[] = [
  {
    id: "m-1",
    label: "Model Silhouette A",
    height: "5'9\"",
    bustWaistHip: "34-26-36",
    posture: "Neutral Upright • High Fashion",
    image: "/images/lookify/model_1.jpg",
  },
  {
    id: "m-2",
    label: "Model Silhouette B",
    height: "5'5\"",
    bustWaistHip: "36-30-40",
    posture: "Natural Curvature • Classic Fit",
    image: "/images/lookify/model_1.jpg",
  },
  {
    id: "m-3",
    label: "Model Silhouette C",
    height: "5'7\"",
    bustWaistHip: "32-25-35",
    posture: "Slender Contour • Editorial",
    image: "/images/lookify/model_1.jpg",
  },
];

/**
 * 24 Landmark coordinate definition for neural mesh overlay.
 */
interface LandmarkPoint {
  id: string;
  name: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  tension: string;
  zone: "shoulder" | "torso" | "waist" | "hip" | "hem";
}

const landmarkPoints: LandmarkPoint[] = [
  // Shoulders & Neck
  { id: "lm-1", name: "Suprasternal Notch (Neckline Anchor)", x: 50, y: 19, tension: "0.01 N/cm²", zone: "shoulder" },
  { id: "lm-2", name: "Left Acromion (Shoulder Apex)", x: 39, y: 22, tension: "0.04 N/cm²", zone: "shoulder" },
  { id: "lm-3", name: "Right Acromion (Shoulder Apex)", x: 61, y: 22, tension: "0.04 N/cm²", zone: "shoulder" },
  { id: "lm-4", name: "Mid-Clavicle Left", x: 44, y: 20, tension: "0.02 N/cm²", zone: "shoulder" },
  { id: "lm-5", name: "Mid-Clavicle Right", x: 56, y: 20, tension: "0.02 N/cm²", zone: "shoulder" },

  // Bust & Torso
  { id: "lm-6", name: "Left Bust Apex", x: 43, y: 29, tension: "0.03 N/cm²", zone: "torso" },
  { id: "lm-7", name: "Right Bust Apex", x: 57, y: 29, tension: "0.03 N/cm²", zone: "torso" },
  { id: "lm-8", name: "Sternal Midpoint", x: 50, y: 31, tension: "0.02 N/cm²", zone: "torso" },
  { id: "lm-9", name: "Inframammary Fold Left", x: 44, y: 36, tension: "0.05 N/cm²", zone: "torso" },
  { id: "lm-10", name: "Inframammary Fold Right", x: 56, y: 36, tension: "0.05 N/cm²", zone: "torso" },

  // Natural Waist
  { id: "lm-11", name: "Natural Waist Curvature Left", x: 42, y: 43, tension: "0.07 N/cm²", zone: "waist" },
  { id: "lm-12", name: "Natural Waist Curvature Right", x: 58, y: 43, tension: "0.07 N/cm²", zone: "waist" },
  { id: "lm-13", name: "Umbilical Centerline", x: 50, y: 45, tension: "0.03 N/cm²", zone: "waist" },

  // Hips & Pelvis
  { id: "lm-14", name: "High Hip (ASIS) Left", x: 40, y: 52, tension: "0.06 N/cm²", zone: "hip" },
  { id: "lm-15", name: "High Hip (ASIS) Right", x: 60, y: 52, tension: "0.06 N/cm²", zone: "hip" },
  { id: "lm-16", name: "Greater Trochanter Left", x: 38, y: 61, tension: "0.04 N/cm²", zone: "hip" },
  { id: "lm-17", name: "Greater Trochanter Right", x: 62, y: 61, tension: "0.04 N/cm²", zone: "hip" },

  // Lower Sweep / Flare Boundary
  { id: "lm-18", name: "Mid-Thigh Falloff Left", x: 36, y: 71, tension: "0.01 N/cm²", zone: "hem" },
  { id: "lm-19", name: "Mid-Thigh Falloff Right", x: 64, y: 71, tension: "0.01 N/cm²", zone: "hem" },
  { id: "lm-20", name: "Knee Level Flare Left", x: 33, y: 81, tension: "0.00 N/cm²", zone: "hem" },
  { id: "lm-21", name: "Knee Level Flare Right", x: 67, y: 81, tension: "0.00 N/cm²", zone: "hem" },
  { id: "lm-22", name: "Floor Hem Sweep Left", x: 28, y: 92, tension: "0.00 N/cm²", zone: "hem" },
  { id: "lm-23", name: "Floor Hem Center Apex", x: 50, y: 93, tension: "0.00 N/cm²", zone: "hem" },
  { id: "lm-24", name: "Floor Hem Sweep Right", x: 72, y: 92, tension: "0.00 N/cm²", zone: "hem" },
];

type ViewMode = "vto" | "mesh" | "heatmap" | "fabric";

/**
 * Interactive concept simulator for Lookify Virtual Try-On,
 * demonstrating neural garment draping, silhouette matching, 24-point mesh,
 * tension heatmaps, and photorealistic split-screen comparison.
 */
export function LookifySimulator(): React.JSX.Element {
  const [selectedGarment, setSelectedGarment] = useState<GarmentOption>(garments[0]);
  const [selectedModel, setSelectedModel] = useState<ModelProfile>(modelProfiles[0]);
  const [viewMode, setViewMode] = useState<ViewMode>("vto");
  const [isDraping, setIsDraping] = useState<boolean>(false);
  const [drapeComplete, setDrapeComplete] = useState<boolean>(true);
  const [progressStep, setProgressStep] = useState<string>("Neural Draping Converged");
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0-100% split
  const [activeLandmark, setActiveLandmark] = useState<LandmarkPoint | null>(null);
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**
   * Executes simulated neural mesh warping and physics resolution.
   */
  function handleRunDraping(): void {
    setIsDraping(true);
    setDrapeComplete(false);
    setProgressStep("Phase 1: Extracting 24 biometric keypoints & body posture...");

    setTimeout(() => {
      setProgressStep("Phase 2: Calculating cloth weight falloff & collision physics...");
    }, 900);

    setTimeout(() => {
      setProgressStep("Phase 3: Baking micro-fold ambient shadows & directional light...");
    }, 1800);

    setTimeout(() => {
      setIsDraping(false);
      setDrapeComplete(true);
      setProgressStep("Draped in 2.74 seconds • Edge WebGL Accelerated");
    }, 2740);
  }

  /**
   * Resets the simulator to initial preview state.
   */
  function handleReset(): void {
    setDrapeComplete(false);
    setIsDraping(false);
    setProgressStep("Ready for neural simulation");
    setSliderPosition(50);
    setActiveLandmark(null);
  }

  /**
   * Handles dragging for the interactive split comparison slider.
   */
  const handleSliderMove = useCallback(
    (clientX: number): void => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPosition(percent);
    },
    []
  );

  /**
   * Mouse and Touch move handlers for the interactive slider.
   */
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    if (isDraggingSlider) {
      handleSliderMove(e.clientX);
    }
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  }

  return (
    <div className="bg-[#120D1C] text-white rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F7A8C]/20 text-[#1F7A8C] text-xs font-mono border border-[#1F7A8C]/40 mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lookify Neural Engine v2.4 • Edge WebGL Accelerated</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl font-light text-white tracking-tight">
            Interactive Couture Try-On &amp; Biometric Studio
          </h3>
          <p className="text-xs sm:text-sm text-[#D9D2C5]/80 mt-1 font-sans">
            Photorealistic Virtual Try-On engineered specifically for high-AOV Indian bridal couture, menswear, and luxury eveningwear.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {drapeComplete && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#D9D2C5] hover:text-white px-3 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo</span>
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#D9D2C5]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry Live</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Controls & Right High-Fidelity Canvas */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
        
        {/* Left Control Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Step 1: Select Luxury Garment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#D9D2C5]">
                1. Select Couture Silhouette:
              </label>
              <span className="text-[10px] font-mono text-[#1F7A8C]">3 Ingested Pieces</span>
            </div>

            <div className="space-y-2.5">
              {garments.map((g) => {
                const isSelected = selectedGarment.id === g.id;
                return (
                  <button
                    key={g.id}
                    disabled={isDraping}
                    onClick={() => {
                      setSelectedGarment(g);
                      if (!drapeComplete) handleRunDraping();
                    }}
                    className={`group w-full text-left p-3 rounded-xl border transition-all text-xs font-sans cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? "bg-[#241B3B] border-[#1F7A8C] text-white shadow-xl ring-1 ring-[#1F7A8C]"
                        : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                    }`}
                  >
                    {/* Garment Real Thumbnail */}
                    <div className="relative w-14 h-18 rounded-lg overflow-hidden shrink-0 border border-white/20 bg-black/40">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={g.image}
                        alt={g.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span
                        className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full border border-white"
                        style={{ backgroundColor: g.color }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-medium text-white truncate">
                          {g.name}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono text-[#1F7A8C] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#1F7A8C]/20 border border-[#1F7A8C]/30 shrink-0 ml-1">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#D9D2C5]/80 truncate mt-0.5">{g.fabric}</div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#D9D2C5]/60 mt-1">
                        <span>{g.weight}</span>
                        <span>•</span>
                        <span>{g.vertices}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Shopper Profile */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#D9D2C5]">
                2. Select Shopper Body Profile:
              </label>
              <span className="text-[10px] font-mono text-white/50">Bespoke Fit Map</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {modelProfiles.map((m) => {
                const isSelected = selectedModel.id === m.id;
                return (
                  <button
                    key={m.id}
                    disabled={isDraping}
                    onClick={() => {
                      setSelectedModel(m);
                      if (!drapeComplete) handleRunDraping();
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#241B3B] border-[#1F7A8C] text-white ring-1 ring-[#1F7A8C] shadow-lg"
                        : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                    }`}
                  >
                    <div className="text-xs font-mono font-medium text-white">{m.label.split(" ")[2]}</div>
                    <div className="text-[11px] font-serif text-[#1F7A8C] mt-0.5">{m.height}</div>
                    <div className="text-[10px] text-[#D9D2C5]/70 mt-0.5 font-mono">{m.bustWaistHip}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Interactive View Mode Switcher */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
              3. Telemetry &amp; Visualization Layer:
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setViewMode("vto")}
                className={`p-2.5 rounded-lg border text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "vto"
                    ? "bg-[#1F7A8C] border-[#1F7A8C] text-white font-semibold shadow-md"
                    : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                }`}
              >
                <Split className="w-4 h-4" />
                <span>Split VTO</span>
              </button>

              <button
                onClick={() => setViewMode("mesh")}
                className={`p-2.5 rounded-lg border text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "mesh"
                    ? "bg-[#1F7A8C] border-[#1F7A8C] text-white font-semibold shadow-md"
                    : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>24-Pt Mesh</span>
              </button>

              <button
                onClick={() => setViewMode("heatmap")}
                className={`p-2.5 rounded-lg border text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "heatmap"
                    ? "bg-[#1F7A8C] border-[#1F7A8C] text-white font-semibold shadow-md"
                    : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Fit Tension</span>
              </button>

              <button
                onClick={() => setViewMode("fabric")}
                className={`p-2.5 rounded-lg border text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "fabric"
                    ? "bg-[#1F7A8C] border-[#1F7A8C] text-white font-semibold shadow-md"
                    : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                }`}
              >
                <ZoomIn className="w-4 h-4" />
                <span>Fabric Spec</span>
              </button>
            </div>
          </div>

          {/* Run Inference Action Button */}
          <div className="pt-2">
            <button
              onClick={handleRunDraping}
              disabled={isDraping}
              className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md ${
                isDraping
                  ? "bg-white/10 text-[#D9D2C5] cursor-not-allowed"
                  : "bg-[#1F7A8C] hover:bg-[#176675] text-white border border-[#1F7A8C]/60 hover:shadow-lg"
              }`}
            >
              {isDraping ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="font-mono text-xs">{progressStep}</span>
                </>
              ) : drapeComplete ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Re-run Neural Physics Engine</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>Simulate Neural Garment Drape</span>
                </>
              )}
            </button>
          </div>

          {/* Ephemeral Privacy Commitment */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-[11px] text-[#D9D2C5]/80 font-sans">
            <div className="flex items-center gap-2 text-white font-mono text-xs">
              <ShieldCheck className="w-4 h-4 text-[#1F7A8C] shrink-0" />
              <span className="font-medium">Ephemeral Biometric Memory Assurance</span>
            </div>
            <p className="leading-relaxed">
              Customer photos are processed in temporary RAM buffers for real-time keypoint extraction. Zero face or body biometric vectors are ever persisted to cloud storage. DPDP Act 2023 &amp; GDPR compliant.
            </p>
          </div>

        </div>

        {/* Right Interactive Visual Canvas (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#090511] rounded-3xl border border-white/15 p-4 sm:p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[580px]">
            
            {/* Top Canvas Telemetry HUD */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs font-mono text-[#D9D2C5] z-20">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDraping ? "bg-amber-400 animate-ping" : drapeComplete ? "bg-emerald-400" : "bg-white/40"
                  }`}
                />
                <span className="text-white font-medium">
                  {viewMode === "vto" && "Split-Screen Draping View"}
                  {viewMode === "mesh" && "24-Point Neural Landmark Topology"}
                  {viewMode === "heatmap" && "Finite-Element Tension Field & Contours"}
                  {viewMode === "fabric" && "Micro-Texture & Specular Analysis"}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-[#1F7A8C]">Latency: 2.74s</span>
                <span>•</span>
                <span>Model: {selectedModel.label}</span>
              </div>
            </div>

            {/* Center Visual Stage Area */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsDraggingSlider(true)}
              onMouseUp={() => setIsDraggingSlider(false)}
              onMouseLeave={() => setIsDraggingSlider(false)}
              className="relative my-4 mx-auto w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 select-none bg-black/60 shadow-inner group"
            >
              {/* ========================================================= */}
              {/* MODE 1: SPLIT VTO (BEFORE & AFTER INTERACTIVE SLIDER) */}
              {/* ========================================================= */}
              {viewMode === "vto" && (
                <>
                  {/* Left Layer: Original Shopper Silhouette */}
                  <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedModel.image}
                      alt={selectedModel.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white/90 border border-white/20">
                      Shopper Body Profile
                    </div>
                  </div>

                  {/* Right Layer: Neural Draped Couture Garment (Clipped by slider) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedGarment.image}
                      alt={selectedGarment.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Clean Shadow Falloff */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                    <div className="absolute top-3 right-3 bg-[#1F7A8C] px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/20">
                      Lookify Neural Drape
                    </div>
                  </div>

                  {/* Interactive Split Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-30 flex items-center justify-center"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-8 h-8 -ml-4 rounded-full bg-[#1F7A8C] border-2 border-white shadow-2xl flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform">
                      <Split className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Drag Prompt Hint */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-[#D9D2C5] border border-white/20 pointer-events-none z-20">
                    Drag slider to compare fit ({Math.round(sliderPosition)}%)
                  </div>
                </>
              )}

              {/* ========================================================= */}
              {/* MODE 2: 24-POINT NEURAL LANDMARK MESH TOPOLOGY */}
              {/* ========================================================= */}
              {viewMode === "mesh" && (
                <div className="relative w-full h-full bg-[#0D0817]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.label}
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  />

                  {/* SVG Triangulation Mesh Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Torso & Shoulder Triangles */}
                    <polygon
                      points="50%,19% 39%,22% 43%,29%"
                      fill="#1F7A8C"
                      fillOpacity="0.15"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                    <polygon
                      points="50%,19% 61%,22% 57%,29%"
                      fill="#1F7A8C"
                      fillOpacity="0.15"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                    <polygon
                      points="43%,29% 57%,29% 50%,31%"
                      fill="#6B3BA6"
                      fillOpacity="0.2"
                      stroke="#6B3BA6"
                      strokeWidth="1"
                    />

                    {/* Ribcage & Waist Triangulation */}
                    <polygon
                      points="43%,29% 50%,31% 42%,43%"
                      fill="#1F7A8C"
                      fillOpacity="0.1"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                    />
                    <polygon
                      points="57%,29% 50%,31% 58%,43%"
                      fill="#1F7A8C"
                      fillOpacity="0.1"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                    />
                    <polygon
                      points="42%,43% 58%,43% 50%,45%"
                      fill="#6B3BA6"
                      fillOpacity="0.15"
                      stroke="#6B3BA6"
                      strokeWidth="1"
                    />

                    {/* Pelvic Belt to Hem Sweep */}
                    <polygon
                      points="42%,43% 50%,45% 40%,52%"
                      fill="#1F7A8C"
                      fillOpacity="0.1"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                    />
                    <polygon
                      points="58%,43% 50%,45% 60%,52%"
                      fill="#1F7A8C"
                      fillOpacity="0.1"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                    />
                    <polygon
                      points="40%,52% 60%,52% 38%,61%"
                      fill="#6B3BA6"
                      fillOpacity="0.12"
                      stroke="#6B3BA6"
                      strokeWidth="1"
                    />
                    <polygon
                      points="60%,52% 38%,61% 62%,61%"
                      fill="#6B3BA6"
                      fillOpacity="0.12"
                      stroke="#6B3BA6"
                      strokeWidth="1"
                    />

                    {/* Lower Flare Wireframe */}
                    <polygon
                      points="38%,61% 62%,61% 28%,92%"
                      fill="#1F7A8C"
                      fillOpacity="0.08"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <polygon
                      points="62%,61% 28%,92% 72%,92%"
                      fill="#1F7A8C"
                      fillOpacity="0.08"
                      stroke="#1F7A8C"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  </svg>

                  {/* 24 Interactive Pulsing Nodes */}
                  {landmarkPoints.map((pt) => {
                    const isHovered = activeLandmark?.id === pt.id;
                    return (
                      <button
                        key={pt.id}
                        onMouseEnter={() => setActiveLandmark(pt)}
                        onClick={() => setActiveLandmark(pt)}
                        style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all cursor-pointer z-30 ${
                          isHovered
                            ? "w-4 h-4 bg-emerald-400 ring-4 ring-emerald-400/40 scale-125"
                            : "w-2.5 h-2.5 bg-[#1F7A8C] border border-white hover:scale-125"
                        }`}
                        title={pt.name}
                      />
                    );
                  })}

                  {/* Active Landmark Readout Overlay */}
                  <div className="absolute top-4 left-4 right-4 bg-black/85 backdrop-blur-md rounded-xl p-3 border border-white/20 text-xs font-mono space-y-1 z-30">
                    <div className="flex items-center justify-between text-[#1F7A8C]">
                      <span>{activeLandmark ? activeLandmark.name : "Hover any point on mesh"}</span>
                      <span>{activeLandmark ? activeLandmark.tension : "24 Anchors"}</span>
                    </div>
                    <div className="text-[10px] text-white/70">
                      {activeLandmark
                        ? `Coordinate: [X: ${activeLandmark.x}%, Y: ${activeLandmark.y}%] • Zone: ${activeLandmark.zone.toUpperCase()}`
                        : "Hover over body vertices to inspect localized fabric shear and tension calculations."}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 3: FINITE-ELEMENT TENSION HEATMAP */}
              {/* ========================================================= */}
              {viewMode === "heatmap" && (
                <div className="relative w-full h-full bg-[#0D0817]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedGarment.image}
                    alt={selectedGarment.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Technical CAD Finite-Element Stress Boundaries (Zero AI Slop Gradients) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {/* Bust Contour Zone */}
                    <rect
                      x="30%"
                      y="24%"
                      width="40%"
                      height="12%"
                      rx="6"
                      fill="#F59E0B"
                      fillOpacity="0.14"
                      stroke="#F59E0B"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                    />
                    {/* Waist Cinch Zone */}
                    <rect
                      x="33%"
                      y="39%"
                      width="34%"
                      height="10%"
                      rx="4"
                      fill="#10B981"
                      fillOpacity="0.16"
                      stroke="#10B981"
                      strokeWidth="1.2"
                    />
                    {/* Hemline Flare Sweep Zone */}
                    <polygon
                      points="35%,54% 65%,54% 75%,88% 25%,88%"
                      fill="#06B6D4"
                      fillOpacity="0.12"
                      stroke="#06B6D4"
                      strokeWidth="1"
                      strokeDasharray="5 3"
                    />
                  </svg>

                  {/* Tension Hotspot Indicators */}
                  <div className="absolute top-[26%] left-[32%] right-[32%] py-1 px-2 rounded bg-[#17102A]/90 backdrop-blur-xs text-[#D9D2C5] text-[9px] font-mono font-medium text-center border border-amber-400 z-20">
                    Bust Contour: 99.4% (1.2% Strain)
                  </div>

                  <div className="absolute top-[41%] left-[34%] right-[34%] py-1 px-2 rounded bg-[#17102A]/90 backdrop-blur-xs text-[#D9D2C5] text-[9px] font-mono font-medium text-center border border-emerald-400 z-20">
                    Waist Cinch: 98.7% Optimal
                  </div>

                  <div className="absolute top-[75%] left-[28%] right-[28%] py-1 px-2 rounded bg-[#17102A]/90 backdrop-blur-xs text-[#D9D2C5] text-[9px] font-mono font-medium text-center border border-cyan-400 z-20">
                    Hem Sweep: +8.4cm Fluid Flare
                  </div>

                  {/* Heatmap Legend */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#17102A]/95 backdrop-blur-md rounded-xl p-3 border border-white/20 text-[10px] font-mono space-y-2 z-20">
                    <div className="text-white font-medium">Finite-Element Strain Analysis:</div>
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Bespoke Drape (&lt;1.5%)</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>Structured Contour (2-4%)</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>Free Falloff (0%)</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 4: FABRIC MICRO-TEXTURE & SPECULAR ANALYSIS */}
              {/* ========================================================= */}
              {viewMode === "fabric" && (
                <div className="relative w-full h-full bg-[#17102A] p-6 flex flex-col justify-between">
                  <div className="space-y-4 z-10">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedGarment.image}
                        alt={selectedGarment.name}
                        className="w-full h-full object-cover scale-150 transform hover:scale-175 transition-transform duration-500"
                      />
                      {/* Technical Optical Reticle Overlay */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1F7A8C" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1F7A8C" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="50%" cy="50%" r="40" stroke="#1F7A8C" strokeWidth="1" fill="none" />
                      </svg>
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/85 text-[10px] font-mono text-white border border-white/20">
                        8x Macro Threadwork Calibration
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-serif text-lg text-white">{selectedGarment.name}</div>
                      <div className="text-xs text-[#D9D2C5]/80 font-sans">{selectedGarment.fitNotes}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-[#D9D2C5] z-10">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/60 block">Weave Density:</span>
                      <span className="text-white font-medium">380 Threads / Inch</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/60 block">Specular Roughness:</span>
                      <span className="text-white font-medium">0.34 (Satin Shimmer)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/60 block">Bending Rigidity:</span>
                      <span className="text-white font-medium">4.2 μN·m</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/60 block">Collision Precision:</span>
                      <span className="text-white font-medium">0.02 mm Tolerance</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Meta Stats Strip */}
            <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5 rounded-2xl py-3 px-4 text-center text-[10px] font-mono text-[#D9D2C5] z-10">
              <div>
                <span className="text-white/60 block">Mesh Vertices</span>
                <span className="text-white font-medium">{selectedGarment.vertices}</span>
              </div>
              <div>
                <span className="text-white/60 block">Physics Precision</span>
                <span className="text-white font-medium">&lt; 0.04mm Shear</span>
              </div>
              <div>
                <span className="text-white/60 block">Biometric Retention</span>
                <span className="text-emerald-400 font-medium">0.0s (RAM Only)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
