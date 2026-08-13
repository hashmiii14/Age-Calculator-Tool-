'use client';

import { useState } from 'react';
import { Sparkles, Shuffle, Calendar, HelpCircle, Trophy, Lightbulb } from 'lucide-react';
import { getHistoryForDate } from '../../lib/data/historyData';

export default function EngagementHub() {
  const [randomDate, setRandomDate] = useState<{ month: number; day: number; year: number } | null>(null);
  const [userGuess, setUserGuess] = useState('');
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  const generateRandomDate = () => {
    const rMonth = Math.floor(Math.random() * 12) + 1;
    const rDay = Math.floor(Math.random() * 28) + 1;
    const rYear = Math.floor(Math.random() * 50) + 1975;
    setRandomDate({ month: rMonth, day: rDay, year: rYear });
  };

  const handleCheckAgeQuiz = () => {
    const daysGuess = Number(userGuess);
    if (!daysGuess || isNaN(daysGuess)) return;
    const approxYears = (daysGuess / 365.25).toFixed(1);
    setQuizFeedback(`At ${daysGuess.toLocaleString()} days alive, you are approximately ${approxYears} years old! Check your exact calculation above.`);
  };

  const today = new Date();
  const todayHistory = getHistoryForDate(today.getMonth() + 1, today.getDate());

  return (
    <div id="engagement-hub" className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
          💡
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
            Date Discovery & Daily Fun Facts
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Explore daily date trivia, random date facts, & age quizzes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Today in History */}
        <div className="p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm space-y-3">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-coral-500" />
            <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
              Today In History
            </h3>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {todayHistory.events[0]?.description || 'Groundbreaking scientific and historical discoveries occurred today!'}
          </p>

          <div className="p-3 rounded-2xl bg-blush-50 dark:bg-plum-950/60 text-xs font-bold text-coral-600 dark:text-coral-400">
            {todayHistory.calendarFact}
          </div>
        </div>

        {/* Card 2: Random Date Discovery */}
        <div className="p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shuffle className="w-5 h-5 text-coral-500" />
              <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
                Random Date Explorer
              </h3>
            </div>

            <button
              onClick={generateRandomDate}
              type="button"
              className="p-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-500 hover:bg-blush-200"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          {!randomDate ? (
            <div className="text-center py-4 space-y-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click below to discover a random date story!
              </p>
              <button
                onClick={generateRandomDate}
                type="button"
                className="px-4 py-2 rounded-2xl bg-coral-500 text-white font-extrabold text-xs shadow-sm"
              >
                Discover Random Date
              </button>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-blush-50 dark:bg-plum-950/60 space-y-1 text-xs animate-fadeIn">
              <span className="font-extrabold text-coral-500 block">
                Random Date: {randomDate.day} / {randomDate.month} / {randomDate.year}
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                {getHistoryForDate(randomDate.month, randomDate.day).events[0]?.title}
              </p>
            </div>
          )}
        </div>

        {/* Card 3: Age Quiz Challenge */}
        <div className="p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm space-y-3">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-coral-500" />
            <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
              Age Quiz Challenge
            </h3>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300">
            Can you guess how many days old you are? Enter your guess below:
          </p>

          <div className="flex gap-2">
            <input
              type="number"
              placeholder="e.g. 7500"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-blush-200 dark:border-plum-700 bg-blush-50 dark:bg-plum-950 text-xs font-bold outline-none"
            />
            <button
              onClick={handleCheckAgeQuiz}
              className="px-4 py-2 rounded-xl bg-coral-500 text-white font-extrabold text-xs flex-shrink-0"
            >
              Check
            </button>
          </div>

          {quizFeedback && (
            <p className="text-xs font-bold text-coral-600 dark:text-coral-300 bg-blush-50 dark:bg-plum-950 p-2.5 rounded-xl animate-fadeIn">
              {quizFeedback}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
