import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/facts";
import type { ArticleData } from "@/content/facts";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights & Luxury Commerce Research | Growify",
  description:
    "Rigorous research, technical architectures, and benchmarks on luxury fashion commerce, Shopify Plus engineering, and neural virtual try-on.",
};

/**
 * Renders the primary Insights & Research hub, publishing technical analyses,
 * luxury benchmarks, and architectural blueprints.
 */
export default function InsightsPage(): React.JSX.Element {
  const articleList: ArticleData[] = Object.values(articles);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#9E7D47]">Insights</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <BookOpen className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>Engineering &amp; Commerce Research</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                Rigorous research for <span className="italic font-normal text-[#9E7D47]">luxury commerce operators</span>.
              </h1>

              <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
                No shallow marketing listicles. We publish in-depth architectural analyses, unit economics breakdowns, and empirical engineering benchmarks for high-value retail.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articleList.map((art: ArticleData, idx: number) => (
            <ScrollReveal key={art.slug} animation="fade-up" delay={idx * 80}>
              <article className="bg-white border border-[#D9D2C5] rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#9E7D47] h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9E7D47] font-semibold">{art.category}</span>
                    <div className="flex items-center gap-2 text-[#111111]/50">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl font-light text-[#111111] group-hover:text-[#9E7D47] transition-colors leading-snug">
                    <Link href={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                    {art.summary}
                  </p>

                  <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#D9D2C5] text-xs font-mono text-[#111111]/80">
                    <strong className="block text-[#111111] mb-1 font-semibold">Core Thesis:</strong>
                    {art.keyTakeaway}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D9D2C5]/50 flex items-center justify-between text-xs font-mono text-[#111111]/60">
                  <span>Published {art.date}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="text-[#9E7D47] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Read Full Thesis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
