import { Calendar, Hash, Clock } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';

interface AgeAtAGlanceProps {
  result: AgeResult;
}

export default function AgeAtAGlance({ result }: AgeAtAGlanceProps) {
  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Your Age at a Glance
          </h3>
          <p className="text-xs text-slate-400">
            Summary of chronological metrics lived as of {result.formattedTargetDate}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: 'Years', val: result.years, sub: 'Full years' },
          { label: 'Months', val: result.months, sub: 'Remaining' },
          { label: 'Days', val: result.days, sub: 'Remaining' },
          { label: 'Total Months', val: result.totalMonths.toLocaleString(), sub: 'Complete' },
          { label: 'Total Weeks', val: result.totalWeeks.toLocaleString(), sub: 'Complete' },
          { label: 'Total Days', val: result.totalDays.toLocaleString(), sub: 'Complete' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center space-y-1"
          >
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              {item.label}
            </span>
            <p className="text-2xl font-black text-white font-mono tracking-tight">
              {item.val}
            </p>
            <span className="text-[10px] text-slate-400 block">
              {item.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
