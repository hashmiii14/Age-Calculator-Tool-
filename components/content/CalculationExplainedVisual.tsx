import { ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export default function CalculationExplainedVisual() {
  const steps = [
    { step: '01', title: 'Date of Birth', desc: 'Input birth date' },
    { step: '02', title: 'Calendar Math', desc: 'Leap & month rules' },
    { step: '03', title: 'Completed Years', desc: 'Full annual cycles' },
    { step: '04', title: 'Remaining Months', desc: 'Partial year' },
    { step: '05', title: 'Remaining Days', desc: 'Partial month' },
    { step: '06', title: 'Exact Age', desc: 'Full breakdown' },
  ];

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            How Calculation Works
          </h3>
          <p className="text-xs text-slate-400">
            Step-by-step chronological calculation pipeline
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {steps.map((item, idx) => (
          <div
            key={item.step}
            className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center space-y-2 relative"
          >
            <span className="text-[10px] font-mono font-bold text-orange-400 bg-orange-950/80 px-2 py-0.5 rounded-full inline-block">
              Step {item.step}
            </span>
            <p className="text-sm font-bold text-white leading-tight">
              {item.title}
            </p>
            <p className="text-[11px] text-slate-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center space-x-2 text-xs text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <span>100% deterministic client-side calculation using strict Gregorian calendar arithmetic.</span>
      </div>
    </div>
  );
}
