'use client';

import React from 'react';
import { Fact } from '../review/Fact';
import { ScrollReveal } from '../motion/ScrollReveal';
import { AnimatedCounter } from '../motion/AnimatedCounter';

/**
 * Renders the primary Proof Strip below the hero section.
 * Features animated numeric count-ups on scroll and verified credentials.
 */
export function ProofStrip(): React.JSX.Element {
  return (
    <section className="bg-[#F7F5F0] border-y border-[#D9D2C5] py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#D9D2C5]/60">
            <div className="pt-3 md:pt-0 md:px-6 group cursor-default transition-transform hover:-translate-y-0.5 duration-300">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Established
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-medium text-[#111111] group-hover:text-[#9E7D47] transition-colors">
                <AnimatedCounter value={2019} durationMs={1400} />
              </span>
              <span className="text-xs text-[#111111]/70 block mt-0.5 font-sans">7+ Years Scaling Luxury</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-6 group cursor-default transition-transform hover:-translate-y-0.5 duration-300">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Verified Scale
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-medium text-[#111111] group-hover:text-[#9E7D47] transition-colors">
                <AnimatedCounter value={421} suffix="+" durationMs={1600} />
              </span>
              <span className="text-xs text-[#111111]/70 block mt-0.5 font-sans">High-Ticket Brands Scaled</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-6 group cursor-default transition-transform hover:-translate-y-0.5 duration-300">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Studio Infrastructure
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-medium text-[#111111] group-hover:text-[#9E7D47] transition-colors">
                <AnimatedCounter value={7000} suffix=" sq ft" durationMs={1800} />
              </span>
              <span className="text-xs text-[#111111]/70 block mt-0.5 font-sans">South Delhi HQ Studio</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-6 group cursor-default transition-transform hover:-translate-y-0.5 duration-300">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Certified Accreditations
              </span>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <span className="text-xs font-semibold text-[#9E7D47] font-mono">
                  <Fact id="meta-agency-partner" fallback="Meta Managed Agency" />
                </span>
                <span className="text-xs font-semibold text-[#8C6D38] font-mono">
                  <Fact id="shopify-plus-partner" fallback="Shopify Plus Partner" />
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
