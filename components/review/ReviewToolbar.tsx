'use client';

import React, { useState } from 'react';
import { useReview } from './ReviewContext';
import Link from 'next/link';
import { ShieldCheck, Activity, Eye, EyeOff, FileText, ChevronUp, ChevronDown } from 'lucide-react';

export function ReviewToolbar() {
  const { reviewMode, toggleReviewMode } = useReview();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside aria-label="Review Mode & Telemetry Toolbar" className="fixed bottom-4 right-4 z-50 font-sans">
      <div className="bg-[#0E0D0C] text-white border border-white/10 rounded-lg shadow-2xl p-3 max-w-xs transition-all">
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#9E7D47]" />
            <span className="text-xs font-semibold tracking-wide uppercase">Audit & Review Mode</span>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-stone-400 hover:text-white transition-colors p-0.5"
            aria-label="Toggle toolbar expansion"
          >
            {collapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {!collapsed && (
          <div className="pt-2 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-stone-300">Underline Claims:</span>
              <button
                onClick={toggleReviewMode}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1 ${
                  reviewMode
                    ? 'bg-[#9E7D47] text-[#0E0D0C] shadow-sm'
                    : 'bg-[#1A1918] text-stone-300 hover:bg-[#252321]'
                }`}
              >
                {reviewMode ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                {reviewMode ? 'Active' : 'Disabled'}
              </button>
            </div>

            <p className="text-[11px] text-stone-400 leading-relaxed">
              Highlights verified data <span className="text-[#9E7D47]">[V]</span> and flags unverified deck claims <span className="text-rose-400">[U]</span>.
            </p>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/review"
                className="text-[11px] text-[#9E7D47] hover:text-[#B89758] flex items-center gap-1 font-medium underline underline-offset-2"
              >
                <FileText className="w-3 h-3" /> View Validation Ledger
              </Link>
              <a
                href="#telemetry-panel"
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
              >
                <Activity className="w-3 h-3" /> Telemetry
              </a>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
