'use client';

import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/content/navigation';
import { useReview } from '../review/ReviewContext';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const { reviewMode, toggleReviewMode, trackEvent } = useReview();

  return (
    <footer className="bg-[#0E0D0C] text-[#FAF8F5] border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Manifesto Band */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#9E7D47]">
              The Growify Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
              We grow when you grow.
            </h2>
            <p className="text-stone-400 text-sm max-w-lg leading-relaxed">
              An integrated commerce, growth, and proprietary AI technology company. We build digital flagships, run precision acquisition engines, and operate international assisted-selling desks for India’s premier luxury fashion and jewellery houses.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-4 pt-4 lg:pt-0">
            <Link
              href="/contact"
              onClick={() => trackEvent('cta_click', { cta_id: 'footer_audit', location: 'footer' })}
              className="px-6 py-3.5 bg-white hover:bg-[#9E7D47] text-[#0E0D0C] hover:text-white text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded text-center inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/life-at-growify"
              onClick={() => trackEvent('cta_click', { cta_id: 'footer_office_tour', location: 'footer' })}
              className="px-6 py-3.5 bg-[#161514] hover:bg-[#1E1C1A] text-white border border-white/10 text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded text-center"
            >
              Tour Chhattarpur Studio
            </Link>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D47] block mb-4">
              Services (S.C.A.L.E.)
            </span>
            <ul className="space-y-2.5">
              {footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D47] block mb-4">
              Technology & IP
            </span>
            <ul className="space-y-2.5">
              {footerLinks.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D47] block mb-4">
              Company & Work
            </span>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D47] block mb-4">
              Governance & Policies
            </span>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={toggleReviewMode}
                className="flex items-center gap-1.5 text-[#9E7D47] hover:text-[#B89758] font-mono text-[11px]"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Toggle Review Mode: {reviewMode ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D47] block mb-4">
              Studio & Contact
            </span>
            <p className="text-stone-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <span>D-112, 60 Feet Road, Chhattarpur Enclave, New Delhi 110074</span>
            </p>
            <p className="text-stone-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-stone-500 shrink-0" />
              <a href="mailto:info@growify.in" className="hover:text-white">info@growify.in</a>
            </p>
            <p className="text-stone-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-stone-500 shrink-0" />
              <span>+91 88004 61296</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Growify Digital LLP. All rights reserved. Registered in New Delhi, India.</p>
          <div className="flex items-center gap-6">
            {footerLinks.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
