import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { partners } from "@/content/facts";
import type { PartnerEntity } from "@/content/facts";
import { ArrowRight, ShieldCheck, ExternalLink, CheckCircle2 } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Ecosystem & Technology Partners | Growify Architecture",
  description:
    "Growify's certified ecosystem partners: Shopify Plus, Meta Managed Partner, Google Premier Partner, Razorpay, LimeChat, QuickReply.ai, Klaviyo, Kommo, and Shiprocket.",
};

/**
 * Renders the dedicated Ecosystem & Technology Partners directory,
 * organizing integrations by customer-value categories with transparent relationship badges.
 */
export default function PartnersPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B3BA6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">Partners</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Certified Ecosystem Integrations</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
              Engineered with world-class <span className="italic font-normal text-white">commerce infrastructure</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              We separate certified commercial partnerships from platform integrations and operational tooling. Every technology listed serves a verified customer-value purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D9D2C5]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Tiered Classification
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light mt-1 text-[#17102A]">
              Technology Ecosystem
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-[#6B3BA6]/10 text-[#6B3BA6] border border-[#6B3BA6]/20">
              Official Partner (Contractual)
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1F7A8C]/10 text-[#1F7A8C] border border-[#1F7A8C]/20">
              Platform Integration (Certified API)
            </span>
            <span className="px-2.5 py-1 rounded bg-[#17102A]/5 text-[#17102A]/70 border border-[#17102A]/15">
              Technology We Use (Operational)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner: PartnerEntity) => (
            <div
              key={partner.name}
              className="bg-white border border-[#D9D2C5] rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#6B3BA6]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#17102A]/60">
                    {partner.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      partner.badge === "Official Partner"
                        ? "bg-[#6B3BA6]/15 text-[#6B3BA6] font-medium border border-[#6B3BA6]/30"
                        : partner.badge === "Platform Integration"
                        ? "bg-[#1F7A8C]/15 text-[#1F7A8C] font-medium border border-[#1F7A8C]/30"
                        : "bg-[#17102A]/5 text-[#17102A]/80 border border-[#17102A]/15"
                    }`}
                  >
                    {partner.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#17102A] group-hover:text-[#6B3BA6] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                  {partner.description}
                </p>

                <div className="p-4 rounded-lg bg-[#F5F1EA]/70 border border-[#D9D2C5]/70 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B3BA6] block font-medium">
                    Customer Impact:
                  </span>
                  <p className="text-xs text-[#17102A]/80 leading-relaxed font-sans">
                    {partner.customerValue}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D9D2C5]/50 flex items-center justify-between">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#17102A]/70 hover:text-[#17102A] transition-colors font-medium"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Architecture Integration Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
            Audit your brand’s <span className="italic font-normal">technology stack</span>.
          </h2>
          <p className="text-sm text-[#17102A]/70 max-w-xl mx-auto font-sans">
            App clutter slows down luxury flagships and inflates subscription costs. We evaluate your current third-party apps and replace redundant tools with clean native code.
          </p>
          <div className="pt-2">
            <Link
              href="/#audit-intake"
              className="inline-flex items-center gap-2 bg-[#17102A] text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-[#6B3BA6] transition-colors"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
