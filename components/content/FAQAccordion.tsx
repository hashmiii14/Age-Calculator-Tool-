'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'How many days have I lived?',              a: 'AgePulse counts your exact total days by adding completed calendar years (accounting for 366-day leap years) plus the remaining days since your last birthday to today.' },
  { q: 'How does exact age calculation work?',      a: 'AgePulse uses proper calendar arithmetic — completed years, then remaining months, then remaining days — correctly handling leap years, February 29 birthdays, and different month lengths.' },
  { q: 'What is my 10,000th day alive?',           a: 'Your 10,000th day falls around age 27 years and 4 months. AgePulse automatically calculates your 1,000, 5,000, 10,000, 15,000, 20,000, 25,000, and 30,000 day milestone dates and countdowns.' },
  { q: 'Can I calculate my age on a future date?', a: 'Yes. Enter any historical or future date in the Age Calculator to see your exact age at that moment.' },
  { q: 'Is my birth date private?',                a: 'Yes. All calculations run entirely inside your browser. Your birth date is never transmitted to any server or stored externally.' },
  { q: 'How are upcoming birthdays calculated?',   a: 'AgePulse shows the exact date, day of the week, and turning age for your next 5 birthdays. February 29 birthdays fall on March 1 in non-leap years.' },
  { q: 'Can I compare two people\'s ages?',        a: 'Yes — use the Age Comparison tool to find the exact age difference in years, months, days, and total days between any two birth dates.' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full space-y-5">
      <div>
        <h2 style={{ color: '#F2F4FB' }} className="text-2xl font-extrabold font-serif">Frequently Asked</h2>
        <p style={{ color: '#636B8A' }} className="text-sm mt-1">About age calculations, milestones, and date tools.</p>
      </div>

      <div style={{ borderTop: '1px solid #1D2133' }}>
        {FAQS.map(({ q, a }, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} style={{ borderBottom: '1px solid #1D2133' }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full py-4 text-left flex items-center justify-between gap-4 focus-visible:outline-none"
                style={{ color: isOpen ? '#F2F4FB' : '#9AA3C4' }}
              >
                <span className="text-sm font-semibold">{q}</span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 transition-transform duration-200"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: isOpen ? '#E85D36' : '#636B8A',
                  }}
                />
              </button>
              {isOpen && (
                <div style={{ color: '#9AA3C4' }} className="text-sm leading-relaxed pb-5 animate-fade-up">
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
