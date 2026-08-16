'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Gift,
  Trophy,
  Clock,
  Users,
  Sparkles,
  Heart,
} from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsToolsDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsToolsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/age-calculator', label: 'Age Calculator' },
    { href: '/birthday-countdown', label: 'Birthday Countdown' },
    { href: '/age-milestones', label: 'Milestones' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const secondaryTools = [
    { href: '/date-difference', label: 'Date Difference', icon: Calendar },
    { href: '/age-comparison', label: 'Age Comparison', icon: Users },
    { href: '/zodiac-sign', label: 'Zodiac Profile', icon: Sparkles },
    { href: '/on-this-date', label: 'On This Date', icon: Clock },
    { href: '/date-tools', label: 'All Date Tools', icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pinkPastel-200/80 dark:border-purpleText-800 bg-white/90 dark:bg-purpleText-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none group"
            aria-label="AGEpulse Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-pinkPastel-500 to-pinkPastel-400 text-white flex items-center justify-center shadow-cute group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <span className="font-black text-xl sm:text-2xl tracking-tight font-sans uppercase whitespace-nowrap text-purpleText-900 dark:text-white">
              AGE<span className="text-pinkPastel-500 font-serif lowercase italic text-2xl sm:text-3xl font-bold ml-0.5">pulse</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300'
                      : 'text-purpleText-700 dark:text-purpleText-300 hover:text-pinkPastel-500 hover:bg-pinkPastel-50 dark:hover:bg-purpleText-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* More Tools Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  isToolsDropdownOpen
                    ? 'bg-pinkPastel-500 text-white'
                    : 'text-purpleText-700 dark:text-purpleText-300 hover:text-pinkPastel-500 hover:bg-pinkPastel-50 dark:hover:bg-purpleText-900'
                }`}
                aria-expanded={isToolsDropdownOpen}
                aria-haspopup="true"
              >
                <span>More Tools</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isToolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsToolsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 rounded-3xl bg-white dark:bg-purpleText-900 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute p-2 z-50 animate-fade-up">
                    {secondaryTools.map((tool) => {
                      const Icon = tool.icon;
                      const isToolActive = pathname === tool.href;
                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-xs font-extrabold transition-colors ${
                            isToolActive
                              ? 'bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300'
                              : 'text-purpleText-800 dark:text-purpleText-200 hover:bg-pinkPastel-50 dark:hover:bg-purpleText-800/60 hover:text-pinkPastel-500'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-pinkPastel-500" />
                          <span>{tool.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/birthday-countdown"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-pinkPastel-500 hover:bg-pinkPastel-600 text-white text-xs font-black uppercase tracking-wider shadow-cute transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Gift className="w-4 h-4" />
              <span>Birthday Countdown</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-900 text-purpleText-900 dark:text-white hover:text-pinkPastel-500 transition-colors focus:outline-none cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-purpleText-950/60 backdrop-blur-sm z-40 animate-fadeIn">
          <div className="bg-white dark:bg-purpleText-950 border-b-2 border-pinkPastel-200 dark:border-purpleText-800 p-5 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm font-extrabold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-pinkPastel-100 dark:bg-purpleText-900 text-pinkPastel-600 dark:text-pinkPastel-300'
                        : 'text-purpleText-900 dark:text-white hover:bg-pinkPastel-50 dark:hover:bg-purpleText-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-pinkPastel-500" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-pinkPastel-100 dark:border-purpleText-900 space-y-2">
              <p className="text-[11px] font-black uppercase tracking-wider text-purpleText-400 px-4">
                More Date Tools
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {secondaryTools.map((tool) => {
                  const Icon = tool.icon;
                  const isToolActive = pathname === tool.href;
                  return (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition-colors ${
                        isToolActive
                          ? 'bg-pinkPastel-100 dark:bg-purpleText-900 text-pinkPastel-600 dark:text-pinkPastel-300'
                          : 'bg-pinkPastel-50/60 dark:bg-purpleText-900/50 text-purpleText-800 dark:text-purpleText-200 hover:bg-pinkPastel-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-pinkPastel-500" />
                      <span>{tool.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/birthday-countdown"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-pinkPastel-500 text-white font-extrabold text-sm shadow-cute"
              >
                <Gift className="w-4 h-4" />
                <span>Check Birthday Countdown</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
