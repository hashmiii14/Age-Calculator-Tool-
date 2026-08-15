import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant Orange / Terracotta primary brand
        coral: {
          50:  "#FFF5F2",
          100: "#FCEAE6",
          200: "#F9CFC5",
          300: "#F4A390",
          400: "#EE7254",
          500: "#E85D36", // Primary CTA button color from reference image
          600: "#D2441D",
          700: "#A93213",
          800: "#892A13",
          900: "#712716",
        },
        // Warm peach & blush background accents
        blush: {
          50:  "#FFFAF9",
          100: "#FFF5F4",
          200: "#FDEAE8",
          300: "#FBD6D2",
          400: "#F7B2AA",
          500: "#EE867B",
          600: "#DB5E53",
          700: "#B84239",
          800: "#973932",
          900: "#7D332D",
        },
        // Deep plum / warm dark theme
        plum: {
          50:  "#FAF7FA",
          100: "#F3EEF4",
          200: "#E6DCE8",
          300: "#D1C0D4",
          400: "#B299B6",
          500: "#917096",
          600: "#75547B",
          700: "#5D4163",
          800: "#3D2843",
          900: "#26172C", // Rich dark card background
          950: "#1A0E1F", // Main dark page background
        },
        surface: {
          bg:  "#0E1018",   
          card: "#161A26",  
          elevated: "#1D2133",
          border: "#252A3D", 
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
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        card:  "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)",
        cute:  "0 10px 30px -5px rgba(232, 93, 54, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        "cute-hover": "0 14px 36px -4px rgba(232, 93, 54, 0.15), 0 6px 16px -2px rgba(0, 0, 0, 0.06)",
        glow:  "0 0 0 3px rgba(232,93,54,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
        "fadeIn":  "fadeIn 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

