/**
 * Interface representing a luxury commerce industry vertical.
 */
export interface IndustryVertical {
  slug: string;
  name: string;
  shortSummary: string;
  headline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  keyMetrics: { label: string; value: string; context: string }[];
  featuredBrands: string[];
  recommendedServices: string[];
  recommendedTech: string[];
}

export const industries: Record<string, IndustryVertical> = {
  'luxury-fashion': {
    slug: 'luxury-fashion',
    name: 'Luxury Fashion & Couture',
    shortSummary:
      'Digital flagships and assisted-selling engines for haute couture, bridal designer labels, and luxury festive wear.',
    headline: 'Engineering Digital Flagships for Haute Couture & Bridal Houses',
    description:
      'Luxury couture operates on emotion, artisanal craftsmanship, and high-ticket considerations. We engineer digital flagships that honor brand prestige while solving bespoke sizing, international currency localization, and 18+ hour assisted sales closing on WhatsApp.',
    challenges: [
      'Hesitation to purchase high-ticket bridal wear (₹50,000 – ₹5,00,000+) online without in-person styling',
      'Fragmented inventory between boutique showrooms, central production workshops, and online storefronts',
      'High-AOV international diaspora buyers (US, UK, GCC) struggling with duty calculations and shipping timelines',
      'End-of-Season (EOS) flash traffic surges causing website crashes on unoptimized themes',
    ],
    solutions: [
      'Custom Shopify Plus Online Store 2.0 theme engineering with sub-second mobile page loads',
      '18+ hour international assisted sales concierge desk handling direct WhatsApp custom sizing consultations',
      'Lookify AI Virtual Try-On integration allowing brides to visualize silhouettes on their exact proportions',
      'Real-time bi-directional ERP inventory sync reconciling factory cut-sheets with boutique floor stock',
    ],
    keyMetrics: [
      { label: 'EOS Sale Scaling', value: '200%+', context: 'Tarun Tahiliani sale revenue expansion' },
      { label: 'AOV Increase', value: '2.54x', context: 'Mahima Mahajan cross-border expansion' },
      { label: 'Core Web Vitals', value: '< 1.2s', context: '95th percentile mobile first contentful paint' },
    ],
    featuredBrands: ['Tarun Tahiliani', 'Mahima Mahajan', 'Gaurav Gupta', 'Ridhi Mehra'],
    recommendedServices: ['shopify-development', 'performance-marketing', 'sales-and-conversion-support'],
    recommendedTech: ['Shopify Plus', 'Lookify VTO', 'Kommo CRM', 'Razorpay Multi-Currency'],
  },

  'fine-jewellery': {
    slug: 'fine-jewellery',
    name: 'Fine Jewellery & Gemstones',
    shortSummary:
      'High-security, high-trust digital storefronts and private clienteling systems for fine jewellery houses.',
    headline: 'High-Trust Commerce Systems for Fine Jewellery & Precious Stones',
    description:
      'Selling diamond jewellery and 22K gold online requires extraordinary digital trust, precision insurance verification, and omnichannel salon appointment booking. We build high-security luxury flagships that seamlessly bridge online discovery with offline boutique consultations.',
    challenges: [
      'High transaction values ($1,000 – $25,000+) requiring multi-step verification and identity verification',
      'Need for photorealistic magnification of gemstone clarity, cut, and certification reports',
      'Customer preference for private showroom viewings before finalizing bridal jewellery sets',
      'Strict regulatory compliance and tamper-proof insured logistics tracking',
    ],
    solutions: [
      'Bespoke VIP Salon Appointment booking system with automated calendar sync and boutique routing',
      'Ultra-high-definition interactive zoom and 360-degree gemstone video viewers with zero layout shift',
      'Custom high-limit payment gateway routing through Razorpay enterprise split-tenders',
      'Multi-touch attribution models capturing web ad influence on in-store high-ticket purchases',
    ],
    keyMetrics: [
      { label: 'Appointment Booking Rate', value: '3.8x', context: 'Increase in qualified offline salon visits' },
      { label: 'Inquiry-to-Sale Conversion', value: '24%', context: 'Assisted WhatsApp consultation closing rate' },
      { label: 'Security & Uptime', value: '99.99%', context: 'Guaranteed checkout availability' },
    ],
    featuredBrands: ['Hazoorilal Legacy', 'Anmol Jewellers'],
    recommendedServices: ['shopify-development', 'performance-marketing', 'data-ai-and-automation'],
    recommendedTech: ['Shopify Plus', 'Razorpay Enterprise', 'Kommo CRM'],
  },

  'lifestyle-and-home': {
    slug: 'lifestyle-and-home',
    name: 'Lifestyle & Modern Home',
    shortSummary:
      'Immersive editorial lookbooks, spatial catalog architecture, and trade account portals for luxury lifestyle brands.',
    headline: 'Spatial Commerce & Editorial Storytelling for Luxury Living',
    description:
      'Contemporary lifestyle, designer tableware, and artisanal home decor demand rich visual storytelling without slowing down catalog discovery. We create immersive editorial storefronts featuring shoppable room-sets, dimensional shipping calculators, and trade designer portals.',
    challenges: [
      'Visualizing furniture and decor items in real domestic spaces',
      'Complex dimensional freight shipping calculations and fragile handling logistics',
      'Managing trade/architect wholesale discounts alongside direct-to-consumer sales',
      'Maintaining editorial brand prestige across large multi-category catalogs',
    ],
    solutions: [
      'Shoppable room-set lookbooks using Craftify Liquid components with interactive hotspots',
      'Automated pincode-level volumetric weight freight calculators integrated with Shiprocket',
      'B2B Trade Portal allowing interior designers to generate tax-exempt quotes and bulk order sheets',
      'Klaviyo lifecycle retention flows based on home renovation milestones and seasonal collection drops',
    ],
    keyMetrics: [
      { label: 'Catalog Engagement', value: '+45%', context: 'Time spent browsing shoppable editorial room-sets' },
      { label: 'Trade Order Volume', value: '2.8x', context: 'Expansion in B2B interior designer accounts' },
      { label: 'Page Weight', value: '< 600KB', context: 'Strict asset budgeting on high-res photography' },
    ],
    featuredBrands: ['House of Masaba Living', 'Contemporary Indian Design Studios'],
    recommendedServices: ['shopify-development', 'whatsapp-and-email-retention', 'seo-content-and-social'],
    recommendedTech: ['Shopify 2.0', 'Craftify', 'Klaviyo', 'Shiprocket'],
  },

  'd2c-apparel': {
    slug: 'd2c-apparel',
    name: 'High-Velocity D2C Apparel',
    shortSummary:
      'High-conversion checkout infrastructure, automated COD risk mitigation, and rapid international scaling for contemporary fashion.',
    headline: 'High-Velocity Scaling Engines for Contemporary D2C Fashion',
    description:
      'For contemporary designer apparel and fast-moving capsule collections, speed is everything. We engineer high-velocity Shopify 2.0 flagships optimized for Razorpay Magic 1-click checkout, automated Cash-on-Delivery (COD) verification on WhatsApp, and rapid international diaspora scaling.',
    challenges: [
      'High Return-to-Origin (RTO) rates on Cash-on-Delivery orders across Tier-2/Tier-3 India',
      'Mobile checkout drop-off caused by multi-step OTP logins and clunky address forms',
      'Rising Meta and Google customer acquisition costs (CAC) eroding contribution margins',
      'High return rates driven by standard size chart confusion',
    ],
    solutions: [
      'Instant COD-to-prepaid conversion funnels on WhatsApp via QuickReply.ai offering upfront discounts',
      'Razorpay Magic 1-click checkout integration pre-filling saved addresses for 100M+ Indian shoppers',
      'Lookify AI virtual try-on widget reducing sizing hesitation and apparel return rates',
      'Dynamic inventory velocity alerts via Rossify forecasting stockouts before signature drops sell out',
    ],
    keyMetrics: [
      { label: 'Revenue Growth', value: '75%', context: 'House of Masaba 18-month digital scaling' },
      { label: 'YoY Growth Year 1', value: '69.8%', context: 'FY 2021 audited expansion' },
      { label: 'YoY Growth Year 2', value: '70.2%', context: 'FY 2022 sustained expansion' },
    ],
    featuredBrands: ['House of Masaba', 'Baise Gaba', 'Drzya by Ridhiee Suuri'],
    recommendedServices: ['shopify-development', 'whatsapp-and-email-retention', 'performance-marketing'],
    recommendedTech: ['Shopify Plus', 'Razorpay Magic', 'LimeChat', 'QuickReply.ai', 'Rossify'],
  },
};
