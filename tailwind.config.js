/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
    },
    letterSpacing: {
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
    },
    keyframes: {
      bounce100: {
        "0%": { transform: "translateY(-100.5%)" },
        "100%": { transform: "translateY(100.5%)" },
      },
    },
  },

  plugins: [],
};
