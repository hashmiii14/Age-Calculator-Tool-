'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blush-200/80 dark:border-charcoal-800 bg-white/90 dark:bg-charcoal-900/95 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* LEFT: Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-1 shrink-0 focus-visible:outline-none group"
            aria-label="AgePulse Home"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight font-sans text-charcoal-900 dark:text-white">
              Age<span className="text-roseProduct-500 font-serif italic text-2xl sm:text-3xl font-bold ml-0.5">Pulse</span>
            </span>
          </Link>

          {/* CENTER / RIGHT Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-charcoal-600 dark:text-charcoal-300">
            <Link href="/" className="hover:text-roseProduct-500 transition-colors">
              Home
            </Link>
            <a href="#calculator-form" className="hover:text-roseProduct-500 transition-colors">
              Age Calculator
            </a>
            <Link href="/about" className="hover:text-roseProduct-500 transition-colors">
              About
            </Link>
          </nav>

          {/* RIGHT: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="#calculator-form"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-roseProduct-500 hover:bg-roseProduct-600 active:scale-[0.98] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <span>Calculate Age</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-blush-50 dark:hover:bg-charcoal-800 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blush-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 px-4 pt-3 pb-5 space-y-3 animate-fade-up">
          <nav className="flex flex-col space-y-2.5 text-sm font-semibold text-charcoal-700 dark:text-charcoal-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-blush-50 dark:hover:bg-charcoal-800"
            >
              Home
            </Link>
            <a
              href="#calculator-form"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-blush-50 dark:hover:bg-charcoal-800"
            >
              Age Calculator
            </a>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-blush-50 dark:hover:bg-charcoal-800"
            >
              About
            </Link>
          </nav>

          <div className="pt-2">
            <a
              href="#calculator-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-roseProduct-500 text-white font-bold text-xs shadow-sm"
            >
              <span>Calculate Age</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}




