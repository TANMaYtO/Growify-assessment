export type PartnerBadge = 'Official Partner' | 'Platform Integration' | 'Technology We Use' | 'To Confirm';

export interface PartnerEntity {
  name: string;
  category: 'Commerce Platform' | 'Paid Acquisition' | 'Conversational Commerce' | 'Lifecycle Marketing' | 'Payments & Checkout' | 'Logistics & Infrastructure' | 'CRM & Customer Operations';
  badge: PartnerBadge;
  description: string;
  customerValue: string;
  website: string;
}

export const partners: PartnerEntity[] = [
  {
    name: 'Shopify Plus',
    category: 'Commerce Platform',
    badge: 'Official Partner',
    description: 'The world\'s leading enterprise commerce platform for high-growth luxury brands.',
    customerValue: 'Deeply customizable storefronts, multi-market international currency routing, and 99.99% uptime during high-traffic sale events.',
    website: 'https://www.shopify.com/plus',
  },
  {
    name: 'Meta',
    category: 'Paid Acquisition',
    badge: 'Official Partner',
    description: 'Growify is an officially recognized Meta Managed Agency Partner.',
    customerValue: 'Priority access to alpha advertising products, direct technical resolution for ad accounts, and advanced server-side CAPI tracking for high-AOV fashion buyers.',
    website: 'https://www.facebook.com/business',
  },
  {
    name: 'Google',
    category: 'Paid Acquisition',
    badge: 'Official Partner',
    description: 'Certified Google Premier Partner agency.',
    customerValue: 'Full-funnel intent capture across Google Shopping, High-Intent Search, and Performance Max campaigns, capturing luxury shoppers at decision time.',
    website: 'https://ads.google.com',
  },
  {
    name: 'LimeChat',
    category: 'Conversational Commerce',
    badge: 'Platform Integration',
    description: 'AI-powered WhatsApp conversational shopping assistant and customer support platform.',
    customerValue: 'Replicates in-store stylist interactions on WhatsApp, providing personalized garment recommendations and handling catalog discovery autonomously 24/7.',
    website: 'https://limechat.ai',
  },
  {
    name: 'QuickReply.ai',
    category: 'Lifecycle Marketing',
    badge: 'Platform Integration',
    description: 'Dedicated WhatsApp marketing automation and COD risk-mitigation platform for D2C brands.',
    customerValue: 'Drives repeat purchases via 90%+ open-rate WhatsApp messaging, automated abandoned cart recovery, and interactive COD-to-prepaid conversion.',
    website: 'https://quickreply.ai',
  },
  {
    name: 'Razorpay',
    category: 'Payments & Checkout',
    badge: 'Official Partner',
    description: 'India\'s leading payment gateway and checkout technology infrastructure.',
    customerValue: 'Accelerates conversions with Razorpay Magic 1-click checkout, instant UPI intent routing, dynamic COD fraud risk scoring, and international currency acceptance.',
    website: 'https://razorpay.com',
  },
  {
    name: 'Klaviyo',
    category: 'Lifecycle Marketing',
    badge: 'Technology We Use',
    description: 'Enterprise email and customer data platform.',
    customerValue: 'High-touch email flows tailored for luxury clients: VIP tiers, replenishment reminders, and editorial collection debuts with granular attribution.',
    website: 'https://www.klaviyo.com',
  },
  {
    name: 'Kommo',
    category: 'CRM & Customer Operations',
    badge: 'Technology We Use',
    description: 'Messenger-first sales management and CRM platform.',
    customerValue: 'Powers Growify\'s 18+ hour assisted sales desk, tracking every incoming WhatsApp inquiry from initial stylist consultation to payment link closure.',
    website: 'https://www.kommo.com',
  },
  {
    name: 'Shiprocket',
    category: 'Logistics & Infrastructure',
    badge: 'Technology We Use',
    description: 'Automated e-commerce shipping and multi-courier fulfillment network.',
    customerValue: 'Multi-warehouse domestic and cross-border express shipping synchronization, automated tracking SMS/WhatsApp notifications, and rapid dispatch.',
    website: 'https://www.shiprocket.in',
  },
];
