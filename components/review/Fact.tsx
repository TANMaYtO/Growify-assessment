'use client';

import React, { useState } from 'react';
import { facts, FactStatus } from '@/content/facts';
import { useReview } from './ReviewContext';
import { CheckCircle2, AlertTriangle, HelpCircle, FileText } from 'lucide-react';

interface FactProps {
  id: string;
  fallback?: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'strong';
}

export function Fact({ id, fallback, className = '', as = 'span' }: FactProps) {
  const { reviewMode } = useReview();
  const [hovered, setHovered] = useState(false);
  const fact = facts[id];

  const Component = as;

  if (!fact) {
    return <Component className={className}>{fallback || id}</Component>;
  }

  const getStatusBadge = (status: FactStatus) => {
    switch (status) {
      case 'verified':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 inline mr-1" />,
          label: '[V] Verified Public Source',
          bgColor: 'bg-teal-50 border-teal-300 text-teal-800',
        };
      case 'supplied':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 inline mr-1" />,
          label: '[S] Supplied in Growth Deck',
          bgColor: 'bg-amber-50 border-amber-300 text-amber-800',
        };
      case 'pending-validation':
        return {
          icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-600 inline mr-1" />,
          label: '[U] Pending Validation / Discrepancy',
          bgColor: 'bg-rose-50 border-rose-300 text-rose-800',
        };
      case 'placeholder':
        return {
          icon: <HelpCircle className="w-3.5 h-3.5 text-slate-500 inline mr-1" />,
          label: '[P] Formal Spec Required',
          bgColor: 'bg-slate-50 border-slate-300 text-slate-700',
        };
    }
  };

  const badge = getStatusBadge(fact.status);

  return (
    <Component
      data-fact-id={fact.id}
      data-fact-status={fact.status}
      className={`relative inline-block transition-colors ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{fact.value}</span>

      {reviewMode && hovered && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-[#17102A] text-white text-xs rounded shadow-2xl pointer-events-none border border-slate-700 text-left normal-case tracking-normal font-sans">
          <span className="flex items-center justify-between pb-1 mb-1 border-b border-slate-700">
            <span className="font-semibold text-[11px] uppercase tracking-wider text-teal-400">
              Facts Ledger Record
            </span>
            <span className={`px-1.5 py-0.5 text-[10px] font-mono rounded border ${badge.bgColor}`}>
              {badge.label}
            </span>
          </span>
          <span className="block font-medium text-slate-200 mt-1">{fact.statement}</span>
          <span className="block text-[11px] text-slate-400 mt-1">
            <FileText className="w-3 h-3 inline mr-1 text-slate-500" />
            Source: {fact.source}
          </span>
          {fact.notes && (
            <span className="block text-[10px] text-amber-300 bg-amber-950/40 p-1.5 mt-1.5 rounded border border-amber-800/50">
              Note: {fact.notes}
            </span>
          )}
        </span>
      )}
    </Component>
  );
}
