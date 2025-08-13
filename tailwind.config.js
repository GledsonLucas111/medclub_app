/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{ts,tsx}', './src/**/*.{ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    fontFamily: {
      sans: ["OpenSans400"],
    },
    extend: {},
  },
  plugins: [],
};
