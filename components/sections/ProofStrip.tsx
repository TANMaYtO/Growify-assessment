'use client';

import React from 'react';
import { Fact } from '../review/Fact';
import { ShieldCheck, Award, Building2, Store } from 'lucide-react';
import { ScrollReveal } from '../motion/ScrollReveal';

export function ProofStrip() {
  return (
    <section className="bg-[#F7F5F0] border-y border-[#D9D2C5] py-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#D9D2C5]/60">
            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Established
              </span>
              <span className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">
                <Fact id="founding-year" fallback="2019" />
              </span>
              <span className="text-xs text-[#111111]/70 block mt-0.5">7+ Years Scaling Luxury</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Verified Scale
              </span>
              <span className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">
                <Fact id="brands-helped" fallback="421+" />
              </span>
              <span className="text-xs text-[#111111]/70 block mt-0.5">High-Ticket Brands Scaled</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Studio Infrastructure
              </span>
              <span className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">
                7,000 sq ft
              </span>
              <span className="text-xs text-[#111111]/70 block mt-0.5">Chhattarpur Flagship, Delhi</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[11px] font-mono tracking-widest text-[#111111]/60 uppercase block mb-1">
                Certified Partnerships
              </span>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <span className="text-xs font-semibold text-[#9E7D47]">
                  <Fact id="meta-agency-partner" fallback="Meta Managed Agency" />
                </span>
                <span className="text-xs font-semibold text-[#8C6D38]">
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
