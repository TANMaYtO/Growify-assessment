export interface ServiceOffering {
  slug: string;
  title: string;
  pillar: 'Setup' | 'Capture' | 'Activate' | 'Lead' | 'Establish' | 'Intelligence';
  shortSummary: string;
  headline: string;
  description: string;
  capabilities: string[];
  tiers?: { name: string; description: string }[];
  process: { step: string; name: string; description: string }[];
  techStack: string[];
  relatedCaseSlugs: string[];
  relatedProductSlugs: string[];
  faq: { question: string; answer: string }[];
}

export const services: Record<string, ServiceOffering> = {
  'shopify-development': {
    slug: 'shopify-development',
    title: 'Commerce & Shopify Plus Architecture',
    pillar: 'Setup',
    shortSummary: 'Custom, high-conversion Shopify Plus digital flagships engineered for luxury couture, fine jewellery, and heritage lifestyle houses.',
    headline: 'Shopify Development for Fashion and Luxury Brands',
    description: 'We build digital flagships that honor luxury brand equity while engineering sub-second page performance, complex multi-warehouse inventory synchronization, and bespoke international checkout flows.',
    capabilities: [
      'Bespoke Shopify Online Store 2.0 Theme Engineering',
      'Complex Replatforming from Legacy Magento & WooCommerce',
      'Multi-Warehouse & ERP Inventory Synchronization',
      'International Geo-Currency, Duty, & Multi-Territory Routing',
      'Custom Cash-on-Delivery (COD) Risk Verification Workflows',
      'Bespoke Luxury Bridal & Couture Concierge Appointment Portals',
    ],
    tiers: [
      { name: '1. Fully Custom Flagship', description: 'Bespoke design system engineered from scratch for marquee luxury and couture heritage brands.' },
      { name: '2. Semi-Custom Accelerator', description: 'Proprietary luxury component foundation enhanced with custom editorial sections for fast-scaling designer labels.' },
      { name: '3. Rapid Scale Deployment', description: 'High-performance pre-engineered luxury layout architecture designed for rapid market testing and lean launches.' },
    ],
    process: [
      { step: '01', name: 'Architectural Audit', description: 'Deconstruct catalog taxonomy, historical order matrices, and third-party app dependencies.' },
      { step: '02', name: 'Haute UX/UI Engineering', description: 'High-fashion editorial layout design following the Patternwork design system.' },
      { step: '03', name: 'Theme & API Development', description: 'Zero-layout-shift Liquid & React headless component assembly with strict asset budgets.' },
      { step: '04', name: 'ERP & Checkout Integration', description: 'Two-way synchronization across warehousing, logistics (Shiprocket), and payments (Razorpay).' },
      { step: '05', name: 'Launch & Stress-Testing', description: 'Pre-launch simulated traffic spikes, EOS stress testing, and real-time Core Web Vitals optimization.' },
    ],
    techStack: ['Shopify Plus', 'Hydrogen / Liquid', 'Razorpay Magic', 'Tailwind CSS', 'TypeScript'],
    relatedCaseSlugs: ['tarun-tahiliani', 'house-of-masaba'],
    relatedProductSlugs: ['lookify', 'craftify'],
    faq: [
      { question: 'Why does Growify build on Shopify rather than custom headless solutions?', answer: 'Shopify Plus provides the world\'s most dependable checkout infrastructure. We push Shopify 2.0 to headless-level visual fluidity without introducing fragile API maintenance overhead.' },
      { question: 'How do you handle multi-warehouse inventory for brands with physical boutiques?', answer: 'We build direct bi-directional synchronization middleware reconciling factory production, retail stores, and online inventory to prevent over-selling.' },
      { question: 'Can you migrate legacy Magento stores without losing historical SEO?', answer: 'Yes. Our rigorous 301 URL redirection architecture and canonical mapping ensure zero loss in organic search equity.' },
    ],
  },

  'performance-marketing': {
    slug: 'performance-marketing',
    title: 'Performance Marketing & Paid Acquisition',
    pillar: 'Capture',
    shortSummary: 'Closed-loop, high-AOV customer acquisition across Meta and Google, capturing high-intent luxury buyers without discounting.',
    headline: 'Paid Acquisition for High-Ticket Fashion & Luxury',
    description: 'We do not run commoditized ad campaigns. We construct algorithmic acquisition engines that identify high-net-worth buyers in India, the US, and the Gulf, scaling profitable customer volume.',
    capabilities: [
      'Meta Precision Prospecting (Conversion & Click-to-WhatsApp)',
      'Google High-Intent Search, Shopping & Performance Max Campaigns',
      'Dynamic Regional Budget Reallocation by Territory (US, UAE, India)',
      'High-AOV Creative Strategy & Luxury Brand Narrative Ads',
      'First-Party Server-Side Attribution & CAPI Integration',
      'End-of-Season (EOS) Sale Surge Execution Playbooks',
    ],
    process: [
      { step: '01', name: 'Audience Signal Mapping', description: 'Segment high-net-worth diaspora clusters in North America, GCC, and metro India.' },
      { step: '02', name: 'Couture Creative Production', description: 'Dynamic asset testing featuring runway footage, styling tutorials, and editorial lookbooks.' },
      { step: '03', name: 'Funnel Bifurcation', description: 'Route high-ticket couture to WhatsApp assisted-selling while driving ready-to-wear directly to checkout.' },
      { step: '04', name: 'Algorithmic Optimization', description: 'Daily margin and ROAS monitoring with automated day-parting and bid adjustments.' },
    ],
    techStack: ['Meta Ads Manager (Managed Agency)', 'Google Premier Partner', 'CAPI Gateway'],
    relatedCaseSlugs: ['mahima-mahajan', 'tarun-tahiliani'],
    relatedProductSlugs: ['rossify'],
    faq: [
      { question: 'How do you acquire luxury buyers without relying on discount sales?', answer: 'We sell exclusivity, artisanal craftsmanship, and time-sensitive couture availability rather than percentage discounts.' },
      { question: 'What is Growify\'s status with Meta?', answer: 'Growify is an officially recognized Meta Managed Agency Partner, granting our clients priority technical routing and beta ad capabilities.' },
    ],
  },

  'whatsapp-and-email-retention': {
    slug: 'whatsapp-and-email-retention',
    title: 'Push Marketing & WhatsApp Lifecycle',
    pillar: 'Activate',
    shortSummary: 'Personalized customer nurturing across WhatsApp Business API and email automation, turning single purchases into multi-year brand loyalty.',
    headline: 'Retention & Conversational Lifecycle Engines',
    description: 'In Indian luxury and global NRI commerce, customer communication happens on WhatsApp. We engineer conversational shopping journeys, abandoned cart recovery, and VIP loyalty retention.',
    capabilities: [
      'Automated WhatsApp Conversational Shopping Journeys',
      'Klaviyo High-AOV Email Segmentation & Flow Engineering',
      'Cash-on-Delivery (COD) Order Verification & Prepaid Conversion',
      'Post-Purchase Delivery Milestones & Styling Follow-ups',
      'RFM Customer Segmentation (Recency, Frequency, Monetary)',
    ],
    process: [
      { step: '01', name: 'Data Pipeline Setup', description: 'Integrate Shopify events with WhatsApp Business API and Klaviyo.' },
      { step: '02', name: 'Behavioral Flow Architecture', description: 'Trigger personalized messaging on browse abandonment, cart drops, and delivery updates.' },
      { step: '03', name: 'COD Risk Mitigation', description: 'Incentivize prepaid transitions via instant UPI payment links on WhatsApp.' },
    ],
    techStack: ['LimeChat', 'QuickReply.ai', 'Klaviyo', 'WhatsApp Cloud API'],
    relatedCaseSlugs: ['house-of-masaba', 'mahima-mahajan'],
    relatedProductSlugs: ['lookify'],
    faq: [
      { question: 'Why is WhatsApp marketing critical for Indian fashion brands?', answer: 'WhatsApp delivers 90%+ open rates compared to 20% on email, providing the direct personal touch luxury shoppers expect.' },
      { question: 'How do you prevent WhatsApp messages from being marked as spam?', answer: 'We enforce hyper-targeted RFM segmentation, sending conversational messages only when triggered by explicit buyer behavior.' },
    ],
  },

  'sales-and-conversion-support': {
    slug: 'sales-and-conversion-support',
    title: 'Assisted Selling & Concierge Sales Desk',
    pillar: 'Lead',
    shortSummary: 'Dedicated 18+ hour international sales concierge handling high-AOV bridal and couture queries across time zones with the intent of closing.',
    headline: 'Human-Led Assisted Selling for High-AOV Couture',
    description: 'High-ticket garments are rarely bought through self-checkout. We deploy specialized, deeply trained fashion stylists and sales operators who manage live WhatsApp consultations.',
    capabilities: [
      '18+ Hour Daily Multi-Timezone Coverage (US, UK, UAE, India)',
      'Custom Measurement & Bridal Fitting Consultations via Chat',
      'Assisted Checkout via Razorpay Custom Payment Links',
      'In-Store Physical Boutique Lead Handover Protocols',
      'Catalog Curation & Video Walkthrough Consultations',
    ],
    process: [
      { step: '01', name: 'Product Mastery Training', description: 'Our desk is educated directly on client fabrics, sizing charts, and customization possibilities.' },
      { step: '02', name: 'Instant Inbound Routing', description: 'Visitors clicking "Chat with Stylist" are immediately connected with an experienced luxury advisor.' },
      { step: '03', name: 'Closing & Fulfillment', description: 'Generate bespoke payment links and coordinate dispatch directly with factory merchandisers.' },
    ],
    techStack: ['Kommo CRM', 'WhatsApp Multi-Agent Desk', 'Razorpay Payment Links'],
    relatedCaseSlugs: ['mahima-mahajan', 'tarun-tahiliani'],
    relatedProductSlugs: ['lookify', 'rossify'],
    faq: [
      { question: 'How does your sales desk differ from ordinary customer support?', answer: 'Ordinary support answers order tracking questions. Our desk is staffed by fashion merchandisers whose sole objective is assisted revenue closing.' },
    ],
  },

  'seo-content-and-social': {
    slug: 'seo-content-and-social',
    title: 'Organic Search & Brand Storytelling',
    pillar: 'Establish',
    shortSummary: 'High-intent organic search discovery, editorial luxury storytelling, and technical indexing architecture built for long-term compound growth.',
    headline: 'Organic Discovery & Brand Search Dominance',
    description: 'We position luxury fashion brands at the top of organic search for non-branded, high-intent discovery queries while maintaining brand prestige and editorial integrity.',
    capabilities: [
      'Luxury Fashion & Jewellery High-Intent Keyword Architecture',
      'Couture Catalog Semantic IA & Faceted Navigation Search',
      'Core Web Vitals & Sub-Second Mobile Performance Optimization',
      'Editorial Lookbook Optimization & Rich Image Schema Markup',
      'Brand Recall & Social Media Aspiration Building',
    ],
    process: [
      { step: '01', name: 'Semantic Mapping', description: 'Structure category URLs around buyer intent (e.g., "Designer bridal lehengas").' },
      { step: '02', name: 'Technical Schema Injection', description: 'Implement Organization, Product, and Article microdata.' },
      { step: '03', name: 'Editorial Content Authority', description: 'Publish high-depth guides establishing provenance and styling authority.' },
    ],
    techStack: ['Google Search Console', 'Next.js App Router', 'Schema.org JSON-LD'],
    relatedCaseSlugs: ['tarun-tahiliani'],
    relatedProductSlugs: ['craftify'],
    faq: [
      { question: 'How quickly does SEO deliver revenue impact for luxury brands?', answer: 'Technical fixes yield indexing gains within 4-8 weeks; compounding editorial authority matures over 6-12 months.' },
    ],
  },

  'data-ai-and-automation': {
    slug: 'data-ai-and-automation',
    title: 'Data Intelligence & AI Workflows',
    pillar: 'Intelligence',
    shortSummary: 'Custom executive reporting, cross-channel attribution, and proprietary generative AI pipelines that protect operating margins.',
    headline: 'Data Intelligence & AI Automation for E-Commerce',
    description: 'We eliminate manual spreadsheets. We engineer unified BI dashboards, inventory replenishment forecasting, and AI-driven content generation pipelines.',
    capabilities: [
      'Custom Executive GMV, ROAS & Margin Dashboards',
      'First-Party Multi-Touch Attribution Modeling',
      'Ready-to-Ship (RTS) Inventory Forecasting Models',
      'Automated Multi-Channel Order Anomaly Detection',
      'Generative AI Product Description & Visual Asset Workflows',
    ],
    process: [
      { step: '01', name: 'Data Pipeline Unification', description: 'Connect Shopify, Meta, Google, WhatsApp, and warehouse databases into one model.' },
      { step: '02', name: 'Predictive Modeling', description: 'Forecast peak sale inventory requirements and flag RTO risks.' },
      { step: '03', name: 'Automated Reporting', description: 'Deliver daily automated P&L and channel health briefs to leadership.' },
    ],
    techStack: ['Looker / Supabase', 'PostgreSQL', 'Custom AI Transformers'],
    relatedCaseSlugs: ['mahima-mahajan'],
    relatedProductSlugs: ['rossify'],
    faq: [
      { question: 'How does AI help protect brand profitability?', answer: 'By predicting regional demand clusters, eliminating dead inventory, and routing high-risk COD orders through automated prepayment verification.' },
    ],
  },
};
