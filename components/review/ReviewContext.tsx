'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface TelemetryEvent {
  timestamp: string;
  name: string;
  payload: Record<string, unknown>;
}

interface ReviewContextType {
  reviewMode: boolean;
  toggleReviewMode: () => void;
  telemetryEvents: TelemetryEvent[];
  trackEvent: (name: string, payload?: Record<string, unknown>) => void;
  clearEvents: () => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [reviewMode, setReviewMode] = useState<boolean>(false);
  const [telemetryEvents, setTelemetryEvents] = useState<TelemetryEvent[]>([]);

  useEffect(() => {
    // Check local storage preference
    const saved = localStorage.getItem('growify_review_mode');
    if (saved === 'true') {
      setReviewMode(true);
      document.body.classList.add('review-mode-active');
    }
  }, []);

  const toggleReviewMode = () => {
    setReviewMode((prev) => {
      const next = !prev;
      localStorage.setItem('growify_review_mode', String(next));
      if (next) {
        document.body.classList.add('review-mode-active');
      } else {
        document.body.classList.remove('review-mode-active');
      }
      return next;
    });
  };

  const trackEvent = (name: string, payload: Record<string, unknown> = {}) => {
    const event: TelemetryEvent = {
      timestamp: new Date().toLocaleTimeString(),
      name,
      payload,
    };
    setTelemetryEvents((prev) => [event, ...prev.slice(0, 49)]); // Keep last 50 events

    // Push to window.dataLayer if present
    if (typeof window !== 'undefined') {
      const win = window as unknown as { dataLayer?: unknown[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({ event: name, ...payload });
    }
  };

  const clearEvents = () => {
    setTelemetryEvents([]);
  };

  return (
    <ReviewContext.Provider
      value={{
        reviewMode,
        toggleReviewMode,
        telemetryEvents,
        trackEvent,
        clearEvents,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReview() {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReview must be used within a ReviewProvider');
  }
  return context;
}
