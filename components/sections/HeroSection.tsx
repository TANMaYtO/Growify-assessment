'use client';

import React from 'react';
import Link from 'next/link';
import { useReview } from '../review/ReviewContext';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SeamDivider } from '../ui/SeamDivider';

const clientWordmarks = [
  'TARUN TAHILIANI',
  'GAURAV GUPTA',
  'HOUSE OF MASABA',
  'RIDHI MEHRA',
  'MAHIMA MAHAJAN',
  'MEENA BAZAAR',
  'HAZOORILAL LEGACY',
  'ANMOL JEWELLERS',
];

export function HeroSection() {
  const { trackEvent } = useReview();

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#6B3BA6] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#17102A]/70">
            E-Commerce Growth Operating Partner · New Delhi
          </span>
        </div>

        {/* Main Display Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#17102A] leading-[1.08]">
            Luxury commerce, <br />
            <span className="italic font-serif text-[#6B3BA6]">engineered</span> for growth.
          </h1>

          <p className="text-lg sm:text-xl text-[#17102A]/80 max-w-2xl font-light leading-relaxed">
            Growify is the growth, commerce and AI partner for fashion, luxury and lifestyle brands. We build the digital flagship, run the precision demand engine, own the customer conversation from first click to repeat order, and build proprietary technology of our own.
          </p>

          {/* Dual Immediate Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              onClick={() =>
                trackEvent('cta_click', {
                  cta_id: 'hero_primary_audit',
                  location: 'hero',
                  target: '/contact',
                })
              }
              className="px-8 py-4 bg-[#17102A] hover:bg-[#6B3BA6] text-[#F5F1EA] text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Book a Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              onClick={() =>
                trackEvent('cta_click', {
                  cta_id: 'hero_secondary_work',
                  location: 'hero',
                  target: '/work',
                })
              }
              className="px-8 py-4 bg-transparent hover:bg-[#EFEAE1] text-[#17102A] border border-[#D9D2C5] text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded flex items-center justify-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 text-[#17102A]/60" />
            </Link>
          </div>
        </div>

        {/* Trust Bar & Client Wordmarks */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#D9D2C5]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#17102A]/50">
              Trusted by India’s Premier Haute Couture & Designer Houses
            </span>
            <span className="text-xs font-mono text-[#6B3BA6]">
              500+ Digital Flagships Built Since 2019
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {clientWordmarks.map((brand) => (
              <div
                key={brand}
                className="py-3 px-2 text-center bg-[#FAF7F2] border border-[#D9D2C5]/70 rounded transition-all hover:border-[#6B3BA6]/50 hover:shadow-sm"
              >
                <span className="text-[11px] font-display font-medium tracking-wider text-[#17102A]/80 block truncate">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SeamDivider label="S.C.A.L.E. Framework" className="mt-12" />
    </section>
  );
}
