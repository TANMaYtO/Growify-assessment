export interface MetricPoint {
  label: string;
  value: string;
  definition: string;
  period: string;
  source: string;
  status: 'verified' | 'supplied' | 'pending-validation';
}

export interface CaseStudy {
  slug: string;
  brand: string;
  tagline: string;
  category: 'Couture Fashion' | 'Contemporary Luxury' | 'Fine Jewellery' | 'Lifestyle';
  heroMetric: string;
  heroMetricLabel: string;
  status: 'published' | 'pending-validation';
  overview: string;
  challenge: string;
  approach: { phase: string; title: string; description: string }[];
  scope: string[];
  metrics: MetricPoint[];
  techStack: string[];
  relatedServices: string[];
  nextCaseSlug: string;
  image: string;
}

export interface PipelineItem {
  id: string;
  theme: string;
  candidateBrand: string;
  status: string;
  dataRequirements: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  'tarun-tahiliani': {
    slug: 'tarun-tahiliani',
    brand: 'Tarun Tahiliani',
    tagline: 'Magento to Shopify Flagship Migration & Sale Scaling',
    category: 'Couture Fashion',
    heroMetric: '200%+',
    heroMetricLabel: 'EOS Sale Revenue Expansion',
    status: 'published',
    image: '/images/case-studies/tarun-tahiliani.jpg',
    overview: 'Tarun Tahiliani is one of India\'s most celebrated couturiers, with over three decades defining Indian bridal and luxury fashion. Growify engineered their complete transition from legacy Magento to a custom Shopify Plus flagship.',
    challenge: 'The legacy storefront suffered from severe catalog checkout friction, an inability to withstand high-volume seasonal sale surges, and complex inventory fragmentation across multiple physical boutiques and central workshops.',
    approach: [
      { phase: 'Phase 01', title: 'Data Migration & UX Engineering', description: 'Complete zero-loss transfer of historical customer, order, and catalog databases from Magento to Shopify Plus with custom editorial UX.' },
      { phase: 'Phase 02', title: 'Inventory & Multi-Warehouse Sync', description: 'Two-way integration linking boutique stock, workshop inventory, and digital storefront availability.' },
      { phase: 'Phase 03', title: 'Sale Acceleration & Global Reach', description: 'Sale-specific End-of-Season (EOS) performance campaigns paired with localized international currency and checkout routing.' },
    ],
    scope: ['Shopify Plus Migration', 'Custom Theme Engineering', 'ERP Inventory Middleware', 'Meta & Google Performance', 'Sale-Time Cloud Scaling'],
    metrics: [
      {
        label: 'EOS Sale Growth',
        value: '200%+',
        definition: 'Net sales volume expansion during major End-of-Season sales',
        period: 'Historical Sale Windows (2021-2023)',
        source: 'Growify Public Case Study (growify.in/blogs/case-studies/tarun-tahiliani)',
        status: 'verified',
      },
      {
        label: 'Ad Spend Optimization',
        value: '50% Budget Increase for 200%+ Revenue',
        definition: 'Efficiency multiplier on incremental marketing capital',
        period: 'Seasonal Campaign Execution',
        source: 'Growify Public Case Study',
        status: 'verified',
      },
      {
        label: 'Single-Month Peak Multiplier',
        value: '4x Baseline',
        definition: 'Peak sales month revenue compared to standard monthly baseline',
        period: 'January 2023',
        source: 'Growify Public Case Study',
        status: 'verified',
      },
    ],
    techStack: ['Shopify Plus', 'Meta CAPI', 'Google Shopping', 'Multi-Warehouse ERP'],
    relatedServices: ['shopify-development', 'performance-marketing', 'sales-and-conversion-support'],
    nextCaseSlug: 'mahima-mahajan',
  },

  'mahima-mahajan': {
    slug: 'mahima-mahajan',
    brand: 'Mahima Mahajan',
    tagline: 'Engineering a Globally Scalable Couture Business',
    category: 'Contemporary Luxury',
    heroMetric: '2.54x',
    heroMetricLabel: 'Average Order Value Increase',
    status: 'published',
    image: '/images/case-studies/mahima-mahajan.jpg',
    overview: 'Growify built the systems, teams, and international growth engine allowing Mahima Mahajan to scale profitably across borders into the United States and the Middle East.',
    challenge: 'Scaling digital revenue consistently while expanding into high-ticket international markets, maintaining luxury fulfillment speed, and safeguarding brand profitability without discounting.',
    approach: [
      { phase: 'Phase 01', title: 'International Territory Routing', description: 'Region-specific campaigns and localized product assortments tailored to US and Gulf diaspora buyer behaviors.' },
      { phase: 'Phase 02', title: 'Merchandising & RTS Alignment', description: 'Predictable inventory modeling with a dedicated factory merchandiser streamlining order processing.' },
      { phase: 'Phase 03', title: '18+ Hr Sales Concierge Desk', description: 'Multi-timezone WhatsApp sales operators trained to guide high-ticket bridal and festive buyers.' },
      { phase: 'Phase 04', title: 'Dynamic Attribution Infrastructure', description: 'Custom dashboard tracking regional sales, spend returns, and automated geographic budget reallocation.' },
    ],
    scope: ['Shopify Global Storefronts', 'Meta US/GCC Campaigns', 'WhatsApp Assisted Selling', 'Factory Merchandising Workflows', 'Custom Performance Dashboards'],
    metrics: [
      {
        label: 'AOV Growth',
        value: '2.54x',
        definition: 'Increase in Average Order Value across combined domestic and international transactions',
        period: '2021 to 2025',
        source: 'Growify Growth Deck Slide 17',
        status: 'supplied',
      },
      {
        label: 'Annual YoY Sales Growth',
        value: '178% / 224% / 202% / 60%',
        definition: 'Year-over-year annual digital sales expansion reported in Growth Deck',
        period: '2021, 2022, 2023, 2024',
        source: 'Growify Growth Deck Slide 17 Bar Chart',
        status: 'supplied',
      },
      {
        label: 'International Revenue Share',
        value: 'Pending Reconciliation',
        definition: 'Deck states 251% of total online revenue; mathematically impossible as a share, flagged for clarification',
        period: '2021-2025 Average',
        source: 'Growify Growth Deck Slide 17',
        status: 'pending-validation',
      },
    ],
    techStack: ['Shopify Multi-Currency', 'Meta International Ads', 'Kommo CRM', 'Razorpay Multi-Currency'],
    relatedServices: ['performance-marketing', 'sales-and-conversion-support', 'data-ai-and-automation'],
    nextCaseSlug: 'house-of-masaba',
  },

  'house-of-masaba': {
    slug: 'house-of-masaba',
    brand: 'House of Masaba',
    tagline: 'Shopify 2.0 Redesign & High-Velocity Merchandising',
    category: 'Contemporary Luxury',
    heroMetric: '75%',
    heroMetricLabel: 'Total Brand Revenue Expansion',
    status: 'published',
    image: '/images/case-studies/house-of-masaba.jpg',
    overview: 'House of Masaba is one of India\'s most recognizable lifestyle and designer fashion brands. Growify partnered to transition the storefront to Shopify 2.0 and run full-funnel acquisition.',
    challenge: 'High cart drop-off during flash capsule drops, complex Cash-on-Delivery verification logistics across Tier-2/Tier-3 India, and rising customer acquisition costs.',
    approach: [
      { phase: 'Phase 01', title: 'Shopify 2.0 Upgrade & Gamification', description: 'Modular theme architecture featuring dynamic lookbooks, ready-to-ship filters, spin-the-wheel rewards, and loyalty tiers.' },
      { phase: 'Phase 02', title: 'Automated COD Conversion Funnel', description: 'Instant WhatsApp interactive buttons incentivizing customers to prepay COD orders for an upfront discount.' },
      { phase: 'Phase 03', title: 'Omnichannel Push Retargeting', description: 'Cross-channel remarketing across Facebook catalog ads, Instagram feeds, and automated Klaviyo sequences.' },
    ],
    scope: ['Shopify 2.0 Custom Theme', 'WhatsApp COD Conversion', 'Meta Catalog Ads', 'Klaviyo Email Flows', 'Geo-Currency Detection'],
    metrics: [
      {
        label: 'Enterprise Scaling',
        value: '75%',
        definition: 'Expansion in total brand digital revenue achieved alongside a 4x marketing spend scale',
        period: '18-Month Engagement',
        source: 'Growify Public Case Study (growify.in/blogs/case-studies/house-of-masaba)',
        status: 'verified',
      },
      {
        label: 'YoY Growth 2021',
        value: '69.8%',
        definition: 'Year-over-year revenue expansion in year one',
        period: 'FY 2021',
        source: 'Growify Public Case Study',
        status: 'verified',
      },
      {
        label: 'YoY Growth 2022',
        value: '70.2%',
        definition: 'Sustained year-over-year revenue growth in year two',
        period: 'FY 2022',
        source: 'Growify Public Case Study',
        status: 'verified',
      },
    ],
    techStack: ['Shopify 2.0', 'LimeChat', 'QuickReply.ai', 'Klaviyo', 'Meta Catalog'],
    relatedServices: ['shopify-development', 'whatsapp-and-email-retention', 'performance-marketing'],
    nextCaseSlug: 'tarun-tahiliani',
  },
};

export const pipelineCaseStudies: PipelineItem[] = [
  {
    id: 'pipe-01',
    theme: 'Search-Friendly Couture Architecture',
    candidateBrand: 'Gaurav Gupta',
    status: 'Public Case Study Available',
    dataRequirements: ['Organic session deltas before/after', 'Indexation coverage for gown catalog', 'Non-brand luxury query rankings'],
  },
  {
    id: 'pipe-02',
    theme: '7-Year Compounding Growth & Omnichannel Store Launch',
    candidateBrand: 'Ridhi Mehra',
    status: 'Public Case Study Available',
    dataRequirements: ['7-year cumulative GMV timeline', 'Hyderabad physical boutique revenue contribution from web leads', 'WhatsApp sales conversion rate'],
  },
  {
    id: 'pipe-03',
    theme: 'Sustainable Margins & High Repeat LTV Loyalty',
    candidateBrand: 'Drzya by Ridhiee Suuri',
    status: 'Public Case Study Available',
    dataRequirements: ['Repeat order contribution % (deck states 45-55%)', 'AOV increase metrics', 'Zoho CRM to Google Ads attribution proof'],
  },
  {
    id: 'pipe-04',
    theme: 'WhatsApp Lifecycle Automation & COD-to-Prepaid Conversion',
    candidateBrand: 'Baise Gaba',
    status: 'Candidate Hypothesis',
    dataRequirements: ['COD RTO reduction percentage', 'WhatsApp flow revenue attribution', 'Average customer return rate changes'],
  },
  {
    id: 'pipe-05',
    theme: 'High-AOV Jewellery Multi-Touch Attribution',
    candidateBrand: 'Hazoorilal Legacy / Anmol Jewellers',
    status: 'Named in Brief Scope',
    dataRequirements: ['Multi-touch attribution model specification', 'Offline store appointment booking conversion rates', 'Average jewellery ticket size'],
  },
  {
    id: 'pipe-06',
    theme: 'AI Virtual Try-On Conversion & Return Mitigation',
    candidateBrand: 'Lookify Pilot Merchant',
    status: 'Internal Product Case',
    dataRequirements: ['Try-on session to Add-to-Cart conversion lift', 'Apparel sizing return rate deltas', 'Customer photo submission completion rate'],
  },
  {
    id: 'pipe-07',
    theme: 'AI Workflow Automation & Operating Cost Reduction',
    candidateBrand: 'Growify Internal Operations',
    status: 'Operational Case Study',
    dataRequirements: ['Hours saved per client monthly reporting cycle', 'Generative asset turnaround speed', 'Attribution accuracy improvement'],
  },
  {
    id: 'pipe-08',
    theme: 'Cross-Border Luxury Duties & International D2C Scale',
    candidateBrand: 'Aisha Rao / Torani',
    status: 'Named in Brief Portfolio',
    dataRequirements: ['International vs domestic revenue split', 'Landed cost duty calculator conversion lift', 'Currency-localized conversion benchmarks'],
  },
];
