'use client';

import React from 'react';
import { Target, Home, MessageSquare, Compass, Cpu } from 'lucide-react';
import { ScrollReveal } from '../motion/ScrollReveal';
import { ParallaxCard } from '../motion/ParallaxCard';
import { WordReveal } from '../motion/WordReveal';

const pillars = [
  {
    numeral: '01',
    icon: <Target className="w-5 h-5 text-[#9E7D47]" />,
    title: 'Precision Over Volume',
    description:
      'We do not run high-volume agency sweatshops. We partner with a selective roster of luxury fashion, couture, and jewellery houses, giving each client dedicated executive attention.',
  },
  {
    numeral: '02',
    icon: <Home className="w-5 h-5 text-[#8C6D38]" />,
    title: 'One Team Under One Roof',
    description:
      'Our 7,000 sq ft South Delhi studio brings together designers, full-stack engineers, performance media buyers, and fashion merchandisers under a single physical collaborative space.',
  },
  {
    numeral: '03',
    icon: <MessageSquare className="w-5 h-5 text-[#9E7D47]" />,
    title: '18+ Hr Human Concierge Desk',
    description:
      'Luxury garments are rarely bought through cold self-checkout. We deploy trained fashion merchandisers who manage live WhatsApp consultations across US, Gulf, and Indian time zones.',
  },
  {
    numeral: '04',
    icon: <Compass className="w-5 h-5 text-[#8C6D38]" />,
    title: 'Transparent Growth Milestones',
    description:
      'No opaque agency retainers. We operate on structured S.C.A.L.E. milestones, tracking verified net GMV, true landed ROAS, and inventory turn speed.',
  },
  {
    numeral: '05',
    icon: <Cpu className="w-5 h-5 text-[#9E7D47]" />,
    title: 'Proprietary Technology',
    description:
      'We build the tools our clients use. From Lookify (AI virtual try-on) to Rossify attribution and Craftify theme components, we give our brands an unfair technological advantage.',
  },
];

/**
 * Renders the Why Growify section detailing the studio's operating standards.
 * Features 3D perspective cards, animated numeral headers, and watermark depth.
 */
export function WhyGrowify(): React.JSX.Element {
  return (
    <section id="why-growify" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#D9D2C5] font-sans relative overflow-hidden">
      {/* Subtle Background Watermark for Architectural Depth */}
      <div
        className="pointer-events-none absolute -bottom-10 right-0 font-serif text-[180px] leading-none text-[#111111]/3 font-bold select-none"
        aria-hidden="true"
      >
        GROWIFY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-[#9E7D47] block mb-2">
              The Operating Standard
            </span>
            <WordReveal
              as="h2"
              text="Why India’s iconic designer houses partner with Growify."
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
              <ParallaxCard maxTilt={3.5} className="h-full">
                <div className="bg-[#F7F5F0] hover:bg-white border border-[#D9D2C5] hover:border-[#9E7D47] rounded-xl p-6 sm:p-8 space-y-4 h-full transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] group-hover:bg-[#111111] border border-[#D9D2C5] flex items-center justify-center transition-colors duration-300 group-hover:rotate-3">
                        {item.icon}
                      </div>
                      <span className="font-serif text-2xl font-light text-[#D9D2C5] group-hover:text-[#9E7D47] transition-colors">
                        {item.numeral}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-medium text-[#111111] group-hover:text-[#9E7D47] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D9D2C5]/50 flex items-center gap-1.5 text-[11px] font-mono text-[#9E7D47] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47]" />
                    <span>Verified Operating Pillar</span>
                  </div>
                </div>
              </ParallaxCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
