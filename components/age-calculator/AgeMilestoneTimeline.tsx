'use client';

import { useState } from 'react';
import { Trophy, Milestone, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { AgeMilestone, NextBigDayMilestone, AgeTimelineNode, NextMajorMilestone } from '../../lib/age/types';

interface AgeMilestoneTimelineProps {
  milestones?: AgeMilestone[];
  nextBigDay?: NextBigDayMilestone | null;
  timeline: AgeTimelineNode[];
  nextMajorMilestone: NextMajorMilestone;
}

export default function AgeMilestoneTimeline({
  milestones = [],
  nextBigDay,
  timeline,
  nextMajorMilestone,
}: AgeMilestoneTimelineProps) {
  const [tab, setTab] = useState<'days' | 'years'>('days');

  return (
    <div id="age-milestones-section" className="w-full space-y-6">
      {/* Header & Filter Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
            🏆
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
              Life & Lifetime Milestones
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Track 10,000 Days Alive & Landmark Birthday Goals
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center p-1 rounded-2xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 text-xs font-bold">
          <button
            type="button"
            onClick={() => setTab('days')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              tab === 'days'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Lifetime Days (1k - 30k)
          </button>
          <button
            type="button"
            onClick={() => setTab('years')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              tab === 'years'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Landmark Ages (18 - 100)
          </button>
        </div>
      </div>

      {/* Immediate Next Big Day Spotlight Banner */}
      {nextBigDay && (
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-coral-500 via-blush-500 to-purple-600 text-white shadow-cute flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold">
              ✨
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/80 font-extrabold block">
                Next Major Day Milestone
              </span>
              <h3 className="text-xl font-extrabold font-serif">
                {nextBigDay.milestoneDays.toLocaleString()}th Day Alive
              </h3>
              <p className="text-xs text-white/90 font-medium">
                {nextBigDay.formattedTargetDate}
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-white text-coral-600 font-extrabold text-xs shadow-md">
            In {nextBigDay.daysRemaining.toLocaleString()} Days
          </div>
        </div>
      )}

      {/* TAB 1: LIFETIME DAYS MILESTONES (1,000, 5,000, 10,000, 20,000 days) */}
      {tab === 'days' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {milestones.map((m) => (
            <div
              key={m.milestoneDays}
              className={`p-4 rounded-3xl border transition-all ${
                m.isPassed
                  ? 'bg-white/80 dark:bg-plum-900/60 border-blush-100 dark:border-plum-800'
                  : 'bg-gradient-to-br from-white to-blush-50 dark:from-plum-900 dark:to-plum-950 border-coral-300 dark:border-coral-700 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-coral-500 uppercase tracking-wider">
                  {m.milestoneDays.toLocaleString()} Days
                </span>
                {m.isPassed ? (
                  <span className="inline-flex items-center space-x-1 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Achieved</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1 text-[10px] font-extrabold text-coral-600 dark:text-coral-300 bg-coral-100 dark:bg-plum-800 px-2 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-coral-500" />
                    <span>In {m.daysRemaining.toLocaleString()}d</span>
                  </span>
                )}
              </div>

              <div className="text-lg font-extrabold text-plum-900 dark:text-white font-serif mt-2">
                {m.formattedTargetDate}
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {m.isPassed ? 'Milestone achieved!' : `Target date for your ${m.milestoneDays.toLocaleString()}th day`}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: LANDMARK AGE MILESTONES (18, 21, 25, 30, 40, 50, 75, 100) */}
      {tab === 'years' && (
        <div className="bg-white dark:bg-plum-900 rounded-4xl p-6 border border-blush-200 dark:border-plum-800 shadow-cute space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {timeline.map((node) => (
              <div
                key={node.age}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-between space-y-1.5 ${
                  node.isNext
                    ? 'bg-coral-500 text-white border-coral-500 shadow-cute scale-105'
                    : node.isReached
                    ? 'bg-blush-50 dark:bg-plum-950 text-slate-800 dark:text-slate-200 border-blush-200 dark:border-plum-800'
                    : 'bg-white dark:bg-plum-900/50 text-slate-400 border-blush-100 dark:border-plum-800'
                }`}
              >
                <div className="flex items-center justify-center">
                  {node.isReached ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : node.isNext ? (
                    <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  )}
                </div>

                <div>
                  <span className="text-sm font-extrabold font-serif block">
                    {node.label}
                  </span>
                  <span className={`text-[10px] block ${node.isNext ? 'text-coral-100' : 'text-slate-400'}`}>
                    {node.isReached ? 'Reached' : node.isNext ? 'Next Target' : 'Upcoming'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
