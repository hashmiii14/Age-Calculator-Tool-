'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SingleMilestone } from '../../lib/age/types';

interface SingleMilestoneCardProps {
  milestone: SingleMilestone;
}

export default function SingleMilestoneCard({ milestone }: SingleMilestoneCardProps) {
  return (
    <div className="rounded-3xl sm:rounded-4xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute overflow-hidden transition-all">
      <div className="px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

        {/* Left info */}
        <div className="space-y-1 min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            Next Milestone
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-plum-900 dark:text-white leading-snug">
            {milestone.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
            {milestone.targetDateFormatted}
          </p>
        </div>

        {/* Right countdown */}
        <div className="shrink-0 text-center sm:text-right">
          <p className="text-4xl sm:text-5xl font-black font-serif tabular-nums text-coral-500">
            {milestone.daysRemaining.toLocaleString()}
          </p>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mt-1">
            days remaining
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-6 pb-5">
        <Link
          href="/age-milestones"
          className="inline-flex items-center gap-1 text-xs font-extrabold text-coral-500 hover:text-coral-600 transition-colors"
        >
          View All Milestones <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

