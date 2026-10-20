# Growify Digital Flagship — Growth Engineering for Luxury Commerce

> **Growify Digital LLP · AI Generalist Assessment Submission**  
> **Candidate:** Tanmay Tomar  
> **Live Production:** [growify-assessment.vercel.app](https://growify-assessment.vercel.app) 
> **Repository:** [github.com/TANMaYtO/Growify-assessment](https://github.com/TANMaYtO/Growify-assessment)  
> **Video Walkthrough (Loom):** [Watch the Product Showcase](https://www.loom.com) *(Insert your Loom link)*  

---

## 1. Executive Summary & Strategic Audit

Growify has powered marquee Indian luxury fashion and lifestyle houses—**Tarun Tahiliani, Gaurav Gupta, House of Masaba, Ridhi Mehra, Mahima Mahajan**—scaling commercial revenues past ₹500 Crores. 

However, a forensic audit of the live `growify.in` site revealed an existential brand-positioning disconnect:
* **Generic E-Commerce Template:** Running on a retail Shopify theme with consumer shopping cart drawers, retail product schemas, and duplicate physics scripts.
* **Credibility Erosion:** For luxury founders and enterprise executives evaluating an operating partner, a consumer retail template degraded institutional trust before the first pitch meeting.
* **Obsolete Agency Jargon:** Generic buzzwords ("The 6 S's") that failed to articulate Growify's true capabilities across full-stack Shopify Plus architecture, Meta/Google performance acquisition, WhatsApp retention, and proprietary AI.

### The Solution: An Architectural Digital Flagship
Rather than a superficial cosmetic redesign, this platform was built from scratch on **Next.js 15.5.28**, **React 19**, and **Tailwind CSS v4**, anchored in the **"Patternwork"** Haute Couture design system and Growify's core philosophy: ***"We grow when you grow."***

---

## 2. Core Architectural & Feature Deliverables

### A. Living Flagship & Bespoke Motion Choreography
* **Haute Couture Aesthetic:** Warm Alabaster Linen (`#FAF8F5`), Architectural Obsidian (`#0E0D0C`), and Warm Antique Gold (`#9E7D47`) with zero generic AI gradients and zero retail cart clutter.
* **The "OUR PLAN" Expandable Cards:** Recreated Growify's signature methodology (*"If you have ideas for your business, we have the right plan"*) across 5 interactive cards (`Setup`, `Show`, `Start`, `Scale`, `Support`) with smooth horizontal cubic-bezier expansion (`flex-[3.2]`).
* **Dual Infinite Running Marquees:** Antique Gold discipline ribbon paired with an Architectural Obsidian counter-flow stream of couture client labels.
* **Bespoke Custom Cursor:** Immediate gold center-point with an inertia-lagged outer brass ring that expands dynamically over interactive targets.
* **Pinned Section Navigation Rail:** Desktop scroll-spy rail tracking 9 editorial chapters with smooth programmatic jump controls.
* **Circular Scroll Progress Meter:** Bottom-right floating pill with an SVG progress ring reflecting exact viewport scroll percentage.

### B. Proprietary Technology: Lookify Neural Virtual Try-On (`/technology/lookify`)
* **Real-Time Interactive Simulator:** Resolves the primary conversion blocker in luxury fashion—silhouette, fabric drape, and sizing uncertainty.
* **Laser Scanline Draping:** Real-time animated gold laser wire sweeping across the shopper silhouette during neural inference.
* **24-Point Biometric Landmark Mesh:** Anatomical anchors with pulsing radar rings calculating cloth weight falloff, tension heatmaps, and micro-fold ambient shadows.
* **Interactive Split Comparison:** Smooth before/after slider comparing shopper silhouette to fitted couture drape.
* **Zero-Storage Privacy:** Edge WebGL accelerated inference with strict DPDP Act compliance.

### C. Commercial Proof & Mathematical Rigor (`/review`)
* **Typed Single Source of Truth:** Every commercial claim is backed by `content/facts.ts` with strict audit classifications:
  * `[V]` = Verified from public primary source / live inspection.
  * `[S]` = Supplied by Growify (Brief / Growth Deck).
  * `[U]` = Quarantined / Pending validation.
* **Mahima Mahajan 251% Metric Quarantine:** Identified a mathematical impossibility on Slide 17 of Growify's growth deck (claiming a 251% domestic vs international revenue share—a share cannot exceed 100%). Quarantined under "Pending Validation" in the public `/review` ledger, noting a likely conflation with international sales growth.
* **Live Telemetry Debugger:** Structured dataLayer event dispatching real-time standard GA4 `snake_case` telemetry payloads.

### D. Interactive Campus Experience (`/life-at-growify`)
* **Bonus Challenge Fulfilled:** Virtual architectural tour of Growify's 7,000 sq ft New Delhi studio campus.
* **6 Quick-Jump Studio Zones:** The Grand Reception & Archive Gallery, The Main Engineering Floor, The Executive Strategy Suite, High-Velocity Performance Pod, Lookify AI Innovation Lounge, and Studio Commons.

---

## 3. Technology Stack & Performance

| Layer | Specification | Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.5.28 (App Router) | Cleared Vercel dependency security blocks |
| **UI Library** | React 19.0.0 | Concurrent features, zero Hydration mismatch |
| **Styling** | Tailwind CSS v4.3.3 | Modern CSS-first engine, zero legacy PostCSS bloat |
| **Typography** | Fraunces + Inter | Variable serif & sans-serif pairing via `next/font` |
| **Type Safety** | TypeScript 5.7.2 (Strict) | 0 compilation errors across all components |
| **Rendering** | Static Site Generation (SSG) | 41/41 routes prerendered to static HTML |
| **Compliance** | Custom Claims Linter | `npm run lint:claims` (100% pass rate) |

---

## 4. Repository Structure & Documentation

```
GROWIFY/
├── app/                        # Next.js 15 App Router (41 static routes)
│   ├── about/                  # Studio history & executive leadership
│   ├── contact/                # Progressive 3-field growth audit intake
│   ├── industries/             # Luxury Fashion, Jewellery, Lifestyle, D2C
│   ├── insights/               # Long-form editorial case studies & articles
│   ├── life-at-growify/        # 7,000 sq ft Studio Video Walkthrough
│   ├── review/                 # Public Validation Ledger & Claim Status
│   ├── services/               # Shopify Plus, Performance, Retention, AI
│   ├── technology/             # Lookify VTO Simulator, Rossify, Craftify
│   └── work/                   # Tarun Tahiliani, Mahima Mahajan, Masaba
├── components/
│   ├── motion/                 # CustomCursor, Marquees, NavRail, ScrollToTop
│   ├── office/                 # OfficeTourWalkthrough (6-zone video tour)
│   ├── review/                 # Fact badges, ReviewContext, ReviewToolbar
│   ├── sections/               # HeroSection, OurPlanAccordion, SCALEExplorer
│   ├── technology/             # LookifySimulator (laser draping, 24-pt mesh)
│   ├── telemetry/              # AnalyticsDebugPanel (dataLayer GA4 debugger)
│   └── ui/                     # Navbar, Footer, SeamDividers
├── content/                    # Typed data layer (facts.ts, caseStudies.ts)
├── docs/                       # Project documentation
│   ├── AI_LOG.md               # Transparent AI collaboration & prompt journal
│   ├── DECISIONS.md            # Architecture Decision Records (ADRs)
│   ├── UNFINISHED.md           # Production roadmap & future scope
│   ├── VALIDATION_LEDGER.md    # Complete claim audit & verification ledger
│   └── WALKTHROUGH_SCRIPT.md   # 4:30 timed video demonstration script
└── scripts/
    └── lint-claims.js          # Automated claims compliance checker
```

---

## 5. Local Setup & Verification

```bash
# Clone the repository
git clone https://github.com/TANMaYtO/Growify-assessment.git
cd Growify-assessment

# Install dependencies
npm install

# Run claims compliance linter
npm run lint:claims

# Run production build
npm run build

# Start local server
npm run start
```
Server runs at `http://localhost:3000`.
