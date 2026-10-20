'use client';

import React from 'react';
import Link from 'next/link';
import { partners, PartnerBadge } from '@/content/partners';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../motion/ScrollReveal';

export function EcosystemMatrix() {
  const getBadgeStyle = (badge: PartnerBadge) => {
    switch (badge) {
      case 'Official Partner':
        return 'bg-[#111111] text-white border-[#111111]';
      case 'Platform Integration':
        return 'bg-[#FAF8F5] text-[#9E7D47] border-[#9E7D47]/40';
      case 'Technology We Use':
        return 'bg-[#FAF8F5] text-[#111111]/80 border-[#D9D2C5]';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-300';
    }
  };

  return (
    <section id="ecosystem" className="py-16 md:py-24 bg-[#FAF8F5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#9E7D47] block mb-2">
                Verified Commerce Stack
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111]">
                Technology & Partner Ecosystem
              </h2>
            </div>
            <Link
              href="/technology/partners"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#9E7D47] font-semibold transition-colors pb-1 border-b border-[#111111]"
            >
              <span>View Full Integration Matrix</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.slice(0, 6).map((item, idx) => (
            <ScrollReveal key={item.name} animation="fade-up" delay={idx * 80}>
              <div
                className="bg-[#F7F5F0] border border-[#D9D2C5] rounded-lg p-6 flex flex-col justify-between hover:border-[#9E7D47] transition-all hover:shadow-sm h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/60">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getBadgeStyle(item.badge)}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-[#111111]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#111111]/80 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-3 bg-[#EFEAE1] rounded border border-[#D9D2C5]/70 text-[11px] text-[#111111]/90">
                    <strong className="block text-[#111111] font-semibold mb-0.5">Value to Luxury Brands:</strong>
                    <span>{item.customerValue}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D9D2C5] flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Certified Integration
                  </span>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9E7D47] hover:underline"
                  >
                    Official Site ↗
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
