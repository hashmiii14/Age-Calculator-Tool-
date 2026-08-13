'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('agepulse_theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('agepulse_theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('agepulse_theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-full bg-blush-100 dark:bg-plum-800 text-blush-700 dark:text-blush-200 hover:bg-blush-200 dark:hover:bg-plum-700 transition-all duration-200 shadow-sm border border-blush-200 dark:border-plum-700 focus:outline-none focus:ring-2 focus:ring-coral-400"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Pink Light Mode" : "Switch to Dark Plum Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4 text-plum-900" />
      )}
    </button>
  );
}
