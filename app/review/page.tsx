import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { facts, pipelineCaseStudies } from "@/content/facts";
import type { Fact } from "@/content/facts";
import { ShieldCheck, AlertCircle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Evidence & Validation Ledger | Growify Open Audit",
  description:
    "Complete transparency ledger for all metrics cited across Growify. Traceable to public case studies, verified client reporting, or flagged for validation.",
};

/**
 * Renders the primary Evidence & Validation Ledger page, displaying
 * every metric on the website alongside its verification status and audit source.
 */
export default function ReviewPage(): React.JSX.Element {
  const factList: Fact[] = Object.values(facts);
  const verifiedCount = factList.filter((f) => f.status === "verified").length;
  const suppliedCount = factList.filter((f) => f.status === "supplied").length;
  const pendingCount = factList.filter((f) => f.status === "pending-validation").length;

  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#17102A]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#17102A] text-[#F5F1EA] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1F7A8C]">Validation Ledger</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F7A8C]" />
                <span>Evidence-First Operating Standard</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                The public <span className="italic font-normal text-white">validation ledger</span>.
              </h1>

              <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
                Unlike industry norms of manufacturing unsubstantiated statistics, every number on this website is tracked in this typed ledger, mapped to its primary source, and flagged where discrepancies exist.
              </p>

              {/* Quick Summary Pill Bar */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{verifiedCount} Verified [V]</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-500/30 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{suppliedCount} Deck Supplied [S]</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-rose-950/80 text-rose-300 border border-rose-500/30 flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{pendingCount} Discrepancy Logged [U]</span>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Review Mode Interactive Explainer */}
      <section className="py-12 bg-white border-b border-[#D9D2C5]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="bg-[#F5F1EA] border border-[#D9D2C5] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6B3BA6] uppercase tracking-wider font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Built-in Auditor Tooling</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#17102A]">
                  Toggle &ldquo;Review Mode&rdquo; on any page
                </h3>
                <p className="text-xs sm:text-sm text-[#17102A]/80 leading-relaxed font-sans">
                  Use the floating toolbar in the bottom-right corner of your screen to activate Review Mode. It overlays interactive inspection tooltips on every single claim, source link, and verification badge across the prototype.
                </p>
              </div>

              <Link
                href="/"
                className="px-5 py-3 rounded-lg bg-[#17102A] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#6B3BA6] transition-colors whitespace-nowrap"
              >
                Inspect Homepage in Review Mode
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary Facts Ledger Table */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B3BA6]">
              Single Source of Truth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#17102A]">
              Metrics Single Source of Truth
            </h2>
            <p className="text-sm text-[#17102A]/70 font-sans">
              Exported from <code>content/facts.ts</code>. Governed by zero-unverified-claims build linters.
            </p>
          </div>

          <div className="border border-[#D9D2C5] rounded-2xl overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#17102A] text-[#F5F1EA] font-mono uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-6 font-medium">Metric ID</th>
                    <th className="py-4 px-6 font-medium">Published Value</th>
                    <th className="py-4 px-6 font-medium">Statement &amp; Category</th>
                    <th className="py-4 px-6 font-medium">Verification Status</th>
                    <th className="py-4 px-6 font-medium">Source / Audit Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9D2C5]">
                  {factList.map((fact: Fact) => (
                    <tr key={fact.id} className="hover:bg-[#F5F1EA]/60 transition-colors">
                      <td className="py-4 px-6 font-mono text-[11px] text-[#6B3BA6] whitespace-nowrap font-medium">
                        {fact.id}
                      </td>
                      <td className="py-4 px-6 font-serif text-base font-medium text-[#17102A] whitespace-nowrap">
                        {fact.value}
                      </td>
                      <td className="py-4 px-6 text-[#17102A]/80 max-w-xs font-sans">
                        <strong className="block text-xs font-medium text-[#17102A] mb-0.5">{fact.statement}</strong>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F1EA] text-[#17102A]/70 uppercase tracking-wider inline-block mt-1">
                          Category: {fact.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium ${
                            fact.status === "verified"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : fact.status === "supplied"
                              ? "bg-amber-100 text-amber-800 border border-amber-300"
                              : "bg-rose-100 text-rose-800 border border-rose-300"
                          }`}
                        >
                          {fact.status === "verified" && <CheckCircle2 className="w-3 h-3" />}
                          {fact.status === "supplied" && <Clock className="w-3 h-3" />}
                          {fact.status === "pending-validation" && <AlertCircle className="w-3 h-3" />}
                          <span>
                            {fact.status === "verified"
                              ? "[V] Verified"
                              : fact.status === "supplied"
                              ? "[S] Deck Supplied"
                              : "[U] Pending Reconciliation"}
                          </span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[#17102A]/80 max-w-sm font-sans">
                        <div className="font-mono text-[11px] text-[#17102A]/70 mb-1">
                          {fact.source} ({fact.sourceDate})
                        </div>
                        {fact.notes && (
                          <div className="p-2 rounded bg-amber-50 border border-amber-200 text-[10px] text-amber-900 leading-normal font-mono">
                            <strong>Audit Flag:</strong> {fact.notes}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SeamDivider variant="cross-stitch" />

      {/* Discrepancy Case Study: The 251% Mahima Mahajan Reconciliation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="bg-[#241B3B] text-white rounded-2xl p-8 sm:p-12 border border-white/10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono border border-rose-500/30">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Audit Case Study • Mathematical Reconciliation</span>
              </div>

              <h3 className="font-serif text-3xl font-light text-white">
                Why We Flagged &ldquo;251% International Contribution&rdquo;
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#D9D2C5] font-sans leading-relaxed">
                <div className="space-y-3">
                  <h4 className="font-serif text-lg text-white">The Finding in the Deck</h4>
                  <p>
                    Slide 17 of the supplied Growify Growth Deck features a headline stating: <em>&ldquo;251% international revenue contribution to total online revenue&rdquo;</em>. Mathematically, a share or contribution of a finite whole cannot exceed 100%.
                  </p>
                  <p>
                    Publishing this figure as a public proof point would fail the assessment&apos;s explicit requirement: <em>&ldquo;Spot anything odd or missing? Explain what you would fix, verify, or improve.&rdquo;</em>
                  </p>
                </div>

                <div className="space-y-3 bg-white/5 p-6 rounded-xl border border-white/10">
                  <h4 className="font-serif text-lg text-white">The Professional Resolution</h4>
                  <p>
                    We have cataloged this metric under <code>[U] Pending Validation</code>. On the public-facing pages, it is locked behind Review Mode and clearly annotated as a likely typographical conflation of <strong>251% international sales growth</strong> with <strong>revenue share</strong>.
                  </p>
                  <p className="text-[11px] font-mono text-[#1F7A8C]">
                    Status: Flagged for client validation before public indexation.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SeamDivider variant="running-stitch" />
    </main>
  );
}
