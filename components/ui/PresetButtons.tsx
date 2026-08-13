'use client';

import { Sparkles } from 'lucide-react';
import { getTodayISODate } from '../../lib/age/dateUtils';

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
    <div className="mt-4 pt-4 border-t border-slate-800">
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles className="w-3.5 h-3.5 text-orange-400" />
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Quick Presets
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onSelectDOB(preset.getDOB())}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-orange-950/60 hover:text-orange-400 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
