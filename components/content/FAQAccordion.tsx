'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  { q: 'How does exact age calculation work?',      a: 'AgePulse uses proper calendar arithmetic — completed years, then remaining months, then remaining days — correctly handling leap years, February 29 birthdays, and different month lengths.' },
  { q: 'How many total days have I lived?',        a: 'AgePulse calculates your total days alive by counting every calendar year (including 366-day leap years) plus the days elapsed since your last birthday.' },
  { q: 'Can I calculate my age on a future date?', a: 'Yes! Select any target date in "Today\'s Date / Age On" to calculate your age on any past or future day.' },
  { q: 'Is my date of birth private?',             a: 'Yes. 100% of calculations run inside your web browser. Your birth date is never sent to a server or stored online.' },
  { q: 'How are February 29 birthdays handled?',  a: 'For leap year birthdays (Feb 29), AgePulse calculates your age on Feb 29 in leap years and March 1 in non-leap years.' },
  { q: 'What is my 10,000th day milestone?',       a: 'Your 10,000th day alive occurs around age 27 years and 4 months. AgePulse tracks lifetime day milestones automatically.' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full space-y-4 pt-4">
      <div className="flex items-center space-x-2">
        <HelpCircle className="w-5 h-5 text-coral-500" />
        <h2 className="text-xl sm:text-2xl font-extrabold font-serif text-plum-900 dark:text-white">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map(({ q, a }, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 transition-all overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              >
                <span className="text-sm font-extrabold text-plum-900 dark:text-white font-sans">
                  {q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 text-coral-500 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-blush-100 dark:border-plum-800/60 pt-3 animate-fade-up">
                  {a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

