# AgePulse – Precision Age & Duration Calculator

AgePulse is a production-ready, highly accurate, privacy-first, SEO-optimized, accessible, and Vercel/AdSense-ready web application built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

![AgePulse Banner](https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/og.png)

##  Features

- **Exact Chronological Age**: Computes complete years, months, and days adjusting for variable month lengths (28-31 days) and Gregorian leap years.
- **February 29 Birthday Rules**: Correctly advances leap-day birthdays on March 1st during non-leap years.
- **Lifetime Duration Breakdown**: Total months, weeks, days, hours, minutes, and seconds.
- **Next Birthday Countdown**: Ticking 1-second interval countdown timer with celebratory state when birthday is today.
- **Date Difference Mode**: Calculate exact duration between any arbitrary start date and end date.
- **Calculate Age on Any Date**: Works for past dates, today, or future milestone dates.
- **Privacy-First**: 100% client-side calculation inside browser. DOB is never uploaded to any backend.
- **Accessibility & UX**: Accessible keyboard navigation, WCAG high-contrast styling, light & dark theme toggle, reduced motion support, print stylesheet (`Ctrl + P`).
- **SEO & AdSense Ready**: Next.js App Router metadata, JSON-LD structured data (`WebApplication`, `WebSite`), custom XML sitemap & `robots.txt`, dedicated legal pages (`/privacy-policy`, `/terms`, `/disclaimer`), and non-intrusive AdSense placeholders (`AdSlot`).

---

## 🛠️ Project Structure

```text
├── app/
│   ├── layout.tsx             # Root layout with fonts, metadata, & JSON-LD
│   ├── page.tsx               # Homepage with Age Calculator hero & guide
│   ├── globals.css            # Tailwind directives, animations & print stylesheet
│   ├── age-calculator/        # Targeted /age-calculator route
│   ├── date-difference/       # Targeted /date-difference duration calculator route
│   ├── about/                 # About AgePulse & privacy promises
│   ├── contact/               # Contact page with honest email fallback
│   ├── privacy-policy/        # AdSense & GDPR compliant privacy policy
│   ├── terms/                 # Terms of service
│   ├── disclaimer/            # Accuracy legal disclaimer
│   ├── sitemap.ts             # XML Sitemap generator
│   └── robots.ts              # Search engine robots.txt generator
├── components/
│   ├── age-calculator/        # Form, result dashboard, birthday countdown, share/copy
│   ├── content/               # Educational guide & interactive FAQ accordion
│   ├── ads/                   # Reserved layout AdSlot component for AdSense
│   ├── layout/                # Header & Footer with mobile responsive drawer
│   └── ui/                    # CustomDatePicker, Breadcrumbs, PresetButtons
├── lib/age/
│   ├── dateUtils.ts           # Timezone-safe ISO date string parsers & formatters
│   ├── ageEngine.ts           # Pure deterministic chronological calculation engine
│   └── types.ts               # TypeScript interfaces
└── tests/
    └── ageEngine.test.ts      # 18+ Vitest unit tests for edge cases
```

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Automated Unit Tests
```bash
npm run test
```

### 4. Build for Production
```bash
npm run build
```

---

## ☁️ Deployment to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel Dashboard ([vercel.com/new](https://vercel.com/new)).
3. Vercel automatically detects Next.js. Click **Deploy**.
4. Configure your custom domain in Vercel Domain Settings.

---

## 💰 Google AdSense Setup

1. Copy `.env.example` to `.env.local` or configure Environment Variables in Vercel.
2. Set `NEXT_PUBLIC_ENABLE_ADS=true`.
3. Set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX` with your approved publisher ID.
4. Add the Google AdSense script tag inside `app/layout.tsx` after Google approval.
