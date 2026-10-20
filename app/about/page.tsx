import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, ShieldCheck, HeartHandshake, Award, Users } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "About Growify | Luxury Commerce Architecture & Engineering",
  description:
    "Growify Digital LLP is a New Delhi-based e-commerce growth company founded in 2019. We engineer high-performing digital flagships for premier Indian fashion labels.",
};

/**
 * Renders the About Growify page, detailing the company's founding history,
 * commercial philosophy ("We grow when you grow"), and studio leadership.
 */
export default function AboutPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B3BA6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">About Us</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <HeartHandshake className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Founded 2019 • New Delhi</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
              We grow when <span className="italic font-normal text-white">you grow</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              Growify was founded on a simple observation: luxury couture and high-value fashion brands were trapped between rigid legacy platforms and generic agency templates that destroyed brand equity. We set out to build an engineering-led growth firm.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#D9D2C5]/80">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Growify Digital LLP</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#6B3BA6]" />
                <span>35+ In-House Practitioners</span>
              </span>
              <span>•</span>
              <span>South Delhi Campus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Our Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              The Antidote to the Traditional Agency Model
            </h2>
            <p className="text-sm sm:text-base text-[#17102A]/80 leading-relaxed font-sans">
              In 2019, most Indian e-commerce agencies operated as commodity media buyers: they ran low-ticket ads, outsourced development to unvetted freelancers, and presented vanity metrics like impressions and click-through rates while client bottom lines suffered.
            </p>
            <p className="text-sm sm:text-base text-[#17102A]/80 leading-relaxed font-sans">
              We took a radically different path. We built a permanent studio of 35+ engineers, luxury brand designers, and retention architects under one roof in South Delhi. We aligned our compensation directly with client revenue expansion, and we invested in proprietary technology like Lookify Virtual Try-On, Rossify, and Craftify.
            </p>
            <div className="pt-2">
              <Link
                href="/life-at-growify"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#17102A] hover:text-[#6B3BA6] transition-colors font-medium underline underline-offset-4"
              >
                <span>Take a Virtual Tour of Our Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#D9D2C5] rounded-2xl p-8 space-y-6 shadow-xs">
            <h3 className="font-serif text-2xl font-light text-[#17102A]">
              The Growify Compact
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-[#17102A]/80 font-sans">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                <span><strong>Zero Outsourced Contractors:</strong> Every feature, campaign, and automation is engineered by our full-time team.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                <span><strong>No Vanity Metrics:</strong> We optimize for Contribution Margin, Return on Ad Spend, and Repeat Customer LTV.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                <span><strong>Direct Practitioner Access:</strong> Founders and CXOs communicate directly with senior engineers and strategists.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Leadership & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Studio Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              Disciplines Working as One
            </h2>
            <p className="text-sm text-[#17102A]/70 font-sans">
              Our studio functions as an integrated growth engine across six synchronized disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C]">Discipline 01</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Commerce &amp; Architecture</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Shopify Plus specialists, Liquid architects, and ERP integration engineers ensuring sub-second page performance.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#6B3BA6]">Discipline 02</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Performance &amp; Growth</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Meta Managed and Google Premier practitioners running high-ticket customer acquisition across India, the US, and the Gulf.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C]">Discipline 03</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Applied AI &amp; Software R&amp;D</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Computer vision engineers building Lookify Virtual Try-On, Rossify predictive inventory, and Craftify layout compilers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#17102A] text-[#F5F1EA] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light">
            Ready to partner with <span className="italic font-normal">practitioners</span>?
          </h2>
          <p className="text-sm text-[#D9D2C5] max-w-xl mx-auto font-sans">
            Connect with our New Delhi leadership for an architectural review of your digital flagship.
          </p>
          <div className="pt-2">
            <Link
              href="/#audit-intake"
              className="inline-flex items-center gap-2 bg-[#F5F1EA] text-[#17102A] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
