'use client';

import React from 'react';
import Link from 'next/link';
import { useReview } from '../review/ReviewContext';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SeamDivider } from '../ui/SeamDivider';
import { ScrollReveal } from '../motion/ScrollReveal';
import { ParallaxImage } from '../motion/ParallaxImage';
import { ParallaxCard } from '../motion/ParallaxCard';
import { MagneticButton } from '../motion/MagneticButton';
import { AmbientLight } from '../motion/AmbientLight';

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

/**
 * Renders the primary Hero section of the Growify digital flagship.
 * Features ambient cursor spotlighting, magnetic CTAs, 3D card tilt, and verified positioning.
 */
export function HeroSection(): React.JSX.Element {
  const { trackEvent } = useReview();

  return (
    <AmbientLight glowRadius={700} glowOpacity={0.06}>
      <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 2-Column Editorial Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Positioning & CTAs */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" duration={700}>
                <div className="space-y-6">
                  {/* Top Eyebrow with pulsing luxury dot */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#9E7D47] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#111111]/70">
                      E-Commerce Growth Operating Partner · New Delhi
                    </span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.08]">
                    Luxury commerce, <br />
                    <span className="italic font-serif text-[#9E7D47]">engineered</span> for growth.
                  </h1>

                  <p className="text-lg sm:text-xl text-[#111111]/80 max-w-2xl font-light leading-relaxed">
                    Growify is the growth, commerce and AI partner for fashion, luxury and lifestyle brands. We build the digital flagship, run the precision demand engine, own the customer conversation from first click to repeat order, and build proprietary technology of our own.
                  </p>

                  {/* Dual Immediate Action CTAs with Magnetic Attraction */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <MagneticButton>
                      <Link
                        href="/contact"
                        onClick={() =>
                          trackEvent('cta_click', {
                            cta_id: 'hero_primary_audit',
                            location: 'hero',
                            target: '/contact',
                          })
                        }
                        className="px-8 py-4 bg-[#111111] hover:bg-[#9E7D47] text-[#FAF8F5] text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        <span>Book a Growth Audit</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton>
                      <Link
                        href="/work"
                        onClick={() =>
                          trackEvent('cta_click', {
                            cta_id: 'hero_secondary_work',
                            location: 'hero',
                            target: '/work',
                          })
                        }
                        className="px-8 py-4 bg-transparent hover:bg-white text-[#111111] border border-[#D9D2C5] hover:border-[#111111] text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded flex items-center justify-center gap-2"
                      >
                        <span>Explore Selected Work</span>
                        <ArrowDown className="w-4 h-4 text-[#111111]/60" />
                      </Link>
                    </MagneticButton>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#111111]/60">
                    <span>Meta Managed Agency</span>
                    <span>•</span>
                    <span>Shopify Plus Partner</span>
                    <span>•</span>
                    <span>Zero Outsourcing</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: High-Craft Luxury Visual Card with 3D Tilt */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal animation="fade-left" delay={120} duration={800}>
                <ParallaxCard maxTilt={4} className="max-w-[420px] mx-auto">
                  <div className="space-y-3">
                    <div className="relative rounded-2xl overflow-hidden border border-[#D9D2C5] shadow-xl bg-[#111111] aspect-4/5 group">
                      {/* Luxury Atelier Craftsmanship Hero Image with Parallax Depth */}
                      <ParallaxImage
                        src="/images/hero/luxury_atelier.jpg"
                        alt="Haute Couture Craftsmanship Atelier"
                        aspectRatio="aspect-4/5"
                        priority={true}
                        speed={0.06}
                      />
                      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                      {/* Top Subtle Luxury Tag */}
                      <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className="px-3 py-1 rounded bg-[#111111]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#FAF8F5] border border-white/15">
                          Haute Couture Studio
                        </span>
                      </div>
                    </div>

                    {/* Minimalist Editorial Museum Plaque Underneath */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#111111]/70 px-1">
                      <span>Digital Flagship Engineering</span>
                      <span>•</span>
                      <span className="text-[#9E7D47]">New Delhi Studio</span>
                    </div>
                  </div>
                </ParallaxCard>
              </ScrollReveal>
            </div>

          </div>

          {/* Trust Bar & Client Wordmarks with Interactive Hover Scale */}
          <ScrollReveal animation="fade-up" delay={160}>
            <div className="mt-16 sm:mt-24 pt-8 border-t border-[#D9D2C5]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#111111]/50">
                  Trusted by India’s Premier Haute Couture & Designer Houses
                </span>
                <span className="text-xs font-mono text-[#9E7D47]">
                  500+ Digital Flagships Built Since 2019
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
                {clientWordmarks.map((brand) => (
                  <div
                    key={brand}
                    className="py-3 px-2 text-center bg-[#FAF8F5] hover:bg-white border border-[#D9D2C5]/70 hover:border-[#9E7D47] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                  >
                    <span className="text-[11px] font-display font-medium tracking-wider text-[#111111]/80 hover:text-[#111111] block truncate">
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
    </AmbientLight>
  );
}
