"use client";

import React, { useState } from "react";
import { Sparkles, Camera, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck, Eye } from "lucide-react";

interface GarmentOption {
  id: string;
  name: string;
  category: string;
  fabric: string;
  color: string;
  accent: string;
}

const garments: GarmentOption[] = [
  {
    id: "g-1",
    name: "Zardozi Embroidered Bridal Lehenga",
    category: "Bridal Couture",
    fabric: "Raw Silk & Handcrafted Gold Threadwork",
    color: "#8B1E3F", // Deep Crimson
    accent: "Rose Gold",
  },
  {
    id: "g-2",
    name: "Heritage Bandhgala Velvet Sherwani",
    category: "Menswear Couture",
    fabric: "Micro-Velvet with Antique Brass Buttons",
    color: "#17102A", // Royal Ink
    accent: "Burnished Gold",
  },
  {
    id: "g-3",
    name: "Pleated Metallic Sculpted Cocktail Gown",
    category: "Contemporary Luxury",
    fabric: "Liquid Lamé & Organza Fluting",
    color: "#B38F4D", // Champagne Gold
    accent: "Platinum",
  },
];

interface ModelProfile {
  id: string;
  label: string;
  height: string;
  bustWaistHip: string;
}

const modelProfiles: ModelProfile[] = [
  { id: "m-1", label: "Model Silhouette A", height: "5'9\"", bustWaistHip: "34-26-36" },
  { id: "m-2", label: "Model Silhouette B", height: "5'5\"", bustWaistHip: "36-30-40" },
  { id: "m-3", label: "Model Silhouette C", height: "5'7\"", bustWaistHip: "32-25-35" },
];

/**
 * Interactive concept simulator for Lookify Virtual Try-On,
 * demonstrating neural garment draping, silhouette matching, and real-time inference.
 */
export function LookifySimulator(): React.JSX.Element {
  const [selectedGarment, setSelectedGarment] = useState<GarmentOption>(garments[0]);
  const [selectedModel, setSelectedModel] = useState<ModelProfile>(modelProfiles[0]);
  const [isDraping, setIsDraping] = useState<boolean>(false);
  const [drapeComplete, setDrapeComplete] = useState<boolean>(false);
  const [progressStep, setProgressStep] = useState<string>("Ready");

  /**
   * Executes simulated neural mesh warping and physics resolution.
   */
  function handleRunDraping(): void {
    setIsDraping(true);
    setDrapeComplete(false);
    setProgressStep("Extracting keypoint body mesh (24 landmarks)...");

    setTimeout(() => {
      setProgressStep("Calculating fabric tension & weight falloff...");
    }, 900);

    setTimeout(() => {
      setProgressStep("Applying micro-fold illumination & shadow baking...");
    }, 1800);

    setTimeout(() => {
      setIsDraping(false);
      setDrapeComplete(true);
      setProgressStep("Draped in 2.74 seconds");
    }, 2800);
  }

  /**
   * Resets the simulator to initial state.
   */
  function handleReset(): void {
    setDrapeComplete(false);
    setIsDraping(false);
    setProgressStep("Ready");
  }

  return (
    <div className="bg-[#17102A] text-white rounded-2xl border border-white/15 p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1F7A8C]/20 text-[#1F7A8C] text-xs font-mono border border-[#1F7A8C]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lookify Neural Engine v2.4 (SDK Preview)</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
            Interactive Couture Try-On Simulator
          </h3>
        </div>

        {drapeComplete && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D9D2C5] hover:text-white px-3 py-1.5 rounded border border-white/20 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Step 1: Select Garment */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
              1. Select Luxury Garment Silhouette:
            </label>
            <div className="space-y-2">
              {garments.map((g) => (
                <button
                  key={g.id}
                  disabled={isDraping}
                  onClick={() => {
                    setSelectedGarment(g);
                    setDrapeComplete(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs font-sans ${
                    selectedGarment.id === g.id
                      ? "bg-[#241B3B] border-[#1F7A8C] text-white shadow-md ring-1 ring-[#1F7A8C]"
                      : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-white">{g.name}</span>
                    <span
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: g.color }}
                    />
                  </div>
                  <div className="text-[11px] text-[#D9D2C5]/70 mt-1">{g.fabric}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Silhouette Profile */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
              2. Select Shopper Body Profile:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {modelProfiles.map((m) => (
                <button
                  key={m.id}
                  disabled={isDraping}
                  onClick={() => {
                    setSelectedModel(m);
                    setDrapeComplete(false);
                  }}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    selectedModel.id === m.id
                      ? "bg-[#241B3B] border-[#1F7A8C] text-white ring-1 ring-[#1F7A8C]"
                      : "bg-white/5 border-white/10 text-[#D9D2C5] hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-mono font-medium text-white">{m.label}</div>
                  <div className="text-[10px] text-[#D9D2C5]/70 mt-0.5">{m.height}</div>
                  <div className="text-[9px] text-[#D9D2C5]/50 mt-0.5 font-mono">{m.bustWaistHip}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleRunDraping}
              disabled={isDraping}
              className={`w-full py-4 rounded-xl font-medium text-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                isDraping
                  ? "bg-white/10 text-[#D9D2C5] cursor-not-allowed"
                  : "bg-[#1F7A8C] hover:bg-[#1F7A8C]/90 text-white"
              }`}
            >
              {isDraping ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{progressStep}</span>
                </>
              ) : drapeComplete ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Draping Rendered • Click to Re-simulate</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>Run Neural Draping Inference</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#D9D2C5]/70 pt-2 border-t border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1F7A8C] shrink-0" />
            <span>Ephemeral zero-storage memory buffer. Zero customer biometric retention.</span>
          </div>
        </div>

        {/* Visual Render Canvas Display */}
        <div className="lg:col-span-7">
          <div className="bg-[#0D0817] rounded-2xl border border-white/10 p-6 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Stage Indicator Overlay */}
            <div className="flex items-center justify-between text-xs font-mono text-[#D9D2C5] z-10">
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isDraping ? "bg-amber-400 animate-ping" : drapeComplete ? "bg-emerald-400" : "bg-white/40"}`} />
                <span>Status: {progressStep}</span>
              </span>
              <span>Latency: {drapeComplete ? "2.74s" : isDraping ? "Computing..." : "0.0s"}</span>
            </div>

            {/* Visual Garment Representation */}
            <div className="my-auto py-8 text-center relative z-10 space-y-4">
              <div
                className="w-40 h-52 sm:w-48 sm:h-64 mx-auto rounded-xl border border-white/20 shadow-2xl relative overflow-hidden transition-all duration-700 flex flex-col items-center justify-center p-4"
                style={{
                  backgroundColor: selectedGarment.color,
                  transform: drapeComplete ? "scale(1.03)" : "scale(1)",
                  boxShadow: drapeComplete ? `0 0 35px ${selectedGarment.color}80` : "none",
                }}
              >
                {/* Simulated fabric fold texture */}
                <div 
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {isDraping ? (
                  <div className="space-y-2 relative z-10">
                    <div className="w-8 h-8 border-2 border-white/40 border-t-white rounded-full animate-spin mx-auto" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 block">
                      Aligning Mesh
                    </span>
                  </div>
                ) : drapeComplete ? (
                  <div className="space-y-2 relative z-10 text-white">
                    <CheckCircle2 className="w-8 h-8 text-white mx-auto drop-shadow-md" />
                    <span className="text-xs font-serif italic text-white/90 block">
                      Fitted to {selectedModel.label}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#D9D2C5] block">
                      Fit Confidence: 98.4%
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2 relative z-10 text-white/70">
                    <Camera className="w-8 h-8 mx-auto" />
                    <span className="text-[11px] font-mono block">
                      Awaiting Neural Run
                    </span>
                  </div>
                )}
              </div>

              <div className="max-w-xs mx-auto">
                <div className="font-serif text-base text-white">{selectedGarment.name}</div>
                <div className="text-xs font-mono text-[#D9D2C5]/70 mt-0.5">
                  Target Silhouette: {selectedModel.label} ({selectedModel.bustWaistHip})
                </div>
              </div>
            </div>

            {/* Bottom Meta Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5 rounded-xl py-2 px-4 text-center text-[10px] font-mono text-[#D9D2C5] z-10">
              <div>
                <span className="text-white/60 block">Mesh Vertices</span>
                <span className="text-white font-medium">18,400 pts</span>
              </div>
              <div>
                <span className="text-white/60 block">Inference Hardware</span>
                <span className="text-white font-medium">Edge WebGL</span>
              </div>
              <div>
                <span className="text-white/60 block">Catalog Ingestion</span>
                <span className="text-white font-medium">&lt; 60 secs</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
