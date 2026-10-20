"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  ChevronRight,
  Info,
  Clock,
  Video,
  Camera,
  Layers,
  CheckCircle2,
  Sliders,
} from "lucide-react";

/**
 * Interface representing a verified video shot / zone in Growify HQ footage.
 */
interface VideoClip {
  id: string;
  clipNumber: number;
  startSec: number;
  endSec: number;
  timestampLabel: string;
  location: string;
  cameraMovement: string;
  visualDescription: string;
  microTimingNote: string;
  department: string;
  speedRampCandidate?: string;
  thumbnail: string;
}

export const officeClips: VideoClip[] = [
  {
    id: "clip-1",
    clipNumber: 1,
    startSec: 0,
    endSec: 17,
    timestampLabel: "00:00 – 00:17",
    location: "Reception & Entry Corridor",
    cameraMovement: "Continuous forward tracking + slight left pan",
    visualDescription:
      'Starts on the backlit "GROWIFY – Your Growth Partner" reception wall (00:00–00:04), moves past the first open desk bay (00:04–00:09), and tracks toward the glass cabins and corner meeting room (00:10–00:17).',
    microTimingNote:
      "00:00–00:04 Intro brand hook. 00:06–00:14 prime candidate for speed-ramping to private cabins.",
    department: "Executive Welcome & Brand Gallery",
    speedRampCandidate: "00:06 – 00:14 (2.5x speed ramp)",
    thumbnail: "/frames/clip1_reception.jpg",
  },
  {
    id: "clip-2",
    clipNumber: 2,
    startSec: 18,
    endSec: 29,
    timestampLabel: "00:18 – 00:29",
    location: "Main Office Hallway & Workstations",
    cameraMovement: "Long forward dolly / walkthrough",
    visualDescription:
      "Cuts to the main corridor under a black grid ceiling. Tracks past glass cabins (00:18–00:20) and multiple open-plan workstation bays divided by wood-and-metal shelving (00:21–00:29).",
    microTimingNote:
      "Perspective shift at 00:18 (Hard Cut 1). Continuous glide past 3 open-plan bays (speed-ramp 00:21–00:27).",
    department: "Engineering & Growth Operations",
    speedRampCandidate: "00:21 – 00:27 (2.0x speed ramp)",
    thumbnail: "/frames/clip2_hallway.jpg",
  },
  {
    id: "clip-3",
    clipNumber: 3,
    startSec: 30,
    endSec: 32,
    timestampLabel: "00:30 – 00:32",
    location: "Glass Boardroom / Conference Room",
    cameraMovement: "Slow push-in (left to right angle)",
    visualDescription:
      "Focuses on a glass-enclosed boardroom featuring a large white meeting table, black chairs, a yellow wall poster, and an employee working on a laptop.",
    microTimingNote: "00:30 Hard Cut 2: High-focus 3-second strategic war room b-roll.",
    department: "Executive Strategy & Client War Room",
    thumbnail: "/frames/clip3_conference.jpg",
  },
  {
    id: "clip-4",
    clipNumber: 4,
    startSec: 33,
    endSec: 36,
    timestampLabel: "00:33 – 00:36",
    location: "Open Workstation Bay",
    cameraMovement: "Smooth push-in",
    visualDescription:
      "Medium-wide shot pushing toward a multidisciplinary team working at a warm wooden desk lined with a lush green planter box and open shelving dividers.",
    microTimingNote: "00:33 Hard Cut 3: Focused team collaboration and developer sprint bay (4 seconds).",
    department: "Shopify Architecture & Performance",
    thumbnail: "/frames/clip4_workstation.jpg",
  },
  {
    id: "clip-5",
    clipNumber: 5,
    startSec: 37,
    endSec: 39,
    timestampLabel: "00:37 – 00:39",
    location: "Collaborative Desk & Lounge Corner",
    cameraMovement: "Subtle pan / hold",
    visualDescription:
      "Shows a group of team members collaborating around a shared table, flanked by glass executive cabins and an iconic hanging swing chair in the background.",
    microTimingNote: "00:37 Hard Cut 4: Culture and informal ideation corner (3 seconds).",
    department: "Lookify AI Lab & Creative Strategy",
    thumbnail: "/frames/clip5_lounge.jpg",
  },
  {
    id: "clip-6",
    clipNumber: 6,
    startSec: 40,
    endSec: 43,
    timestampLabel: "00:40 – 00:43",
    location: "Cafeteria & Breakout Lounge",
    cameraMovement: "Nearly static / subtle drift",
    visualDescription:
      "Framed over a natural wooden bar counter with a high stool, looking into the bright studio dining space where team members are gathered at tables.",
    microTimingNote: "00:40–00:43 Hard Cut 5 (Outro): Social breakout space and artisan coffee hub.",
    department: "Community & Breakout Sanctuary",
    thumbnail: "/frames/clip6_cafeteria.jpg",
  },
];

/**
 * Interactive virtual studio walkthrough component featuring synchronized
 * video timeline scrubbing, precise shot-by-shot telemetry HUD, and mobile Lite Mode.
 */
export function OfficeTourWalkthrough(): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(43.8);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeClipIndex, setActiveClipIndex] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"video" | "canvas" | "lite">("video");
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Determine active clip based on currentTime
  useEffect(() => {
    const idx = officeClips.findIndex(
      (c) => currentTime >= c.startSec && currentTime <= c.endSec
    );
    if (idx !== -1 && idx !== activeClipIndex) {
      setActiveClipIndex(idx);
    }
  }, [currentTime, activeClipIndex]);

  // Draw current WebP frame to Canvas in canvas mode
  useEffect(() => {
    if (viewMode !== "canvas" || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalFrames = 263;
    const frameIndex = Math.min(
      totalFrames,
      Math.max(1, Math.round((currentTime / 43.8) * (totalFrames - 1)) + 1)
    );
    const frameNumber = String(frameIndex).padStart(4, "0");

    const img = new window.Image();
    img.src = `/frames/desktop/frame_${frameNumber}.webp`;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [currentTime, viewMode]);

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
        // Fallback for autoplay blocks
      });
      setIsPlaying(true);
    }
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
   * Jumps video directly to the start of a specific clip.
   */
  function handleJumpToClip(clip: VideoClip, index: number): void {
    setActiveClipIndex(index);
    handleSeekTo(clip.startSec);
  }

  /**
   * Updates playback rate (1x vs 1.5x speed ramp preview).
   */
  function handleTogglePlaybackRate(): void {
    const newRate = playbackRate === 1 ? 1.5 : 1;
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
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

  const currentClip = officeClips[activeClipIndex] || officeClips[0];

  return (
    <div className="space-y-8">
      {/* Top Header / Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D9D2C5]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#17102A] font-medium">
            Campus Walkthrough • 7,000 sq ft South Delhi Studio
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("video")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              viewMode === "video"
                ? "bg-[#17102A] text-white shadow-xs"
                : "bg-white text-[#17102A]/70 hover:bg-[#F5F1EA] border border-[#D9D2C5]"
            }`}
          >
            1080p Video
          </button>
          <button
            onClick={() => {
              setViewMode("canvas");
              if (videoRef.current) videoRef.current.pause();
              setIsPlaying(false);
            }}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              viewMode === "canvas"
                ? "bg-[#17102A] text-white shadow-xs"
                : "bg-white text-[#17102A]/70 hover:bg-[#F5F1EA] border border-[#D9D2C5]"
            }`}
          >
            WebP Canvas (Zero Lag)
          </button>
          <button
            onClick={() => setViewMode("lite")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              viewMode === "lite"
                ? "bg-[#17102A] text-white shadow-xs"
                : "bg-white text-[#17102A]/70 hover:bg-[#F5F1EA] border border-[#D9D2C5]"
            }`}
          >
            Cards (Lite)
          </button>
        </div>
      </div>

      {viewMode !== "lite" ? (
        /* Video or Canvas Scrubbing & Telemetry Player */
        <div className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#D9D2C5] bg-[#17102A] shadow-2xl">
            {/* Native Video Stream or High-Speed Canvas Viewport */}
            <div className="relative aspect-video max-h-[580px] w-full bg-black flex items-center justify-center">
              {viewMode === "canvas" ? (
                <canvas
                  ref={canvasRef}
                  width={1280}
                  height={720}
                  className="w-full h-full object-contain cursor-ew-resize"
                  onClick={handleTogglePlay}
                />
              ) : (
                <video
                  ref={videoRef}
                  src="/videos/office-tour.mp4"
                  poster="/frames/clip1_reception.jpg"
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={() => setVideoLoaded(true)}
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-contain"
                  onClick={handleTogglePlay}
                />
              )}

              {/* Floating Clip Telemetry HUD */}
              <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pointer-events-none z-10">
                <div className="bg-[#17102A]/85 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-white flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1F7A8C] animate-ping" />
                  <span className="text-xs font-mono font-medium">
                    {viewMode === "canvas"
                      ? `CANVAS WEBP // FRAME ${String(
                          Math.min(263, Math.max(1, Math.round((currentTime / 43.8) * 262) + 1))
                        ).padStart(4, "0")} OF 0263 // ZERO BUFFER LAG`
                      : `SHOT 0${currentClip.clipNumber} // ${currentClip.location.toUpperCase()}`}
                  </span>
                </div>

                <div className="bg-[#17102A]/85 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-white text-xs font-mono">
                  TIMECODE: {Math.floor(currentTime / 60).toString().padStart(2, "0")}:
                  {Math.floor(currentTime % 60).toString().padStart(2, "0")} / 00:43s
                </div>
              </div>

              {/* Play / Pause Big Center Overlay (When Paused in Video Mode) */}
              {viewMode === "video" && !isPlaying && (
                <button
                  onClick={handleTogglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#6B3BA6]/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border border-white/30 z-10"
                >
                  <Play className="w-6 h-6 ml-1" />
                </button>
              )}
            </div>

            {/* Custom Interactive Scrubbing Bar */}
            <div className="p-6 bg-[#17102A] text-white border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#D9D2C5]">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleTogglePlay}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? "Pause" : "Play Tour"}</span>
                  </button>

                  <button
                    onClick={handleTogglePlaybackRate}
                    className="px-2.5 py-1.5 rounded bg-white/5 hover:bg-white/15 text-[#D9D2C5] border border-white/15 transition-colors cursor-pointer"
                  >
                    {playbackRate}x Speed
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#1F7A8C]">Camera:</span>
                  <span>{currentClip.cameraMovement}</span>
                </div>
              </div>

              {/* Timeline Track with Shot Segment Markers */}
              <div className="relative pt-2">
                <input
                  type="range"
                  min="0"
                  max="43"
                  step="0.1"
                  value={currentTime}
                  onChange={(e) => handleSeekTo(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#1F7A8C]"
                />

                {/* Shot Division Dividers */}
                {officeClips.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSeekTo(c.startSec)}
                    style={{ left: `${(c.startSec / 43) * 100}%` }}
                    className={`absolute -top-1 w-3.5 h-3.5 -ml-1.5 rounded-full border transition-all ${
                      activeClipIndex + 1 === c.clipNumber
                        ? "bg-[#1F7A8C] border-white scale-125"
                        : "bg-white/30 border-black/50 hover:scale-110"
                    }`}
                    title={`Shot ${c.clipNumber}: ${c.location}`}
                  />
                ))}
              </div>

              {/* Six Clip Quick-Jump Pills with Extracted Frame Thumbnails */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                {officeClips.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => handleJumpToClip(c, idx)}
                    className={`group p-2 rounded-xl border text-left transition-all cursor-pointer overflow-hidden ${
                      activeClipIndex === idx
                        ? "bg-[#241B3B] border-[#1F7A8C] text-white shadow-md ring-1 ring-[#1F7A8C]"
                        : "bg-white/5 border-white/10 text-[#D9D2C5]/80 hover:bg-white/10"
                    }`}
                  >
                    <div className="relative aspect-video rounded-md overflow-hidden mb-2 bg-black/40 border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.thumbnail}
                        alt={c.location}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-white rounded">
                        0{c.clipNumber}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                      <span className="text-[#1F7A8C] font-medium">Shot 0{c.clipNumber}</span>
                      <span className="text-white/60">{c.timestampLabel.split(" – ")[0]}</span>
                    </div>
                    <div className="text-xs font-medium text-white truncate">{c.location}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Shot Detailed Editorial Card with High-Res Still */}
          <div className="bg-white border border-[#D9D2C5] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Visual Frame Banner of the Active Location */}
            <div className="relative aspect-video sm:aspect-21/9 rounded-xl overflow-hidden border border-[#D9D2C5]/50 bg-[#17102A]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentClip.thumbnail}
                alt={currentClip.location}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17102A]/90 via-[#17102A]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F7A8C] bg-white/15 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                    Zone 0{currentClip.clipNumber} • {currentClip.department}
                  </span>
                  <div className="text-white text-xl sm:text-2xl font-serif mt-1.5 drop-shadow-sm">
                    {currentClip.location}
                  </div>
                </div>
                <span className="text-xs font-mono text-white/90 bg-black/60 backdrop-blur-xs px-3 py-1 rounded border border-white/20 self-start sm:self-auto">
                  {currentClip.timestampLabel}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9D2C5] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B3BA6]">
                  Active Scene Breakdown • Shot 0{currentClip.clipNumber} of 06
                </span>
                <h3 className="font-serif text-2xl font-light text-[#17102A] mt-0.5">
                  {currentClip.location}
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-[#F5F1EA] text-[#17102A] text-xs font-mono border border-[#D9D2C5]">
                {currentClip.timestampLabel}
              </span>
            </div>

            <p className="text-sm text-[#17102A]/85 leading-relaxed font-sans">
              {currentClip.visualDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F5F1EA] border border-[#D9D2C5] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#1F7A8C] block font-medium">
                  Camera Choreography:
                </span>
                <p className="text-xs text-[#17102A]/80 font-sans">{currentClip.cameraMovement}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F1EA] border border-[#D9D2C5] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B3BA6] block font-medium">
                  Editing &amp; Micro-Timing Directive:
                </span>
                <p className="text-xs text-[#17102A]/80 font-sans">{currentClip.microTimingNote}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Lite Mode: Complete Shot-by-Shot Card Grid with Extracted Frames */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeClips.map((clip) => (
              <div
                key={clip.id}
                className="bg-white border border-[#D9D2C5] rounded-xl p-5 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Extracted Frame Still */}
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-[#D9D2C5]/50 bg-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={clip.thumbnail}
                      alt={clip.location}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono">
                      {clip.timestampLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6B3BA6] font-medium">Shot 0{clip.clipNumber}</span>
                    <span className="px-2 py-0.5 rounded bg-[#F5F1EA] border border-[#D9D2C5] text-[#17102A]/70">
                      {clip.timestampLabel}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-light text-[#17102A]">
                    {clip.location}
                  </h3>

                  <p className="text-xs text-[#17102A]/80 leading-relaxed font-sans">
                    {clip.visualDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9D2C5]/60 space-y-2">
                  <div className="text-[10px] font-mono text-[#17102A]/60">
                    <strong>Camera:</strong> {clip.cameraMovement}
                  </div>
                  <div className="text-[10px] font-mono text-[#1F7A8C]">
                    <strong>Timing:</strong> {clip.microTimingNote}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-[#F5F1EA] border border-[#D9D2C5] flex items-center justify-between text-xs font-mono text-[#17102A]/70">
            <span>Viewing in Lite Mode for maximum battery &amp; frame rate efficiency.</span>
            <button
              onClick={() => setViewMode("video")}
              className="text-[#6B3BA6] underline hover:text-[#17102A] cursor-pointer"
            >
              Switch to Video Player
            </button>
          </div>
        </div>
      )}

      {/* Micro-Timing Map & Production Notes */}
      <div className="bg-[#241B3B] text-white rounded-2xl p-8 border border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#1F7A8C]">
          <Sliders className="w-4 h-4" />
          <span>Post-Production Pacing Specification (43s Master Cut)</span>
        </div>

        <h3 className="font-serif text-2xl font-light">
          Micro-Timing Map for Editing &amp; Speed Ramping
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans text-[#D9D2C5]">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <strong className="text-white block font-mono text-[11px]">00:00 – 00:04 (Intro Hook)</strong>
            <span>Brand reveal on the backlit &ldquo;GROWIFY – Your Growth Partner&rdquo; reception wall.</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <strong className="text-white block font-mono text-[11px]">00:04 – 00:17 (Corridor Walk)</strong>
            <span>Corridor walkthrough from reception to private cabins (speed-ramp candidate: 00:06–00:14).</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <strong className="text-white block font-mono text-[11px]">00:18 (Hard Cut 1)</strong>
            <span>Perspective shift to main floor hallway under black grid ceiling.</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <strong className="text-white block font-mono text-[11px]">00:18 – 00:29 (Main Floor Glide)</strong>
            <span>Continuous glide past 3 workstation bays (speed-ramp candidate: 00:21–00:27).</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <strong className="text-white block font-mono text-[11px]">00:30 &amp; 00:33 (Cuts 2 &amp; 3)</strong>
            <span>Boardroom b-roll (3s) followed by focused developer team bay with planter boxes (4s).</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <strong className="text-white block font-mono text-[11px]">00:37 – 00:43 (Cuts 4 &amp; 5)</strong>
            <span>Swing-chair collaborative desk (3s) and cafeteria breakout bar closing shot (4s).</span>
          </div>
        </div>
      </div>
    </div>
  );
}
