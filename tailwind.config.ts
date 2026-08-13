import type { Config } from "tailwindcss";

const config: Config = {
  // No darkMode class — single unified dark theme only
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color — warm coral/orange
        brand: {
          50:  "#FFF5F0",
          100: "#FFE8DA",
          200: "#FFCDB4",
          300: "#FFA882",
          400: "#F87B4E",
          500: "#E85D36", // primary CTA
          600: "#D04521",
          700: "#A83318",
          800: "#8A2914",
          900: "#722212",
        },
        // Surface / structure
        surface: {
          50:  "#F5F6FA",
          100: "#E8EAF2",
          200: "#D0D4E6",
          300: "#A8AFCC",
          400: "#7880A8",
          500: "#4E5680",
          bg:  "#0E1018",   // page background
          card: "#161A26",  // card surface
          elevated: "#1D2133", // elevated card / popover
          border: "#252A3D", // default border
          muted:  "#2A3050", // muted border / dividers
        },
        // Text scale
        content: {
          primary:   "#F2F4FB",
          secondary: "#9AA3C4",
          tertiary:  "#636B8A",
          inverse:   "#0E1018",
        },
      },
      fontFamily: {
        sans:  ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono:  ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      maxWidth: {
        content: "1140px",
        prose:   "72ch",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        // Subtle elevation for cards in dark backgrounds
        card:  "0 1px 4px 0 rgba(0,0,0,0.35), 0 4px 24px -4px rgba(0,0,0,0.5)",
        hover: "0 2px 8px 0 rgba(0,0,0,0.4), 0 8px 32px -4px rgba(0,0,0,0.55)",
        glow:  "0 0 0 3px rgba(232,93,54,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-slow": "pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
