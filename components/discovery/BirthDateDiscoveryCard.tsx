'use client';

import { Sparkles, Calendar, Gem, Flower2, Sun, History, Award, Info } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';
import { WEEKDAY_LORE } from '../../lib/data/birthDateData';

interface BirthDateDiscoveryCardProps {
  result: AgeResult;
}

export default function BirthDateDiscoveryCard({ result }: BirthDateDiscoveryCardProps) {
  const weekdayLore = WEEKDAY_LORE[result.dobWeekday] || WEEKDAY_LORE.Sunday;

  return (
    <div id="birth-date-discovery" className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
          ✨
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
          Your Birth Date Story
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Birthstone & Birth Flower */}
        <div className="p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <Gem className="w-5 h-5 text-coral-500" />
            <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
              Birthstone & Flower
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-2xl bg-blush-50 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 space-y-1">
              <span className="font-extrabold text-coral-600 dark:text-coral-400 block uppercase tracking-wider">
                Birthstone: {result.monthDetails.birthstone.stone}
              </span>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Color: {result.monthDetails.birthstone.color}
              </p>
              <p className="text-slate-500 dark:text-slate-400 italic">
                &ldquo;{result.monthDetails.birthstone.symbolism}&rdquo;
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-blush-50 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 space-y-1">
              <div className="flex items-center space-x-1.5 font-extrabold text-coral-600 dark:text-coral-400 uppercase tracking-wider">
                <Flower2 className="w-3.5 h-3.5 text-coral-500" />
                <span>Birth Flower: {result.monthDetails.birthFlower.flower}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Meaning: {result.monthDetails.birthFlower.meaning}
              </p>
              <p className="text-slate-500 dark:text-slate-400 italic">
                &ldquo;{result.monthDetails.birthFlower.symbolism}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Weekday & Season Lore */}
        <div className="p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <Sun className="w-5 h-5 text-coral-500" />
            <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
              {result.dobWeekday} & Season Story
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-2xl bg-blush-50 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 space-y-1">
              <span className="font-extrabold text-plum-900 dark:text-white block uppercase tracking-wider">
                Born on a {result.dobWeekday} ({weekdayLore.character})
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {weekdayLore.description}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-blush-50 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 space-y-1">
              <span className="font-extrabold text-coral-600 dark:text-coral-400 block uppercase tracking-wider">
                Season & Calendar Position
              </span>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Northern Season: {result.monthDetails.seasonNorthern} • Southern: {result.monthDetails.seasonSouthern}
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                Day number {result.dayOfYear} of the calendar year.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Historical Events & Famous Birthdays */}
        <div className="p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <History className="w-5 h-5 text-coral-500" />
            <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
              On This Date In History
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            {result.historyRecord.events.slice(0, 2).map((ev) => (
              <div key={ev.title} className="p-2.5 rounded-2xl bg-blush-50 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800">
                <span className="font-extrabold text-coral-600 dark:text-coral-400 block">
                  {ev.year} — {ev.title} ({ev.category})
                </span>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-2">
                  {ev.description}
                </p>
              </div>
            ))}

            <div className="pt-1">
              <span className="font-extrabold text-plum-900 dark:text-white block uppercase tracking-wider mb-1">
                Famous People Born On This Date:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {result.historyRecord.famousBirthdays.map((p) => (
                  <span
                    key={p.name}
                    className="px-2.5 py-1 rounded-full bg-blush-100 dark:bg-plum-800 text-slate-700 dark:text-slate-300 font-bold"
                  >
                    {p.name} ({p.birthYear})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
