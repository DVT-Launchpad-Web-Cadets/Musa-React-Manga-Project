/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#160b1a",
      "primary-text-color": "whitesmoke"
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
