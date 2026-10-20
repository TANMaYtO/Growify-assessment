'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mainNav } from '@/content/navigation';
import { useReview } from '../review/ReviewContext';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { trackEvent } = useReview();

  const handleCtaClick = () => {
    trackEvent('cta_click', {
      cta_id: 'navbar_primary_audit',
      location: 'header',
      target: '/contact',
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D9D2C5]/80 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => trackEvent('nav_click', { target: '/' })}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] transition-colors group-hover:text-[#9E7D47]">
              GROWIFY
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#111111]/60 uppercase -mt-1">
              Digital LLP · New Delhi
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#111111]/85 hover:text-[#9E7D47] transition-colors rounded"
                    aria-expanded={activeDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => trackEvent('nav_click', { target: item.href })}
                    className="px-3 py-2 text-sm font-medium text-[#111111]/85 hover:text-[#9E7D47] transition-colors rounded"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-72 bg-[#FAF8F5] border border-[#D9D2C5] rounded shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => {
                          setActiveDropdown(null);
                          trackEvent('nav_dropdown_click', { target: sub.href });
                        }}
                        className="block px-4 py-2.5 hover:bg-[#F2EDE4] transition-colors group"
                      >
                        <span className="block text-sm font-medium text-[#111111] group-hover:text-[#9E7D47]">
                          {sub.label}
                        </span>
                        {sub.description && (
                          <span className="block text-xs text-[#111111]/60 mt-0.5">
                            {sub.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              onClick={handleCtaClick}
              className="px-5 py-2.5 bg-[#111111] hover:bg-[#9E7D47] text-white text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded shadow hover:shadow-md flex items-center gap-1.5"
            >
              <span>Book a Growth Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#9E7D47] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#D9D2C5] px-4 pt-2 pb-6 space-y-3">
          {mainNav.map((item) => (
            <div key={item.label} className="border-b border-[#D9D2C5]/50 pb-2">
              <Link
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackEvent('mobile_nav_click', { target: item.href });
                }}
                className="block text-base font-medium text-[#111111] py-1"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-3 mt-1 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        trackEvent('mobile_nav_click', { target: sub.href });
                      }}
                      className="block text-sm text-[#111111]/70 py-1 hover:text-[#9E7D47]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full text-center block px-4 py-3 bg-[#111111] text-white text-xs uppercase tracking-widest font-mono font-semibold rounded hover:bg-[#9E7D47]"
            >
              Book a Growth Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
