import { Sparkles, Calendar, Clock } from 'lucide-react';
import { NextBigDayMilestone } from '../../lib/age/types';

interface NextBigDayCardProps {
  nextBigDay: NextBigDayMilestone | null;
}

export default function NextBigDayCard({ nextBigDay }: NextBigDayCardProps) {
  if (!nextBigDay) return null;

  return (
    <div className="w-full bg-gradient-to-r from-orange-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border border-orange-900/60 shadow-2xl text-white relative overflow-hidden">
      <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Signature Feature</span>
          </span>
          <span className="text-xs text-slate-400 font-medium">Your Next Big Lifetime Day</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div>
            <h3 className="text-2xl sm:text-4xl font-black font-serif text-white tracking-tight">
              Your {nextBigDay.milestoneDays.toLocaleString()}th Day
            </h3>
            <p className="text-sm text-slate-300 mt-1 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>Target Date: <strong>{nextBigDay.formattedTargetDate}</strong></span>
            </p>
          </div>

          <div className="bg-slate-900/80 border border-orange-900/60 rounded-2xl p-4 sm:px-6 text-center sm:text-right">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Time Remaining
            </span>
            <span className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">
              In {nextBigDay.daysRemaining.toLocaleString()} Days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
