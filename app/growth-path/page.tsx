import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PathFinderWidget } from "@/components/sections/PathFinderWidget";
import { Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Growth Pathfinder Diagnostic | Growify",
  description:
    "Interactive 3-minute diagnostic tool to identify your e-commerce growth bottlenecks, recommended S.C.A.L.E. architecture, and high-impact revenue levers.",
};

/**
 * Renders the dedicated Growth Pathfinder assessment page, allowing luxury
 * brand leaders to diagnose their operational stage and generate a tailored growth roadmap.
 */
export default function GrowthPathPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F7A8C]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <Compass className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Interactive Architecture Diagnostic</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Find your brand’s <span className="italic font-normal text-white">growth trajectory</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              Answer three diagnostic questions to map your current operational stage against our S.C.A.L.E. framework and receive an instant strategic roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Diagnostic Tool */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <PathFinderWidget />
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Diagnostic Evaluation Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Diagnostic Logic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              How We Evaluate Your Store
            </h2>
            <p className="text-sm text-[#17102A]/70 font-sans">
              Our diagnostic engine cross-references your current revenue tier and operational hurdles with empirical performance benchmarks from over ₹500 Cr+ in managed GMV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C]">Step 01</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Catalog &amp; UX Friction</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Evaluates collection taxonomy, mobile render latency, high-resolution imagery compression, and mobile checkout friction.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#6B3BA6]">Step 02</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Acquisition Efficiency</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Analyzes Meta CAPI server-side tracking health, Google Shopping feed accuracy, and regional diaspora targeting in the US and GCC.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C]">Step 03</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Retention &amp; Assisted Sales</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Measures WhatsApp conversational shopping flows, COD-to-prepaid conversion rates, and bridal concierge desk responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SeamDivider variant="running-stitch" />
    </main>
  );
}
