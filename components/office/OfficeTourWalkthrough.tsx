"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

/**
 * Interface representing a verified architectural zone in the Growify Delhi Studio.
 */
export interface StudioZone {
  id: string;
  zoneNumber: number;
  startSec: number;
  endSec: number;
  timeRange: string;
  name: string;
  subtitle: string;
  narrative: string;
  highlights: string[];
  thumbnail: string;
}

export const studioZones: StudioZone[] = [
  {
    id: "zone-1",
    zoneNumber: 1,
    startSec: 0,
    endSec: 17,
    timeRange: "00:00 – 00:17",
    name: "The Grand Reception & Archive Gallery",
    subtitle: "Client Welcome & Milestone Artifacts",
    narrative:
      "Where founders, creative directors, and luxury executives are welcomed into Growify. Showcases authenticated flagship case studies, design artifacts, and client milestones across premier Indian couture houses.",
    highlights: [
      "Custom architectural joinery & backlit branding",
      "Executive client briefing corridor",
      "Direct transit to partner conference suites",
    ],
    thumbnail: "/frames/clip1_reception.jpg",
  },
  {
    id: "zone-2",
    zoneNumber: 2,
    startSec: 18,
    endSec: 29,
    timeRange: "00:18 – 00:29",
    name: "The Main Engineering Floor",
    subtitle: "Shopify Plus & Full-Stack Systems",
    narrative:
      "The engineering engine room. 35+ full-stack engineers and certified Shopify Plus architects building headless storefronts, custom ERP inventory connectors, and sub-second checkout pipelines.",
    highlights: [
      "Industrial open-grid acoustic ceiling",
      "Dual-screen 4K development bays",
      "Integrated QA testing environments",
    ],
    thumbnail: "/frames/clip2_hallway.jpg",
  },
  {
    id: "zone-3",
    zoneNumber: 3,
    startSec: 30,
    endSec: 32,
    timeRange: "00:30 – 00:32",
    name: "The Executive Strategy Suite",
    subtitle: "Launch War Room & Telemetry",
    narrative:
      "A glass-enclosed boardroom dedicated to high-stakes seasonal launch planning, international expansion modeling (US, UAE, UK), and live Black Friday / festive peak monitoring.",
    highlights: [
      "Acoustic isolation for confidential CXO sessions",
      "Live dataLayer telemetry displays",
      "High-speed fiber connectivity for live drops",
    ],
    thumbnail: "/frames/clip3_conference.jpg",
  },
  {
    id: "zone-4",
    zoneNumber: 4,
    startSec: 33,
    endSec: 36,
    timeRange: "00:33 – 00:36",
    name: "The High-Velocity Performance Pod",
    subtitle: "Paid Media & Retention Operations",
    narrative:
      "Home to our Meta-managed media buyers, retention specialists, and fashion merchandisers executing algorithmic campaigns and running 18+ hour assisted sales desks on WhatsApp.",
    highlights: [
      "Planter-lined solid timber workstations",
      "Collaborative sprint dividers",
      "Direct real-time attribution dashboards",
    ],
    thumbnail: "/frames/clip4_workstation.jpg",
  },
  {
    id: "zone-5",
    zoneNumber: 5,
    startSec: 37,
    endSec: 39,
    timeRange: "00:37 – 00:39",
    name: "The Lookify AI Innovation Lounge",
    subtitle: "Computer Vision & Neural Drape R&D",
    narrative:
      "Our research enclave where computer vision models are calibrated for virtual try-on drape accuracy, finite-element fabric physics, and high-resolution bridal embroidery rendering.",
    highlights: [
      "Informal banquettes & ideation swing chair",
      "Retail smart-mirror hardware rigs",
      "Local GPU clusters for ML drape testing",
    ],
    thumbnail: "/frames/clip5_lounge.jpg",
  },
  {
    id: "zone-6",
    zoneNumber: 6,
    startSec: 40,
    endSec: 43,
    timeRange: "00:40 – 00:43",
    name: "The Studio Commons & Refreshment Bar",
    subtitle: "Culture & Team Sanctuary",
    narrative:
      "The social nexus of our studio. A warm, sunlit gathering space where our multidisciplinary teams collaborate over specialty coffees, celebrate milestones, and host Friday studio reviews.",
    highlights: [
      "Natural hardwood bar counter with artisan high stools",
      "Fresh specialty estate coffees & daily culinary service",
      "Open dining space for all-hands gatherings",
    ],
    thumbnail: "/frames/clip6_cafeteria.jpg",
  },
];

/**
 * Renders an ultra-luxurious, cinematic virtual studio walkthrough of Growify HQ.
 * Provides smooth video playback, zone jumping, and authentic architectural storytelling.
 */
export function OfficeTourWalkthrough(): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(43.8);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeZoneIndex, setActiveZoneIndex] = useState<number>(0);

  // Sync active zone index with current playback time
  useEffect(() => {
    const idx = studioZones.findIndex(
      (z) => currentTime >= z.startSec && currentTime <= z.endSec
    );
    if (idx !== -1 && idx !== activeZoneIndex) {
      setActiveZoneIndex(idx);
    }
  }, [currentTime, activeZoneIndex]);

  /**
   * Toggles video play and pause state.
   */
  function handleTogglePlay(): void {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {
        // Fallback for browser autoplay policies
      });
      setIsPlaying(true);
    }
  }

  /**
   * Toggles video audio mute state.
   */
  function handleToggleMute(): void {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }

  /**
   * Seeks video to a specific timestamp in seconds.
   */
  function handleSeekTo(seconds: number): void {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  }

  /**
   * Jumps video directly to the start of a specific studio zone.
   */
  function handleJumpToZone(zone: StudioZone, index: number): void {
    setActiveZoneIndex(index);
    handleSeekTo(zone.startSec);
  }

  /**
   * Requests fullscreen mode on the video container.
   */
  function handleFullscreen(): void {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }

  /**
   * Updates time tracker on video timeupdate.
   */
  function handleTimeUpdate(): void {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  }

  const currentZone = studioZones[activeZoneIndex] || studioZones[0];

  return (
    <div className="space-y-10 font-sans">
      {/* Top Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#D9D2C5]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] block mb-1">
            Studio Campus Walkthrough
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal">
            7,000 sq ft Creative &amp; Engineering Headquarters
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#111111]/70">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>New Delhi • All Teams 100% In-House</span>
        </div>
      </div>

      {/* Main Cinematic Video Player */}
      <div className="relative rounded-2xl overflow-hidden border border-[#D9D2C5] bg-[#0E0D0C] shadow-2xl">
        <div className="relative aspect-video max-h-[600px] w-full bg-black flex items-center justify-center group">
          <video
            ref={videoRef}
            src="/videos/office-tour.mp4"
            poster="/frames/clip1_reception.jpg"
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-contain cursor-pointer"
            onClick={handleTogglePlay}
          />

          {/* Minimalist Top Zone Title Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="px-3 py-1.5 rounded-lg bg-[#0E0D0C]/85 backdrop-blur-md text-[#FAF8F5] text-xs font-mono border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47]" />
              <span className="font-medium">Zone 0{currentZone.zoneNumber}</span>
              <span className="text-white/40">•</span>
              <span>{currentZone.name}</span>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-[#0E0D0C]/85 backdrop-blur-md text-[#FAF8F5] text-xs font-mono border border-white/10">
              {Math.floor(currentTime / 60)
                .toString()
                .padStart(2, "0")}
              :
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}{" "}
              / 00:43s
            </div>
          </div>

          {/* Big Center Play Button Overlay When Paused */}
          {!isPlaying && (
            <button
              onClick={handleTogglePlay}
              aria-label="Play Studio Tour"
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#9E7D47] hover:bg-[#8C6D38] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer border border-white/20 z-10"
            >
              <Play className="w-6 h-6 ml-1 fill-white" />
            </button>
          )}
        </div>

        {/* Minimalist Luxury Player Controls Bar */}
        <div className="p-5 sm:p-6 bg-[#141312] text-[#FAF8F5] border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#D9D2C5]">
            <div className="flex items-center gap-4">
              <button
                onClick={handleTogglePlay}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/15 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>

              <button
                onClick={handleToggleMute}
                className="p-1.5 rounded bg-white/5 hover:bg-white/15 text-[#FAF8F5] transition-colors cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-white/60" /> : <Volume2 className="w-4 h-4 text-[#9E7D47]" />}
              </button>

              <span className="hidden sm:inline text-white/60">
                {currentZone.subtitle}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleFullscreen}
                className="p-1.5 rounded bg-white/5 hover:bg-white/15 text-[#FAF8F5] transition-colors cursor-pointer"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Scrubbing Track */}
          <div className="relative w-full h-2 rounded-full bg-white/15 cursor-pointer">
            <div
              className="h-full rounded-full bg-[#9E7D47] transition-all duration-100"
              style={{ width: `${(currentTime / (duration || 43)) * 100}%` }}
            />
            <input
              type="range"
              min={0}
              max={duration || 43}
              step={0.1}
              value={currentTime}
              onChange={(e) => handleSeekTo(parseFloat(e.target.value))}
              aria-label="Video Scrub Timeline"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          {/* 6 Studio Zones Quick-Jump Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {studioZones.map((z, idx) => (
              <button
                key={z.id}
                onClick={() => handleJumpToZone(z, idx)}
                className={`group p-2.5 rounded-xl border text-left transition-all cursor-pointer overflow-hidden ${
                  activeZoneIndex === idx
                    ? "bg-[#1E1C1A] border-[#9E7D47] text-white shadow-md ring-1 ring-[#9E7D47]"
                    : "bg-white/5 border-white/10 text-[#D9D2C5]/80 hover:bg-white/10"
                }`}
              >
                <div className="relative aspect-video rounded-md overflow-hidden mb-2 bg-black/40 border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={z.thumbnail}
                    alt={z.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 text-[9px] font-mono text-white rounded">
                    0{z.zoneNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                  <span className={activeZoneIndex === idx ? "text-[#9E7D47] font-medium" : "text-white/60"}>
                    Zone 0{z.zoneNumber}
                  </span>
                  <span className="text-white/40">{z.timeRange.split(" – ")[0]}</span>
                </div>
                <div className="text-xs font-medium text-white truncate">{z.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Studio Zone Detail Editorial Plaque */}
      <div className="bg-white border border-[#D9D2C5] rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
        <div className="relative aspect-video sm:aspect-21/9 rounded-xl overflow-hidden border border-[#D9D2C5]/50 bg-[#0E0D0C]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentZone.thumbnail}
            alt={currentZone.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] bg-[#0E0D0C]/80 px-3 py-1 rounded border border-white/15">
                Zone 0{currentZone.zoneNumber} • {currentZone.subtitle}
              </span>
              <div className="text-white text-2xl sm:text-3xl font-serif mt-2 drop-shadow-sm">
                {currentZone.name}
              </div>
            </div>
            <span className="text-xs font-mono text-white/90 bg-black/70 px-3 py-1.5 rounded border border-white/15 self-start sm:self-auto">
              Campus Footage • {currentZone.timeRange}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl font-normal text-[#111111]">
              Space &amp; Craft: {currentZone.name}
            </h3>
            <p className="text-base text-[#111111]/80 leading-relaxed font-sans">
              {currentZone.narrative}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#D9D2C5] p-6 rounded-xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] font-semibold">
              Architectural &amp; Operational Features
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#111111]/80">
              {currentZone.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47] mt-1.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
