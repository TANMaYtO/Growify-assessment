import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, CheckCircle2 } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Privacy Policy & Biometric Data Handling | Growify",
  description:
    "Growify Digital LLP's privacy policy, detailing our strict NDA protections, non-retention of client metrics, and Lookify AI zero-storage computer vision processing.",
};

/**
 * Renders the primary Privacy Policy and Biometric Data Ethics charter,
 * highlighting full compliance with the Indian DPDP Act 2023 and GDPR.
 */
export default function PrivacyPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-16 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F7A8C]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Data Protection &amp; Biometric Ethics</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              Privacy Policy &amp; Data Ethics
            </h1>

            <p className="text-sm sm:text-base text-[#D9D2C5] font-sans">
              Last updated: October 2026 • Growify Digital LLP, New Delhi, India
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-20 max-w-4xl mx-auto px-6 space-y-12">
        <div className="bg-white border border-[#D9D2C5] rounded-2xl p-8 sm:p-12 space-y-8 shadow-xs">
          
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">1. Executive Summary &amp; Commitments</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              Growify Digital LLP (&ldquo;Growify&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this digital presence and provides proprietary commerce software including Lookify. We respect your confidentiality. We do not sell client contact data, we do not publicize confidential store revenue metrics without explicit written consent, and we enforce strict ephemeral memory policies across our machine learning software.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D2C5]">
            <div className="flex items-center gap-2 text-[#1F7A8C]">
              <EyeOff className="w-5 h-5" />
              <h2 className="font-serif text-2xl font-medium text-[#17102A]">2. Lookify AI &amp; Ephemeral Biometric Processing</h2>
            </div>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              When shoppers interact with Lookify Virtual Try-On (at <Link href="/technology/lookify" className="text-[#6B3BA6] underline">lookify.ai</Link> or on our partner storefronts):
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#17102A]/80 font-sans pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                <span><strong>Zero Long-Term Image Storage:</strong> Customer photographs or camera frames are loaded into volatile RAM only to calculate 24-point landmark vectors. Photos are purged immediately upon rendering.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                <span><strong>No Biometric Identification:</strong> We do not extract facial recognition identity, iris scans, or permanent biometric identifiers. Lookify only computes proportional posture pitch and torso aspect ratios.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A8C] shrink-0 mt-0.5" />
                <span><strong>Compliance:</strong> In full adherence to India&apos;s Digital Personal Data Protection (DPDP) Act 2023, the EU General Data Protection Regulation (GDPR), and California CCPA.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D2C5]">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">3. Client Telemetry &amp; Non-Disclosure (NDA)</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              All commercial engagements are executed under binding Non-Disclosure Agreements. Historical store conversion rates, daily revenue figures, customer PII, and ERP inventories remain the exclusive property of the brand. Published case studies (e.g. Tarun Tahiliani, Mahima Mahajan) utilize metrics reviewed and authorized by client leadership.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D2C5]">
            <h2 className="font-serif text-2xl font-medium text-[#17102A]">4. Contact &amp; Data Rights Requests</h2>
            <p className="text-sm text-[#17102A]/80 leading-relaxed font-sans">
              For any privacy inquiries, data deletion requests, or DPDP grievance concerns, contact our Data Protection Officer directly at:
            </p>
            <div className="p-4 rounded-lg bg-[#F5F1EA] text-xs font-mono text-[#17102A]">
              Growify Digital LLP<br />
              Attn: Legal &amp; Compliance Office<br />
              Email: legal@growify.in<br />
              South Delhi Campus, New Delhi 110016, India
            </div>
          </div>

        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
