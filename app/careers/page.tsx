import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { SeamDivider } from "@/components/ui/SeamDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Growify Studio New Delhi",
  description:
    "Join Growify's 35+ person engineering and commerce studio in South Delhi. Open roles in Shopify Plus architecture, Next.js, Lookify computer vision, and luxury growth marketing.",
};

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

const openRoles: JobOpening[] = [
  {
    id: "role-1",
    title: "Senior Shopify Plus Architect",
    department: "Commerce Engineering",
    type: "Full-Time",
    location: "New Delhi (In-Studio)",
    description:
      "Lead the architectural design and theme development for India's premier luxury fashion houses. Build custom Online Store 2.0 sections, ERP inventory sync middleware, and high-performance international checkouts.",
    requirements: [
      "4+ years deep experience with Shopify Plus, Liquid, and Hydrogen",
      "Obsessive focus on Core Web Vitals (sub-second mobile FCP and zero CLS)",
      "Experience with high-volume End-of-Season (EOS) flash traffic scaling",
    ],
  },
  {
    id: "role-2",
    title: "Computer Vision & ML Engineer (Lookify)",
    department: "Applied AI R&D",
    type: "Full-Time",
    location: "New Delhi (In-Studio)",
    description:
      "Join our Lookify R&D team building neural garment draping algorithms, keypoint body landmarking, and mobile WebGL shader pipelines for luxury couture virtual try-on.",
    requirements: [
      "Strong background in 3D computer vision, PyTorch, and mesh deformation",
      "Experience deploying lightweight inference models to mobile browsers (WASM / WebGL)",
      "Passion for textile physics, fabric draping, and realistic surface illumination",
    ],
  },
  {
    id: "role-3",
    title: "Performance Marketing Director (Luxury & Couture)",
    department: "Growth Architecture",
    type: "Full-Time",
    location: "New Delhi (In-Studio)",
    description:
      "Architect and scale multi-crore ad campaigns across Meta and Google for heritage luxury and designer couture labels, capturing high-net-worth buyers in India, the US, and the Gulf.",
    requirements: [
      "Track record managing ₹1 Cr+/mo spend at profitable contribution margins",
      "Deep expertise in Meta CAPI server-side tracking and first-party attribution",
      "Experience orchestrating End-of-Season (EOS) sale surges without brand dilution",
    ],
  },
  {
    id: "role-4",
    title: "Lead Full-Stack Next.js / TypeScript Engineer",
    department: "Software Engineering",
    type: "Full-Time",
    location: "New Delhi (In-Studio)",
    description:
      "Build high-performance web applications, internal analytics dashboards, and proprietary commerce tools using Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS.",
    requirements: [
      "3+ years building production Next.js applications with strict type safety",
      "Deep understanding of server components, streaming SSR, and edge runtimes",
      "Experience integrating REST / GraphQL commerce APIs and webhook architectures",
    ],
  },
  {
    id: "role-5",
    title: "WhatsApp Lifecycle & Retention Strategist",
    department: "Conversational Commerce",
    type: "Full-Time",
    location: "New Delhi (In-Studio)",
    description:
      "Design and automate high-converting conversational shopping journeys across WhatsApp Business API (LimeChat / QuickReply) and Klaviyo for luxury fashion shoppers.",
    requirements: [
      "Proven success designing WhatsApp abandoned cart recovery and COD-to-prepaid flows",
      "Experience with RFM segmentation and high-AOV VIP buyer nurturing",
      "Strong copywriting and editorial communication skills tailored to luxury buyers",
    ],
  },
];

/**
 * Renders the Careers page detailing open positions, engineering culture,
 * and application instructions for Growify's New Delhi studio.
 */
export default function CareersPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111]">
      {/* Top Hero */}
      <section className="pt-32 pb-20 bg-[#0E0D0C] text-[#FAF8F5] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#D9D2C5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#9E7D47]">Careers</span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D9D2C5] border border-white/15">
                <Briefcase className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>We Are Hiring • 5 Open Roles</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                Do the best work of your career in <span className="italic font-normal text-[#9E7D47]">South Delhi</span>.
              </h1>

              <p className="text-base sm:text-lg text-[#D9D2C5] leading-relaxed font-sans">
                We are assembling India’s premier studio for luxury fashion commerce and computer vision. If you value craftsmanship, technical rigor, and direct accountability, explore our open positions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Open Roles List */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7D47]">
              Current Openings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
              Engineering &amp; Strategy Roles
            </h2>
            <p className="text-sm text-[#111111]/70 font-sans">
              All roles are based at our New Delhi studio campus with comprehensive benefits.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {openRoles.map((role, idx) => (
            <ScrollReveal key={role.id} animation="fade-up" delay={idx * 60}>
              <div className="bg-white border border-[#D9D2C5] rounded-xl p-8 hover:shadow-xl transition-all space-y-6 group hover:border-[#9E7D47]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#9E7D47] mb-1">
                      <span>{role.department}</span>
                      <span>•</span>
                      <span className="text-[#111111]/60">{role.type}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-light text-[#111111] group-hover:text-[#9E7D47] transition-colors">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#111111]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#9E7D47]" />
                    <span>{role.location}</span>
                  </div>
                </div>

                <p className="text-sm text-[#111111]/80 leading-relaxed font-sans">
                  {role.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#D9D2C5]/50">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#111111]/60 block font-semibold">
                    Key Requirements:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#111111]/80 font-sans">
                    {role.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47] mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D9D2C5]/50 flex items-center justify-between">
                  <a
                    href={`mailto:careers@growify.in?subject=Application%3A%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-[#9E7D47] transition-colors font-medium"
                  >
                    <span>Apply For This Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-mono text-[#111111]/50">
                    Direct review by hiring director
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SeamDivider variant="cross-stitch" />
    </main>
  );
}
