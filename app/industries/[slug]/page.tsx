import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/content/facts";
import type { IndustryVertical } from "@/content/facts";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

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
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B3BA6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">{industry.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#1F7A8C]" />
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
            <div className="lg:col-span-4 bg-[#241B3B] p-8 rounded-2xl border border-white/15 space-y-3">
              <span className="text-xs font-mono text-[#1F7A8C] uppercase tracking-wider block">
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
        </div>
      </section>

      {/* Main Narrative: Challenges vs Solutions */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* The Specific Category Friction */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D9D2C5] space-y-6 shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
                  Category Realities
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#17102A] mt-1">
                  Primary Commercial Bottlenecks
                </h2>
              </div>

              <div className="space-y-3">
                {industry.challenges.map((ch: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F1EA]/50 border border-[#D9D2C5]/60">
                    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#17102A]/80 font-sans leading-relaxed">
                      {ch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineered Solutions */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
                  The Growify Response
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#17102A] mt-1">
                  Architectural Solutions
                </h2>
              </div>

              <div className="space-y-4">
                {industry.solutions.map((sol: string, idx: number) => (
                  <div key={idx} className="p-6 rounded-xl border border-[#D9D2C5] bg-white flex items-start gap-4 shadow-xs">
                    <span className="w-8 h-8 rounded-lg bg-[#17102A] text-white flex items-center justify-center font-mono text-xs shrink-0 font-medium">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#17102A]/80 font-sans leading-relaxed pt-1">
                      {sol}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9D2C5]">
              {industry.keyMetrics.map((km, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-[#D9D2C5] shadow-xs">
                  <div className="font-serif text-3xl font-light text-[#17102A]">{km.value}</div>
                  <div className="text-xs font-medium text-[#17102A] mt-1">{km.label}</div>
                  <div className="text-[11px] text-[#17102A]/60 mt-0.5 font-sans">{km.context}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Sidebar: Tech Stack, Services, Audit CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Recommended Services */}
            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#17102A]/60 block">
                Integrated S.C.A.L.E. Practices
              </span>
              <div className="space-y-2">
                {industry.recommendedServices.map((svcSlug: string, idx: number) => (
                  <Link
                    key={idx}
                    href={`/services/${svcSlug}`}
                    className="block p-3 rounded-lg bg-[#F5F1EA]/60 hover:bg-[#F5F1EA] border border-[#D9D2C5] text-xs font-mono text-[#17102A] hover:text-[#6B3BA6] transition-colors"
                  >
                    • {svcSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Tech Stack */}
            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#17102A]/60 block">
                Recommended Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {industry.recommendedTech.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md bg-[#F5F1EA] text-[#17102A] text-xs font-mono border border-[#D9D2C5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Consultation Widget */}
            <div className="p-6 rounded-xl border border-[#6B3BA6]/30 bg-[#17102A] text-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F7A8C]">
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
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F1EA] text-[#17102A] py-3 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors font-medium"
              >
                <span>Request Category Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
