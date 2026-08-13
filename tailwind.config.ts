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
        peach: {
          50: "#fff5f2",
          100: "#ffebe6",
          200: "#ffdacd",
          300: "#ffb49e",
          400: "#ff8160",
          500: "#f95326",
          600: "#ea3a0c",
          700: "#c42b06",
          800: "#a02509",
          900: "#84240f",
          950: "#480e04",
        },
        cream: {
          50: "#fffdfa",
          100: "#fffaf4",
          200: "#fff3e6",
          300: "#ffe8cf",
          400: "#ffd4a8",
        },
        navy: {
          800: "#1e293b",
          900: "#1c2438",
          950: "#0f172a",
        },
        brand: {
          50: "#fff5f2",
          100: "#ffebe6",
          200: "#ffdacd",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Lora", "Merriweather", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(234, 88, 12, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 20px 40px -10px rgba(234, 88, 12, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
