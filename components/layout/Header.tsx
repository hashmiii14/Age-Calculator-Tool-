'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  Calendar,
  Clock,
  Heart,
  Compass,
  Trophy,
  Users,
  Grid,
  Info,
  Menu,
  X
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Calendar },
    { href: '/age-calculator', label: 'Age Calculator', icon: Clock },
    { href: '/birthday-countdown', label: 'Birthday', icon: Heart },
    { href: '/zodiac-sign', label: 'Astrology', icon: Compass },
    { href: '/birth-date', label: 'Birth Date', icon: Sparkles },
    { href: '/age-milestones', label: 'Milestones', icon: Trophy },
    { href: '/age-comparison', label: 'Compare', icon: Users },
    { href: '/date-tools', label: 'Date Tools', icon: Grid },
    { href: '/about', label: 'About', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blush-200/60 dark:border-plum-800/60 bg-[#FFF0F4]/90 dark:bg-[#1C121E]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-coral-400 rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-coral-500 via-coral-400 to-blush-400 flex items-center justify-center text-white shadow-md shadow-coral-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-sparkle" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-plum-900 dark:text-white font-serif">
                Age<span className="text-coral-500">Pulse</span>
              </span>
              <span className="text-[10px] font-bold text-coral-600 dark:text-coral-400 uppercase tracking-widest -mt-1">
                Date & Birth Discovery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-coral-500 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-blush-200/60 dark:hover:bg-plum-800/60'
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

            <Link
              href="/#discover-wizard"
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-coral-500 to-blush-500 hover:from-coral-600 hover:to-blush-600 text-white text-xs font-extrabold shadow-cute hover:shadow-cute-hover transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Discover My Profile</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full border border-blush-200 dark:border-plum-800 text-slate-700 dark:text-slate-200 hover:bg-blush-100 dark:hover:bg-plum-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-blush-200 dark:border-plum-800 bg-[#FFF5F8] dark:bg-plum-950 px-4 pt-3 pb-5 space-y-1.5 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2">
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
                      ? 'bg-coral-500 text-white'
                      : 'bg-white/80 dark:bg-plum-900/80 text-slate-800 dark:text-slate-200 border border-blush-100 dark:border-plum-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-coral-500 dark:text-coral-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/#discover-wizard"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-coral-500 text-white text-xs font-extrabold shadow-cute text-center"
          >
            <Sparkles className="w-4 h-4" />
            <span>Discover My Birthday Profile</span>
          </Link>
        </div>
      )}
    </header>
  );
}
