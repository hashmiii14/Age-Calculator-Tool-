import { Sparkles, Calendar } from 'lucide-react';
import { AgeProgress } from '../../lib/age/types';

interface AgeProgressVisualizerProps {
  progress: AgeProgress;
  currentYears: number;
}

export default function AgeProgressVisualizer({ progress, currentYears }: AgeProgressVisualizerProps) {
  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-5">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Your Current Year Progress
            </h3>
            <p className="text-xs text-slate-400">
              Progress through your current year of age ({currentYears} → {currentYears + 1})
            </p>
          </div>
        </div>

        <span className="text-xl font-black text-orange-400 font-mono bg-orange-950/60 border border-orange-900/50 px-3 py-1 rounded-xl">
          {progress.percentCompleted}%
        </span>
      </div>

      {/* Dynamic Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 rounded-full transition-all duration-700 shadow-lg shadow-orange-500/30"
            style={{ width: `${progress.percentCompleted}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Last Birthday ({currentYears} yrs)</span>
          </div>

          <span className="font-semibold text-slate-300">
            {progress.daysElapsed} days completed • {progress.daysRemaining} days remaining
          </span>

          <div className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            <span>Next Birthday ({currentYears + 1} yrs)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
