import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofStrip } from "@/components/sections/ProofStrip";
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
 * Renders the flagship Growify homepage, orchestrating the 12 core sections
 * into a continuous, high-craft brand narrative from initial positioning through
 * diagnostic scoping, case proof, tech showcase, and audit conversion.
 */
export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* 1. Hero Section: Direct positioning & dual CTA */}
      <HeroSection />

      {/* 2. Proof Strip: Verified marquee metrics */}
      <ProofStrip />

      {/* Seam Motif Divider */}
      <SeamDivider variant="cross-stitch" />

      {/* 3. Diagnostic Pathfinder: Interactive self-assessment tool */}
      <PathFinderWidget />

      {/* 4. S.C.A.L.E. Operating System Explorer: 5 phases with AI layer toggle */}
      <SCALEExplorer />

      {/* Seam Motif Divider */}
      <SeamDivider variant="running-stitch" />

      {/* 5. Selected Work: Flagship case studies with verified impact */}
      <SelectedWork />

      {/* 6. Proprietary Tech Showcase: Lookify VTO simulator, Rossify, Craftify */}
      <TechShowcase />

      {/* 7. Ecosystem & Partner Matrix: Category-driven architecture */}
      <EcosystemMatrix />

      {/* 8. Studio Culture & Headquarters Teaser */}
      <OfficeCultureTeaser />

      {/* 9. Why Growify: The 5 operating pillars and zero fluff */}
      <WhyGrowify />

      {/* 10. Executive FAQ: Answer-first clarity */}
      <ExecutiveFAQ />

      {/* 11. Conversion Section: 3-field progressive intake form */}
      <ConversionSection />
    </div>
  );
}
