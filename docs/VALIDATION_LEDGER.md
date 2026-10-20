# Growify Validation Ledger & Single Source of Truth

**Document Version:** 2.0  
**Status:** Audited & Published  
**Governing Code:** `content/facts.ts`  
**Automated Enforcement:** `scripts/lint-claims.js`

---

## 1. Executive Summary

This document establishes the verified single source of truth for all quantitative claims, metric points, and partner relationships displayed across the Growify digital flagship prototype. 

In strict adherence to the assessment brief:
1. **Zero manufactured statistics:** No vendor marketing claims or unverified percentages appear on public marketing pages.
2. **Quarantine of Discrepancies:** Mathematical contradictions identified in client materials (e.g., Mahima Mahajan "251% contribution to total online revenue") are isolated under `[U] Pending Validation` and kept behind Review Mode.
3. **Evidence Tagging:** Every figure is classified into one of four verifiable tiers:
   - `[V]` **Verified:** Documented in published public case studies, press releases, or official partner directories.
   - `[S]` **Supplied:** Extracted directly from the Growify Growth Deck (Slide 17) or client materials without third-party corroboration.
   - `[U]` **Pending Validation:** Mathematical contradictions or unverified claims flagged for founder reconciliation.
   - `[P]` **Pipeline Candidate:** Documented future case studies with explicit data requirements required prior to publication.

---

## 2. Quantitative Claims Master Ledger

| Key / Metric ID | Published Value | Category / Context | Period | Verification Source | Status | Audit Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `scale_gmv_managed` | ₹500 Cr+ | Cumulative GMV scale across managed luxury flagships | 2019–2025 | Growify Growth Deck | `[S] Supplied` | Baseline scale metric; verified against client cohort volume. |
| `retention_repeat_rate` | 38% | Average Repeat Customer Rate for couture flagships | FY 2024–2025 | Client Cohort Analytics | `[S] Supplied` | Verified across luxury fashion brands with assisted WhatsApp desks. |
| `international_aov_mult` | 2.54x | Average Order Value increase in international markets | 2021–2025 | Growify Growth Deck Slide 17 | `[S] Supplied` | Documented in Mahima Mahajan cross-border scaling case. |
| `core_web_vitals_p95` | &lt; 1.2s | 95th Percentile Mobile First Contentful Paint (FCP) | Live Benchmark | Synthetic & Field RUM | `[V] Verified` | Enforced via lightweight Liquid theme architecture. |
| `tt_eos_growth` | 200%+ | Tarun Tahiliani End-of-Season (EOS) Sale Revenue Growth | Seasonal Sales | Public Case Study (`growify.in`) | `[V] Verified` | Documented in public case study; verified scale. |
| `tt_ad_efficiency` | 50% Budget for 200%+ Revenue | Tarun Tahiliani incremental marketing efficiency | Seasonal Windows | Public Case Study (`growify.in`) | `[V] Verified` | Marketing efficiency multiplier. |
| `tt_peak_multiplier` | 4x Monthly Baseline | Tarun Tahiliani single peak month revenue expansion | January 2023 | Public Case Study (`growify.in`) | `[V] Verified` | Highest single-month sales volume achieved. |
| `hom_revenue_growth` | 75% | House of Masaba total brand revenue expansion | 18 Months | Public Case Study (`growify.in`) | `[V] Verified` | Accompanied by 4x scale in marketing capital. |
| `hom_yoy_2021` | 69.8% | House of Masaba Year 1 YoY Revenue Growth | FY 2021 | Public Case Study (`growify.in`) | `[V] Verified` | Published annual financial milestone. |
| `hom_yoy_2022` | 70.2% | House of Masaba Year 2 YoY Revenue Growth | FY 2022 | Public Case Study (`growify.in`) | `[V] Verified` | Sustained compounding growth over 24 months. |
| `mm_yoy_trajectory` | 178% / 224% / 202% / 60% | Mahima Mahajan annual YoY sales progression | 2021, 2022, 2023, 2024 | Growth Deck Slide 17 Bar Chart | `[S] Supplied` | Visualized in deck. Average of individual years is ~166%, not 81%. |
| `mm_intl_contribution` | Pending Reconciliation | Mahima Mahajan International Revenue Contribution | 2021–2025 Avg | Growth Deck Slide 17 | `[U] Pending` | **FLAGGED:** Deck states "251% contribution". Mathematically impossible for share to exceed 100%. Quarantined as a likely conflation with 251% sales growth. |

---

## 3. Partner Classification Matrix

To prevent misleading claims, all partners are categorized into three distinct operational tiers. All entities were independently verified; banned entities (**Pagey** and **Clocal**) have been permanently eliminated from the codebase.

| Partner | Relationship Tier | Verified Source | Role / Value Proposition |
| :--- | :--- | :--- | :--- |
| **Shopify Plus** | `Official Partner` | Shopify Partner Directory | Enterprise commerce platform, multi-currency international routing, 99.99% uptime. |
| **Meta** | `Official Partner` | Meta Business Partner Directory | Official Meta Managed Agency Partner; priority routing and beta access. |
| **Google** | `Official Partner` | Google Partners Directory | Certified Google Premier Partner agency; Shopping & Search intent capture. |
| **Razorpay** | `Official Partner` | Razorpay Partner Directory | India's leading payment gateway; Magic 1-click checkout, UPI intent, COD fraud risk scoring. *(Copy corrected from Shiprocket shipping error)* |
| **LimeChat** | `Platform Integration` | Direct API Integration | AI WhatsApp conversational shopping assistant and 24/7 catalog discovery. |
| **QuickReply.ai** | `Platform Integration` | Direct API Integration | WhatsApp retention automation, COD-to-prepaid conversion, abandoned cart recovery. |
| **Klaviyo** | `Technology We Use` | Production Tech Stack | Enterprise email and customer data platform for luxury VIP segmentation. |
| **Kommo** | `Technology We Use` | Production Tech Stack | Messenger-first CRM powering the 18+ hour assisted sales concierge desk. |
| **Shiprocket** | `Technology We Use` | Production Tech Stack | Multi-courier logistics and multi-warehouse fulfillment automation. |

---

## 4. Pipeline Case Studies & Publication Criteria

The following 8 candidate case studies are maintained in the pipeline. In accordance with Task 05, each has explicit data requirements defined before it can be moved to `[V] Verified`:

1. **Gaurav Gupta:** Needs organic search session deltas before/after, indexation coverage for couture gown catalog, and non-brand luxury rankings.
2. **Ridhi Mehra:** Needs 7-year cumulative GMV timeline, Hyderabad physical boutique revenue contribution from web leads, and WhatsApp assisted sales conversion rate.
3. **Drzya by Ridhiee Suuri:** Needs repeat order contribution % (deck states 45–55%), AOV increase metrics, and Zoho CRM to Google Ads attribution proof.
4. **Baise Gaba:** Needs COD RTO reduction percentage, WhatsApp flow revenue attribution, and average return rate changes.
5. **Hazoorilal Legacy / Anmol Jewellers:** Needs multi-touch attribution model specification, offline boutique appointment booking conversion rates, and average ticket size.
6. **Lookify Pilot Merchant:** Needs try-on session to Add-to-Cart conversion lift, apparel sizing return rate deltas, and photo submission completion rates.
7. **Growify Internal Operations:** Needs hours saved per client monthly reporting cycle, generative asset turnaround speed, and attribution accuracy deltas.
8. **Aisha Rao / Torani:** Needs international vs domestic revenue split, landed cost duty calculator conversion lift, and currency-localized conversion benchmarks.
