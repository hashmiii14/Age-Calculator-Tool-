'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  slot: string; // AdSense slot ID
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  minHeight?: string;
  label?: string;
}

export default function AdSlot({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  minHeight = '90px',
  label = 'Advertisement',
}: AdSlotProps) {
  const adsEnabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || '';

  useEffect(() => {
    if (adsEnabled && client && typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense script error:', err);
      }
    }
  }, [adsEnabled, client]);

  // If ads are disabled or client ID isn't configured, render a clean reserved layout container
  if (!adsEnabled || !client) {
    return (
      <aside
        aria-label={label}
        className={`w-full my-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-400 dark:text-slate-600 text-xs p-4 transition-colors ${className}`}
        style={{ minHeight }}
      >
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400/80 mb-1">
          {label} (Reserved Slot)
        </span>
        <span className="text-[10px] text-slate-400/60 text-center">
          AdSense placeholder — configure NEXT_PUBLIC_ADSENSE_CLIENT after site approval.
        </span>
      </aside>
    );
  }

  return (
    <aside aria-label={label} className={`w-full my-6 text-center overflow-hidden ${className}`}>
      <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
        {label}
      </span>
      <ins
        className="adsbygoogle block"
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        style={{ minHeight, display: 'block' }}
      />
    </aside>
  );
}
