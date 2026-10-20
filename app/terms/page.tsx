import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Terms of Service | Growify Digital LLP",
  description: "Terms of service and commercial agreement parameters for Growify Digital LLP.",
};

/**
 * Renders the Terms of Service legal terms page.
 */
export default function TermsPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-16 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <FileText className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Commercial Terms &amp; Governing Law</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              Terms of Service
            </h1>

            <p className="text-sm sm:text-base text-[#D9D2C5] font-sans">
              Last updated: October 2026 • Growify Digital LLP, New Delhi, India
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-4xl mx-auto px-6 space-y-12">
        <div className="bg-white border border-[#D9D2C5] rounded-2xl p-8 sm:p-12 space-y-8 shadow-xs">
          
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">1. Agreement to Terms</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              By accessing growify.in or utilizing our growth advisory, engineering, or software products (including Lookify), you agree to be bound by these Terms of Service. All commercial client engagements are further governed by a tailored Master Services Agreement (MSA) and Statement of Work (SOW).
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D2C5]">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">2. Intellectual Property Rights</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              All bespoke storefront code, Liquid themes, and custom designs created for client flagships are assigned to the client upon full payment. All proprietary software platforms, neural model weights, computer vision architectures (Lookify), algorithms (Rossify, Craftify), and internal tooling remain the exclusive intellectual property of Growify Digital LLP.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D2C5]">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">3. Performance &amp; Commercial Projections</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              While Growify employs empirical growth frameworks, historical e-commerce benchmarks, and direct practitioner optimization, future commercial revenue and return on ad spend are subject to market factors, product-market fit, and inventory availability. Specific commercial performance guarantees are defined exclusively within signed client MSAs.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D2C5]">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">4. Jurisdiction &amp; Governing Law</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              These Terms and any disputes arising hereunder shall be governed by and construed in accordance with the laws of the Republic of India. The courts of New Delhi, India shall have exclusive jurisdiction over all matters.
            </p>
          </div>

        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
