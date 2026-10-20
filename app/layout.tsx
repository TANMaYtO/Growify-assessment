import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { ReviewProvider } from '@/components/review/ReviewContext';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { ScrollToTop } from '@/components/motion/ScrollToTop';
import { SectionNavRail } from '@/components/motion/SectionNavRail';
import { CustomCursor } from '@/components/motion/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Growify Digital | Luxury Commerce, Engineered for Growth',
  description:
    'Growify Digital LLP is the commerce and growth operating partner for premier luxury fashion, jewellery, and lifestyle houses. Shopify Plus architecture, Meta/Google performance acquisition, WhatsApp retention, and Lookify AI virtual try-on.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: 'https://growify.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://growify.in',
    title: 'Growify Digital | Luxury Commerce, Engineered for Growth',
    description:
      'We grow when you grow. Bespoke Shopify Plus development, algorithmic customer acquisition, and proprietary AI technology for luxury brands.',
    siteName: 'Growify Digital',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growify Digital LLP',
    legalName: 'Growify Digital LLP',
    url: 'https://growify.in',
    logo: 'https://growify.in/cdn/shop/files/Growify_white_logo.png',
    foundingDate: '2019',
    founders: [
      {
        '@type': 'Person',
        name: 'Rishab Mehra',
        jobTitle: 'Co-Founder',
      },
      {
        '@type': 'Person',
        name: 'Disha Bhatnagar',
        jobTitle: 'Co-Founder',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D-112, 60 Feet Road, Chhattarpur Enclave',
      addressLocality: 'New Delhi',
      postalCode: '110074',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/growify-studio',
      'https://www.instagram.com/growifydigital',
      'https://www.behance.net/growifydesign',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8800461296',
      contactType: 'customer service',
      email: 'info@growify.in',
      areaServed: ['IN', 'US', 'AE', 'GB'],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111111]">
        {/* Top Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Bespoke Editorial Custom Cursor */}
        <CustomCursor />

        {/* Section Navigation Rail */}
        <SectionNavRail />

        {/* Circular Scroll-To-Top Control */}
        <ScrollToTop />

        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#111111] text-white px-4 py-2 rounded text-xs font-mono uppercase"
        >
          Skip to main content
        </a>

        <ReviewProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ReviewProvider>
      </body>
    </html>
  );
}
