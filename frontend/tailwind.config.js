import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "forest",
      "aqua",
      "pastel",
      "luxury",
      "dracula",
      "autumn",
      "business",
      "coffee",
      "night",
    ],
  },
};