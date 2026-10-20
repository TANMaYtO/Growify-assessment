import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/content/facts";
import type { IndustryVertical } from "@/content/facts";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Gem, Shirt, Home, Zap } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Industries & Luxury Commerce Verticals | Growify",
  description:
    "Explore Growify's specialized commerce engineering practices across Luxury Fashion & Couture, Fine Jewellery, Modern Lifestyle & Home, and High-Velocity D2C Apparel.",
};

const iconMap: Record<string, React.ReactNode> = {
  "luxury-fashion": <Shirt className="w-5 h-5 text-[#6B3BA6]" />,
  "fine-jewellery": <Gem className="w-5 h-5 text-[#1F7A8C]" />,
  "lifestyle-and-home": <Home className="w-5 h-5 text-[#6B3BA6]" />,
  "d2c-apparel": <Zap className="w-5 h-5 text-[#1F7A8C]" />,
};

/**
 * Renders the primary Industries directory page, organizing Growify's
 * specialized practices across the four core high-value commerce segments.
 */
export default function IndustriesPage(): React.JSX.Element {
  const industryList: IndustryVertical[] = Object.values(industries);

  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B3BA6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">Industries</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Specialized Vertical Practices</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
              Engineered for the nuances of <span className="italic font-normal text-white">high-value retail</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              Generic e-commerce playbooks fail in luxury commerce. We build domain-specific growth systems tailored to high-ticket bridal couture, fine jewellery salons, spatial home decor, and rapid-scale apparel drops.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Verticals Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
            Segment Specializations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
            Core Industry Verticals
          </h2>
          <p className="text-sm text-[#17102A]/70 font-sans">
            Tailored checkout architectures, attribution models, and assisted selling workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryList.map((ind: IndustryVertical) => (
            <div
              key={ind.slug}
              className="bg-white border border-[#D9D2C5] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#6B3BA6] space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F1EA] border border-[#D9D2C5] flex items-center justify-center">
                    {iconMap[ind.slug] || <Sparkles className="w-5 h-5 text-[#6B3BA6]" />}
                  </div>
                  <span className="text-xs font-mono text-[#17102A]/50 uppercase tracking-widest">
                    Vertical Practice
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#17102A] group-hover:text-[#6B3BA6] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-sm text-[#17102A]/75 leading-relaxed font-sans">
                  {ind.shortSummary}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#D9D2C5]/50">
                  {ind.keyMetrics.map((km, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#F5F1EA]/60 border border-[#D9D2C5]/70">
                      <div className="font-serif text-lg font-medium text-[#17102A]">{km.value}</div>
                      <div className="text-[10px] text-[#17102A]/60 font-mono mt-0.5 line-clamp-1">{km.label}</div>
                    </div>
                  ))}
                </div>

                {/* Client Brands */}
                <div className="pt-2 text-xs font-mono text-[#17102A]/70">
                  <span className="text-[#6B3BA6] font-medium">Proven With:</span>{" "}
                  {ind.featuredBrands.join(" • ")}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D2C5]/50 flex items-center justify-between">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#17102A] group-hover:text-[#6B3BA6] font-medium"
                >
                  <span>Explore Vertical Playbook</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* S.C.A.L.E. Mapping Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Universal Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              How S.C.A.L.E. Adapts Across Verticals
            </h2>
            <p className="text-sm text-[#17102A]/70 font-sans">
              Our 5-phase operating framework is customized to match the average transaction size, customer decision journey, and inventory velocity of each retail category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#6B3BA6] font-medium">Couture Fashion</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Assisted Concierge</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Heavy emphasis on WhatsApp measurement consultations, Lookify virtual try-on, and US/GCC cross-border international duty calculations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C] font-medium">Fine Jewellery</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Salon Appointments</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                High-security transaction workflows, certified gemological zoom viewers, and driving web traffic to private in-store boutique bookings.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#6B3BA6] font-medium">Modern Home</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">Spatial Lookbooks</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Shoppable room-set photography, dimensional freight shipping calculators, and specialized B2B interior designer trade account portals.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C] font-medium">D2C Apparel</span>
              <h4 className="font-serif text-lg font-medium text-[#17102A]">1-Click Velocity</h4>
              <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                Razorpay Magic 1-click checkout, automated WhatsApp COD-to-prepaid conversion discounts, and predictive Rossify inventory replenishment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#17102A] text-[#F5F1EA] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light">
            Audit your brand’s <span className="italic font-normal">vertical economics</span>.
          </h2>
          <p className="text-sm text-[#D9D2C5] max-w-xl mx-auto font-sans">
            Connect with our vertical practice leads to benchmark your store against leading luxury brands in your exact category.
          </p>
          <div className="pt-2">
            <Link
              href="/#audit-intake"
              className="inline-flex items-center gap-2 bg-[#F5F1EA] text-[#17102A] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              <span>Schedule Category Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
