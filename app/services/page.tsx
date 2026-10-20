import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/facts";
import type { ServiceOffering } from "@/content/facts";
import { ArrowRight, Layers, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Services & Capabilities | Growify Growth Architecture",
  description:
    "Explore Growify's full-stack growth systems for luxury fashion: Shopify Plus architecture, performance acquisition, WhatsApp retention, assisted selling, organic search, and AI data intelligence.",
};

/**
 * Renders the primary Services overview page, mapping out Growify's six core
 * practices across the proprietary S.C.A.L.E. growth operating system.
 */
export default function ServicesPage(): React.JSX.Element {
  const serviceList: ServiceOffering[] = Object.values(services);

  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <Layers className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Full-Stack Commerce Engineering</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Growth systems engineered for <span className="italic font-normal text-white">high-value commerce</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed">
              We replace fragmented vendor handoffs with an integrated operating system. Six synchronized practices covering infrastructure, acquisition, lifecycle retention, concierge sales, and AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* S.C.A.L.E. Operating System Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D9D2C5]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Proprietary Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light mt-1 text-[#17102A]">
              The S.C.A.L.E. Framework
            </h2>
          </div>
          <p className="text-sm text-[#17102A]/70 max-w-md mt-4 md:mt-0">
            Each practice functions as a modular growth lever that compounds with the others, engineered specifically for high-AOV fashion and luxury retail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((svc) => (
            <div
              key={svc.slug}
              className="bg-white border border-[#D9D2C5] rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#6B3BA6]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#F5F1EA] text-[#6B3BA6] text-xs font-mono font-medium border border-[#D9D2C5]">
                    Pillar: {svc.pillar}
                  </span>
                  <span className="text-xs font-mono text-[#17102A]/40 uppercase tracking-widest">
                    {svc.techStack[0]}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#17102A] group-hover:text-[#6B3BA6] transition-colors">
                  {svc.title}
                </h3>

                <p className="text-sm text-[#17102A]/70 leading-relaxed font-sans">
                  {svc.shortSummary}
                </p>

                <div className="pt-4 border-t border-[#D9D2C5]/50 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#17102A]/60 block mb-2">
                    Key Capabilities:
                  </span>
                  {svc.capabilities.slice(0, 3).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#17102A]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D9D2C5]/50 flex items-center justify-between">
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#17102A] group-hover:text-[#6B3BA6] transition-colors font-medium"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Engagement Models & Commercial Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Partnership Alignment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              We grow when you grow.
            </h2>
            <p className="text-sm text-[#17102A]/70">
              We structure engagements with skin-in-the-game commercial models tied directly to revenue scale, GMV targets, and contribution margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#D9D2C5] rounded-xl p-8 bg-[#F5F1EA]/50 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F7A8C]">Tier 1</span>
              <h3 className="font-serif text-xl font-medium text-[#17102A]">Digital Flagship Build</h3>
              <p className="text-xs text-[#17102A]/70 leading-relaxed">
                Turnkey architectural replatforming, custom Shopify Plus theme development, and high-performance international checkout engineering.
              </p>
              <ul className="text-xs space-y-2 text-[#17102A]/80 pt-4 border-t border-[#D9D2C5]">
                <li>• 6–10 week sprint delivery</li>
                <li>• Bespoke Patternwork UI design system</li>
                <li>• Guaranteed sub-second mobile page loads</li>
                <li>• Two-way ERP & warehouse synchronization</li>
              </ul>
            </div>

            <div className="border-2 border-[#6B3BA6] rounded-xl p-8 bg-white space-y-4 relative shadow-lg">
              <span className="absolute -top-3 right-6 bg-[#6B3BA6] text-white text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full">
                Most Popular
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B3BA6]">Tier 2</span>
              <h3 className="font-serif text-xl font-medium text-[#17102A]">Full-Stack S.C.A.L.E. Retainer</h3>
              <p className="text-xs text-[#17102A]/70 leading-relaxed">
                Dedicated multidisciplinary growth team managing development, Meta/Google performance, WhatsApp retention, and concierge sales desk.
              </p>
              <ul className="text-xs space-y-2 text-[#17102A]/80 pt-4 border-t border-[#D9D2C5]">
                <li>• Fixed management base + performance incentive</li>
                <li>• Daily bi-directional slack channel collaboration</li>
                <li>• Lookify virtual try-on software suite included</li>
                <li>• 18+ hour multi-territory assisted selling desk</li>
              </ul>
            </div>

            <div className="border border-[#D9D2C5] rounded-xl p-8 bg-[#F5F1EA]/50 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F7A8C]">Tier 3</span>
              <h3 className="font-serif text-xl font-medium text-[#17102A]">Enterprise Innovation & AI</h3>
              <p className="text-xs text-[#17102A]/70 leading-relaxed">
                Proprietary machine learning pipelines, custom computer vision deployments (Lookify custom SDK), and cross-border US/GCC expansion hubs.
              </p>
              <ul className="text-xs space-y-2 text-[#17102A]/80 pt-4 border-t border-[#D9D2C5]">
                <li>• Custom headless or multi-store architecture</li>
                <li>• Custom 3D & generative garment models</li>
                <li>• Direct board & executive revenue reporting</li>
                <li>• Bespoke ERP middleware & fraud filters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#17102A] text-[#F5F1EA] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light">
            Ready to engineer your brand’s next <span className="italic font-normal">growth leap</span>?
          </h2>
          <p className="text-sm text-[#D9D2C5] max-w-xl mx-auto">
            Book a diagnostic scoping session with our lead architects. We evaluate your store telemetry and provide an actionable growth blueprint.
          </p>
          <div className="pt-2">
            <Link
              href="/#audit-intake"
              className="inline-flex items-center gap-2 bg-[#F5F1EA] text-[#17102A] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              <span>Request Diagnostic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
