'use client';

import React, { useState } from 'react';
import { useReview } from '../review/ReviewContext';
import { Activity, Trash2, X, Terminal, CheckCircle2 } from 'lucide-react';

export function AnalyticsDebugPanel() {
  const { telemetryEvents, clearEvents } = useReview();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="telemetry-panel" className="font-sans">
      {/* Floating Activator Pill if closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-40 bg-[#17102A] text-white border border-slate-700 px-3 py-1.5 rounded-full text-xs flex items-center gap-2 shadow-xl hover:bg-slate-900 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Activity className="w-3.5 h-3.5 text-teal-400" />
          <span>Analytics Telemetry ({telemetryEvents.length})</span>
        </button>
      )}

      {/* Slide-over or Drawer when open */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 z-50 w-96 max-h-[480px] bg-[#17102A] text-white border border-slate-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                dataLayer Telemetry Inspector
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearEvents}
                title="Clear events"
                className="text-slate-400 hover:text-rose-400 p-1 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Event Stream */}
          <div className="p-3 overflow-y-auto space-y-2 flex-1 text-xs">
            {telemetryEvents.length === 0 ? (
              <div className="py-8 text-center text-slate-500">
                <Activity className="w-6 h-6 mx-auto mb-2 text-slate-600 animate-pulse" />
                <p>Waiting for user interactions...</p>
                <p className="text-[10px] mt-1 text-slate-600">Clicks, form inputs, and CTAs will appear here in real-time.</p>
              </div>
            ) : (
              telemetryEvents.map((evt, idx) => (
                <div key={idx} className="bg-slate-950/80 p-2.5 rounded border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-emerald-400 font-medium text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {evt.name}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">{evt.timestamp}</span>
                  </div>
                  {Object.keys(evt.payload).length > 0 && (
                    <pre className="font-mono text-[10px] text-slate-300 bg-slate-900/90 p-1.5 rounded overflow-x-auto">
                      {JSON.stringify(evt.payload, null, 2)}
                    </pre>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-2 bg-slate-900 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Standard: GA4 snake_case</span>
            <span className="text-teal-400 font-mono">dataLayer.push() ready</span>
          </div>
        </div>
      )}
    </div>
  );
}
