'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from '../motion/ScrollReveal';

const faqItems = [
  {
    q: 'What exactly does Growify Digital do?',
    a: 'Growify is an integrated commerce and growth operating company. We build custom Shopify Plus digital flagships, run performance acquisition campaigns on Meta and Google, operate 18+ hour assisted sales concierge desks on WhatsApp, and develop proprietary AI technology (Lookify).',
  },
  {
    q: 'Which brands and industries does Growify work with?',
    a: 'We specialize in Indian haute couture, designer bridalwear, fine precious jewellery, and high-AOV contemporary lifestyle brands. Our portfolio includes houses such as Tarun Tahiliani, Gaurav Gupta, House of Masaba, Ridhi Mehra, and Mahima Mahajan.',
  },
  {
    q: 'Does Growify only build on Shopify?',
    a: 'Shopify Plus is our primary commerce foundation because it delivers the most robust checkout, security, and global currency stability. We push Shopify to headless-level visual fluidity with custom theme architectures, ERP inventory middleware, and native app extensions.',
  },
  {
    q: 'How does an engagement begin?',
    a: 'Every partnership starts with a diagnostic Growth Audit. We inspect your historical traffic, checkout drop-offs, return-to-origin (RTO) rates, and ad attribution models to design a 90-day S.C.A.L.E. roadmap with defined revenue targets.',
  },
  {
    q: 'What is Lookify and how does it integrate into existing stores?',
    a: 'Lookify (lookify.ai) is our proprietary AI virtual try-on and in-store retail mirror platform. It integrates as a native Shopify Online Store 2.0 theme app extension with one click, letting shoppers upload a photo to visualize garments tailored to their body shape.',
  },
  {
    q: 'How does Growify ensure reporting and metrics transparency?',
    a: 'We provide unified executive dashboards tracking real-time landed ROAS, blended CAC, and net GMV across domestic and international channels. We never manufacture client outcomes—every reported metric carries verified attribution.',
  },
];

/**
 * Renders the Executive FAQ section with smooth grid-template-rows height transitions.
 */
export function ExecutiveFAQ(): React.JSX.Element {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  function toggle(idx: number): void {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#D9D2C5] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#D9D2C5] text-xs font-mono text-[#9E7D47] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Executive Clarifications</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111111] font-normal">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#111111]/70 mt-2 font-sans">
              Direct answers on our scope, methodology, technology, and commercial operating standards.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-[#F7F5F0] border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-[#9E7D47] shadow-sm' : 'border-[#D9D2C5] hover:border-[#9E7D47]/50'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#111111]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#9E7D47]' : 'text-[#111111]/60'
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#111111]/80 border-t border-[#D9D2C5]/50 leading-relaxed font-sans">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
