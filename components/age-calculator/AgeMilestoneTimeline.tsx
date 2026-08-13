import { Milestone, CheckCircle2, Clock, Flag } from 'lucide-react';
import { NextMajorMilestone, AgeTimelineNode } from '../../lib/age/types';

interface AgeMilestoneTimelineProps {
  currentYears: number;
  nextMajorMilestone: NextMajorMilestone;
  timeline: AgeTimelineNode[];
}

export default function AgeMilestoneTimeline({
  currentYears,
  nextMajorMilestone,
  timeline,
}: AgeMilestoneTimelineProps) {
  return (
    <div className="w-full space-y-6">
      {/* Next Major Milestone Card */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
              <Flag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Your Next Major Milestone
              </h3>
              <p className="text-xs text-slate-400">
                Targeting your next major age milestone: {nextMajorMilestone.targetAge} Years Old
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-orange-950/60 border border-orange-900/50 px-4 py-2 rounded-xl text-orange-300 text-xs font-bold">
            <Clock className="w-4 h-4 text-orange-400" />
            <span>
              {nextMajorMilestone.yearsRemaining}y {nextMajorMilestone.monthsRemaining}m {nextMajorMilestone.daysRemaining}d remaining
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
              Current Age
            </span>
            <p className="text-2xl font-black text-white font-mono">{currentYears} Years</p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
              Next Milestone
            </span>
            <p className="text-2xl font-black text-orange-400 font-mono">
              {nextMajorMilestone.targetAge} Years
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
              Milestone Date
            </span>
            <p className="text-base font-bold text-white leading-snug mt-1">
              {nextMajorMilestone.formattedTargetDate}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Timeline Bar */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
            <Milestone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Age Milestones Timeline
            </h3>
            <p className="text-xs text-slate-400">
              Chronological progression through key lifetime age milestones
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative py-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {timeline.map((node) => (
              <div
                key={node.age}
                className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between space-y-2 ${
                  node.isNext
                    ? 'bg-orange-950/80 border-orange-500 shadow-lg shadow-orange-500/20 scale-105'
                    : node.isReached
                    ? 'bg-slate-800/80 border-slate-700/80 text-white'
                    : 'bg-slate-900/50 border-slate-800/80 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-center">
                  {node.isReached ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : node.isNext ? (
                    <Clock className="w-4 h-4 text-orange-400 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-700" />
                  )}
                </div>

                <div>
                  <span className="text-sm font-black font-mono block">
                    {node.label}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {node.isReached ? 'Reached' : node.isNext ? 'Next Target' : 'Upcoming'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
