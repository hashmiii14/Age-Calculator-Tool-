'use client';

import { useState } from 'react';
import { Sparkles, Brain, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { PERSONALITY_QUIZ_QUESTIONS, PERSONALITY_ARCHETYPES, PersonalityArchetype } from '../../lib/data/personalityQuizData';

interface PersonalityQuizSectionProps {
  initialArchetype?: PersonalityArchetype;
}

export default function PersonalityQuizSection({ initialArchetype }: PersonalityQuizSectionProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [archetype, setArchetype] = useState<PersonalityArchetype | null>(
    initialArchetype || null
  );

  const handleSelectOption = (questionId: string, trait: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: trait }));
  };

  const handleCalculateResult = () => {
    const counts: Record<string, number> = { Explorer: 0, Thinker: 0, Creator: 0, Planner: 0, Connector: 0 };
    Object.values(answers).forEach((trait) => {
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

    setArchetype(PERSONALITY_ARCHETYPES[topTrait] || PERSONALITY_ARCHETYPES.Explorer);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setArchetype(null);
  };

  const isCompleted = Object.keys(answers).length === PERSONALITY_QUIZ_QUESTIONS.length;

  return (
    <div id="personality-discovery" className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
            🎨
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
              What Does Your Birthday Say About You?
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Fun Birthday Personality Discovery & Interactive Quiz
            </p>
          </div>
        </div>

        {archetype && (
          <button
            onClick={handleResetQuiz}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-bold hover:bg-blush-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Quiz</span>
          </button>
        )}
      </div>

      {!archetype ? (
        <div className="p-6 sm:p-8 rounded-4xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-cute space-y-6">
          <div className="space-y-6">
            {PERSONALITY_QUIZ_QUESTIONS.map((q, idx) => (
              <div key={q.id} className="p-5 rounded-3xl bg-blush-50/70 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800/80 space-y-3">
                <span className="text-xs font-extrabold text-coral-500 uppercase tracking-wider block">
                  Question {idx + 1} of {PERSONALITY_QUIZ_QUESTIONS.length}
                </span>
                <p className="text-sm font-extrabold text-plum-900 dark:text-white">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.trait;
                    return (
                      <button
                        key={opt.text}
                        type="button"
                        onClick={() => handleSelectOption(q.id, opt.trait)}
                        className={`text-left p-3.5 rounded-2xl text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-coral-500 text-white border-coral-500 shadow-sm'
                            : 'bg-white dark:bg-plum-900 text-slate-800 dark:text-slate-200 border-blush-200/80 dark:border-plum-800 hover:bg-blush-100'
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

          <button
            onClick={handleCalculateResult}
            disabled={!isCompleted}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-coral-500 to-blush-500 disabled:opacity-50 text-white font-extrabold text-sm shadow-cute hover:shadow-cute-hover transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reveal My Personality Profile</span>
          </button>
        </div>
      ) : (
        /* Archetype Result Reveal Card */
        <div className={`p-6 sm:p-8 rounded-4xl bg-gradient-to-br ${archetype.bgGradient} border border-blush-200 dark:border-plum-800 shadow-cute space-y-6 animate-fadeIn`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-blush-200/60 dark:border-plum-800/60">
            <div className="space-y-1">
              <span className="px-3.5 py-1 rounded-full bg-white/80 dark:bg-plum-900/80 text-coral-600 dark:text-coral-300 text-xs font-extrabold">
                {archetype.badge}
              </span>
              <h3 className="text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
                {archetype.title}
              </h3>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                {archetype.tagline}
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-coral-500 text-white flex items-center justify-center text-2xl shadow-lg">
              ✨
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            {archetype.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-3xl bg-white/90 dark:bg-plum-900/90 border border-blush-100 dark:border-plum-800 space-y-1">
              <span className="font-extrabold text-coral-600 dark:text-coral-400 uppercase tracking-wider block">
                Superpower
              </span>
              <p className="text-slate-700 dark:text-slate-200 font-bold">
                {archetype.superpower}
              </p>
            </div>

            <div className="p-4 rounded-3xl bg-white/90 dark:bg-plum-900/90 border border-blush-100 dark:border-plum-800 space-y-1">
              <span className="font-extrabold text-plum-900 dark:text-white uppercase tracking-wider block">
                Ideal Habitats
              </span>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                {archetype.idealHabitats.join(' • ')}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-3xl bg-white/80 dark:bg-plum-900/80 border border-blush-100 dark:border-plum-800 text-xs italic text-coral-600 dark:text-coral-300 font-medium text-center">
            &ldquo;{archetype.funQuote}&rdquo;
          </div>
        </div>
      )}
    </div>
  );
}
