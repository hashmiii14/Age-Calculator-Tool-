'use client';

import Link from 'next/link';
import { ShieldCheck, Trash2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClearData = () => {
    try {
      localStorage.removeItem('agepulse_dob');
      window.location.href = '/';
    } catch (e) { console.error(e); }
  };

  return (
    <footer style={{ backgroundColor: '#0A0D14', borderColor: '#252A3D' }} className="border-t mt-auto">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8 py-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#252A3D]">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div style={{ backgroundColor: '#E85D36' }} className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-sm font-serif">A</div>
              <span style={{ color: '#F2F4FB' }} className="font-extrabold text-lg font-serif">
                Age<span style={{ color: '#E85D36' }}>Pulse</span>
              </span>
            </Link>
            <p style={{ color: '#636B8A' }} className="text-sm leading-relaxed max-w-sm">
              Personal date intelligence platform. Exact age, birthday countdown, day milestones, and date discoveries — all calculated in your browser.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <div style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#9AA3C4' }} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border">
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: '#22c55e' }} />
                Calculations stay in your browser
              </div>
              <button
                onClick={handleClearData}
                style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#636B8A' }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border hover:text-[#E85D36] transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                Clear Saved Date
              </button>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 style={{ color: '#F2F4FB' }} className="text-xs font-extrabold uppercase tracking-wider mb-4 font-sans">
              Calculators
            </h3>
            <ul className="space-y-2.5 text-sm font-medium" style={{ color: '#636B8A' }}>
              {[
                ['/age-calculator',      'Exact Age Calculator'],
                ['/birthday-countdown',  'Birthday Countdown'],
                ['/zodiac-sign',         'Zodiac Sign Profile'],
                ['/birth-date',          'Birth Date Profile'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#E85D36] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h3 style={{ color: '#F2F4FB' }} className="text-xs font-extrabold uppercase tracking-wider mb-4 font-sans">
              More Tools
            </h3>
            <ul className="space-y-2.5 text-sm font-medium" style={{ color: '#636B8A' }}>
              {[
                ['/date-difference',  'Date Difference'],
                ['/age-comparison',   'Age Comparison'],
                ['/on-this-date',     'On This Date'],
                ['/date-tools',       'All Date Tools'],
                ['/age-milestones',   'Age Milestones'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#E85D36] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ color: '#F2F4FB' }} className="text-xs font-extrabold uppercase tracking-wider mb-4 font-sans">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm font-medium" style={{ color: '#636B8A' }}>
              {[
                ['/about',          'About AgePulse'],
                ['/privacy-policy', 'Privacy Policy'],
                ['/terms',          'Terms of Service'],
                ['/disclaimer',     'Disclaimer'],
                ['/contact',        'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#E85D36] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="pt-8 space-y-4">
          <p style={{ color: '#636B8A', backgroundColor: '#161A26', borderColor: '#252A3D' }} className="text-xs leading-relaxed rounded-xl border px-4 py-3">
            <strong style={{ color: '#9AA3C4' }}>Astrology Disclaimer:</strong> Zodiac profiles on AgePulse are provided strictly for general interest and entertainment. They do not constitute psychological, medical, financial, or legal advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: '#636B8A' }}>
            <span>© {year} AgePulse. All rights reserved.</span>
            <span>Precise calendar arithmetic · Client-side privacy · Free forever</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
