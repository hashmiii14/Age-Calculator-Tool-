'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SingleMilestone } from '../../lib/age/types';

interface SingleMilestoneCardProps {
  milestone: SingleMilestone;
}

export default function SingleMilestoneCard({ milestone }: SingleMilestoneCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}
    >
      {/* Thin top accent strip */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #E85D36 0%, rgba(232,93,54,0.2) 100%)' }} />

      <div className="px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

        {/* Left info */}
        <div className="space-y-1 min-w-0">
          <p style={{ color: '#636B8A' }} className="text-xs font-semibold uppercase tracking-widest">
            Next Milestone
          </p>
          <h3 style={{ color: '#F2F4FB' }} className="text-xl sm:text-2xl font-extrabold font-serif leading-snug">
            {milestone.title}
          </h3>
          <p style={{ color: '#9AA3C4' }} className="text-sm">
            {milestone.targetDateFormatted}
          </p>
        </div>

        {/* Right countdown — visually prominent */}
        <div className="shrink-0 text-center sm:text-right">
          <p className="text-4xl sm:text-5xl font-extrabold font-serif tabular-nums" style={{ color: '#E85D36' }}>
            {milestone.daysRemaining.toLocaleString()}
          </p>
          <p style={{ color: '#636B8A' }} className="text-xs font-semibold mt-1 uppercase tracking-wider">
            days remaining
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-6 pb-4">
        <Link
          href="/age-milestones"
          className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
          style={{ color: '#636B8A' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#E85D36')}
          onMouseLeave={e => (e.currentTarget.style.color = '#636B8A')}
        >
          View all milestones <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
