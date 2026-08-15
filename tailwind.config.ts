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
        // Refined Baby-Pink Pastel Palette
        pinkPastel: {
          50:  "#FFF5F8", // Soft light blush background
          100: "#FFEBF1", // Soft pastel pink card fill
          200: "#F9D8E4", // Delicate pink card border
          300: "#F4C2D7", // Accent border
          400: "#EE9CBF", // Soft pink highlight
          500: "#F4527B", // Deep rose pink primary accent / CTA
          600: "#D83262", // Hover rose pink
          700: "#B5224D", // Deep rose
          800: "#8B183A",
          900: "#5F0F27",
        },
        // Dark Charcoal / Purple typography hierarchy
        purpleText: {
          50:  "#FAF7FA",
          100: "#F5EEF6",
          200: "#E4D5E6",
          300: "#C6ACC9",
          400: "#A087A2", // Muted text
          600: "#6E5670", // Secondary text
          700: "#4A334C", // Sub-headers
          900: "#2B1B2C", // Main primary text
          950: "#1A0E1F", // Deep dark
        },
        // Legacy fallback alias mapping to new pink theme
        coral: {
          50:  "#FFF5F8",
          100: "#FFEBF1",
          200: "#F9D8E4",
          300: "#F4C2D7",
          400: "#EE9CBF",
          500: "#F4527B",
          600: "#D83262",
          700: "#B5224D",
          800: "#8B183A",
          900: "#5F0F27",
        },
        blush: {
          50:  "#FFF5F8",
          100: "#FFEBF1",
          200: "#F9D8E4",
          300: "#F4C2D7",
          400: "#EE9CBF",
          500: "#F4527B",
          600: "#D83262",
          700: "#B5224D",
          800: "#8B183A",
          900: "#5F0F27",
        },
        plum: {
          50:  "#FAF7FA",
          100: "#F5EEF6",
          200: "#E4D5E6",
          300: "#C6ACC9",
          400: "#A087A2",
          600: "#6E5670",
          700: "#4A334C",
          800: "#381E37",
          900: "#2B1B2C",
          950: "#1A0E1F",
        },
        surface: {
          bg:       "#FFF5F8",   
          card:     "#FFFFFF",  
          elevated: "#FFEBF1",
          border:   "#F9D8E4", 
        },
      },
      fontFamily: {
        sans:  ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono:  ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      maxWidth: {
        content: "1280px",
        prose:   "72ch",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        card:         "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        cute:         "0 10px 30px -5px rgba(244, 82, 123, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "cute-hover": "0 14px 36px -4px rgba(244, 82, 123, 0.22), 0 6px 16px -2px rgba(0, 0, 0, 0.05)",
        glow:         "0 0 0 3px rgba(244, 82, 123, 0.25)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
        "fadeIn":  "fadeIn 0.3s ease-in-out forwards",
        "float":   "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;


