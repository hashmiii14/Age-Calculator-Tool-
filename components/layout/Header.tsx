'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Clock, Heart, Compass, Trophy, Users, Grid, Info, Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasSavedDOB, setHasSavedDOB] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedDOB = localStorage.getItem('agepulse_dob');
    setHasSavedDOB(!!savedDOB);
  }, [pathname]);

  const navLinks = hasSavedDOB
    ? [
        { href: '/', label: 'Your AgePulse', icon: Sparkles },
        { href: '/birthday-countdown', label: 'Your Birthday', icon: Heart },
        { href: '/zodiac-sign', label: 'Your Zodiac', icon: Compass },
        { href: '/birth-date', label: 'Your Date', icon: Calendar },
        { href: '/age-milestones', label: 'Milestones', icon: Trophy },
        { href: '/date-tools', label: 'Tools', icon: Grid },
      ]
    : [
        { href: '/', label: 'Home', icon: Calendar },
        { href: '/age-calculator', label: 'Age Calculator', icon: Clock },
        { href: '/birthday-countdown', label: 'Birthday', icon: Heart },
        { href: '/zodiac-sign', label: 'Astrology', icon: Compass },
        { href: '/age-comparison', label: 'Compare', icon: Users },
        { href: '/date-tools', label: 'Date Tools', icon: Grid },
        { href: '/about', label: 'About', icon: Info },
      ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-zinc-800 bg-[#FAFAFA]/90 dark:bg-[#121214]/90 backdrop-blur-md transition-colors">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2.5 group focus:outline-none rounded-xl p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-serif font-extrabold text-sm shadow-subtle group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white font-serif">
                Age<span className="text-coral-500">Pulse</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                    isActive
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {!hasSavedDOB && (
              <a
                href="/#dob-input-section"
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-coral-500 hover:bg-coral-600 text-white text-xs font-extrabold shadow-subtle transition-all"
              >
                <span>Discover My Age</span>
              </a>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                      : 'bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-coral-500" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
