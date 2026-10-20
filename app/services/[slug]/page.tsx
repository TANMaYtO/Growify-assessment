import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, caseStudies } from "@/content/facts";
import { CheckCircle2, ArrowRight, Layers, ArrowLeft, HelpCircle } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates static parameters for all known service slugs at build time.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(services).map((slug) => ({ slug }));
}

/**
 * Generates dynamic SEO metadata for each service practice page.
 */
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return { title: "Service Not Found | Growify" };
  }

  return {
    title: `${service.title} | Growify Practices`,
    description: service.shortSummary,
    openGraph: {
      title: `${service.title} | Growify`,
      description: service.shortSummary,
      url: `https://growify.in/services/${slug}`,
    },
  };
}

/**
 * Renders the dynamic deep-dive service practice page with architectural capabilities,
 * operational process timelines, tech stacks, and relevant case studies.
 */
export default async function ServiceDetailPage({ params }: ServicePageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  // Retrieve related case studies
  const relatedCases = service.relatedCaseSlugs
    .map((cSlug: string) => caseStudies[cSlug])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Top Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#9E7D47]">{service.pillar}</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <Layers className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>S.C.A.L.E. Pillar: {service.pillar}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed">
                {service.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/#audit-intake"
                  className="inline-flex items-center gap-2 bg-[#9E7D47] hover:bg-[#8C6D38] text-white px-6 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Request Practice Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-transparent text-[#D9D2C5] border border-white/20 px-5 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider hover:text-white hover:border-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Practices</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities & Scope Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Scope Details */}
          <div className="lg:col-span-8 space-y-12">
            <ScrollReveal animation="fade-up">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                  Architectural Scope
                </span>
                <h2 className="font-serif text-3xl font-light mt-1 text-[#111111]">
                  Core Engineering Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {service.capabilities.map((cap: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-[#D9D2C5] bg-white flex items-start gap-3 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#111111] leading-snug">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* If tiers exist, render them */}
            {service.tiers && service.tiers.length > 0 && (
              <ScrollReveal animation="fade-up" delay={50}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                    Deployment Tiers
                  </span>
                  <h2 className="font-serif text-2xl font-light mt-1 text-[#111111]">
                    Engagement Formats
                  </h2>
                  <div className="space-y-4 mt-6">
                    {service.tiers.map((tier: { name: string; description: string }, idx: number) => (
                      <div
                        key={idx}
                        className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-2"
                      >
                        <h3 className="font-serif text-lg font-medium text-[#111111]">
                          {tier.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                          {tier.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* 5-Step Execution Process */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                  Delivery Methodology
                </span>
                <h2 className="font-serif text-2xl font-light mt-1 text-[#111111]">
                  The 5-Phase Execution Sequence
                </h2>
                <div className="space-y-4 mt-6">
                  {service.process.map((p: { step: string; name: string; description: string }, idx: number) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl border border-[#D9D2C5] bg-white flex flex-col sm:flex-row sm:items-start gap-5"
                    >
                      <span className="w-10 h-10 rounded-lg bg-[#0E0D0C] text-white flex items-center justify-center font-mono text-sm shrink-0 font-medium">
                        {p.step}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-serif text-lg font-medium text-[#111111]">
                          {p.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Practice Specific FAQs */}
            {service.faq && service.faq.length > 0 && (
              <ScrollReveal animation="fade-up" delay={150}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                    Clarity
                  </span>
                  <h2 className="font-serif text-2xl font-light mt-1 text-[#111111]">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4 mt-6">
                    {service.faq.map((item: { question: string; answer: string }, idx: number) => (
                      <div
                        key={idx}
                        className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-2"
                      >
                        <div className="flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                          <h4 className="font-medium text-sm text-[#111111]">
                            {item.question}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed pl-6 font-sans">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right Column: Sidebar (Tech Stack, Related Work, Audit CTA) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                  Integrated Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech: string, idx: number) => (
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

            {/* Related Case Studies */}
            {relatedCases.length > 0 && (
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                    Demonstrated Case Studies
                  </span>
                  <div className="space-y-3">
                    {relatedCases.map((cs) => (
                      <Link
                        key={cs.slug}
                        href={`/work/${cs.slug}`}
                        className="block p-4 rounded-lg bg-[#FAF8F5] hover:bg-[#F7F5F0] border border-[#D9D2C5] transition-colors group"
                      >
                        <div className="text-xs font-mono text-[#9E7D47] uppercase font-semibold">{cs.brand}</div>
                        <div className="font-serif text-sm font-medium text-[#111111] mt-1 group-hover:text-[#9E7D47] transition-colors">
                          {cs.tagline}
                        </div>
                        <div className="mt-2 text-[11px] text-[#111111]/60 flex items-center gap-1 font-mono">
                          <span>Read Case Study</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Direct Consultation Widget */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="p-6 rounded-xl border border-white/10 bg-[#0E0D0C] text-white space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D47]">
                  Pillar Consultation
                </span>
                <h3 className="font-serif text-xl font-light">
                  Ready to review your {service.title}?
                </h3>
                <p className="text-xs text-[#D9D2C5] leading-relaxed">
                  Connect with our engineering leadership to audit your store architecture and build a tailored deployment roadmap.
                </p>
                <Link
                  href="/#audit-intake"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9E7D47] hover:bg-[#8C6D38] text-white py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors font-medium"
                >
                  <span>Audit This Practice</span>
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
