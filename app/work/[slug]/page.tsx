import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/content/facts";
import type { MetricPoint } from "@/content/facts";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates static parameters for all known case studies at build time.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

/**
 * Generates dynamic SEO metadata for each case study page.
 */
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];

  if (!cs) {
    return { title: "Case Study Not Found | Growify" };
  }

  return {
    title: `${cs.brand} Flagship Case Study | Growify`,
    description: `${cs.tagline}. Documented growth outcomes, architecture, and verified metrics for ${cs.brand}.`,
    openGraph: {
      title: `${cs.brand} Case Study | Growify`,
      description: cs.tagline,
      url: `https://growify.in/work/${slug}`,
    },
  };
}

/**
 * Renders the dynamic deep-dive case study page with challenge, phased approach,
 * verified metrics ledger breakdown, tech stack, and next case navigation.
 */
export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const cs = caseStudies[slug];

  if (!cs) {
    notFound();
  }

  const nextCase = cs.nextCaseSlug ? caseStudies[cs.nextCaseSlug] : null;

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Top Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <span>/</span>
            <span className="text-[#9E7D47]">{cs.brand}</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>{cs.category} • Client Transformation</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                  {cs.brand}
                </h1>

                <p className="font-serif italic text-xl sm:text-2xl text-[#9E7D47] font-light">
                  {cs.tagline}
                </p>

                <p className="text-base sm:text-lg text-[#D9D2C5]/90 max-w-2xl leading-relaxed font-sans">
                  {cs.overview}
                </p>
              </div>

              {/* Hero Key Metric Box */}
              <div className="lg:col-span-4 bg-[#141312] p-8 rounded-2xl border border-white/15 space-y-2">
                <span className="text-xs font-mono text-[#9E7D47] uppercase tracking-wider block font-semibold">
                  Primary Impact Metric
                </span>
                <div className="font-serif text-5xl sm:text-6xl font-light text-white">
                  {cs.heroMetric}
                </div>
                <p className="text-xs text-[#D9D2C5] uppercase font-mono tracking-wider">
                  {cs.heroMetricLabel}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Narrative Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        {/* Editorial Flagship Showcase Banner */}
        <ScrollReveal animation="fade-up">
          <div className="relative aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-[#D9D2C5] shadow-xl bg-[#0E0D0C]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cs.image}
              alt={`${cs.brand} Flagship Case Study`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] bg-[#0E0D0C]/85 px-3 py-1 rounded border border-white/20">
                  Flagship Architecture • {cs.category}
                </span>
                <div className="text-white text-2xl sm:text-3xl font-serif mt-2 drop-shadow-sm">
                  {cs.brand} Commercial Flagship
                </div>
              </div>
              <span className="text-xs font-mono text-white/90 bg-black/70 px-3 py-1.5 rounded border border-white/20 self-start sm:self-auto">
                Verified Case Study
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Challenge & Phased Approach */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The Challenge */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D9D2C5] space-y-4 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] font-semibold">
                  Context & Hurdles
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                  The Architectural Challenge
                </h2>
                <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed font-sans">
                  {cs.challenge}
                </p>
              </div>
            </ScrollReveal>

            {/* Phased Strategic Approach */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] font-semibold">
                    Methodology
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#111111] mt-1">
                    Phased Strategic Approach
                  </h2>
                </div>

                <div className="space-y-4">
                  {cs.approach.map((step: { phase: string; title: string; description: string }, idx: number) => (
                    <div
                      key={idx}
                      className="p-6 sm:p-8 rounded-xl border border-[#D9D2C5] bg-white flex flex-col sm:flex-row sm:items-start gap-6 shadow-xs"
                    >
                      <span className="w-16 h-10 rounded-lg bg-[#0E0D0C] text-white flex items-center justify-center font-mono text-xs shrink-0 font-medium">
                        {step.phase}
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-medium text-[#111111]">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Verified Metrics & Evidence Ledger */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] font-semibold">
                    Data Integrity
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#111111] mt-1">
                    Reported Metrics &amp; Evidence Ledger
                  </h2>
                </div>

                <div className="border border-[#D9D2C5] rounded-xl overflow-hidden bg-white shadow-xs">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-[#0E0D0C] text-[#FAF8F5] font-mono uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-4 px-5">Metric / Outcome</th>
                        <th className="py-4 px-5">Value</th>
                        <th className="py-4 px-5">Period</th>
                        <th className="py-4 px-5">Verification Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D9D2C5]">
                      {cs.metrics.map((m: MetricPoint, idx: number) => (
                        <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                          <td className="py-4 px-5">
                            <strong className="text-[#111111] block text-sm font-medium">{m.label}</strong>
                            <span className="text-[#111111]/60 text-[11px] font-sans">{m.definition}</span>
                          </td>
                          <td className="py-4 px-5 font-serif text-lg text-[#111111] font-medium whitespace-nowrap">
                            {m.value}
                          </td>
                          <td className="py-4 px-5 text-[#111111]/70 font-mono text-[11px] whitespace-nowrap">
                            {m.period}
                          </td>
                          <td className="py-4 px-5">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono mb-1 ${
                              m.status === 'verified'
                                ? 'bg-[#9E7D47]/15 text-[#8C6D38]'
                                : m.status === 'supplied'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {m.status === 'verified' ? '[V] Verified' : m.status === 'supplied' ? '[S] Deck' : '[U] Pending'}
                            </span>
                            <span className="text-[#111111]/60 block text-[10px] font-mono line-clamp-2">
                              {m.source}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Scope, Tech, and Navigation */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Scope Deliverables */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                  Delivered Scope
                </span>
                <ul className="space-y-2.5">
                  {cs.scope.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                  Technology Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {cs.techStack.map((tech: string, idx: number) => (
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

            {/* Next Case Study Card */}
            {nextCase && (
              <ScrollReveal animation="fade-up" delay={150}>
                <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D47] block font-semibold">
                    Next Case Study
                  </span>
                  <h4 className="font-serif text-xl font-medium text-[#111111]">
                    {nextCase.brand}
                  </h4>
                  <p className="text-xs text-[#111111]/70 line-clamp-2">
                    {nextCase.tagline}
                  </p>
                  <Link
                    href={`/work/${nextCase.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#9E7D47] transition-colors pt-2 font-medium"
                  >
                    <span>Explore Next Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            )}

            {/* Audit CTA */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="p-6 rounded-xl border border-white/10 bg-[#0E0D0C] text-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D47]">
                  Ready to Scale?
                </span>
                <h3 className="font-serif text-xl font-light">
                  Engineer similar outcomes for your brand.
                </h3>
                <p className="text-xs text-[#D9D2C5] leading-relaxed font-sans">
                  We run a preliminary architectural audit of your catalog, retention systems, and checkout latency.
                </p>
                <Link
                  href="/#audit-intake"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9E7D47] hover:bg-[#8C6D38] text-white py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors font-medium"
                >
                  <span>Request Growth Diagnostic</span>
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
