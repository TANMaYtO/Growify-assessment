export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Overview (S.C.A.L.E.)', href: '/services', description: 'Our closed-loop growth methodology' },
      { label: 'Shopify Plus & Commerce', href: '/services/shopify-development', description: 'Bespoke luxury storefront engineering' },
      { label: 'Paid Acquisition & Meta/Google', href: '/services/performance-marketing', description: 'High-AOV customer acquisition' },
      { label: 'WhatsApp & Email Retention', href: '/services/whatsapp-and-email-retention', description: 'Automated conversational lifecycle' },
      { label: '18+ Hr Assisted Sales Desk', href: '/services/sales-and-conversion-support', description: 'Human-led couture sales closing' },
      { label: 'Organic Search & SEO', href: '/services/seo-content-and-social', description: 'Long-term organic authority' },
      { label: 'Data, AI & Automation', href: '/services/data-ai-and-automation', description: 'Attribution & margin protection' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Luxury Fashion & Couture', href: '/industries/luxury-fashion', description: 'Haute couture & bridal designer houses' },
      { label: 'Fine Jewellery', href: '/industries/fine-jewellery', description: 'High-ticket precious jewellery & gemstones' },
      { label: 'Lifestyle & Modern Home', href: '/industries/lifestyle-and-home', description: 'Contemporary interior & luxury lifestyle' },
      { label: 'D2C Apparel Brands', href: '/industries/d2c-apparel', description: 'High-velocity apparel scaling globally' },
    ],
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Technology',
    href: '/technology',
    children: [
      { label: 'Technology Hub', href: '/technology', description: 'Proprietary IP & ecosystem map' },
      { label: 'Lookify (AI Virtual Try-On)', href: '/technology/lookify', description: 'Digital fitting room & retail mirror' },
      { label: 'Rossify (Revenue Intelligence)', href: '/technology/rossify', description: 'Omnichannel attribution [Private Beta]' },
      { label: 'Craftify (Couture Architecture)', href: '/technology/craftify', description: 'Shopify component system [Private Beta]' },
      { label: 'Partners & Integrations', href: '/technology/partners', description: 'Ecosystem software matrix' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About & Leadership', href: '/about', description: 'Founders & 7,000 sq ft Chhattarpur studio' },
      { label: 'Life at Growify (Office Tour)', href: '/life-at-growify', description: 'Interactive studio walkthrough' },
      { label: 'Careers', href: '/careers', description: 'Join our multidisciplinary team' },
      { label: 'Validation Ledger', href: '/review', description: 'Public evidence & facts explorer' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
  },
];

export const footerLinks = {
  services: [
    { label: 'Shopify Plus Development', href: '/services/shopify-development' },
    { label: 'Performance Acquisition', href: '/services/performance-marketing' },
    { label: 'WhatsApp & Email Lifecycle', href: '/services/whatsapp-and-email-retention' },
    { label: 'Assisted Sales Handling', href: '/services/sales-and-conversion-support' },
    { label: 'Organic Luxury SEO', href: '/services/seo-content-and-social' },
    { label: 'AI Operations & Data', href: '/services/data-ai-and-automation' },
  ],
  products: [
    { label: 'Lookify AI Try-On', href: '/technology/lookify' },
    { label: 'Rossify Attribution', href: '/technology/rossify' },
    { label: 'Craftify Framework', href: '/technology/craftify' },
    { label: 'Partner Ecosystem', href: '/technology/partners' },
    { label: 'Growth Path Finder', href: '/growth-path' },
  ],
  company: [
    { label: 'About Growify', href: '/about' },
    { label: 'Interactive Office Tour', href: '/life-at-growify' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Editorial Insights', href: '/insights' },
    { label: 'Validation Ledger (/review)', href: '/review' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Referral Program', href: '/contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/growify-studio', handle: '@growify-studio' },
    { label: 'Instagram', href: 'https://www.instagram.com/growifydigital', handle: '@growifydigital' },
    { label: 'Behance', href: 'https://www.behance.net/growifydesign', handle: '@growifydesign' },
  ],
};
