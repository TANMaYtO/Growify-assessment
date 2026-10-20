import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { RunningMarquee } from "@/components/motion/RunningMarquee";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { OurPlanAccordion } from "@/components/sections/OurPlanAccordion";
import { PathFinderWidget } from "@/components/sections/PathFinderWidget";
import { SCALEExplorer } from "@/components/sections/SCALEExplorer";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { EcosystemMatrix } from "@/components/sections/EcosystemMatrix";
import { OfficeCultureTeaser } from "@/components/sections/OfficeCultureTeaser";
import { WhyGrowify } from "@/components/sections/WhyGrowify";
import { ExecutiveFAQ } from "@/components/sections/ExecutiveFAQ";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Growify | Growth Engineering for Luxury Fashion & High-Value Commerce",
  description:
    "Growify engineers high-performing digital flagships for premier Indian luxury fashion and high-value commerce brands. S.C.A.L.E. operating system, Shopify Plus, retention and proprietary AI.",
  alternates: {
    canonical: "https://growify.in",
  },
  openGraph: {
    title: "Growify | Growth Engineering for Luxury Fashion & Commerce",
    description:
      "Full-stack digital flagship engineering, international commerce, retention systems, and Lookify virtual try-on for premier fashion labels.",
    url: "https://growify.in",
    siteName: "Growify",
    type: "website",
  },
};

/**
 * Renders the flagship Growify homepage, orchestrating the narrative flow
 * from initial luxury positioning, running discipline marquees, the iconic "OUR PLAN"
 * interactive multi-column accordion, case study archives, proprietary AI tech, and progressive intake.
 */
export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* 1. Hero Section: Direct positioning & dual CTA */}
      <HeroSection />

      {/* Dynamic Infinite Running Discipline Marquee (Antique Gold Ribbon) */}
      <RunningMarquee
        items={[
          "Web Design",
          "Shopify Plus Engineering",
          "Performance Marketing",
          "Lookify Neural Try-On",
          "18-Hour Concierge Desk",
          "Cross-Border US & GCC Routing",
          "ERP Inventory Sync",
          "Lifecycle Retention",
        ]}
        variant="gold"
        direction="left"
        separator="✦"
      />

      {/* 2. Proof Strip: Verified marquee metrics */}
      <ProofStrip />

      {/* 3. The Iconic "OUR PLAN" Expandable Interactive Cards */}
      <OurPlanAccordion />

      {/* Seam Motif Divider */}
      <SeamDivider variant="cross-stitch" />

      {/* 4. Diagnostic Pathfinder: Interactive self-assessment tool */}
      <PathFinderWidget />

      {/* Seam Motif Divider */}
      <SeamDivider variant="tailor-tack" />

      {/* 5. S.C.A.L.E. Operating System Explorer: 5 phases with AI layer toggle */}
      <SCALEExplorer />

      {/* Seam Motif Divider */}
      <SeamDivider variant="running-stitch" />

      {/* Dynamic Infinite Running Client Couture Marquee (Obsidian Ribbon) */}
      <RunningMarquee
        items={[
          "Tarun Tahiliani",
          "House of Masaba",
          "Gaurav Gupta",
          "Ridhi Mehra",
          "Mahima Mahajan",
          "Drzya by Ridhiee Suuri",
          "Hazoorilal Legacy",
          "Anmol Jewellers",
        ]}
        variant="obsidian"
        direction="right"
        separator="✦"
      />

      {/* 6. Selected Work: Flagship case studies with verified impact & 3D tilt */}
      <SelectedWork />

      {/* Seam Motif Divider */}
      <SeamDivider variant="basting" />

      {/* 7. Proprietary Tech Showcase: Lookify VTO simulator, Rossify, Craftify */}
      <TechShowcase />

      {/* Seam Motif Divider */}
      <SeamDivider variant="cross-stitch" />

      {/* 8. Ecosystem & Partner Matrix: Category-driven architecture */}
      <EcosystemMatrix />

      {/* Seam Motif Divider */}
      <SeamDivider variant="running-stitch" />

      {/* 9. Studio Culture & Headquarters Teaser */}
      <OfficeCultureTeaser />

      {/* Seam Motif Divider */}
      <SeamDivider variant="tailor-tack" />

      {/* 10. Why Growify: The 5 operating pillars and zero fluff */}
      <WhyGrowify />

      {/* Seam Motif Divider */}
      <SeamDivider variant="running-stitch" />

      {/* 11. Executive FAQ: Answer-first clarity */}
      <ExecutiveFAQ />

      {/* 12. Conversion Section: 3-field progressive intake form */}
      <ConversionSection />
    </div>
  );
}
