import React from "react";
import type { Metadata } from "next";
import { PathFinderWidget } from "@/components/sections/PathFinderWidget";
import { Compass } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

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
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <Compass className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>Interactive Architecture Diagnostic</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                Find your brand’s <span className="italic font-normal text-[#9E7D47]">growth trajectory</span>.
              </h1>

              <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
                Answer three diagnostic questions to map your current operational stage against our S.C.A.L.E. framework and receive an instant strategic roadmap.
              </p>
            </div>
          </ScrollReveal>
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
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                Diagnostic Logic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
                How We Evaluate Your Store
              </h2>
              <p className="text-sm text-[#111111]/70 font-sans">
                Our diagnostic engine cross-references your current revenue tier and operational hurdles with empirical performance benchmarks from over ₹500 Cr+ in managed GMV.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#FAF8F5] space-y-3 h-full">
                <span className="text-xs font-mono text-[#9E7D47] font-semibold">Step 01</span>
                <h4 className="font-serif text-lg font-medium text-[#111111]">Catalog &amp; UX Friction</h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
                  Evaluates collection taxonomy, mobile render latency, high-resolution imagery compression, and mobile checkout friction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#FAF8F5] space-y-3 h-full">
                <span className="text-xs font-mono text-[#9E7D47] font-semibold">Step 02</span>
                <h4 className="font-serif text-lg font-medium text-[#111111]">Acquisition Efficiency</h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
                  Analyzes Meta CAPI server-side tracking health, Google Shopping feed accuracy, and regional diaspora targeting in the US and GCC.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#FAF8F5] space-y-3 h-full">
                <span className="text-xs font-mono text-[#9E7D47] font-semibold">Step 03</span>
                <h4 className="font-serif text-lg font-medium text-[#111111]">Retention &amp; Assisted Sales</h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
                  Measures WhatsApp conversational shopping flows, COD-to-prepaid conversion rates, and bridal concierge desk responsiveness.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SeamDivider variant="running-stitch" />
    </main>
  );
}
