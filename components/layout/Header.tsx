'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, Heart, Compass, Trophy, Users, Grid, Info, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/',                   label: 'Age Calculator', icon: Clock  },
    { href: '/birthday-countdown', label: 'Birthday',       icon: Heart  },
    { href: '/zodiac-sign',        label: 'Zodiac',         icon: Compass },
    { href: '/age-milestones',     label: 'Milestones',     icon: Trophy },
    { href: '/age-comparison',     label: 'Compare',        icon: Users  },
    { href: '/date-tools',         label: 'Tools',          icon: Grid   },
    { href: '/about',              label: 'About',          icon: Info   },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blush-200/80 dark:border-plum-800 bg-white/90 dark:bg-plum-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
          >
            <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-black text-sm font-sans shadow-cute select-none tracking-tight shrink-0">
              AP
            </div>
            <span className="font-black text-lg sm:text-xl tracking-wide font-sans uppercase whitespace-nowrap text-plum-900 dark:text-white">
              AGE<span className="text-coral-500 font-serif lowercase italic text-xl">Pulse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    active
                      ? 'bg-coral-500 text-white shadow-cute'
                      : 'text-slate-600 dark:text-slate-300 hover:text-coral-600 dark:hover:text-white hover:bg-blush-100 dark:hover:bg-plum-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-extrabold shadow-cute hover:shadow-cute-hover transition-all whitespace-nowrap"
            >
              Calculate Age
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-blush-200 dark:border-plum-800 bg-blush-50 dark:bg-plum-900 text-slate-700 dark:text-slate-300 hover:text-coral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-blush-200 dark:border-plum-800 bg-white/95 dark:bg-plum-950/95 animate-fade-up">
          <div className="max-w-[1140px] mx-auto px-4 py-4 grid grid-cols-2 gap-2 sm:gap-3">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    active
                      ? 'bg-coral-500 text-white border-coral-500 shadow-cute'
                      : 'bg-blush-50 dark:bg-plum-900 text-slate-700 dark:text-slate-300 border-blush-200 dark:border-plum-800 hover:border-coral-300'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

