import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Building2 } from "lucide-react";
import { ScrollReveal } from "../motion/ScrollReveal";

/**
 * Renders the culture and office tour teaser section on the homepage,
 * inviting visitors into the interactive campus experience at /life-at-growify.
 */
export function OfficeCultureTeaser(): React.JSX.Element {
  return (
    <section className="py-24 bg-[#FAF8F5] text-[#111111] border-b border-[#D9D2C5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111]/5 text-xs font-mono text-[#9E7D47] border border-[#111111]/10">
                  <Building2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Headquarters • New Delhi</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] text-[#111111]">
                  Where luxury fashion meets <span className="italic font-normal text-[#9E7D47]">engineering rigor</span>.
                </h2>

                <p className="text-base text-[#111111]/80 leading-relaxed font-sans">
                  Our studio in New Delhi houses 35+ full-stack engineers, luxury brand strategists, Shopify architects, and retention specialists under one roof. No outsourced relays — direct collaboration with practitioners.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#111111]/80">
                    <MapPin className="w-4 h-4 text-[#9E7D47] shrink-0" />
                    <span>Green Park / South Delhi Studio Campus</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#111111]/80">
                    <Sparkles className="w-4 h-4 text-[#9E7D47] shrink-0" />
                    <span>R&D Lab for Lookify Virtual Try-On & Commerce Automation</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/life-at-growify"
                    className="inline-flex items-center gap-3 bg-[#111111] text-[#FAF8F5] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-[#9E7D47] transition-colors shadow-sm group"
                  >
                    <span>Launch Interactive Studio Walkthrough</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Preview Card */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" delay={120}>
              <div className="relative rounded-2xl overflow-hidden border border-[#D9D2C5] bg-[#0E0D0C] text-white shadow-xl">
                
                {/* Real Office Studio Photography */}
                <div className="h-80 sm:h-96 relative flex flex-col justify-end p-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/frames/clip1_reception.jpg"
                    alt="Growify Delhi Studio Reception"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0E0D0C]/80 text-[#FAF8F5] text-xs font-mono border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-[#9E7D47] animate-pulse" />
                      <span>Live Studio Tour Available</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                      Step inside Growify’s Delhi Studio
                    </h3>

                    <p className="text-sm text-[#D9D2C5] max-w-lg">
                      Explore our 7,000 sq ft headquarters: engineering bullpen, client war rooms, and Lookify AI research lab.
                    </p>

                    <div className="pt-2">
                      <Link
                        href="/life-at-growify"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#9E7D47] transition-colors underline underline-offset-4"
                      >
                        <span>Explore 6 Studio Environments</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Facts */}
                <div className="grid grid-cols-3 divide-x divide-white/10 bg-[#141312] border-t border-white/10 py-4 px-6 text-center text-xs font-mono">
                  <div>
                    <div className="text-white font-medium">35+ Minds</div>
                    <div className="text-[#D9D2C5]/70 text-[10px] mt-0.5">Engineering & Strategy</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">100% In-House</div>
                    <div className="text-[#D9D2C5]/70 text-[10px] mt-0.5">Zero Outsourcing</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">New Delhi</div>
                    <div className="text-[#D9D2C5]/70 text-[10px] mt-0.5">HQ & Innovation Lab</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
