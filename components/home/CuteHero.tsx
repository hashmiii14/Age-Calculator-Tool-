'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Lock, Star, Calendar } from 'lucide-react';

export default function CuteHero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-6 sm:pt-6 sm:pb-8">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-50 -z-10">
        <div className="absolute top-4 left-8 w-40 h-40 rounded-full bg-pinkPastel-200/50 blur-3xl animate-float"></div>
        <div className="absolute bottom-2 right-12 w-52 h-52 rounded-full bg-pinkPastel-300/40 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Main Hero Headline & Copy */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-xs font-black uppercase tracking-wider text-pinkPastel-600 dark:text-pinkPastel-300">
              <Calendar className="w-3.5 h-3.5 text-pinkPastel-500" />
              <span>Exact Age & Birthday Companion</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-purpleText-900 dark:text-white font-serif leading-[1.15]">
              Calculate Your <span className="text-pinkPastel-500 font-serif italic">Exact Age 🎂</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-purpleText-600 dark:text-purpleText-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Find your exact age, next birthday, and life milestones in seconds.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-extrabold text-purpleText-700 dark:text-purpleText-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm">
                <Lock className="w-3.5 h-3.5 text-pinkPastel-500" />
                <span>Calculated privately in your browser</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-pinkPastel-500" />
                <span>100% Calendar Accurate</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Baby Artwork & Floating Animations */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square rounded-4xl p-3 bg-gradient-to-b from-white to-pinkPastel-100 dark:from-purpleText-900 dark:to-purpleText-950 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute group">
              
              {/* Image artwork */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-inner">
                <Image
                  src="/images/hero-baby.jpg"
                  alt="Cute birthday companion illustration with balloons and celebration background"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-3 -right-2 px-3 py-1.5 rounded-2xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-cute text-pinkPastel-500 font-extrabold text-xs flex items-center space-x-1 animate-float">
                <Star className="w-3.5 h-3.5 fill-pinkPastel-500 text-pinkPastel-500" />
                <span>Friendly & Precise</span>
              </div>

              <div className="absolute -bottom-3 -left-2 px-3 py-1 rounded-2xl bg-pinkPastel-500 text-white shadow-cute text-xs font-extrabold flex items-center space-x-1 animate-float" style={{ animationDelay: '1.5s' }}>
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>Milestone Tracker</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
