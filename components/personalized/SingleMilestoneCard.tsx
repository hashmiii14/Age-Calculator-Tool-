'use client';

import { Trophy, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SingleMilestone } from '../../lib/age/types';

interface SingleMilestoneCardProps {
  milestone: SingleMilestone;
}

export default function SingleMilestoneCard({ milestone }: SingleMilestoneCardProps) {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-subtle space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-coral-50 dark:bg-coral-950/40 text-coral-500 flex items-center justify-center font-bold">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
              Your Next Milestone
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-serif">
              {milestone.title}
            </h3>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-coral-50 dark:bg-coral-950/60 text-coral-600 dark:text-coral-400 text-xs font-extrabold border border-coral-200/60 dark:border-coral-900/60">
          {milestone.badgeLabel}
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-slate-500 dark:text-slate-400 font-medium block">Target Date</span>
          <span className="font-extrabold text-slate-900 dark:text-white text-sm">
            {milestone.targetDateFormatted}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-coral-600 dark:text-coral-400 font-extrabold bg-white dark:bg-zinc-800 px-3.5 py-2 rounded-xl border border-slate-200/60 dark:border-zinc-700">
          <Clock className="w-4 h-4 text-coral-500" />
          <span>In {milestone.daysRemaining.toLocaleString()} Days</span>
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <Link
          href="/age-milestones"
          className="inline-flex items-center space-x-1 text-xs font-extrabold text-coral-500 hover:underline"
        >
          <span>View all age & day milestones</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
