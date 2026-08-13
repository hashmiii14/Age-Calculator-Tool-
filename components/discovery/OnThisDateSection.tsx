'use client';

import { useState } from 'react';
import { History, Calendar, Search, Award, Sparkles } from 'lucide-react';
import { getHistoryForDate } from '../../lib/data/historyData';
import { MONTH_DATA } from '../../lib/data/birthDateData';

export default function OnThisDateSection() {
  const [month, setMonth] = useState(3);
  const [day, setDay] = useState(14);

  const historyRecord = getHistoryForDate(month, day);
  const monthName = MONTH_DATA[month]?.name || 'March';

  return (
    <div id="on-this-date-section" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
            📜
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
              What Happened On Your Birthday?
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Explore historical events, scientific discoveries, & famous birthdays
            </p>
          </div>
        </div>

        {/* Date Selector */}
        <div className="flex items-center space-x-2 bg-white dark:bg-plum-900 p-1.5 rounded-2xl border border-blush-200 dark:border-plum-800 shadow-sm text-xs">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="px-2 py-1 rounded-xl bg-blush-50 dark:bg-plum-950 font-extrabold text-plum-900 dark:text-white outline-none"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <option key={m} value={m}>
                {MONTH_DATA[m]?.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            min={1}
            max={31}
            value={day}
            onChange={(e) => setDay(Math.min(31, Math.max(1, Number(e.target.value))))}
            className="w-14 px-2 py-1 rounded-xl bg-blush-50 dark:bg-plum-950 font-extrabold text-plum-900 dark:text-white outline-none text-center"
          />
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-4xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-cute space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-blush-100 dark:border-plum-800">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-coral-500" />
            <h3 className="font-serif font-extrabold text-xl text-plum-900 dark:text-white">
              {monthName} {day} In History
            </h3>
          </div>
          <span className="text-xs font-bold text-coral-500 bg-blush-100 dark:bg-plum-800 px-3 py-1 rounded-full">
            {historyRecord.calendarFact}
          </span>
        </div>

        {/* Historical Events Timeline */}
        <div className="space-y-4">
          <span className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider block font-sans">
            Key Historical & Scientific Breakthroughs
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {historyRecord.events.map((ev) => (
              <div
                key={ev.title}
                className="p-4 rounded-3xl bg-blush-50/70 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-coral-500 font-mono">
                    Year {ev.year}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white dark:bg-plum-900 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    {ev.category}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm text-plum-900 dark:text-white font-serif">
                  {ev.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ev.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Famous Birthdays on this date */}
        <div className="pt-2">
          <span className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider block mb-3 font-sans">
            Famous Icons Born On {monthName} {day}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {historyRecord.famousBirthdays.map((p) => (
              <div
                key={p.name}
                className="p-3.5 rounded-2xl bg-white dark:bg-plum-950/80 border border-blush-100 dark:border-plum-800 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-plum-900 dark:text-white">
                    {p.name}
                  </span>
                  <span className="text-xs font-bold text-coral-500">{p.birthYear}</span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  {p.profession}
                </p>
                <p className="text-[10px] text-slate-400 italic">
                  {p.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
