import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/content/facts";
import type { IndustryVertical } from "@/content/facts";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Gem, Shirt, Home, Zap } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

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

const industryImages: Record<string, string> = {
  "luxury-fashion": "/images/case-studies/tarun-tahiliani.jpg",
  "fine-jewellery": "/images/lookify/gown_gold.jpg",
  "lifestyle-and-home": "/images/hero/luxury_atelier.jpg",
  "d2c-apparel": "/images/case-studies/house-of-masaba.jpg",
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
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden border-b border-white/10">
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
          {industryList.map((ind: IndustryVertical, index: number) => (
            <ScrollReveal key={ind.slug} animation="fade-up" delay={index * 120}>
              <div className="bg-white border border-[#D9D2C5] rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#6B3BA6] space-y-6 h-full">
                <div className="space-y-4">
                  {/* Vertical Visual Showcase Banner */}
                  <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-[#D9D2C5]/70 bg-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={industryImages[ind.slug] || "/images/hero/luxury_atelier.jpg"}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      {iconMap[ind.slug] || <Sparkles className="w-4 h-4 text-[#6B3BA6]" />}
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                      <span className="font-serif italic drop-shadow-sm">{ind.name}</span>
                      <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs text-[10px] text-white">
                        Practice Playbook
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6B3BA6] uppercase tracking-widest font-medium">
                      Commerce Vertical
                    </span>
                    <span className="text-xs font-mono text-[#17102A]/50">
                      Proven Architecture
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
            </ScrollReveal>
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
