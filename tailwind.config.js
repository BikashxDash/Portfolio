/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0C",
        surface: "#131316",
        "surface-glass": "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.10)",
        "text-primary": "#F5F5F7",
        "text-secondary": "#86868B",
        accent: "#2997FF",
      },
      fontFamily: {
        display: ["-apple-system", "SF Pro Display", "Inter", "sans-serif"],
        mono: ["SF Mono", "JetBrains Mono", "monospace"],
      },
      transitionTimingFunction: {
        "ease-out-apple": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        450: "450ms",
      },
    },
  },
  plugins: [],
};