import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/content/facts";
import { ArrowRight, AlertCircle, Sparkles } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

const industryImages: Record<string, string> = {
  "luxury-fashion": "/images/case-studies/tarun-tahiliani.jpg",
  "fine-jewellery": "/images/lookify/gown_gold.jpg",
  "lifestyle-and-home": "/images/hero/luxury_atelier.jpg",
  "d2c-apparel": "/images/case-studies/house-of-masaba.jpg",
};

/**
 * Generates static parameters for all known industry verticals at build time.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(industries).map((slug) => ({ slug }));
}

/**
 * Generates dynamic SEO metadata for each industry vertical page.
 */
export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    return { title: "Industry Not Found | Growify" };
  }

  return {
    title: `${industry.name} Commerce Systems | Growify`,
    description: industry.shortSummary,
    openGraph: {
      title: `${industry.name} Growth Architecture | Growify`,
      description: industry.shortSummary,
      url: `https://growify.in/industries/${slug}`,
    },
  };
}

/**
 * Renders the dynamic deep-dive industry vertical page with category-specific
 * friction points, bespoke solutions, demonstrated metrics, and tech stacks.
 */
export default async function IndustryDetailPage({ params }: IndustryPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Top Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#9E7D47]">{industry.name}</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Vertical Playbook</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
                  {industry.headline}
                </h1>

                <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans max-w-2xl">
                  {industry.description}
                </p>

                <div className="pt-2 text-xs font-mono text-[#D9D2C5]/80">
                  <span className="text-white font-medium">Proven With:</span>{" "}
                  {industry.featuredBrands.join(" • ")}
                </div>
              </div>

              {/* Impact Metric Card */}
              <div className="lg:col-span-4 bg-[#141312] p-8 rounded-2xl border border-white/15 space-y-3">
                <span className="text-xs font-mono text-[#9E7D47] uppercase tracking-wider block font-semibold">
                  Primary Impact Benchmark
                </span>
                <div className="font-serif text-5xl font-light text-white">
                  {industry.keyMetrics[0].value}
                </div>
                <p className="text-xs text-[#D9D2C5] font-sans">
                  {industry.keyMetrics[0].context}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Narrative: Challenges vs Solutions */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        {/* Editorial Vertical Showcase Banner */}
        <ScrollReveal animation="fade-up">
          <div className="relative aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-[#D9D2C5] shadow-xl bg-[#0E0D0C]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={industryImages[slug] || "/images/hero/luxury_atelier.jpg"}
              alt={`${industry.name} Commerce Systems`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] bg-[#0E0D0C]/85 px-3 py-1 rounded border border-white/20">
                  Flagship Playbook • {industry.name}
                </span>
                <div className="text-white text-2xl sm:text-3xl font-serif mt-2 drop-shadow-sm">
                  {industry.headline}
                </div>
              </div>
              <span className="text-xs font-mono text-white/90 bg-black/70 px-3 py-1.5 rounded border border-white/20 self-start sm:self-auto">
                Verified Practice
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* The Specific Category Friction */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D9D2C5] space-y-6 shadow-xs">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                    Category Realities
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#111111] mt-1">
                    Primary Commercial Bottlenecks
                  </h2>
                </div>

                <div className="space-y-3">
                  {industry.challenges.map((ch: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#D9D2C5]/70">
                      <AlertCircle className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#111111]/80 font-sans leading-relaxed">
                        {ch}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Engineered Solutions */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                    The Growify Response
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#111111] mt-1">
                    Architectural Solutions
                  </h2>
                </div>

                <div className="space-y-4">
                  {industry.solutions.map((sol: string, idx: number) => (
                    <div key={idx} className="p-6 rounded-xl border border-[#D9D2C5] bg-white flex items-start gap-4 shadow-xs">
                      <span className="w-8 h-8 rounded-lg bg-[#0E0D0C] text-white flex items-center justify-center font-mono text-xs shrink-0 font-medium">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#111111]/80 font-sans leading-relaxed pt-1">
                        {sol}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Metric Proof Points */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9D2C5]">
                {industry.keyMetrics.map((km, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-[#D9D2C5] shadow-xs">
                    <div className="font-serif text-3xl font-light text-[#111111]">{km.value}</div>
                    <div className="text-xs font-medium text-[#111111] mt-1">{km.label}</div>
                    <div className="text-[11px] text-[#111111]/60 mt-0.5 font-sans">{km.context}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

          {/* Right Sidebar: Tech Stack, Services, Audit CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Recommended Services */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                  Integrated S.C.A.L.E. Practices
                </span>
                <div className="space-y-2">
                  {industry.recommendedServices.map((svcSlug: string, idx: number) => (
                    <Link
                      key={idx}
                      href={`/services/${svcSlug}`}
                      className="block p-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F7F5F0] border border-[#D9D2C5] text-xs font-mono text-[#111111] hover:text-[#9E7D47] transition-colors"
                    >
                      • {svcSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Recommended Tech Stack */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                  Recommended Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {industry.recommendedTech.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-[#FAF8F5] text-[#111111] text-xs font-mono border border-[#D9D2C5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Direct Consultation Widget */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="p-6 rounded-xl border border-white/10 bg-[#0E0D0C] text-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D47]">
                  Category Scoping
                </span>
                <h3 className="font-serif text-xl font-light">
                  Schedule a {industry.name} Audit
                </h3>
                <p className="text-xs text-[#D9D2C5] leading-relaxed font-sans">
                  Review catalog latency, international checkout drop-off, and customer lifetime value against top brands in your space.
                </p>
                <Link
                  href="/#audit-intake"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9E7D47] hover:bg-[#8C6D38] text-white py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors font-medium"
                >
                  <span>Request Category Diagnostic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
