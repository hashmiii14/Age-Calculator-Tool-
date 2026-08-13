'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  { q: 'How many days have I lived?', a: 'AgePulse counts your exact total days by adding completed calendar years (accounting for 366-day leap years) plus the remaining days since your last birthday.' },
  { q: 'What is my 10,000th day alive?', a: 'The 10,000th day falls around age 27 years and 4 months. AgePulse automatically calculates your 1,000, 5,000, 10,000, 15,000, 20,000, 25,000, and 30,000 day milestone dates and countdowns.' },
  { q: 'How does exact age calculation work?', a: 'AgePulse uses proper calendar arithmetic — completed years, then remaining months, then remaining days — correctly handling leap years, February 29 birthdays, and different month lengths.' },
  { q: 'Can I calculate my age on a future or past date?', a: 'Yes. Enter any historical or future date in the Age Calculator to see your exact age at that moment.' },
  { q: 'How are upcoming birthdays calculated?', a: 'AgePulse shows the exact date, day of the week, and turning age for your next 5 birthdays. February 29 birthdays fall on March 1 in non-leap years.' },
  { q: 'Is my birth date private?', a: 'Yes. All calculations run entirely inside your browser. Your birth date is never transmitted to any server or stored externally.' },
  { q: 'Can I compare two ages?', a: 'Yes — use the Age Comparison tool to find the exact age difference in years, months, days, and total days between any two birth dates.' },
  { q: 'What is my next age milestone?', a: 'AgePulse finds your next meaningful upcoming milestone — either a landmark birthday (like 21, 30, 40, 50) or a numeric day milestone (like 10,000 days alive), whichever is sooner.' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold"
          style={{ backgroundColor: 'rgba(232,93,54,0.08)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.15)' }}>
          <HelpCircle className="w-3.5 h-3.5" />
          Frequently Asked Questions
        </div>
        <h2 style={{ color: '#F2F4FB' }} className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
          Got Questions?
        </h2>
        <p style={{ color: '#9AA3C4' }} className="text-sm max-w-xl mx-auto leading-relaxed">
          Everything you need to know about age calculations, milestones, and date tools.
        </p>
      </div>

      <div className="space-y-2.5">
        {FAQS.map(({ q, a }, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
              className="border rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 font-semibold text-sm transition-colors focus-visible:outline-none"
                style={{ color: isOpen ? '#E85D36' : '#F2F4FB' }}
              >
                {q}
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ color: isOpen ? '#E85D36' : '#636B8A' }}
                />
              </button>
              {isOpen && (
                <div style={{ color: '#9AA3C4', borderColor: '#252A3D' }}
                  className="px-5 pb-4 pt-1 text-sm leading-relaxed border-t animate-fade-up">
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
