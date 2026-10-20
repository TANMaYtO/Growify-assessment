'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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

export function ExecutiveFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F1EA] border-t border-[#D9D2C5] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF7F2] border border-[#D9D2C5] text-xs font-mono text-[#6B3BA6] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Executive Clarifications</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#17102A] font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#17102A]/70 mt-2">
            Direct answers on our scope, methodology, technology, and commercial operating standards.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] border border-[#D9D2C5] rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-semibold text-[#17102A]">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#17102A]/60 transition-transform ${
                    openIdx === idx ? 'rotate-180 text-[#6B3BA6]' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#17102A]/80 border-t border-[#D9D2C5]/50 leading-relaxed font-sans">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
