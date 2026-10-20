'use client';

import React from 'react';
import Link from 'next/link';
import { useReview } from '../review/ReviewContext';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SeamDivider } from '../ui/SeamDivider';
import { ScrollReveal } from '../motion/ScrollReveal';
import { ParallaxImage } from '../motion/ParallaxImage';

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
        
        {/* Main 2-Column Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="space-y-6">
                {/* Top Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6B3BA6] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#17102A]/70">
                    E-Commerce Growth Operating Partner · New Delhi
                  </span>
                </div>

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

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#17102A]/60">
                  <span>Meta Managed Agency</span>
                  <span>•</span>
                  <span>Shopify Plus Partner</span>
                  <span>•</span>
                  <span>Zero Outsourcing</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High-Craft Luxury Visual Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="fade-left" delay={120} duration={800}>
              <div className="relative rounded-2xl overflow-hidden border border-[#D9D2C5] shadow-2xl bg-[#17102A] aspect-4/5 max-w-[420px] mx-auto group">
                {/* Luxury Atelier Craftsmanship Hero Image with Parallax Depth */}
                <ParallaxImage
                  src="/images/hero/luxury_atelier.jpg"
                  alt="Haute Couture Craftsmanship Atelier"
                  aspectRatio="aspect-4/5"
                  priority={true}
                  speed={0.08}
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-full bg-[#17102A]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#D9D2C5] border border-white/20">
                    Haute Couture Atelier
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1F7A8C]/80 backdrop-blur-md text-[10px] font-mono text-white">
                    Live Craft
                  </span>
                </div>

                {/* Bottom Floating Telemetry Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#17102A]/85 backdrop-blur-md border border-white/15 text-white space-y-2 z-10">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#1F7A8C] font-medium">Digital Flagship Lab</span>
                    <span className="text-white/60">South Delhi Studio</span>
                  </div>
                  <div className="font-serif text-lg font-light">
                    From Handcrafted Zardozi to Shopify Liquid
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D9D2C5]/70 pt-1 border-t border-white/10">
                    <span>Lookify AI Lab</span>
                    <span>•</span>
                    <span>35+ Full-Time Minds</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Trust Bar & Client Wordmarks */}
        <ScrollReveal animation="fade-up" delay={160}>
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
        </ScrollReveal>
      </div>

      <SeamDivider label="S.C.A.L.E. Framework" className="mt-12" />
    </section>
  );
}
