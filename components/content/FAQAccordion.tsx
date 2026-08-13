'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How many days have I lived?',
    answer: 'AgePulse calculates your exact total days lived by adding up full calendar years (factoring in 366-day leap years) and adding the exact remaining days between your last birthday and the target date.',
  },
  {
    question: 'What is my 10,000th day milestone?',
    answer: 'Your 10,000th day occurs approximately when you turn 27 years and 4 months old. AgePulse automatically calculates your 1,000th, 5,000th, 10,000th, 15,000th, 20,000th, 25,000th, and 30,000th day milestone dates and remaining countdown.',
  },
  {
    question: 'Can I compare the ages of two different people?',
    answer: 'Yes! Use our "Compare Two Ages" tool to calculate the exact difference in years, months, days, and total days between Person A and Person B.',
  },
  {
    question: 'How are my next 5 birthdays calculated?',
    answer: 'AgePulse projects your exact birthday date, calendar year, day of the week, and turning age for the next 5 upcoming years. For individuals born on February 29 (leap day), non-leap year birthdays automatically fall on March 1st.',
  },
  {
    question: 'What is my next age milestone?',
    answer: 'AgePulse identifies key lifetime milestone ages (such as 18, 21, 25, 30, 40, 50, 60, 75, 100) and displays your progress on an interactive visual timeline.',
  },
  {
    question: 'How does this age calculator calculate exact age?',
    answer: 'AgePulse uses pure calendar-based chronological calculation logic. It computes completed years, remaining months, and remaining days by adjusting for leap years, 28/29-day Februarys, and 30/31-day months.',
  },
  {
    question: 'Can I calculate my age on a past or future date?',
    answer: 'Yes! You can enter any historical date (like your graduation or wedding day) or any future date (like your retirement) in the "Age On" input field.',
  },
  {
    question: 'Is my birth date data private and secure?',
    answer: 'Yes, 100%. All calculations happen locally inside your web browser. Your birth date is never sent to any remote server or stored externally.',
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
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-orange-950/60 border border-orange-900/50 text-orange-400 text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
          Got Questions? We Have Answers
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need to know about age milestones, day counts, age comparison, and leap year calculations.
        </p>
      </div>

      <div className="space-y-3 pt-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-base font-semibold text-white hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 text-orange-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800 animate-fadeIn"
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
