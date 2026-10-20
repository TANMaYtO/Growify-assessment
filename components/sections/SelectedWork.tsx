'use client';

import React from 'react';
import Link from 'next/link';
import { caseStudies } from '@/content/caseStudies';
import { Fact } from '../review/Fact';
import { ArrowUpRight } from 'lucide-react';
import { SeamDivider } from '../ui/SeamDivider';

export function SelectedWork() {
  const cases = Object.values(caseStudies);

  return (
    <section className="py-16 md:py-24 bg-[#F5F1EA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#6B3BA6] block mb-2">
              Commercial Proof & Case Studies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17102A]">
              Selected Commercial Engagements
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#17102A] hover:text-[#6B3BA6] font-semibold transition-colors pb-1 border-b border-[#17102A]"
          >
            <span>View All Client Archives</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs) => (
            <article
              key={cs.slug}
              className="bg-[#FAF7F2] border border-[#D9D2C5] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#6B3BA6]/60 transition-all hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#17102A]/50 bg-[#EFEAE1] px-2 py-0.5 rounded">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-[#1F7A8C]">Case Study</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[#17102A] group-hover:text-[#6B3BA6] transition-colors">
                    {cs.brand}
                  </h3>
                  <p className="text-xs text-[#17102A]/70 mt-1 line-clamp-2">
                    {cs.tagline}
                  </p>
                </div>

                {/* Hero Metric Callout */}
                <div className="pt-4 pb-2 border-t border-[#D9D2C5]">
                  <span className="block font-display text-4xl sm:text-5xl font-bold text-[#1F7A8C]">
                    {cs.slug === 'tarun-tahiliani' && <Fact id="tt-eos-growth" fallback="200%+" />}
                    {cs.slug === 'mahima-mahajan' && <Fact id="mm-aov-growth" fallback="2.54x" />}
                    {cs.slug === 'house-of-masaba' && <Fact id="masaba-scale-impact" fallback="75%" />}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#17102A]/60 block mt-1">
                    {cs.heroMetricLabel}
                  </span>
                </div>

                {/* Scope chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cs.scope.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFEAE1] text-[#17102A]/80 border border-[#D9D2C5]/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D9D2C5]">
                <Link
                  href={`/work/${cs.slug}`}
                  className="w-full text-center py-2.5 px-4 bg-transparent group-hover:bg-[#17102A] border border-[#17102A] text-[#17102A] group-hover:text-white text-xs font-mono uppercase tracking-widest font-semibold rounded transition-all block"
                >
                  Inspect Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <SeamDivider label="Proprietary Technology Portfolio" className="mt-16" />
    </section>
  );
}
