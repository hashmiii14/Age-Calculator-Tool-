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
        coral: {
          50: "#FFF5F2",
          100: "#FFE6DF",
          200: "#FFC9BD",
          300: "#FFA38F",
          400: "#F77659",
          500: "#E55B3C",
          600: "#CD4124",
          700: "#A83018",
          800: "#8B2917",
          900: "#732617",
        },
        slate: {
          850: "#161E2E",
          950: "#0B0F19",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        "content": "1120px",
      },
      boxShadow: {
        subtle: "0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
