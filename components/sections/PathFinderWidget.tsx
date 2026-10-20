'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReview } from '../review/ReviewContext';
import { Compass, ArrowRight, RotateCcw, Check, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../motion/ScrollReveal';

interface Question {
  id: string;
  title: string;
  options: { label: string; value: string; hint: string }[];
}

const questions: Question[] = [
  {
    id: 'stage',
    title: '1. What is your brand’s primary operational stage today?',
    options: [
      { label: 'Established Designer Couture House', value: 'couture', hint: 'High-ticket bridal/festive, established physical retail' },
      { label: 'Fast-Growing Contemporary D2C Brand', value: 'd2c', hint: 'Scale online volume, international shipping ambition' },
      { label: 'Heritage Fine Jewellery Label', value: 'jewellery', hint: 'High-AOV transactions, custom appointment consultations' },
    ],
  },
  {
    id: 'bottleneck',
    title: '2. Where is your biggest commercial friction point?',
    options: [
      { label: 'Checkout drop-off & sizing uncertainty', value: 'vto_checkout', hint: 'Buyers hesitate without in-person trial' },
      { label: 'High CAC & volatile ad spend returns', value: 'acquisition', hint: 'Meta/Google ads scaling with declining margins' },
      { label: 'Customer queries not converting to sales', value: 'assisted_sales', hint: 'Inquiries go cold without rapid closing' },
    ],
  },
  {
    id: 'timeline',
    title: '3. What is your desired expansion timeline?',
    options: [
      { label: 'Immediate 30-Day Sprint (Seasonal EOS / Festive Launch)', value: 'urgent', hint: 'Rapid deployment before peak quarter' },
      { label: 'Quarterly Strategic Overhaul', value: 'quarterly', hint: 'Full architectural redesign and multi-channel scale' },
    ],
  },
];

export function PathFinderWidget() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState<boolean>(false);
  const { trackEvent } = useReview();

  const handleSelect = (questionId: string, val: string) => {
    const updated = { ...answers, [questionId]: val };
    setAnswers(updated);
    trackEvent('path_finder_step', { step: currentStep + 1, answer: val });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      trackEvent('path_finder_complete', updated);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setCompleted(false);
  };

  // Recommendation logic
  const getRecommendation = () => {
    if (answers['bottleneck'] === 'vto_checkout' || answers['stage'] === 'jewellery') {
      return {
        solution: 'Lookify AI Virtual Fitting Room + Shopify Plus Flagship',
        serviceSlug: 'shopify-development',
        product: 'Lookify AI Virtual Try-On',
        caseStudy: 'Tarun Tahiliani Flagship Replatforming',
        caseSlug: 'tarun-tahiliani',
        why: 'Eliminates sizing hesitation on high-ticket garments, turning hesitant catalog browsers into confident buyers.',
      };
    } else if (answers['bottleneck'] === 'assisted_sales') {
      return {
        solution: '18+ Hr Assisted Sales Desk + WhatsApp Conversational Retention',
        serviceSlug: 'sales-and-conversion-support',
        product: 'WhatsApp Business Cloud Infrastructure',
        caseStudy: 'Mahima Mahajan Global Sales Desk (2.54x AOV)',
        caseSlug: 'mahima-mahajan',
        why: 'Routes high-intent bridal inquiries directly to trained stylists who close orders across global time zones.',
      };
    } else {
      return {
        solution: 'Closed-Loop Performance Marketing & International Territory Routing',
        serviceSlug: 'performance-marketing',
        product: 'Rossify Attribution Engine',
        caseStudy: 'House of Masaba Omnichannel Acquisition',
        caseSlug: 'house-of-masaba',
        why: 'Deploys algorithmic CAPI targeting and dynamic budget reallocation to capture profitable international NRI demand.',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="pathfinder" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#D9D2C5] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EFEAE1] border border-[#D9D2C5] text-xs font-mono text-[#9E7D47] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Diagnostic Widget</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111111] font-normal">
              Growth Path Finder
            </h2>
            <p className="text-xs sm:text-sm text-[#111111]/70 mt-2">
              Answer 3 diagnostic questions to receive a tailored commerce and growth operating stack for your brand.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={120}>
          <div className="bg-[#F7F5F0] border border-[#D9D2C5] rounded-lg p-6 sm:p-10 shadow-sm">
          {!completed ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-[#111111]/60 mb-6 pb-2 border-b border-[#D9D2C5]">
                <span>Step {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
              </div>

              {/* Question Body */}
              <h3 className="font-display text-xl sm:text-2xl text-[#111111] mb-6">
                {questions[currentStep].title}
              </h3>

              <div className="space-y-3">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(questions[currentStep].id, opt.value)}
                    className="w-full text-left p-4 rounded bg-[#FAF8F5] hover:bg-white border border-[#D9D2C5] hover:border-[#9E7D47] transition-all flex items-center justify-between group shadow-xs"
                  >
                    <div>
                      <span className="block text-sm font-semibold text-[#111111] group-hover:text-[#9E7D47]">
                        {opt.label}
                      </span>
                      <span className="block text-xs text-[#111111]/60 mt-0.5">
                        {opt.hint}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#111111]/30 group-hover:text-[#9E7D47] shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9D2C5]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#9E7D47]">
                  <Sparkles className="w-4 h-4" />
                  <span>Tailored Solution Recommendation</span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-[#111111]/60 hover:text-[#111111] flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#111111]/50 block">Recommended Architecture:</span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#111111] font-semibold mt-1">
                  {rec.solution}
                </h3>
                <p className="text-sm text-[#111111]/80 mt-2 leading-relaxed">
                  {rec.why}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAF8F5] rounded border border-[#D9D2C5]">
                  <span className="text-[10px] font-mono uppercase text-[#111111]/50 block">Integrated Proprietary IP:</span>
                  <span className="text-sm font-semibold text-[#9E7D47] block mt-1">{rec.product}</span>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded border border-[#D9D2C5]">
                  <span className="text-[10px] font-mono uppercase text-[#111111]/50 block">Precedent Case Proof:</span>
                  <Link href={`/work/${rec.caseSlug}`} className="text-sm font-semibold text-[#9E7D47] hover:underline block mt-1">
                    {rec.caseStudy} →
                  </Link>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?solution=${encodeURIComponent(rec.solution)}`}
                  className="flex-1 text-center py-3.5 bg-[#111111] hover:bg-[#9E7D47] text-white text-xs font-mono uppercase tracking-widest font-semibold rounded transition-colors"
                >
                  Book Consultation on This Stack
                </Link>
                <Link
                  href={`/services/${rec.serviceSlug}`}
                  className="text-center py-3.5 px-6 border border-[#D9D2C5] hover:bg-[#EFEAE1] text-[#111111] text-xs font-mono uppercase tracking-widest font-semibold rounded transition-colors"
                >
                  Review Service Blueprint
                </Link>
              </div>
            </div>
          )}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
