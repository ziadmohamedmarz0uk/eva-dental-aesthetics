import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F4F7F5",
          100: "#E3ECE8",
          200: "#C4D7CF",
          300: "#9DBEB2",
          400: "#6B9B8B",
          500: "#457B6C",
          600: "#2F5D50", // Primary Accent
          700: "#24493F",
          800: "#1A352E",
          900: "#11221D",
        },
        sand: {
          50: "#FAF7F2",
          100: "#F4EDE3",
          200: "#E8D9C5",
          300: "#D9C2A4",
          400: "#C8A27C", // Secondary Accent
          500: "#B88A5E",
          600: "#996F48",
          700: "#7A5638",
          800: "#5B3F29",
          900: "#3D2A1C",
        },
        alabaster: "#FAF9F6",
      },
      fontFamily: {
        sans: [
          "'IBM Plex Sans Arabic'",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
