import { BookOpen, Calendar, HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AgeCalculatorGuide() {
  return (
    <article className="w-full max-w-4xl mx-auto space-y-12 py-8 text-slate-800 dark:text-slate-200">
      {/* Introduction */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 font-semibold text-sm uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Comprehensive Guide</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Understanding Chronological Age Calculation
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Age is more than just a number—it represents the exact passage of time since your birth. While it might seem simple, calculating your exact chronological age in years, months, days, weeks, and hours involves complex calendar rules including varying month lengths and leap years.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-none space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-brand-600 dark:text-brand-400" />
          <span>Why Chronological Math Differs From Simple Division</span>
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          A common misconception is that calculating age simply requires dividing the total number of days lived by 365 or 365.25. However, doing so yields incorrect calendar ages because:
        </p>
        <ul className="space-y-3">
          {[
            {
              title: 'Variable Month Lengths',
              desc: 'Months range from 28 to 31 days. A month between February 1 and March 1 spans 28 days (or 29 in a leap year), while a month between July 1 and August 1 spans 31 days.',
            },
            {
              title: 'Gregorian Leap Years',
              desc: 'Every 4 years (with century exceptions), an extra day is added to February. Simply dividing by 365 fails to place your birthday on the actual calendar date.',
            },
            {
              title: 'End-of-Month Adjustments',
              desc: 'For dates occurring near the end of a month (such as January 31), advancing one month requires carrying over days into the previous month’s accurate day-count.',
            },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">{item.title}: </strong>
                <span className="text-slate-600 dark:text-slate-300">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Leap Years and Feb 29 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
            What Happens With Leap Years?
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The Gregorian calendar adds a leap day on February 29 during years divisible by 4, except for century years that are not divisible by 400. For instance:
          </p>
          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1">
            <p>• 2000 = Leap Year (Divisible by 400)</p>
            <p>• 1900 = Standard Year (Divisible by 100, not 400)</p>
            <p>• 2024 = Leap Year (Divisible by 4)</p>
            <p>• 2025 = Standard Year</p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
            February 29 Birthdays (Leap Day)
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            People born on February 29 (known as &quot;leaplings&quot;) celebrate their birth on March 1st during non-leap years under standard legal conventions. AgePulse accurately advances leapling age on March 1st in common years, ensuring 100% mathematical consistency.
          </p>
        </div>
      </section>

      {/* Concrete Worked Examples */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Real-World Age Calculation Examples
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card dark:shadow-none space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              <span>Example 1: Standard Birthdate</span>
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1 font-mono">
              <p>• <strong>Date of Birth:</strong> March 14, 2006</p>
              <p>• <strong>Calculate On:</strong> June 7, 2025</p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white">
              Result: 19 Years, 2 Months, 24 Days (Total 7,025 Days)
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card dark:shadow-none space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              <span>Example 2: Leap Day Birthdate</span>
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1 font-mono">
              <p>• <strong>Date of Birth:</strong> February 29, 2000</p>
              <p>• <strong>Calculate On:</strong> March 1, 2001</p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white">
              Result: Exactly 1 Year, 0 Months, 0 Days
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Assurance */}
      <section className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center space-x-3 text-emerald-400">
          <ShieldCheck className="w-6 h-6" />
          <h3 className="text-xl font-bold text-white">Your Privacy Is Guaranteed</h3>
        </div>
        <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
          AgePulse processes 100% of calculations inside your browser using standard JavaScript ECMAScript engines. Your date of birth is never uploaded to any backend server, database, or third-party analytical tool.
        </p>
      </section>
    </article>
  );
}
