'use client';

import React from 'react';
import Link from 'next/link';
import { caseStudies } from '@/content/caseStudies';
import { Fact } from '../review/Fact';
import { ArrowUpRight } from 'lucide-react';
import { SeamDivider } from '../ui/SeamDivider';
import { ScrollReveal } from '../motion/ScrollReveal';
import { ParallaxImage } from '../motion/ParallaxImage';
import { ParallaxCard } from '../motion/ParallaxCard';

export function SelectedWork() {
  const cases = Object.values(caseStudies);

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#9E7D47] block mb-2">
                Commercial Proof & Case Studies
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111]">
                Selected Commercial Engagements
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#9E7D47] font-semibold transition-colors pb-1 border-b border-[#111111]"
            >
              <span>View All Client Archives</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <ScrollReveal key={cs.slug} animation="fade-up" delay={idx * 140}>
              <ParallaxCard maxTilt={3.5} className="h-full">
                <article
                  className="bg-[#F7F5F0] border border-[#D9D2C5] rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#9E7D47]/60 transition-all hover:shadow-xl group h-full"
                >
                <div className="space-y-4">
                  {/* Editorial Couture Image Banner with Parallax */}
                  <div className="relative aspect-16/10 rounded-lg overflow-hidden border border-[#D9D2C5]/70 bg-black/10">
                    <ParallaxImage
                      src={cs.image}
                      alt={cs.brand}
                      aspectRatio="aspect-16/10"
                      speed={0.06}
                    />
                    <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white border border-white/20 z-10">
                      {cs.category}
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-mono z-10">
                      <span className="font-serif italic text-white/90 drop-shadow-sm">Digital Flagship</span>
                      <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs text-[10px] text-white">
                        Verified Case
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl text-[#111111] group-hover:text-[#9E7D47] transition-colors">
                      {cs.brand}
                    </h3>
                    <p className="text-xs text-[#111111]/70 mt-1 line-clamp-2">
                      {cs.tagline}
                    </p>
                  </div>

                  {/* Hero Metric Callout */}
                  <div className="pt-4 pb-2 border-t border-[#D9D2C5]">
                    <span className="block font-display text-4xl sm:text-5xl font-bold text-[#9E7D47]">
                      {cs.slug === 'tarun-tahiliani' && <Fact id="tt-eos-growth" fallback="200%+" />}
                      {cs.slug === 'mahima-mahajan' && <Fact id="mm-aov-growth" fallback="2.54x" />}
                      {cs.slug === 'house-of-masaba' && <Fact id="masaba-scale-impact" fallback="75%" />}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 block mt-1">
                      {cs.heroMetricLabel}
                    </span>
                  </div>

                  {/* Scope chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cs.scope.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFEAE1] text-[#111111]/80 border border-[#D9D2C5]/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D9D2C5]">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="w-full text-center py-2.5 px-4 bg-transparent group-hover:bg-[#111111] border border-[#111111] text-[#111111] group-hover:text-white text-xs font-mono uppercase tracking-widest font-semibold rounded transition-all block"
                  >
                    Inspect Case Study
                  </Link>
                </div>
              </article>
            </ParallaxCard>
          </ScrollReveal>
          ))}
        </div>
      </div>

      <SeamDivider label="Proprietary Technology Portfolio" className="mt-16" />
    </section>
  );
}
