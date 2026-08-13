import { Layers, Info, Clock } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';

interface AgeInDifferentUnitsProps {
  result: AgeResult;
}

export default function AgeInDifferentUnits({ result }: AgeInDifferentUnitsProps) {
  const units = [
    { label: 'Years', val: `${result.years} years`, desc: 'Full calendar years lived' },
    { label: 'Months', val: `${result.totalMonths.toLocaleString()} months`, desc: `${result.years} yrs + ${result.months} mos` },
    { label: 'Weeks', val: `${result.totalWeeks.toLocaleString()} weeks`, desc: `Plus ${(result.totalDays % 7)} days` },
    { label: 'Days', val: `${result.totalDays.toLocaleString()} days`, desc: '24-hour calendar days' },
    { label: 'Hours', val: `${result.totalHours.toLocaleString()} hours`, desc: 'Calendar date boundary math' },
    { label: 'Minutes', val: `${result.totalMinutes.toLocaleString()} minutes`, desc: 'Calendar date boundary math' },
    { label: 'Seconds', val: `${result.totalSeconds.toLocaleString()} seconds`, desc: 'Calendar date boundary math' },
  ];

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Your Age in Different Units
          </h3>
          <p className="text-xs text-slate-400">
            Total lifetime duration expressed across standard chronological units
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {units.map((u) => (
          <div
            key={u.label}
            className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5"
          >
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              {u.label}
            </span>
            <p className="text-xl sm:text-2xl font-extrabold text-white font-mono">
              {u.val}
            </p>
            <p className="text-xs text-slate-400 mt-1 flex items-center space-x-1">
              <Clock className="w-3 h-3 text-slate-500 flex-shrink-0" />
              <span>{u.desc}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-start space-x-2 text-xs text-slate-400">
        <Info className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Calculation Note:</strong> Hours, minutes, and seconds are calculated using standard calendar date boundaries (00:00:00 local time on your birth date to 00:00:00 on the target date). This represents exact date duration without assuming a specific birth time of day.
        </p>
      </div>
    </div>
  );
}
