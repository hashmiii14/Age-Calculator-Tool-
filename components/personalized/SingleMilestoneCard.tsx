'use client';

import Link from 'next/link';
import { Trophy, Clock, ArrowRight } from 'lucide-react';
import { SingleMilestone } from '../../lib/age/types';

interface SingleMilestoneCardProps {
  milestone: SingleMilestone;
}

export default function SingleMilestoneCard({ milestone }: SingleMilestoneCardProps) {
  return (
    <div className="rounded-2xl p-6 space-y-4"
      style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'rgba(232,93,54,0.12)', color: '#E85D36' }}>
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <span className="section-label">Your Next Milestone</span>
            <h3 style={{ color: '#F2F4FB' }} className="text-xl font-extrabold font-serif leading-tight">
              {milestone.title}
            </h3>
          </div>
        </div>
        <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: 'rgba(232,93,54,0.1)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.2)' }}>
          {milestone.badgeLabel}
        </span>
      </div>

      {/* Info row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-xl p-4"
        style={{ backgroundColor: '#1D2133' }}>
        <div className="flex-1">
          <p style={{ color: '#636B8A' }} className="text-[11px] font-bold uppercase tracking-wider mb-1">Target Date</p>
          <p style={{ color: '#F2F4FB' }} className="font-extrabold text-base">{milestone.targetDateFormatted}</p>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm"
          style={{ backgroundColor: 'rgba(232,93,54,0.12)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.2)' }}>
          <Clock className="w-4 h-4" />
          In {milestone.daysRemaining.toLocaleString()} days
        </div>
      </div>

      {/* Link */}
      <div className="flex justify-end">
        <Link href="/age-milestones"
          className="inline-flex items-center gap-1 text-xs font-bold hover:underline"
          style={{ color: '#E85D36' }}>
          View all milestones <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
