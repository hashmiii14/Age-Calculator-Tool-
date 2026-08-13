'use client';

import { useState } from 'react';
import { Sparkles, Calendar, User, Brain, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { calculateAge } from '../../lib/age/ageEngine';
import { AgeResult, GenderPreference } from '../../lib/age/types';
import { PERSONALITY_QUIZ_QUESTIONS, PERSONALITY_ARCHETYPES, PersonalityArchetype } from '../../lib/data/personalityQuizData';
import AgeResultDashboard from '../age-calculator/AgeResultDashboard';

export default function DiscoverMeWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [dob, setDob] = useState('');
  const [genderPref, setGenderPref] = useState<GenderPreference>('Prefer not to say');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AgeResult | null>(null);

  const handleSelectQuizOption = (questionId: string, trait: string) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: trait }));
  };

  const calculateArchetype = (): PersonalityArchetype => {
    const counts: Record<string, number> = { Explorer: 0, Thinker: 0, Creator: 0, Planner: 0, Connector: 0 };
    Object.values(quizAnswers).forEach((trait) => {
      if (counts[trait] !== undefined) counts[trait]++;
    });

    let topTrait = 'Explorer';
    let maxCount = -1;
    Object.entries(counts).forEach(([trait, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topTrait = trait;
      }
    });

    return PERSONALITY_ARCHETYPES[topTrait] || PERSONALITY_ARCHETYPES.Explorer;
  };

  const handleGenerateProfile = () => {
    if (!dob) return;
    try {
      const calculated = calculateAge(dob, new Date().toISOString().split('T')[0]);
      calculated.genderPreference = genderPref;

      if (Object.keys(quizAnswers).length > 0) {
        calculated.personalityArchetype = calculateArchetype();
      }

      setResult(calculated);
      setStep(4);
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setStep(1);
    setDob('');
    setGenderPref('Prefer not to say');
    setQuizAnswers({});
    setResult(null);
  };

  return (
    <section id="discover-wizard" className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-b from-white to-blush-50 dark:from-plum-900 dark:to-plum-950 rounded-4xl p-6 sm:p-10 border border-blush-200 dark:border-plum-800 shadow-cute relative">

        {/* Wizard Step Navigation Indicator */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-blush-100 dark:border-plum-800 max-w-lg mx-auto gap-1 sm:gap-4 px-1 sm:px-0">
          {[
            { s: 1, label: '1. Date', icon: Calendar },
            { s: 2, label: '2. Style', icon: User },
            { s: 3, label: '3. Quiz', icon: Brain },
            { s: 4, label: '4. Profile', icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = step === item.s;
            const isDone = step > item.s;
            return (
              <div key={item.s} className="flex flex-col items-center space-y-1">
                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-coral-500 text-white ring-2 sm:ring-4 ring-coral-100 dark:ring-coral-950/60 scale-105 sm:scale-110'
                      : isDone
                      ? 'bg-emerald-500 text-white'
                      : 'bg-blush-100 dark:bg-plum-800 text-slate-400'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </div>
                <span className={`text-[10px] sm:text-[11px] font-bold truncate max-w-[65px] sm:max-w-none text-center ${isActive ? 'text-coral-500' : 'text-slate-400'}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: Enter DOB */}
        {step === 1 && (
          <div className="space-y-6 text-center max-w-md mx-auto animate-fadeIn">
            <div className="w-12 h-12 rounded-2xl bg-coral-100 dark:bg-plum-800 text-coral-500 flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-plum-900 dark:text-white font-serif">
                Discover My Birthday Profile
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Step 1: Enter your Date of Birth to unlock your personal date story.
              </p>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-plum-900 dark:text-slate-200 uppercase tracking-wider block">
                Select Your Date of Birth *
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-blush-200 dark:border-plum-700 bg-white dark:bg-plum-950 text-plum-900 dark:text-white text-sm font-semibold focus:ring-2 focus:ring-coral-400 outline-none shadow-sm"
              />
            </div>

            <button
              onClick={() => dob && setStep(2)}
              disabled={!dob}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-blush-500 disabled:opacity-50 text-white font-extrabold text-sm shadow-cute hover:shadow-cute-hover transition-all flex items-center justify-center space-x-2"
            >
              <span>Next: Personalize Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Optional Preference / Style */}
        {step === 2 && (
          <div className="space-y-6 text-center max-w-md mx-auto animate-fadeIn">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 dark:bg-plum-800 text-coral-500 flex items-center justify-center mx-auto">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-plum-900 dark:text-white font-serif">
                Personalize Your Profile
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Step 2 (Optional): Select your profile preference style.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {(['Prefer not to say', 'Female', 'Male'] as GenderPreference[]).map((pref) => (
                <button
                  key={pref}
                  type="button"
                  onClick={() => setGenderPref(pref)}
                  className={`py-3 px-2 rounded-2xl text-xs font-bold border transition-all ${
                    genderPref === pref
                      ? 'bg-coral-500 text-white border-coral-500 shadow-sm'
                      : 'bg-white dark:bg-plum-950 text-slate-700 dark:text-slate-200 border-blush-200 dark:border-plum-800 hover:bg-blush-50'
                  }`}
                >
                  {pref}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-2xl border border-blush-200 dark:border-plum-800 text-slate-600 dark:text-slate-300 font-bold text-xs"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-blush-500 text-white font-extrabold text-sm shadow-cute flex items-center justify-center space-x-2"
              >
                <span>Next: Personality Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Optional Personality Quiz */}
        {step === 3 && (
          <div className="space-y-6 max-w-lg mx-auto animate-fadeIn">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-coral-100 dark:bg-plum-800 text-coral-500 flex items-center justify-center mx-auto mb-2">
                <Brain className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-plum-900 dark:text-white font-serif">
                Birthday Personality Quiz
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Step 3 (Optional): Answer 4 quick questions for a fun archetype profile.
              </p>
            </div>

            <div className="space-y-5">
              {PERSONALITY_QUIZ_QUESTIONS.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-3xl bg-white/80 dark:bg-plum-950/80 border border-blush-100 dark:border-plum-800 space-y-3">
                  <span className="text-xs font-bold text-coral-500 uppercase tracking-wider block">
                    Question {idx + 1} of 4
                  </span>
                  <p className="text-sm font-extrabold text-plum-900 dark:text-white">
                    {q.question}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((opt) => {
                      const isSelected = quizAnswers[q.id] === opt.trait;
                      return (
                        <button
                          key={opt.text}
                          type="button"
                          onClick={() => handleSelectQuizOption(q.id, opt.trait)}
                          className={`text-left px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                            isSelected
                              ? 'bg-coral-500 text-white border-coral-500 shadow-sm'
                              : 'bg-blush-50/60 dark:bg-plum-900/60 text-slate-700 dark:text-slate-200 border-blush-200/60 dark:border-plum-800 hover:bg-blush-100'
                          }`}
                        >
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-2xl border border-blush-200 dark:border-plum-800 text-slate-600 dark:text-slate-300 font-bold text-xs"
              >
                Back
              </button>
              <button
                onClick={handleGenerateProfile}
                className="w-2/3 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 via-coral-400 to-blush-500 text-white font-extrabold text-sm shadow-cute flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate My Dashboard</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Generated Profile Dashboard */}
        {step === 4 && result && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-blush-200 dark:border-plum-800">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-coral-500" />
                <span className="font-serif font-extrabold text-xl text-plum-900 dark:text-white">
                  Your Birthday Profile Story
                </span>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-bold hover:bg-blush-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Explore Again</span>
              </button>
            </div>

            <AgeResultDashboard result={result} />
          </div>
        )}

      </div>
    </section>
  );
}
