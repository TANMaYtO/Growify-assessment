import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, pipelineCaseStudies } from "@/content/facts";
import type { CaseStudy, PipelineItem, MetricPoint } from "@/content/facts";
import { ArrowRight, Trophy, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Growify Luxury Flagships",
  description:
    "Documented growth outcomes for India's leading luxury fashion houses: Tarun Tahiliani, Mahima Mahajan, and House of Masaba. Verified metrics, zero manufactured statistics.",
};

/**
 * Renders the main Work / Case Studies library, featuring fully verified
 * client transformations alongside an 8-study pipeline with transparent data requirements.
 */
export default function WorkPage(): React.JSX.Element {
  const publishedCases: CaseStudy[] = Object.values(caseStudies);

  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F7A8C]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <Trophy className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Evidence-First Portfolio</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Engineered transformations for <span className="italic font-normal text-white">marquee couture houses</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed">
              Every metric cited on this site is traceable to verified client reporting, public case studies, or validated growth decks. Zero manufactured figures.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Case Studies Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D9D2C5]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Deep-Dive Analyses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light mt-1 text-[#17102A]">
              Flagship Case Studies
            </h2>
          </div>
          <p className="text-xs font-mono text-[#17102A]/60">
            [V] Verified Public Study • [S] Client Deck • [P] In Progress
          </p>
        </div>

        <div className="space-y-12">
          {publishedCases.map((cs, idx) => (
            <div
              key={cs.slug}
              className="bg-white border border-[#D9D2C5] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Visual & Headline */}
              <div className="lg:col-span-5 bg-[#241B3B] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#6B3BA6]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-[#D9D2C5] border border-white/15">
                      {cs.category}
                    </span>
                    <span className="text-xs font-mono text-[#1F7A8C]">
                      Case 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
                      {cs.brand}
                    </h3>
                    <p className="text-sm font-sans text-[#D9D2C5] mt-2 leading-relaxed">
                      {cs.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-8 relative z-10 border-t border-white/10 mt-8">
                  <div className="font-serif text-4xl sm:text-5xl font-light text-[#1F7A8C]">
                    {cs.heroMetric}
                  </div>
                  <div className="text-xs font-mono text-[#D9D2C5] mt-1 uppercase tracking-wider">
                    {cs.heroMetricLabel}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Metrics, and Link */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B3BA6] mb-2">
                      The Challenge & Growth Leap
                    </h4>
                    <p className="text-sm sm:text-base text-[#17102A]/80 leading-relaxed font-sans">
                      {cs.overview}
                    </p>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D9D2C5]/60">
                    {cs.metrics.slice(0, 2).map((m: MetricPoint, mIdx: number) => (
                      <div key={mIdx} className="bg-[#F5F1EA]/60 p-4 rounded-xl border border-[#D9D2C5]/80">
                        <div className="flex items-center justify-between text-xs font-mono text-[#17102A]/60">
                          <span>{m.period}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                            m.status === 'verified'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {m.status === 'verified' ? '[V] Verified' : '[S] Supplied'}
                          </span>
                        </div>
                        <div className="font-serif text-2xl font-light text-[#17102A] mt-2">
                          {m.value}
                        </div>
                        <div className="text-xs text-[#17102A]/70 mt-1 line-clamp-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scope Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cs.scope.map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#F5F1EA] text-[#17102A]/80 text-[11px] font-mono border border-[#D9D2C5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D9D2C5] flex items-center justify-between">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-2 bg-[#17102A] text-white px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-[#6B3BA6] transition-colors"
                  >
                    <span>Read Full Architectural Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-xs font-mono text-[#17102A]/50 hidden sm:inline">
                    Stack: {cs.techStack[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SeamDivider variant="running-stitch" />

      {/* Case Study Pipeline & Research Agenda */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17102A]/5 text-xs font-mono text-[#6B3BA6] border border-[#17102A]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#6B3BA6]" />
              <span>Pipeline & Evidence Tracking</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              Future Case Study Pipeline
            </h2>
            <p className="text-sm text-[#17102A]/70">
              In accordance with our strict data audit rules, these 8 candidate case studies are documented with explicit data requirements prior to public claims.
            </p>
          </div>

          <div className="border border-[#D9D2C5] rounded-xl overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#17102A] text-[#F5F1EA] font-mono uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-6 font-medium">Candidate Brand</th>
                  <th className="py-4 px-6 font-medium">Core Growth Theme</th>
                  <th className="py-4 px-6 font-medium">Current Status</th>
                  <th className="py-4 px-6 font-medium">Required Data for Publication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9D2C5]">
                {pipelineCaseStudies.map((pipe: PipelineItem) => (
                  <tr key={pipe.id} className="hover:bg-[#F5F1EA]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-sm text-[#17102A] whitespace-nowrap">
                      {pipe.candidateBrand}
                    </td>
                    <td className="py-4 px-6 text-[#17102A]/80 font-sans">
                      {pipe.theme}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1F7A8C]/10 text-[#1F7A8C] font-mono text-[10px] font-medium border border-[#1F7A8C]/20">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{pipe.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#17102A]/70 font-mono text-[11px]">
                      {pipe.dataRequirements.join(" • ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#17102A] text-[#F5F1EA] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light">
            Become our next <span className="italic font-normal">flagship case study</span>.
          </h2>
          <p className="text-sm text-[#D9D2C5] max-w-xl mx-auto">
            We partner with an exclusive cohort of high-value fashion and lifestyle brands each year. Let us analyze your store telemetry.
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
