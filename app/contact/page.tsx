import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { Mail, MapPin, Phone, ShieldCheck, Clock, MessageSquare } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";

export const metadata: Metadata = {
  title: "Contact & Strategic Scoping | Growify New Delhi",
  description:
    "Connect directly with Growify leadership. Schedule a digital flagship diagnostic audit or visit our South Delhi engineering campus.",
};

/**
 * Renders the dedicated Contact & Strategic Scoping page, providing direct
 * executive communication channels, studio location, and audit scheduling.
 */
export default function ContactPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F7A8C]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">Contact</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
              <MessageSquare className="w-3.5 h-3.5 text-[#1F7A8C]" />
              <span>Direct CXO Communication</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
              Direct access to our <span className="italic font-normal text-white">lead architects</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
              No junior business development gatekeepers. Inquire below to connect directly with our engineering and performance directors in New Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Contact Information & Office Details */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-[#D9D2C5] rounded-xl p-8 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#1F7A8C]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#17102A]">Delhi Studio Campus</h3>
            <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
              Growify Digital LLP<br />
              South Delhi Campus, Green Park<br />
              New Delhi, Delhi 110016, India
            </p>
            <div className="pt-2 text-xs font-mono text-[#1F7A8C]">
              Visits by executive appointment
            </div>
          </div>

          <div className="bg-white border border-[#D9D2C5] rounded-xl p-8 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#6B3BA6]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#17102A]">Electronic Inquiries</h3>
            <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
              Direct leadership routing:<br />
              <strong className="text-[#17102A]">hello@growify.in</strong><br />
              Careers: <strong className="text-[#17102A]">careers@growify.in</strong>
            </p>
            <div className="pt-2 text-xs font-mono text-[#6B3BA6]">
              Sub-4 hour response time
            </div>
          </div>

          <div className="bg-white border border-[#D9D2C5] rounded-xl p-8 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#17102A] text-white flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#1F7A8C]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#17102A]">Operational Hours</h3>
            <p className="text-xs text-[#17102A]/70 leading-relaxed font-sans">
              HQ Studio: 9:30 AM – 7:30 PM IST<br />
              Concierge Sales Desk: 18+ Hours Multi-Timezone (US / UK / GCC / India)
            </p>
            <div className="pt-2 text-xs font-mono text-[#1F7A8C]">
              Continuous client Slack channels
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Progressive Audit Intake */}
      <ConversionSection />

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
