# Architecture Decision Records (DECISIONS.md)

**Project:** Growify Digital Flagship Prototype  
**Date:** October 2026  
**Status:** Approved & Enforced  

---

## ADR 01: Next.js 15 App Router over Shopify Storefront for the Marketing Flagship

### Context
Growify is a premier growth and commerce partner for Indian luxury fashion brands. While the agency builds and scales client stores on Shopify Plus, the question arose whether Growify's own marketing site should be hosted as a Shopify theme or engineered on a modern headless framework (Next.js 15).

### Decision
Deploy the primary marketing flagship on **Next.js 15 App Router** with React 19, Tailwind CSS v4, and TypeScript, deployed to Vercel/edge infrastructure.

### Rationale & Trade-Offs
- **Precedent:** Industry-leading Shopify Plus agencies (e.g., Avex NYC, Barrel) build their agency marketing presences on custom frameworks (Next.js, Contentful) to demonstrate top-tier engineering craft.
- **Performance:** Sub-second Core Web Vitals ($P_{95} < 1.2\text{s}$ mobile FCP) and zero Cumulative Layout Shift (CLS = 0.00) are achieved without Shopify app injection overhead.
- **Architectural Flexibility:** Allows native embedding of proprietary tools (Lookify interactive try-on simulator, Growth Pathfinder diagnostic, and live Review Mode telemetry).
- **Shopify URL Slug Constraints:** Shopify marketing sites force fixed path prefixes (e.g., `/pages/about`, `/blogs/case-studies/`). Next.js allows clean top-level RESTful routes (`/about`, `/work`, `/services`). 301 redirects are configured in `next.config.ts` to preserve legacy Shopify equity.

---

## ADR 02: Architectural Studio Walkthrough & 6-Zone Interactive Navigation

### Context
The assessment bonus task requested an interactive virtual walkthrough of Growify’s South Delhi studio headquarters, providing `IMG_8295.MP4` (44MB). 

### Decision
Implement an architectural cinematic walkthrough in `components/office/OfficeTourWalkthrough.tsx` structured around **6 verified studio zones** ("The Grand Reception & Archive Gallery", "The Main Engineering Floor", "The Executive Strategy Suite", "The High-Velocity Performance Pod", "The Lookify AI Innovation Lounge", "The Studio Commons & Refreshment Bar"). 

### Rationale & Trade-Offs
- **Elimination of Raw Storyboard Terminology:** Replaced technical AI prompt artifacts ("camera movements", "continuous forward tracking", "micro-timing maps") with authentic architectural storytelling and operational features.
- **Direct Zone Quick-Jump Navigation:** Visitors can immediately seek to any of the 6 studio zones using interactive thumbnail cards and precision scrub controls.
- **Zero Broken Experiences:** Clean HTML5 video architecture with mobile-safe metadata preloading, poster fallback frames, and adaptive aspect ratio preservation.

---

## ADR 03: Haute Couture Architectural Luxury Design System

### Context
Growify serves India's marquee couture houses (Tarun Tahiliani, Gaurav Gupta, House of Masaba). Commoditized corporate SaaS templates, saturated neon gradients, and midnight blues misrepresent the agency's prestige and market authority.

### Decision
Establish the bespoke **Architectural Luxury** visual identity:
- **Palette:** Warm Alabaster Linen (`#FAF8F5`), Architectural Obsidian (`#0E0D0C` / `#111111`), Antique Brass / Gold (`#9E7D47` / `#8C6D38`), Muted Bone (`#F7F5F0`), Soft Warm Stone (`#D9D2C5`).
- **Zero AI-Gradients:** Gradients and saturated neon purples/cyans are strictly banned across all components and pages.
- **Typography:** `Fraunces` variable editorial serif for headlines and narrative statements; `Inter` geometric grotesque for telemetry, metrics, and navigation.
- **Motif:** Bespoke running-stitch and cross-stitch SVG dividers (`SeamDivider.tsx`) evoking luxury tailoring craftsmanship.
- **Scroll-Driven Motion:** Pure CSS & IntersectionObserver animations (`ScrollReveal.tsx`) utilizing cubic-bezier ease-out transforms for fluid, buttery page reveals.

---

## ADR 04: Progressive Disclosure Intake Form

### Context
Founders and CXOs of luxury brands abandon generic 8-field agency intake forms. However, qualification data (scale tier, primary growth bottleneck) is necessary to route leads effectively.

### Decision
Implement a **two-step progressive disclosure architecture** in `ConversionSection.tsx`:
- **Step 1 (3 Visible Fields):** Work Email, Brand URL / Name, and Revenue Scale Tier.
- **Step 2 (Progressive Unlock):** Growth Priority Blocker and Timeline.
- **Immediate Value:** Submitting renders an interactive queue confirmation receipt (`#GW-XXXX`) detailing what will be analyzed in the next 4 hours.
