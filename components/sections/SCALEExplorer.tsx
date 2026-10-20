'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReview } from '../review/ReviewContext';
import { ArrowUpRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { ScrollReveal } from '../motion/ScrollReveal';

interface StageData {
  letter: string;
  name: string;
  serviceTitle: string;
  serviceSlug: string;
  summary: string;
  deliverables: string[];
  partner: string;
  product: string;
  caseStudy: { name: string; slug: string; metric: string };
  aiLayer: string;
}

const stages: StageData[] = [
  {
    letter: 'S',
    name: 'Setup',
    serviceTitle: 'Commerce & Shopify Plus Flagship',
    serviceSlug: 'shopify-development',
    summary: 'Custom storefront engineering, ERP multi-warehouse synchronization, and sub-second mobile checkout.',
    deliverables: ['Custom Shopify 2.0 Theme', 'ERP & Boutique Stock Sync', 'International Currency & Duty Calculators'],
    partner: 'Shopify Plus & Razorpay',
    product: 'Craftify Framework',
    caseStudy: { name: 'Tarun Tahiliani', slug: 'tarun-tahiliani', metric: '200%+ EOS Sale Uplift' },
    aiLayer: 'Predictive inventory caching and automated image compression via vision models.',
  },
  {
    letter: 'C',
    name: 'Capture',
    serviceTitle: 'Performance Marketing & Paid Media',
    serviceSlug: 'performance-marketing',
    summary: 'Closed-loop Meta and Google advertising driving high-AOV customer acquisition in India, the US, and UAE.',
    deliverables: ['First-Party Server CAPI Tracking', 'High-Net-Worth Diaspora Targeting', 'Dynamic Market Budget Allocation'],
    partner: 'Meta (Managed Agency) & Google',
    product: 'Rossify Attribution',
    caseStudy: { name: 'Mahima Mahajan', slug: 'mahima-mahajan', metric: '2.54x AOV Growth' },
    aiLayer: 'Algorithmic dynamic creative optimization and automated bidding models based on real-time ROAS.',
  },
  {
    letter: 'A',
    name: 'Activate',
    serviceTitle: 'WhatsApp & Email Lifecycle Retention',
    serviceSlug: 'whatsapp-and-email-retention',
    summary: 'Automated conversational commerce, VIP customer retention, and interactive Cash-on-Delivery conversion.',
    deliverables: ['WhatsApp Cart Recovery Automations', 'COD-to-Prepaid Verification Flows', 'Klaviyo Segmented Email Campaigns'],
    partner: 'LimeChat & QuickReply.ai',
    product: 'Lookify Virtual Try-On',
    caseStudy: { name: 'House of Masaba', slug: 'house-of-masaba', metric: '75% Revenue Scale' },
    aiLayer: 'Conversational LLM agents on WhatsApp handling sizing inquiries, styling tips, and variant matching 24/7.',
  },
  {
    letter: 'L',
    name: 'Lead',
    serviceTitle: '18+ Hr Assisted Sales Concierge',
    serviceSlug: 'sales-and-conversion-support',
    summary: 'Dedicated fashion stylists and merchandisers managing live WhatsApp consultations with the intent to close.',
    deliverables: ['Multi-Timezone Sales Desks', 'Custom Measurement Consultation', 'Razorpay Assisted Payment Links'],
    partner: 'Kommo CRM & Razorpay',
    product: 'Lookify Retail Mirror',
    caseStudy: { name: 'Mahima Mahajan', slug: 'mahima-mahajan', metric: 'Global US/UAE Sales Desk' },
    aiLayer: 'Smart lead prioritization scoring buyer intent based on historical browse session intensity.',
  },
  {
    letter: 'E',
    name: 'Establish',
    serviceTitle: 'Organic Search & Brand Authority',
    serviceSlug: 'seo-content-and-social',
    summary: 'Dominating non-brand luxury search queries and building compounding brand prestige.',
    deliverables: ['High-Intent Luxury SEO Architecture', 'Couture Faceted Navigation Indexing', 'Editorial Lookbook Microdata'],
    partner: 'Google Search Console',
    product: 'Craftify Semantic Engine',
    caseStudy: { name: 'Tarun Tahiliani', slug: 'tarun-tahiliani', metric: '4x Peak Revenue Multiple' },
    aiLayer: 'Automated schema graph verification and entity disambiguation across AI answer engines.',
  },
];

export function SCALEExplorer() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [showAiLayer, setShowAiLayer] = useState<boolean>(false);
  const { trackEvent } = useReview();

  const current = stages[activeStage];

  const handleTabChange = (idx: number) => {
    setActiveStage(idx);
    trackEvent('scale_tab_click', { stage: stages[idx].name });
  };

  const handleAiToggle = () => {
    setShowAiLayer(!showAiLayer);
    trackEvent('scale_ai_toggle', { state: !showAiLayer });
  };

  return (
    <section id="scale" className="py-16 md:py-24 bg-[#FAF8F5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#9E7D47] block mb-2">
                Proprietary Operating System
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111]">
                The S.C.A.L.E. Methodology
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#111111]/70 font-medium">Overlay AI Layer:</span>
              <button
                onClick={handleAiToggle}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 border ${
                  showAiLayer
                    ? 'bg-[#111111] text-[#9E7D47] border-[#9E7D47]/50 shadow-sm'
                    : 'bg-[#F7F5F0] text-[#111111]/70 border-[#D9D2C5] hover:border-[#9E7D47]'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${showAiLayer ? 'text-[#9E7D47]' : 'text-[#9E7D47]'}`} />
                <span>{showAiLayer ? 'AI Layer Active' : 'Show AI Intelligence'}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={120}>
          {/* Tab Controls */}
          <div className="grid grid-cols-5 border border-[#D9D2C5] rounded bg-[#F7F5F0] overflow-hidden mb-8">
          {stages.map((stg, idx) => (
            <button
              key={stg.letter}
              onClick={() => handleTabChange(idx)}
              className={`py-4 px-2 sm:px-4 text-center transition-all border-r last:border-r-0 border-[#D9D2C5] ${
                activeStage === idx
                  ? 'bg-[#111111] text-white shadow-inner'
                  : 'hover:bg-[#EFEAE1] text-[#111111]/80'
              }`}
            >
              <span className={`block font-display text-xl sm:text-2xl font-bold ${activeStage === idx ? 'text-[#9E7D47]' : 'text-[#111111]'}`}>
                {stg.letter}
              </span>
              <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider mt-0.5">
                {stg.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Card */}
        <div className="bg-[#F7F5F0] border border-[#D9D2C5] rounded-lg p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Watermark letter */}
          <span className="absolute -bottom-10 -right-6 font-display text-9xl font-bold text-[#D9D2C5]/30 pointer-events-none select-none">
            {current.letter}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left Column: Core Focus */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EFEAE1] border border-[#D9D2C5] text-xs font-mono text-[#9E7D47]">
                <Layers className="w-3.5 h-3.5" />
                <span>Stage {activeStage + 1} of 5 · {current.name} Pillar</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[#111111] font-medium">
                {current.serviceTitle}
              </h3>

              <p className="text-[#111111]/80 text-sm sm:text-base leading-relaxed">
                {current.summary}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#111111]/60 block">
                  Core Architectural Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#111111]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Layer Reveal Box */}
              {showAiLayer && (
                <div className="p-4 bg-[#161514] text-white rounded border border-[#9E7D47]/40 animate-in fade-in duration-200 mt-4">
                  <div className="flex items-center gap-2 text-[#9E7D47] font-mono text-xs mb-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span className="uppercase tracking-wider font-semibold">Generative AI & Automation Layer</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {current.aiLayer}
                  </p>
                </div>
              )}

              <div className="pt-4">
                <Link
                  href={`/services/${current.serviceSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#9E7D47] font-semibold hover:text-[#111111] transition-colors"
                >
                  <span>Explore Full {current.name} Service Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Integrated Proof & Tech */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-[#EFEAE1]/70 p-6 rounded border border-[#D9D2C5]">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50 block">
                    Verified Ecosystem Partners
                  </span>
                  <span className="text-sm font-semibold text-[#111111] block mt-0.5">
                    {current.partner}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50 block">
                    Proprietary Technology Connected
                  </span>
                  <span className="text-sm font-semibold text-[#9E7D47] block mt-0.5">
                    {current.product}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#D9D2C5]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50 block">
                    Documented Proof Point
                  </span>
                  <Link
                    href={`/work/${current.caseStudy.slug}`}
                    className="group block mt-1"
                  >
                    <span className="text-xs text-[#111111]/70 group-hover:text-[#9E7D47]">
                      {current.caseStudy.name} →
                    </span>
                    <span className="block text-base font-display font-semibold text-[#9E7D47]">
                      {current.caseStudy.metric}
                    </span>
                  </Link>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full text-center block py-2.5 bg-[#111111] hover:bg-[#9E7D47] text-white text-[11px] font-mono uppercase tracking-widest font-semibold rounded transition-colors"
                >
                  Deploy {current.name} Engine
                </Link>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
