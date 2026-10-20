'use client';

import React from 'react';
import { Target, Home, MessageSquare, Compass, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="w-5 h-5 text-[#6B3BA6]" />,
    title: 'Precision Over Volume',
    description: 'We do not run high-volume agency sweatshops. We partner with a selective roster of luxury fashion, couture, and jewellery houses, giving each client dedicated executive attention.',
  },
  {
    icon: <Home className="w-5 h-5 text-[#1F7A8C]" />,
    title: 'One Team Under One Roof',
    description: 'Our 7,000 sq ft Chhattarpur studio brings together designers, full-stack engineers, performance media buyers, and fashion merchandisers under a single physical collaborative space.',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#6B3BA6]" />,
    title: '18+ Hr Human Concierge Desk',
    description: 'Luxury garments are rarely bought through cold self-checkout. We deploy trained fashion merchandisers who manage live WhatsApp consultations across US, Gulf, and Indian time zones.',
  },
  {
    icon: <Compass className="w-5 h-5 text-[#1F7A8C]" />,
    title: 'Transparent Growth Milestones',
    description: 'No opaque agency retainers. We operate on structured S.C.A.L.E. milestones, tracking verified net GMV, true landed ROAS, and inventory turn speed.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#6B3BA6]" />,
    title: 'Proprietary Technology',
    description: 'We build the tools our clients use. From Lookify (AI virtual try-on) to Rossify attribution and Craftify theme components, we give our brands an unfair technological advantage.',
  },
];

export function WhyGrowify() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#D9D2C5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#6B3BA6] block mb-2">
            The Operating Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17102A]">
            Why India’s iconic designer houses partner with Growify.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1EA] border border-[#D9D2C5] rounded-lg p-6 sm:p-8 space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D9D2C5] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-[#17102A]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#17102A]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
