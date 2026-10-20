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
        return 'bg-[#17102A] text-white border-[#17102A]';
      case 'Platform Integration':
        return 'bg-[#EFEAE1] text-[#6B3BA6] border-[#D9D2C5]';
      case 'Technology We Use':
        return 'bg-[#FAF7F2] text-[#17102A]/80 border-[#D9D2C5]';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F1EA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#6B3BA6] block mb-2">
                Verified Commerce Stack
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17102A]">
                Technology & Partner Ecosystem
              </h2>
            </div>
            <Link
              href="/technology/partners"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#17102A] hover:text-[#6B3BA6] font-semibold transition-colors pb-1 border-b border-[#17102A]"
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
                className="bg-[#FAF7F2] border border-[#D9D2C5] rounded-lg p-6 flex flex-col justify-between hover:border-[#6B3BA6] transition-all hover:shadow-sm h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#17102A]/60">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getBadgeStyle(item.badge)}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-[#17102A]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#17102A]/80 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-3 bg-[#EFEAE1] rounded border border-[#D9D2C5]/70 text-[11px] text-[#17102A]/90">
                    <strong className="block text-[#17102A] font-semibold mb-0.5">Value to Luxury Brands:</strong>
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
                    className="text-[#6B3BA6] hover:underline"
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
