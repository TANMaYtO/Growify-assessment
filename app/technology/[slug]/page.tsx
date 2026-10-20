import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Box, RefreshCw, Cpu, Sparkles } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

interface TechProduct {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  capabilities: string[];
  architecture: { title: string; detail: string }[];
  impactMetric: { value: string; label: string };
}

const techProducts: Record<string, TechProduct> = {
  rossify: {
    slug: "rossify",
    name: "Rossify",
    category: "Merchandising & Inventory Intelligence",
    tagline: "Predictive Inventory Replenishment & SKU Velocity for Luxury Apparel",
    description:
      "Rossify bridges the gap between digital demand signals and factory production lines. By analyzing real-time clickstream velocity, territorial demand shifts, and historical lead times, Rossify ensures luxury brands produce what sells before stockouts erode margins.",
    capabilities: [
      "Real-time Ready-to-Ship (RTS) inventory velocity alerts",
      "Predictive regional demand clustering (US, GCC, Metro India)",
      "Automated stock re-order triggers for core couture silhouettes",
      "Dead stock & markdown risk scoring before end-of-season sales",
      "Two-way integration with Shopify inventory and ERP factory systems",
    ],
    architecture: [
      {
        title: "Bayesian Demand Forecasting",
        detail:
          "Models SKU demand probability curves incorporating seasonal festive peaks, campaign spend changes, and historical sell-through rates.",
      },
      {
        title: "Real-Time Telemetry Pipeline",
        detail:
          "Ingests hourly add-to-cart, wishlist, and WhatsApp concierge inquiries to detect micro-surges before catalog stock is depleted.",
      },
      {
        title: "Factory Order Dispatch Bridge",
        detail:
          "Generates automated production cut-sheets directly for master patternmakers and manufacturing merchandisers.",
      },
    ],
    impactMetric: {
      value: "40%",
      label: "Reduction in Stockout Losses for Core Silhouettes",
    },
  },

  craftify: {
    slug: "craftify",
    name: "Craftify",
    category: "Luxury Layout & Lookbook Engine",
    tagline: "Sub-Second Editorial Storytelling & Liquid Performance for Shopify 2.0",
    description:
      "Craftify gives luxury fashion brands the visual freedom of a couture print magazine with the speed and conversion mechanics of a high-performance checkout. It compiles dynamic editorial lookbooks into lightweight Liquid sections with zero layout shift.",
    capabilities: [
      "Zero Cumulative Layout Shift (CLS = 0.00) responsive lookbooks",
      "Shoppable hotspot tagging with real-time price and stock sync",
      "Adaptive video lookbook delivery optimized for mobile Safari & 5G",
      "Automated Rich Schema injection for couture runway collections",
      "Native Shopify Online Store 2.0 section modularity",
    ],
    architecture: [
      {
        title: "Liquid Micro-Compiler",
        detail:
          "Transforms high-resolution fashion assets into responsive WebP/AVIF picture elements with explicit intrinsic aspect ratio reservations.",
      },
      {
        title: "Shoppable Hotspot Coordinate Engine",
        detail:
          "Attaches dynamic inventory hooks to garment coordinates, allowing one-tap slide-out quick view without leaving the lookbook narrative.",
      },
      {
        title: "Asset Weight Budget Enforcer",
        detail:
          "Enforces a strict 400KB total page weight cap on initial viewport rendering, guaranteeing sub-second Core Web Vitals on mobile.",
      },
    ],
    impactMetric: {
      value: "< 800ms",
      label: "Average Mobile First Contentful Paint (FCP)",
    },
  },
};

interface TechDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates static parameters for proprietary technology products.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(techProducts).map((slug) => ({ slug }));
}

/**
 * Generates dynamic SEO metadata for each technology product page.
 */
export async function generateMetadata({ params }: TechDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = techProducts[slug];

  if (!product) {
    return { title: "Technology Not Found | Growify" };
  }

  return {
    title: `${product.name} | Growify Proprietary Technology`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Growify`,
      description: product.description,
      url: `https://growify.in/technology/${slug}`,
    },
  };
}

/**
 * Renders dynamic product deep-dive pages for Rossify and Craftify.
 */
export default async function TechDetailPage({ params }: TechDetailPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const product = techProducts[slug];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B3BA6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <Cpu className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>{product.category}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                {product.name}
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#D9D2C5] font-light">
                {product.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#D9D2C5]/90 max-w-2xl leading-relaxed font-sans">
                {product.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#241B3B] p-8 rounded-2xl border border-white/15 space-y-2">
              <span className="text-xs font-mono text-[#1F7A8C] uppercase tracking-wider block">
                Target Impact Benchmark
              </span>
              <div className="font-serif text-5xl sm:text-6xl font-light text-white">
                {product.impactMetric.value}
              </div>
              <p className="text-xs text-[#D9D2C5] uppercase font-mono tracking-wider">
                {product.impactMetric.label}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Architecture */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
                Operational Capabilities
              </span>
              <h2 className="font-serif text-3xl font-light mt-1 text-[#17102A]">
                Key Functional Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {product.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-[#D9D2C5] bg-white flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#17102A] leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
                System Design
              </span>
              <h2 className="font-serif text-2xl font-light mt-1 text-[#17102A]">
                Technical Architecture
              </h2>
              <div className="space-y-4 mt-6">
                {product.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-2"
                  >
                    <h3 className="font-serif text-lg font-medium text-[#17102A]">
                      {arch.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17102A]/70 leading-relaxed font-sans">
                      {arch.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#17102A]/60 block">
                Deployment Access
              </span>
              <p className="text-xs text-[#17102A]/80 leading-relaxed">
                {product.name} is deployed exclusively as part of Growify&apos;s S.C.A.L.E. growth engagements for verified luxury commerce clients.
              </p>
              <Link
                href="/#audit-intake"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#17102A] text-[#F5F1EA] py-3 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-[#6B3BA6] transition-colors font-medium"
              >
                <span>Request Deployment Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-xl border border-[#D9D2C5] bg-white space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B3BA6] block">
                Explore Technology Suite
              </span>
              <Link
                href="/technology/lookify"
                className="block text-sm font-serif font-medium text-[#17102A] hover:text-[#6B3BA6] transition-colors"
              >
                • Lookify Virtual Try-On
              </Link>
              <Link
                href="/technology/partners"
                className="block text-sm font-serif font-medium text-[#17102A] hover:text-[#6B3BA6] transition-colors"
              >
                • Certified Partner Ecosystem
              </Link>
            </div>
          </div>

        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
