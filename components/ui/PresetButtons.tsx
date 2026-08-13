'use client';

import { Sparkles } from 'lucide-react';
import { getTodayISODate } from '../../lib/age/dateUtils';

interface PresetButtonsProps {
  onSelectDOB: (dob: string) => void;
}

export default function PresetButtons({ onSelectDOB }: PresetButtonsProps) {
  const today = getTodayISODate();
  const currentYear = new Date().getFullYear();

  const presets = [
    { label: 'Turned 18', getDOB: () => `${currentYear - 18}-01-01` },
    { label: 'Turned 21', getDOB: () => `${currentYear - 21}-01-01` },
    { label: 'Born in 2000', getDOB: () => '2000-01-01' },
    { label: 'Born in 1990', getDOB: () => '1990-01-01' },
  ];

  return (
    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-500" />
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Quick Presets
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onSelectDOB(preset.getDOB())}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950/50 dark:hover:text-brand-400 border border-slate-200/60 dark:border-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
