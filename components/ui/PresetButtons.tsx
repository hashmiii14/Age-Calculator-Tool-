'use client';

import { Sparkles } from 'lucide-react';

interface PresetButtonsProps {
  onSelectDOB: (dob: string) => void;
}

export default function PresetButtons({ onSelectDOB }: PresetButtonsProps) {
  const currentYear = new Date().getFullYear();

  const presets = [
    { label: 'Turned 18', getDOB: () => `${currentYear - 18}-01-01` },
    { label: 'Turned 21', getDOB: () => `${currentYear - 21}-01-01` },
    { label: 'Born in 2000', getDOB: () => '2000-01-01' },
    { label: 'Born in 1990', getDOB: () => '1990-01-01' },
  ];

  return (
    <div className="mt-3 pt-3 border-t border-blush-200/80 dark:border-plum-800">
      <div className="flex items-center space-x-1.5 mb-2">
        <Sparkles className="w-3.5 h-3.5 text-coral-500" />
        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Quick Shortcuts
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onSelectDOB(preset.getDOB())}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-plum-900 text-slate-700 dark:text-slate-300 hover:bg-coral-500 hover:text-white border border-blush-200 dark:border-plum-800 transition-all focus:outline-none focus:ring-2 focus:ring-coral-500"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}

