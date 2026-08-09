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
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-glass": "var(--surface-glass)",
        border: "var(--border-color)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        accent: "#6366F1",
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