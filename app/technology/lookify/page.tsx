import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LookifySimulator } from "@/components/technology/LookifySimulator";
import { ArrowRight, ShieldCheck, Cpu, Zap, Lock, Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Lookify | AI Virtual Try-On for Luxury Couture & Fashion",
  description:
    "Lookify by Growify is a proprietary computer vision and neural garment draping engine enabling luxury couture and high-value fashion brands to deliver photorealistic virtual try-on directly in the browser.",
  openGraph: {
    title: "Lookify | AI Virtual Try-On Platform",
    description: "Neural garment physics, zero app install, sub-second latency for luxury e-commerce.",
    url: "https://lookify.ai",
  },
};

/**
 * Renders the flagship deep-dive product page for Lookify,
 * featuring the interactive concept simulator, technical architecture,
 * privacy commitments, and pilot onboarding.
 */
export default function LookifyPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F7A8C]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">Lookify</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Proprietary Computer Vision Platform • lookify.ai</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
              Virtual try-on engineered for <span className="italic font-normal text-white">couture drape and fabric physics</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              High-AOV couture has an inherent conversion barrier: shopper uncertainty around silhouette, drape, and proportions. Lookify delivers photorealistic garment previews directly in mobile browsers in under 3.2 seconds.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#simulator"
                className="inline-flex items-center gap-2 bg-[#F5F1EA] text-[#17102A] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
              >
                <span>Launch Interactive Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/#audit-intake"
                className="inline-flex items-center gap-2 bg-transparent text-[#D9D2C5] border border-white/20 px-5 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider hover:text-white hover:border-white transition-colors"
              >
                <span>Request Merchant Pilot</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulator" className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
            Live Proof of Concept
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
            Experience Neural Garment Draping
          </h2>
          <p className="text-sm text-[#17102A]/70 font-sans">
            Test how Lookify reconciles complex handcrafted bridal embroidery with variable customer silhouettes in real time.
          </p>
        </div>

        <LookifySimulator />
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Technical Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Deep Tech
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              Under the Hood of Lookify
            </h2>
            <p className="text-sm text-[#17102A]/70 font-sans">
              Unlike generic sticker-overlay apps, Lookify performs physics-aware garment deformation and surface lighting synthesis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#1F7A8C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#17102A]">24-Point Keypoint Estimation</h3>
              <p className="text-xs sm:text-sm text-[#17102A]/70 leading-relaxed font-sans">
                Estimates shoulder width, bust apex, waist circumference, and posture pitch to calculate exact three-dimensional proportions from a single standard photograph.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#6B3BA6]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#17102A]">Neural Fabric Deformation</h3>
              <p className="text-xs sm:text-sm text-[#17102A]/70 leading-relaxed font-sans">
                Trained specifically on heavy Indian textile weights — raw silk, velvet, organza, and brocade — simulating real fabric drape rather than flat 2D stretching.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#1F7A8C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#17102A]">Edge WebGL Latency</h3>
              <p className="text-xs sm:text-sm text-[#17102A]/70 leading-relaxed font-sans">
                Compiles directly to WebAssembly and WebGL shaders, running inference directly on consumer mobile devices with zero server roundtrip lag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Compliance Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#17102A] text-white rounded-2xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#1F7A8C] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Biometric Privacy & Data Ethics</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Zero photo retention. Zero third-party sharing.
            </h3>
            <p className="text-sm text-[#D9D2C5] leading-relaxed font-sans">
              Customer privacy is non-negotiable. Lookify operates an ephemeral memory pipeline: uploaded customer photos are transformed into mathematical landmark arrays in RAM, processed for draping, and wiped immediately upon session completion. We never store face biometric vectors or retain user photography.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#D9D2C5]/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Indian DPDP Act 2023 Compliant</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>GDPR Ephemeral Processing</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <Link
              href="/#audit-intake"
              className="inline-flex items-center gap-2 bg-[#F5F1EA] text-[#17102A] px-6 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors font-medium"
            >
              <span>Apply For Brand Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <SeamDivider variant="running-stitch" />
    </main>
  );
}
