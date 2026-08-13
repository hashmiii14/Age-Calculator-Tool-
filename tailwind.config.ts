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
        blush: {
          50: "#fff0f5",
          100: "#ffe4e8",
          200: "#ffd1dc",
          300: "#fba1b7",
          400: "#f472b6",
          500: "#e84393",
          600: "#d63384",
          700: "#c2185b",
          800: "#9c1146",
          900: "#750b33",
        },
        coral: {
          50: "#fff3ee",
          100: "#ffe4d6",
          200: "#ffc2a8",
          300: "#ff966c",
          400: "#f06236",
          500: "#e85d36",
          600: "#d4451d",
          700: "#b53512",
          800: "#922c12",
          900: "#772813",
        },
        cream: {
          50: "#fffdf9",
          100: "#fff8f2",
          200: "#fff0e2",
          300: "#ffe3cb",
          400: "#ffd2ad",
        },
        plum: {
          50: "#faf5fc",
          100: "#f3e8f9",
          200: "#e7d2f3",
          300: "#d3afe7",
          400: "#b981d7",
          500: "#9e57c4",
          800: "#3d1f45",
          900: "#2d1b2d",
          950: "#1c121e",
        },
        brand: {
          50: "#fff0f5",
          100: "#ffe4e8",
          200: "#ffd1dc",
          500: "#e85d36",
          600: "#d4451d",
          700: "#b53512",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Lora", "Georgia", "serif"],
      },
      boxShadow: {
        cute: "0 10px 30px -5px rgba(232, 93, 54, 0.12), 0 4px 15px -2px rgba(232, 67, 147, 0.08)",
        "cute-hover": "0 20px 40px -8px rgba(232, 93, 54, 0.2), 0 8px 20px -4px rgba(232, 67, 147, 0.12)",
        glow: "0 0 25px 0 rgba(232, 93, 54, 0.35)",
        card: "0 10px 30px -5px rgba(214, 51, 132, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 20px 40px -10px rgba(214, 51, 132, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "0.8" },
          "50%": { transform: "scale(1.2) rotate(15deg)", opacity: "1" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceCute: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 3s ease-in-out infinite",
        "spin-slow": "spinSlow 25s linear infinite",
        "bounce-cute": "bounceCute 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
