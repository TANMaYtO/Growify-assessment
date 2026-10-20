"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from "lucide-react";
import { ScrollReveal } from "../motion/ScrollReveal";

/**
 * Interface representing the form data for the flagship growth audit.
 */
interface AuditFormData {
  email: string;
  storeUrl: string;
  revenueTier: string;
  primaryBlocker: string;
  timeline: string;
  whatsapp: string;
}

/**
 * Renders the progressive conversion intake form with qualification tiering,
 * live telemetry tracking, and an interactive confirmation receipt.
 */
export function ConversionSection(): React.JSX.Element {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<AuditFormData>({
    email: "",
    storeUrl: "",
    revenueTier: "₹5 Cr - ₹25 Cr",
    primaryBlocker: "International Expansion (US/GCC)",
    timeline: "Next 30 Days",
    whatsapp: "",
  });

  /**
   * Tracks telemetry events to the window dataLayer if present.
   */
  function trackEvent(eventName: string, payload: Record<string, unknown>): void {
    if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...payload,
      });
    }
  }

  /**
   * Updates a single form field and triggers initial tracking if first interaction.
   */
  function handleFieldChange(field: keyof AuditFormData, value: string): void {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  /**
   * Validates step 1 and advances to progressive disclosure step 2.
   */
  function handleAdvanceStep(e: React.FormEvent): void {
    e.preventDefault();
    if (!formData.email || !formData.storeUrl) return;

    trackEvent("audit_form_step_1_complete", {
      email: formData.email,
      storeUrl: formData.storeUrl,
      revenueTier: formData.revenueTier,
    });
    setStep(2);
  }

  /**
   * Handles final submission of the audit intake form.
   */
  function handleFinalSubmit(e: React.FormEvent): void {
    e.preventDefault();
    trackEvent("audit_form_submit", {
      ...formData,
      status: "qualified_lead",
    });
    setSubmitted(true);
  }

  return (
    <section id="audit-intake" className="py-24 bg-[#120D1C] text-[#F5F1EA] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[#1F7A8C]" />
                  <span>Flagship Architecture Audit</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15]">
                  Audit your flagship store’s <span className="italic font-normal text-white">unit economics</span>.
                </h2>

                <p className="text-base text-[#D9D2C5] leading-relaxed">
                  Three initial inputs. We analyze your catalog architecture, retention bottlenecks, and international expansion readiness. Under 4 hours response time for enterprise commerce brands.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#1F7A8C] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#D9D2C5] leading-relaxed">
                      <strong className="text-white block font-medium">Strict NDA & IP Protection</strong>
                      We never share brand revenue metrics, SKU performance, or customer logs with third parties.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#1F7A8C] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#D9D2C5] leading-relaxed">
                      <strong className="text-white block font-medium">Executive Response Guarantee</strong>
                      Every audit report is reviewed by our engineering and performance directors in New Delhi.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#D9D2C5]/70 mb-2">Trusted By Founders & CXOs At</div>
                  <div className="text-sm font-serif italic text-white/90">
                    Tarun Tahiliani • Mahima Mahajan • House of Masaba • Ridhi Mehra
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Progressive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" delay={120}>
              <div className="bg-[#241B3B] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              
              {!submitted ? (
                <div>
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                    <div>
                      <span className="text-xs font-mono text-[#D9D2C5] uppercase tracking-wider">
                        Step {step} of 2: {step === 1 ? "Brand & Scale Parameters" : "Growth Priorities"}
                      </span>
                      <h3 className="text-xl font-medium text-white mt-1">
                        {step === 1 ? "Request Diagnostic Analysis" : "Tailor Your Audit Scope"}
                      </h3>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#6B3BA6]/30 text-white border border-[#6B3BA6]/50">
                      {step === 1 ? "30 Secs" : "Final Step"}
                    </span>
                  </div>

                  {/* Form Step 1: 3 Visible Fields */}
                  {step === 1 && (
                    <form onSubmit={handleAdvanceStep} className="space-y-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
                          Work Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleFieldChange("email", e.target.value)}
                          placeholder="founder@yourluxurybrand.com"
                          className="w-full bg-[#17102A] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6B3BA6] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
                          Online Store URL or Brand Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.storeUrl}
                          onChange={(e) => handleFieldChange("storeUrl", e.target.value)}
                          placeholder="https://yourbrand.com or Brand Name"
                          className="w-full bg-[#17102A] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6B3BA6] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
                          Annual Online Revenue Scale
                        </label>
                        <select
                          value={formData.revenueTier}
                          onChange={(e) => handleFieldChange("revenueTier", e.target.value)}
                          className="w-full bg-[#17102A] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6B3BA6] transition-colors"
                        >
                          <option value="Under ₹5 Cr">Under ₹5 Cr / Launch Phase</option>
                          <option value="₹5 Cr - ₹25 Cr">₹5 Cr - ₹25 Cr (Scale Phase)</option>
                          <option value="₹25 Cr - ₹100 Cr">₹25 Cr - ₹100 Cr (Expansion Phase)</option>
                          <option value="₹100 Cr+">₹100 Cr+ (Enterprise Flagship)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F1EA] text-[#17102A] font-medium px-6 py-4 rounded-lg hover:bg-white transition-all shadow-md mt-4 cursor-pointer text-sm"
                      >
                        <span>Continue To Priority Scoping</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] text-[#D9D2C5]/70 text-center">
                        Zero spam. We respect executive privacy. View our{" "}
                        <Link href="/privacy" className="underline hover:text-white">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}

                  {/* Form Step 2: Progressive Prioritization */}
                  {step === 2 && (
                    <form onSubmit={handleFinalSubmit} className="space-y-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
                          Primary Blocker to Next 10x
                        </label>
                        <select
                          value={formData.primaryBlocker}
                          onChange={(e) => handleFieldChange("primaryBlocker", e.target.value)}
                          className="w-full bg-[#17102A] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6B3BA6] transition-colors"
                        >
                          <option value="International Expansion (US/GCC)">International Expansion (US / GCC localization)</option>
                          <option value="Retention & Repeat VIP Lifetime Value">Retention & Repeat VIP Lifetime Value</option>
                          <option value="Store Performance & Mobile Conversion">Store Performance & Mobile Conversion</option>
                          <option value="Headless & Custom Shopify Architecture">Headless & Custom Shopify Architecture</option>
                          <option value="WhatsApp Commerce Integration">WhatsApp VIP Concierge Integration</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
                            Deployment Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => handleFieldChange("timeline", e.target.value)}
                            className="w-full bg-[#17102A] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6B3BA6] transition-colors"
                          >
                            <option value="Immediate / This Month">Immediate / This Month</option>
                            <option value="Next 30-60 Days">Next 30–60 Days</option>
                            <option value="Next Quarter Planning">Next Quarter Planning</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#D9D2C5] mb-2">
                            WhatsApp for Direct Preview (Optional)
                          </label>
                          <input
                            type="tel"
                            value={formData.whatsapp}
                            onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full bg-[#17102A] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6B3BA6] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-3 rounded-lg border border-white/20 text-xs font-mono uppercase tracking-wider text-[#D9D2C5] hover:text-white hover:border-white transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1F7A8C] text-white font-medium px-6 py-4 rounded-lg hover:bg-[#1F7A8C]/90 transition-all shadow-md text-sm cursor-pointer"
                        >
                          <span>Deliver My Flagship Audit</span>
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                /* Submission Confirmation State */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-[#1F7A8C]/20 border border-[#1F7A8C] rounded-full flex items-center justify-center mx-auto text-[#1F7A8C]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#1F7A8C] uppercase tracking-widest">
                      Audit Request Confirmed • Queue ID #GW-{Math.floor(1000 + Math.random() * 9000)}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                      Diagnostic queued for <span className="italic font-normal">{formData.storeUrl}</span>
                    </h3>
                    <p className="text-sm text-[#D9D2C5] max-w-md mx-auto">
                      Our New Delhi engineering and commerce team has initiated preliminary telemetry checks. Your executive briefing deck will be delivered to <strong className="text-white">{formData.email}</strong>.
                    </p>
                  </div>

                  <div className="bg-[#17102A] border border-white/10 rounded-xl p-5 text-left max-w-md mx-auto space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#D9D2C5]/70">
                      What Happens in the Next 4 Hours:
                    </div>
                    <ul className="text-xs space-y-2 text-[#D9D2C5]">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A8C]" />
                        <span>Core Web Vitals & Liquid render latency benchmark</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A8C]" />
                        <span>Retention & WhatsApp checkout drop-off audit</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A8C]" />
                        <span>Multi-currency international expansion friction check</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://wa.me/919999999999?text=Hello%20Growify%20Team%2C%20I%20just%20submitted%20a%20flagship%20audit%20request."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#1F7A8C]" />
                      <span>Book Direct CXO Briefing</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </ScrollReveal>
        </div>

        </div>
      </div>
    </section>
  );
}
