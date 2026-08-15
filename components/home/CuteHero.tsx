'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function CuteHero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-6 sm:pt-6 sm:pb-8">
      {/* Subtle Pastel Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-50 -z-10">
        <div className="absolute top-4 left-8 w-40 h-40 rounded-full bg-pinkPastel-200/50 blur-3xl animate-float"></div>
        <div className="absolute bottom-2 right-12 w-52 h-52 rounded-full bg-pinkPastel-300/40 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Hero Title & Description */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-purpleText-900 dark:text-white font-serif leading-[1.15]">
              Exact <span className="text-pinkPastel-500 font-serif italic">Age Calculator</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-purpleText-600 dark:text-purpleText-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Discover exact age in years, months, and days for your little ones or loved ones. Precision calendar calculations made simple, beautiful, and cute.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-extrabold text-purpleText-600 dark:text-purpleText-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm">
                <Heart className="w-3.5 h-3.5 text-pinkPastel-500 fill-pinkPastel-500" />
                <span>Baby & Child Friendly</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-pinkPastel-500" />
                <span>Instant & 100% Accurate</span>
              </span>
            </div>
          </div>

          {/* Right Column: Original Cute Baby Illustration Container */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square rounded-4xl p-3 bg-gradient-to-b from-white to-pinkPastel-100 dark:from-purpleText-900 dark:to-purpleText-950 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute group">
              
              {/* Cute 3D Baby Artwork */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-inner">
                <Image
                  src="/images/hero-baby.jpg"
                  alt="Cute baby girl with teddy bear and balloons illustration"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Decorative Badges */}
              <div className="absolute -top-3 -right-2 px-3 py-1.5 rounded-2xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-cute text-pinkPastel-500 font-extrabold text-xs flex items-center space-x-1 animate-float">
                <Star className="w-3.5 h-3.5 fill-pinkPastel-500 text-pinkPastel-500" />
                <span>Cute & Trustworthy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

