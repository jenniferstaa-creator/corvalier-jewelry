import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // CORVALIER maison palette — noir editorial
        noir: {
          DEFAULT: "#0E0B09",
          soft: "#15110E",
          light: "#1F1A16",
        },
        // retained as a deep accent for occasional warmth
        burgundy: {
          DEFAULT: "#5A1A22",
          deep: "#4A141B",
          soft: "#6E232C",
        },
        champagne: {
          DEFAULT: "#C9A66B",
          light: "#E2CD9F",
          deep: "#A8854B",
        },
        ivory: {
          DEFAULT: "#F7F2E9",
          warm: "#F3ECDD",
        },
        beige: {
          DEFAULT: "#E7DCC6",
          deep: "#D8C9AC",
        },
        espresso: {
          DEFAULT: "#2B201A",
          soft: "#3B2C24",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        maison: "0.28em",
        wide2: "0.18em",
      },
      maxWidth: {
        maison: "1320px",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1.4s ease forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
