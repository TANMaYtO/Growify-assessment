'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReview } from '../review/ReviewContext';
import { Sparkles, ArrowUpRight, Shirt, Tablet, Lock, CheckCircle2 } from 'lucide-react';

export function TechShowcase() {
  const { trackEvent } = useReview();
  const [selectedGarment, setSelectedGarment] = useState<'bridal' | 'sherwani' | 'evening'>('bridal');

  const garmentPreviews = {
    bridal: {
      title: 'Hand-Embroidered Zardozi Lehenga',
      tag: 'Bridal Couture',
      fitTime: '0.8s Render',
      drapeType: 'Raw Silk & Handcrafted Gold Threadwork',
      image: '/images/lookify/lehenga_crimson.jpg',
      color: '#8B1E3F',
    },
    sherwani: {
      title: 'Structured Raw Silk Bandhgala',
      tag: 'Menswear Couture',
      fitTime: '0.6s Render',
      drapeType: 'Micro-Velvet & Tailored Lapel Geometry',
      image: '/images/lookify/sherwani_navy.jpg',
      color: '#17102A',
    },
    evening: {
      title: 'Pleated Metallic Sculpted Gown',
      tag: 'Contemporary Luxury',
      fitTime: '0.7s Render',
      drapeType: 'Liquid Lamé & Organza Fluting',
      image: '/images/lookify/gown_gold.jpg',
      color: '#B38F4D',
    },
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#6B3BA6] block mb-2">
            Proprietary Products & Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17102A]">
            Technology we build and run ourselves.
          </h2>
          <p className="text-sm sm:text-base text-[#17102A]/80 mt-3 leading-relaxed">
            Growify is not just a services company. We build software platforms that eliminate commercial friction for luxury houses—deployed on online storefronts and in brick-and-mortar retail showrooms.
          </p>
        </div>

        {/* Marquee Product Flagship: Lookify */}
        <div className="bg-[#F5F1EA] border border-[#D9D2C5] rounded-xl p-6 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-mono font-semibold">
                  LIVE ON SHOPIFY APP STORE
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#EFEAE1] text-[#6B3BA6] text-[11px] font-mono">
                  Official Domain: lookify.ai
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl text-[#17102A] font-semibold">
                  Lookify by Growify
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#1F7A8C] mt-1">
                  AI Virtual Try-On & Retail Boutique Intelligence
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#17102A]/80 leading-relaxed">
                Transform standard catalog pages into interactive luxury fitting rooms. Shoppers upload a single photo to visualize high-ticket couture draped accurately to their posture, proportions, and skin tone.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-start gap-2 bg-[#FAF7F2] p-3 rounded border border-[#D9D2C5]">
                  <Shirt className="w-4 h-4 text-[#6B3BA6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#17102A]">Single-Photo AI Drape</strong>
                    <span className="text-[#17102A]/70 text-[11px]">Calibrated for intricate lehengas, sherwanis, and luxury silks.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#FAF7F2] p-3 rounded border border-[#D9D2C5]">
                  <Tablet className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#17102A]">In-Store Retail Kiosks</strong>
                    <span className="text-[#17102A]/70 text-[11px]">Interactive digital mirrors previewing archival and out-of-stock sizes.</span>
                  </div>
                </div>
              </div>

              {/* Privacy block */}
              <div className="p-3 bg-[#EFEAE1] rounded border border-[#D9D2C5] flex items-center gap-2.5 text-xs text-[#17102A]/80">
                <Lock className="w-4 h-4 text-[#1F7A8C] shrink-0" />
                <span>
                  <strong>Consent-First Architecture:</strong> Zero facial biometric harvesting. Fully aligned with India DPDP compliance.
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/technology/lookify"
                  onClick={() => trackEvent('product_demo_click', { product: 'lookify_flagship' })}
                  className="px-6 py-3 bg-[#17102A] hover:bg-[#6B3BA6] text-white text-xs font-mono uppercase tracking-widest font-semibold rounded transition-colors flex items-center gap-2"
                >
                  <span>Explore Lookify Flagship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://apps.shopify.com/lookify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-[#D9D2C5] hover:bg-[#EFEAE1] text-[#17102A] text-xs font-mono uppercase tracking-widest font-semibold rounded transition-colors"
                >
                  Shopify App Directory ↗
                </a>
              </div>
            </div>

            {/* Right: Interactive Concept Simulator */}
            <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-lg border border-[#D9D2C5] space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#D9D2C5] pb-3">
                <span className="text-xs font-mono uppercase text-[#6B3BA6] flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Try-On Interactive Simulator</span>
                </span>
                <span className="text-[10px] font-mono text-[#17102A]/50 bg-[#EFEAE1] px-2 py-0.5 rounded">
                  Concept Preview
                </span>
              </div>

              {/* Garment Selector */}
              <div className="flex gap-2">
                {(['bridal', 'sherwani', 'evening'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedGarment(key);
                      trackEvent('vto_sim_switch', { garment: key });
                    }}
                    className={`flex-1 py-1.5 text-[11px] font-mono capitalize rounded border transition-all ${
                      selectedGarment === key
                        ? 'bg-[#17102A] text-white border-[#17102A]'
                        : 'bg-white text-[#17102A]/70 border-[#D9D2C5] hover:border-[#6B3BA6]'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              {/* Real Interactive Canvas Viewport */}
              <div className="relative aspect-4/3 rounded-xl border border-[#D9D2C5] overflow-hidden bg-[#17102A] shadow-inner group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={garmentPreviews[selectedGarment].image}
                  alt={garmentPreviews[selectedGarment].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white border border-white/20">
                    {garmentPreviews[selectedGarment].tag}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/90 text-white font-medium">
                    {garmentPreviews[selectedGarment].fitTime}
                  </span>
                </div>

                {/* Bottom Garment Telemetry */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="font-serif text-base text-white font-normal truncate">
                    {garmentPreviews[selectedGarment].title}
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D9D2C5]/80">
                    <span className="truncate">{garmentPreviews[selectedGarment].drapeType}</span>
                    <span className="text-[#1F7A8C] shrink-0 ml-2">24 Mesh Vertices</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#17102A]/70 font-mono px-1">
                <span>*On-device WebGL simulation.</span>
                <Link
                  href="/technology/lookify"
                  className="text-[#6B3BA6] hover:underline font-medium"
                >
                  Open Full Studio Simulator →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Products Grid: Rossify & Craftify */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rossify */}
          <div className="bg-[#FAF7F2] border border-[#D9D2C5] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded font-medium">
                Enterprise Beta · Attribution
              </span>
              <span className="text-xs font-mono text-[#17102A]/50">Proprietary IP</span>
            </div>

            <h3 className="font-display text-2xl text-[#17102A]">
              Rossify
            </h3>

            <p className="text-xs sm:text-sm text-[#17102A]/80 leading-relaxed">
              Proprietary ROAS & revenue intelligence pipeline tracking high-AOV omnichannel sales, multi-touch international campaigns, and WhatsApp-assisted sales closures.
            </p>

            <ul className="text-xs space-y-2 text-[#17102A]/75 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>First-party cookie attribution connecting ad click to WhatsApp chat</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Cross-border currency revenue tracking (US, UAE, UK)</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#D9D2C5]">
              <Link
                href="/technology/rossify"
                className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Inspect Beta Specifications</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Craftify */}
          <div className="bg-[#FAF7F2] border border-[#D9D2C5] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-700 bg-slate-100 border border-slate-300 px-2.5 py-0.5 rounded font-medium">
                Design System · Framework
              </span>
              <span className="text-xs font-mono text-[#17102A]/50">Proprietary IP</span>
            </div>

            <h3 className="font-display text-2xl text-[#17102A]">
              Craftify
            </h3>

            <p className="text-xs sm:text-sm text-[#17102A]/80 leading-relaxed">
              Modular luxury commerce theme architecture and custom component framework engineered specifically for Indian couture, jewellery, and high-AOV lifestyle brands.
            </p>

            <ul className="text-xs space-y-2 text-[#17102A]/75 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Zero-layout-shift Liquid & React luxury component primitives</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Pre-built bridal appointment and custom measurement modals</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#D9D2C5]">
              <Link
                href="/technology/craftify"
                className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Inspect Architecture Roadmap</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
