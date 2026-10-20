import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Box, RefreshCw, Eye } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Technology & Proprietary Products | Growify",
  description:
    "Explore Growify's proprietary commerce technology: Lookify Virtual Try-On, Rossify Inventory Intelligence, and Craftify Luxury Layout Automation.",
};

/**
 * Renders the Technology & Proprietary Products overview page, presenting
 * Growify's proprietary software suite alongside our partner ecosystem.
 */
export default function TechnologyPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <Cpu className="w-3.5 h-3.5 text-[#9E7D47]" />
              <span>Proprietary Commerce Software</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Technology we build and run <span className="italic font-normal text-white">ourselves</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              Unlike traditional agencies that only assemble third-party plugins, Growify engineers proprietary software tools designed specifically to solve high-AOV fashion friction points.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/technology/lookify"
                className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#111111] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
              >
                <span>Explore Lookify Virtual Try-On</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/technology/partners"
                className="inline-flex items-center gap-2 bg-transparent text-[#D9D2C5] border border-white/20 px-5 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider hover:text-white hover:border-white transition-colors"
              >
                <span>View Partner Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Products Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
            In-House R&D
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
            The Growify Software Suite
          </h2>
          <p className="text-sm text-[#111111]/70">
            Engineered in our New Delhi lab and deployed directly into our clients’ digital flagships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Lookify (Flagship Product) */}
          <div className="lg:col-span-3 bg-[#0E0D0C] text-white rounded-2xl p-8 sm:p-12 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            <div className="space-y-6 lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9E7D47]/15 text-xs font-mono text-[#9E7D47] border border-[#9E7D47]/30">
                <Sparkles className="w-3 h-3" />
                <span>Flagship Innovation • Computer Vision</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                Lookify: AI Virtual Try-On for Luxury Couture
              </h3>

              <p className="text-sm sm:text-base text-[#D9D2C5] leading-relaxed font-sans">
                High-AOV couture has an inherent barrier online: fit and silhouette confidence. Lookify is our proprietary computer vision and neural garment draping engine that allows shoppers to preview bespoke lehengas, sherwanis, and luxury ready-to-wear on their exact measurements.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-serif text-2xl text-[#9E7D47]">Zero App Install</div>
                  <div className="text-xs text-[#D9D2C5] mt-1">Runs directly in mobile Safari & Chrome</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-serif text-2xl text-[#9E7D47]">&lt; 3.2s Draping</div>
                  <div className="text-xs text-[#D9D2C5] mt-1">Neural garment physics on the edge</div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/technology/lookify"
                  className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#111111] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                >
                  <span>Launch Lookify Experience & Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Simulator Preview */}
            <div className="w-full lg:flex-1 bg-[#161514] border border-white/10 rounded-xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#9E7D47]/15 border border-[#9E7D47]/30 flex items-center justify-center mx-auto text-[#9E7D47]">
                <Eye className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-white">Interactive Concept Simulator</h4>
              <p className="text-xs text-[#D9D2C5] max-w-sm mx-auto font-sans">
                Test our 3-step neural try-on flow with real garment silhouettes, real-time pose estimation, and bridal jewelry layering.
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-[#9E7D47] uppercase tracking-wider block">
                  Domain: lookify.ai
                </span>
              </div>
            </div>
          </div>

          {/* 2. Rossify */}
          <div className="bg-white border border-[#D9D2C5] rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#D9D2C5] flex items-center justify-center text-[#9E7D47]">
                <Box className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D47] block">
                Merchandising Intelligence
              </span>
              <h3 className="font-serif text-2xl font-light text-[#111111]">Rossify</h3>
              <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                Predictive inventory replenishment engine tailored for luxury apparel. Analyzes SKU-level velocity, international demand surges, and lead times to prevent stockouts of signature bridal silhouettes.
              </p>
              <ul className="text-xs space-y-2 text-[#111111]/80 pt-2 border-t border-[#D9D2C5]/50">
                <li>• Automated Ready-to-Ship (RTS) replenishment alerts</li>
                <li>• Regional US vs India catalog demand forecasting</li>
                <li>• Dead inventory and markdown prevention algorithms</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#D9D2C5]">
              <Link
                href="/technology/rossify"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#9E7D47] font-medium"
              >
                <span>Read Rossify Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. Craftify */}
          <div className="bg-white border border-[#D9D2C5] rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#D9D2C5] flex items-center justify-center text-[#9E7D47]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D47] block">
                Layout & Editorial Engine
              </span>
              <h3 className="font-serif text-2xl font-light text-[#111111]">Craftify</h3>
              <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                Dynamic luxury layout generator that translates fashion lookbooks into high-converting Shopify 2.0 sections without code bloat or performance degradation.
              </p>
              <ul className="text-xs space-y-2 text-[#111111]/80 pt-2 border-t border-[#D9D2C5]/50">
                <li>• Sub-second luxury video lookbook embedding</li>
                <li>• Dynamic shoppable hotspots with real-time stock sync</li>
                <li>• Zero Cumulative Layout Shift (CLS) Liquid components</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#D9D2C5]">
              <Link
                href="/technology/craftify"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#9E7D47] font-medium"
              >
                <span>Read Craftify Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4. Ecosystem & Partner Integration Box */}
          <div className="bg-[#FAF8F5] border border-[#D9D2C5] rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#D9D2C5] flex items-center justify-center text-[#111111]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block">
                Enterprise Ecosystem
              </span>
              <h3 className="font-serif text-2xl font-light text-[#111111]">Ecosystem Matrix</h3>
              <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                We integrate premier third-party technologies — Shopify Plus, Meta, Google, LimeChat, QuickReply, Razorpay, Klaviyo, and Kommo — structured by customer-value categories.
              </p>
              <div className="text-xs font-mono text-[#111111]/70 pt-2 border-t border-[#D9D2C5]/50">
                9 Certified Partners &amp; Tiered Integrations
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D2C5]">
              <Link
                href="/technology/partners"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#9E7D47] font-medium"
              >
                <span>Explore Full Partner Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </div>
  );
}
