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
      xl: "1.7rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "3.5rem",
      "6xl": "4rem",
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
