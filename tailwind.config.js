/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      // 'xs': '.75rem',
      // 'sm': '.875rem',
      // 'base': '1rem',
      // 'lg': '1.125rem',
      // 'xl': '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '4rem',
      xs: ".75rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "1.7rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
    },
  },
  plugins: [],
};
