export type FactStatus = 'verified' | 'supplied' | 'pending-validation' | 'placeholder';

export interface Fact {
  id: string;
  statement: string;
  value: string;
  status: FactStatus;
  source: string;
  sourceDate: string;
  category: 'credential' | 'metric' | 'scale' | 'partner' | 'product';
  notes?: string;
}

export const facts: Record<string, Fact> = {
  // Credentials & Foundation
  'founding-year': {
    id: 'founding-year',
    statement: 'Growify Digital LLP Founded Year',
    value: '2019',
    status: 'verified',
    source: 'Growify About Page & Legal Registration',
    sourceDate: '2019-01-01',
    category: 'credential',
  },
  'location-chhattarpur': {
    id: 'location-chhattarpur',
    statement: 'Headquarters Studio Location',
    value: '7,000 sq ft Studio in Chhattarpur, New Delhi',
    status: 'verified',
    source: 'Growify About Page (growify.in/pages/about)',
    sourceDate: '2026-10-19',
    category: 'credential',
  },
  'brands-helped': {
    id: 'brands-helped',
    statement: 'Luxury and Fashion Brands Accelerated',
    value: '421+',
    status: 'verified',
    source: 'Growify About Page (growify.in/pages/about)',
    sourceDate: '2026-10-19',
    category: 'scale',
    notes: 'Growth Deck states 500+ websites delivered; both reflect verified scale tiers.',
  },
  'websites-delivered': {
    id: 'websites-delivered',
    statement: 'Digital Flagship Stores Built & Deployed',
    value: '500+',
    status: 'supplied',
    source: 'Growify Growth Deck Slide 12',
    sourceDate: '2026-10-19',
    category: 'scale',
  },
  'meta-agency-partner': {
    id: 'meta-agency-partner',
    statement: 'Meta Official Managed Agency Partner',
    value: 'Meta Managed Agency',
    status: 'verified',
    source: 'Indian Television Trade Press & Growify About Page',
    sourceDate: '2023-05-24',
    category: 'partner',
    notes: 'Published strategic agency partnership announcement.',
  },
  'shopify-plus-partner': {
    id: 'shopify-plus-partner',
    statement: 'Shopify Plus Official Ecosystem Partner',
    value: 'Shopify Plus Partner',
    status: 'verified',
    source: 'Growify About Page & Tech Page',
    sourceDate: '2026-10-19',
    category: 'partner',
  },
  'google-partner': {
    id: 'google-partner',
    statement: 'Google Certified Agency Partner',
    value: 'Google Premier Partner',
    status: 'verified',
    source: 'Growify About Page',
    sourceDate: '2026-10-19',
    category: 'partner',
  },

  // Case Studies Proof Metrics
  'tt-eos-growth': {
    id: 'tt-eos-growth',
    statement: 'Tarun Tahiliani EOS Sale Revenue Uplift',
    value: '200%+',
    status: 'verified',
    source: 'Growify Public Case Study (growify.in/blogs/case-studies/tarun-tahiliani)',
    sourceDate: '2026-10-19',
    category: 'metric',
    notes: 'Scale achieved on a 50% marketing budget optimization.',
  },
  'tt-peak-sales': {
    id: 'tt-peak-sales',
    statement: 'Tarun Tahiliani Peak Single-Month Revenue Multiple',
    value: '4x Average',
    status: 'verified',
    source: 'Growify Public Case Study (growify.in/blogs/case-studies/tarun-tahiliani)',
    sourceDate: '2023-01-31',
    category: 'metric',
  },
  'mm-aov-growth': {
    id: 'mm-aov-growth',
    statement: 'Mahima Mahajan Average Order Value Increase',
    value: '2.54x Increase',
    status: 'supplied',
    source: 'Growify Growth Deck Slide 17',
    sourceDate: '2026-10-19',
    category: 'metric',
    notes: 'Measured over 2021 to 2025 expansion in US and Gulf territories.',
  },
  'mm-yoy-sales': {
    id: 'mm-yoy-sales',
    statement: 'Mahima Mahajan Annual YoY Growth Trajectory',
    value: '178% (21) · 224% (22) · 202% (23) · 60% (24)',
    status: 'supplied',
    source: 'Growify Growth Deck Slide 17 Bar Chart',
    sourceDate: '2026-10-19',
    category: 'metric',
    notes: 'Individually reported annual growth bars from source chart.',
  },
  'mm-intl-growth-unverified': {
    id: 'mm-intl-growth-unverified',
    statement: 'Mahima Mahajan International Share / Growth Arithmetic',
    value: 'Pending Reconciliation',
    status: 'pending-validation',
    source: 'Growify Growth Deck Slide 17 ("251% contribution")',
    sourceDate: '2026-10-19',
    category: 'metric',
    notes: 'Flagged by audit: revenue contribution cannot exceed 100%. Held back until account team clarifies if metric represents YoY growth rate or 25.1%.',
  },
  'masaba-scale-impact': {
    id: 'masaba-scale-impact',
    statement: 'House of Masaba Digital Revenue Scaling',
    value: '75% Growth',
    status: 'verified',
    source: 'Growify Public Case Study (growify.in/blogs/case-studies/house-of-masaba)',
    sourceDate: '2026-10-19',
    category: 'metric',
    notes: 'Achieved through Shopify 2.0 migration and multi-channel push marketing.',
  },

  // Products
  'lookify-vto-domain': {
    id: 'lookify-vto-domain',
    statement: 'Lookify Official Website & App Status',
    value: 'lookify.ai / Shopify App Store Live',
    status: 'verified',
    source: 'Shopify App Store & Growify Privacy Policy (growify.in/pages/privacy-policy)',
    sourceDate: '2026-10-19',
    category: 'product',
  },
  'rossify-status': {
    id: 'rossify-status',
    statement: 'Rossify Attribution Engine Release Status',
    value: 'Enterprise Private Beta',
    status: 'placeholder',
    source: 'Assignment Brief Task 06 Specification',
    sourceDate: '2026-10-19',
    category: 'product',
    notes: 'Proprietary ROAS attribution engine. Public feature set pending formal sign-off.',
  },
  'craftify-status': {
    id: 'craftify-status',
    statement: 'Craftify Couture Theme Framework Status',
    value: 'Internal Design System',
    status: 'placeholder',
    source: 'Assignment Brief Task 06 Specification',
    sourceDate: '2026-10-19',
    category: 'product',
    notes: 'Luxury Shopify component architecture. Specifications staged in Review Mode.',
  },
};

// Re-export domain models for centralized access
export * from './services';
export * from './caseStudies';
export * from './partners';
export * from './navigation';
export * from './industries';
export * from './articles';



