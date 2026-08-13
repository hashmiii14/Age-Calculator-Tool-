'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, Heart, Compass, Trophy, Grid, Info, Users, Menu, X } from 'lucide-react';

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
    <header
      style={{ backgroundColor: 'rgba(14,16,24,0.95)', borderColor: '#252A3D' }}
      className="sticky top-0 z-50 w-full border-b backdrop-blur-lg"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Brand Logo - ALWAYS visible on mobile, tablet & desktop */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D36]"
          >
            <div
              style={{ backgroundColor: '#E85D36' }}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white font-black text-xs sm:text-sm font-sans shadow-md select-none tracking-tighter shrink-0"
            >
              AP
            </div>
            <span style={{ color: '#F2F4FB' }} className="font-black text-base sm:text-lg lg:text-xl tracking-wider font-sans uppercase whitespace-nowrap">
              AGE<span style={{ color: '#E85D36' }}>PULSE</span>
            </span>
          </Link>

          {/* Desktop & Tablet Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={active
                    ? { backgroundColor: '#E85D36', color: '#fff' }
                    : { color: '#9AA3C4' }
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors hover:text-white hover:bg-[#1D2133]"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls — CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/"
              style={{ backgroundColor: '#E85D36', color: '#fff' }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-extrabold shadow hover:bg-[#D04521] transition-colors whitespace-nowrap"
            >
              Discover My Age
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#9AA3C4' }}
              className="lg:hidden p-2 rounded-lg border hover:bg-[#1D2133] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D36] shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }} className="lg:hidden border-b animate-fade-up">
          <div className="max-w-[1140px] mx-auto px-4 py-4 grid grid-cols-2 gap-2 sm:gap-3">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={active
                    ? { backgroundColor: '#E85D36', color: '#fff', borderColor: '#E85D36' }
                    : { backgroundColor: '#161A26', color: '#9AA3C4', borderColor: '#252A3D' }
                  }
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all"
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
