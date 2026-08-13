import { Milestone, CheckCircle2, Clock, Award } from 'lucide-react';
import { AgeMilestone } from '../../lib/age/types';

interface AgeMilestonesCardProps {
  milestones: AgeMilestone[];
  totalDays: number;
}

export default function AgeMilestonesCard({ milestones, totalDays }: AgeMilestonesCardProps) {
  if (!milestones || milestones.length === 0) return null;

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-slate-800 shadow-card dark:shadow-none transition-colors">
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-orange-950/60 flex items-center justify-center text-orange-600 dark:text-orange-400">
          <Milestone className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Lifetime Milestones
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Key 1,000-day milestones achieved & upcoming target dates
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {milestones.map((m) => {
          const progressPercent = Math.min(
            100,
            Math.round((totalDays / m.milestoneDays) * 100)
          );

          return (
            <div
              key={m.milestoneDays}
              className={`rounded-2xl p-5 border transition-all ${
                m.isPassed
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
                  : 'bg-amber-50/30 dark:bg-slate-800/40 border-amber-200/60 dark:border-slate-700/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-black text-slate-900 dark:text-white font-mono">
                  {m.milestoneDays.toLocaleString()} Days
                </span>

                {m.isPassed ? (
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Achieved</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-950 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    <span>{m.daysRemaining.toLocaleString()} days left</span>
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                {m.isPassed ? 'Reached on' : 'Upcoming date'}:{' '}
                <strong className="text-slate-800 dark:text-slate-200">{m.formattedTargetDate}</strong>
              </p>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    m.isPassed ? 'bg-emerald-500' : 'bg-orange-500'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
