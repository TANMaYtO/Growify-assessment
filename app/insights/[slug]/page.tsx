import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/content/facts";
import { ArrowRight, ArrowLeft, Clock, BookOpen, User, Calendar } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates static parameters for all known editorial insight articles at build time.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(articles).map((slug) => ({ slug }));
}

/**
 * Generates dynamic SEO metadata for each editorial article.
 */
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: "Article Not Found | Growify" };
  }

  return {
    title: `${article.title} | Growify Insights`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Growify Insights`,
      description: article.summary,
      url: `https://growify.in/insights/${slug}`,
    },
  };
}

/**
 * Renders the dynamic editorial insight article page with structured headings,
 * authoritative summaries, and actionable luxury commerce takeaways.
 */
export default async function ArticleDetailPage({ params }: ArticlePageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Top Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-[#9E7D47]">{article.category}</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <BookOpen className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>{article.category}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-tight leading-[1.2]">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D9D2C5]/80 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>{article.author}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>{article.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Editorial Content */}
      <article className="py-20 max-w-4xl mx-auto px-6 space-y-12">
        {/* Executive Summary & Core Thesis Box */}
        <ScrollReveal animation="fade-up">
          <div className="bg-white p-8 rounded-2xl border border-[#D9D2C5] space-y-4 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47] font-semibold">
              Executive Thesis
            </span>
            <p className="text-base text-[#111111]/90 leading-relaxed font-sans font-medium">
              {article.summary}
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#D9D2C5] text-xs font-mono text-[#111111]">
              <strong className="block text-[#9E7D47] mb-1 uppercase tracking-wider font-semibold">Core Takeaway:</strong>
              {article.keyTakeaway}
            </div>
          </div>
        </ScrollReveal>

        {/* Section Body Blocks */}
        <div className="space-y-10 font-sans">
          {article.sections.map((sec, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                  {sec.heading}
                </h2>
                <p className="text-base text-[#111111]/80 leading-relaxed font-sans">
                  {sec.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <SeamDivider variant="running-stitch" />

        {/* Navigation & Discussion */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#D9D2C5]">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#9E7D47] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Research &amp; Theses</span>
          </Link>

          <Link
            href="/#audit-intake"
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-[#9E7D47] transition-colors font-medium"
          >
            <span>Discuss Architecture With Our Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
