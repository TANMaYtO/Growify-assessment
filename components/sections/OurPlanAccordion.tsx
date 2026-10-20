"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface PlanCard {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const planCards: PlanCard[] = [
  {
    id: "setup",
    numeral: "01",
    title: "SETUP",
    subtitle: "Website Development & Architecture",
    description:
      "From foundational groundwork to bespoke Shopify Plus Liquid engineering, we architect high-performance digital flagships with sub-second latency.",
    image: "/images/case-studies/tarun-tahiliani.jpg",
    tags: ["Shopify Plus", "Sub-1.2s FCP", "ERP Sync"],
    link: "/services/shopify-development",
  },
  {
    id: "show",
    numeral: "02",
    title: "SHOW",
    subtitle: "Paid Media & Diaspora Acquisition",
    description:
      "Meta Managed Agency operations and Google Premier campaigns engineered to acquire high-net-worth luxury shoppers across India, the US, and the GCC.",
    image: "/images/case-studies/house-of-masaba.jpg",
    tags: ["Meta Managed", "Google Premier", "US/GCC Scaling"],
    link: "/services/performance-marketing",
  },
  {
    id: "start",
    numeral: "03",
    title: "START",
    subtitle: "Lookify Virtual Try-On & Conversion",
    description:
      "Eliminate silhouette and draping hesitation with our proprietary single-photo neural try-on engine, elevating high-ticket couture conversion.",
    image: "/images/lookify/lehenga_crimson.jpg",
    tags: ["24-Pt Landmark", "Fabric Physics", "DPDP Compliant"],
    link: "/technology/lookify",
  },
  {
    id: "scale",
    numeral: "04",
    title: "SCALE",
    subtitle: "Retention & WhatsApp Concierge",
    description:
      "18+ hour assisted sales desks on WhatsApp combined with automated VIP lifecycle flows to drive 38% repeat customer lifetime value.",
    image: "/images/lookify/gown_gold.jpg",
    tags: ["LimeChat AI", "QuickReply.ai", "18-Hr Sales Desk"],
    link: "/services/whatsapp-and-email-retention",
  },
  {
    id: "support",
    numeral: "05",
    title: "SUPPORT",
    subtitle: "Operations & Peak Scaling",
    description:
      "Continuous serverless monitoring, predictive inventory forecasting via Rossify, and zero-downtime End-of-Season flash sale orchestration.",
    image: "/images/hero/luxury_atelier.jpg",
    tags: ["Rossify AI", "EOS Flash Scaling", "Direct CXO Slack"],
    link: "/services/e-commerce-operations-support",
  },
];

/**
 * Renders the iconic "OUR PLAN" expandable interactive cards section.
 * Features fluid horizontal width expansion on hover, image parallax zoom,
 * and sliding typography inspired by Growify's operational methodology.
 */
export function OurPlanAccordion(): React.JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string>("setup");

  return (
    <section className="py-24 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Operational Plan</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white">
                If you have ideas for your business,{" "}
                <span className="italic font-normal text-[#9E7D47]">
                  we have the right plan
                </span>
                .
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#D9D2C5]/70 max-w-md font-sans">
              Hover or click each discipline to explore our five synchronized growth phases designed specifically for luxury couture and high-value commerce.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Expandable Accordion (Hidden on small mobile) */}
        <div className="hidden lg:flex gap-3 h-[520px] w-full">
          {planCards.map((card) => {
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onClick={() => setActiveCardId(card.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                  isActive
                    ? "flex-[3.2] border-[#9E7D47] shadow-2xl shadow-black/80"
                    : "flex-1 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Background Image with Zoom */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out ${
                    isActive ? "scale-108" : "scale-100 grayscale-30"
                  }`}
                />

                {/* Shading Overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/60 to-black/30 opacity-95"
                      : "bg-[#0E0D0C]/80 hover:bg-[#0E0D0C]/65"
                  }`}
                />

                {/* Collapsed Vertical Identifier */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between items-center py-8 z-10">
                    <span className="font-mono text-xs tracking-widest text-[#9E7D47] font-semibold">
                      {card.numeral}
                    </span>
                    <span className="font-serif text-lg tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 text-white/80 font-light">
                      {card.title}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47]/60" />
                  </div>
                )}

                {/* Expanded Card Content */}
                {isActive && (
                  <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#9E7D47] text-[#0E0D0C] font-semibold">
                          Phase {card.numeral}
                        </span>
                        <span className="text-xs font-mono tracking-wider text-white/60 uppercase">
                          Growth Track
                        </span>
                      </div>
                      <span className="font-serif text-4xl text-[#9E7D47] font-light">
                        {card.numeral}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-3xl font-light text-white tracking-tight">
                          {card.title}
                        </h3>
                        <div className="font-mono text-xs text-[#9E7D47] mt-1 uppercase tracking-wider">
                          {card.subtitle}
                        </div>
                      </div>

                      <p className="text-sm text-[#D9D2C5] leading-relaxed font-sans max-w-lg">
                        {card.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {card.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-[#FAF8F5] border border-white/15"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#9E7D47]" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Link
                          href={card.link}
                          className="inline-flex items-center gap-2 bg-[#9E7D47] hover:bg-[#8C6D38] text-[#0E0D0C] px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:gap-3"
                        >
                          <span>Explore This Practice</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Swipeable Card Carousel (Visible on mobile/tablet) */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {planCards.map((card) => (
            <div
              key={card.id}
              className="min-w-[85%] sm:min-w-[420px] snap-center rounded-2xl overflow-hidden border border-[#D9D2C5]/20 bg-[#141312] relative aspect-4/5 flex flex-col justify-between p-6 shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/80 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#9E7D47] text-[#0E0D0C] font-semibold">
                  Phase {card.numeral}
                </span>
                <span className="font-serif text-3xl text-[#9E7D47]">{card.numeral}</span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-2xl text-white font-light">{card.title}</h3>
                <div className="font-mono text-xs text-[#9E7D47]">{card.subtitle}</div>
                <p className="text-xs text-[#D9D2C5] font-sans leading-relaxed">
                  {card.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9E7D47] font-semibold"
                  >
                    <span>View Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
