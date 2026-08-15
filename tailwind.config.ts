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
        // Refined Rose & Blush Product Palette
        roseProduct: {
          50:  "#FFF1F2", // Light blush background
          100: "#FFE4E6", // Soft card tint
          200: "#FECDD3", // Subtle rose border
          300: "#FDA4AF", // Accent border
          400: "#FB7185", // Medium rose highlight
          500: "#E11D48", // Primary CTA rose
          600: "#BE123C", // CTA hover
          700: "#9F1239", // Deep rose accent
          800: "#881337",
          900: "#4C0519",
        },
        charcoal: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF", // Muted text
          500: "#6B7280", // Secondary body text
          700: "#374151", // Subheadings
          800: "#1F2937", // Dark card background
          900: "#111827", // Main primary dark text
          950: "#030712",
        },
        // Fallback color mappings for existing component compatibility
        pinkPastel: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#E11D48",
          600: "#BE123C",
          700: "#9F1239",
          800: "#881337",
          900: "#4C0519",
        },
        coral: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#E11D48",
          600: "#BE123C",
          700: "#9F1239",
          800: "#881337",
          900: "#4C0519",
        },
        blush: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#E11D48",
          600: "#BE123C",
          700: "#9F1239",
          800: "#881337",
          900: "#4C0519",
        },
        plum: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          600: "#6B7280",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        purpleText: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          600: "#6B7280",
          700: "#374151",
          900: "#111827",
          950: "#030712",
        },
      },
      fontFamily: {
        sans:  ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono:  ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      maxWidth: {
        content: "1240px",
        prose:   "70ch",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        product:       "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card:          "0 4px 20px -2px rgba(17, 24, 39, 0.04), 0 2px 6px -1px rgba(17, 24, 39, 0.02)",
        cute:          "0 10px 30px -5px rgba(225, 29, 72, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.02)",
        "cute-hover":  "0 14px 36px -4px rgba(225, 29, 72, 0.16), 0 6px 16px -2px rgba(0, 0, 0, 0.04)",
        "rose-glow":   "0 0 0 3px rgba(225, 29, 72, 0.2)",
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
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(1.15)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
        "fadeIn":  "fadeIn 0.3s ease-in-out forwards",
        "sparkle": "sparkle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;



