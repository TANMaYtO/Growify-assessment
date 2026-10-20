import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { OfficeTourWalkthrough } from "@/components/office/OfficeTourWalkthrough";
import { ArrowRight, Building2, Users, Sparkles, MapPin, Coffee, Code2, Rocket } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Life at Growify | New Delhi Campus & Studio Tour",
  description:
    "Experience Growify's New Delhi studio headquarters. Interactive campus walkthrough, engineering culture, Lookify computer vision lab, and open careers.",
  openGraph: {
    title: "Life at Growify | Interactive Studio Walkthrough",
    description: "Explore our South Delhi campus, engineering war rooms, and Lookify AI lab.",
    url: "https://growify.in/life-at-growify",
  },
};

/**
 * Renders the interactive Life at Growify page, featuring the bonus
 * virtual office tour, studio hotspots, culture manifesto, and open roles.
 */
export default function LifeAtGrowifyPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">Life at Growify</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <Building2 className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Interactive Campus Walkthrough</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                Inside the studio where <span className="italic font-normal text-white">luxury flagships</span> are engineered.
              </h1>

              <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
                Located in the heart of South Delhi, our campus brings together 35+ full-stack developers, luxury brand directors, retention specialists, and computer vision engineers.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#D9D2C5]/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1F7A8C]" />
                  <span>Green Park / South Delhi</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#6B3BA6]" />
                  <span>35+ Full-Time Minds</span>
                </span>
                <span>•</span>
                <span>Zero Outsourcing</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Interactive Walkthrough */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <OfficeTourWalkthrough />
        </ScrollReveal>
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Studio Perks & Environment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mb-16 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
                Work Environment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
                Craftsmanship in Every Detail
              </h2>
              <p className="text-sm text-[#17102A]/70 font-sans">
                We design our physical space with the same obsessive attention to detail that we pour into our digital flagships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScrollReveal animation="fade-up" delay={80}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[#1F7A8C]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#17102A]">High-Spec Hardware</h4>
                <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                  Dual 4K displays, M-series Silicon, and dedicated GPU clusters for local Lookify training and model inference.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={140}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#6B3BA6]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#17102A]">Couture War Rooms</h4>
                <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                  Dedicated collaborative war rooms equipped with real-time telemetry walls for high-stakes seasonal launch sprints.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#1F7A8C]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#17102A]">Artisanal Fuel</h4>
                <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                  Unlimited specialty estate coffees, healthy daily meals, and a fully stocked studio kitchen to keep minds sharp.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={260}>
              <div className="p-6 rounded-xl border border-[#D9D2C5] bg-[#F5F1EA]/50 space-y-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#6B3BA6]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#17102A]">Learning Stipends</h4>
                <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
                  Annual budget for conference travel, machine learning research papers, design publications, and advanced certifications.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-[#17102A] text-white rounded-2xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F7A8C]">
                Join the Engineering Studio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                Do the best work of your career in New Delhi.
              </h3>
              <p className="text-xs sm:text-sm text-[#D9D2C5] leading-relaxed font-sans">
                We are actively hiring Senior Shopify Architects, Full-Stack Next.js Engineers, Meta Performance Directors, and Computer Vision Researchers.
              </p>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#F5F1EA] text-[#17102A] px-6 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors font-medium whitespace-nowrap"
            >
              <span>Explore 5 Open Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <SeamDivider variant="running-stitch" />
    </main>
  );
}
