'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is my exact age?',
    answer: 'Your exact age is the exact chronological duration measured in years, months, days, hours, minutes, and seconds from your date of birth to the present moment or target date.',
  },
  {
    question: 'How does this age calculator calculate age?',
    answer: 'AgePulse uses pure calendar-based chronological calculation logic. It computes completed years, remaining months, and remaining days by adjusting for leap years, 28/29-day Februarys, and 30/31-day months.',
  },
  {
    question: 'Can I calculate my age on a past date?',
    answer: 'Yes! Simply change the "Calculate Age On" input field to any past date. For example, you can calculate how old you were on January 1, 2020 or on your graduation day.',
  },
  {
    question: 'Can I calculate my age on a future date?',
    answer: 'Yes! You can enter any future date in the "Calculate Age On" field to discover how old you will be on a future retirement date, anniversary, or milestone.',
  },
  {
    question: 'How are leap years handled?',
    answer: 'Leap years (years with 366 days, such as 2000 and 2024) are automatically detected and factored into the day count of February (29 days instead of 28).',
  },
  {
    question: 'How is a February 29 birthday handled in non-leap years?',
    answer: 'For individuals born on February 29 (leap day), in common non-leap years their legal birthday is recognized on March 1st. AgePulse advances their age on March 1st in non-leap years.',
  },
  {
    question: 'Can I calculate my age in total days?',
    answer: 'Yes! AgePulse displays your total lifetime duration broken down into total months, total weeks, total days, total hours, total minutes, and total seconds.',
  },
  {
    question: 'Can I calculate the age difference between two dates?',
    answer: 'Yes! Use our "Date Difference" calculator mode to calculate the exact duration (years, months, days, total days, etc.) between any two arbitrary dates.',
  },
  {
    question: 'Is this age calculator free to use?',
    answer: 'Yes, AgePulse is 100% free with no registration, software download, or subscriptions required.',
  },
  {
    question: 'Does the calculator store my date of birth?',
    answer: 'No. All calculations take place 100% locally on your device within your web browser. Your birth date is never sent to any server or stored remotely.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-8 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Got Questions? We Have Answers
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need to know about chronological age calculations, leap year logic, and date math.
        </p>
      </div>

      <div className="space-y-3 pt-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-base font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 text-brand-600 dark:text-brand-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-fadeIn"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
