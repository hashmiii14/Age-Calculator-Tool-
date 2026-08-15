'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blush-200/80 dark:border-plum-800 bg-white/90 dark:bg-plum-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none"
          >
            <div className="w-9 h-9 rounded-2xl bg-coral-500 text-white flex items-center justify-center font-black text-base font-sans shadow-cute select-none tracking-tight shrink-0">
              AP
            </div>
            <span className="font-black text-xl sm:text-2xl tracking-tight font-sans uppercase whitespace-nowrap text-plum-900 dark:text-white">
              AGE<span className="text-coral-500 font-serif lowercase italic text-2xl">Pulse</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}


