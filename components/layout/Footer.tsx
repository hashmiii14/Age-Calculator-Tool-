import Link from 'next/link';
import { Calendar, ShieldCheck, Lock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#090d16] transition-colors py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">
                Age<span className="text-orange-400">Pulse</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision chronological age and date difference calculator. Fast, accurate, accessible, and 100% private.
            </p>
            <div className="flex items-center space-x-2 text-xs font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 px-3 py-1.5 rounded-lg w-fit">
              <Lock className="w-3.5 h-3.5" />
              <span>100% Private Client Calculation</span>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Calculators
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Exact Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/date-difference" className="hover:text-orange-400 transition-colors">
                  Date Difference Calculator
                </Link>
              </li>
              <li>
                <Link href="/#birthday-countdown" className="hover:text-orange-400 transition-colors">
                  Next Birthday Countdown
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About AgePulse
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal & Privacy
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-orange-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} AgePulse. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Built for speed, accuracy, and accessibility.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
