import { Sparkles, CheckCircle2 } from 'lucide-react';
import { QuickFact } from '../../lib/age/types';

interface QuickAgeFactsProps {
  facts: QuickFact[];
}

export default function QuickAgeFacts({ facts }: QuickAgeFactsProps) {
  if (!facts || facts.length === 0) return null;

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Quick Age Facts
          </h3>
          <p className="text-xs text-slate-400">
            Mathematically calculated key highlights from your exact birth date
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facts.map((fact) => (
          <div
            key={fact.id}
            className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 flex items-start space-x-3"
          >
            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                {fact.title}
              </span>
              <p className="text-base font-bold text-white mt-0.5">
                {fact.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {fact.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
