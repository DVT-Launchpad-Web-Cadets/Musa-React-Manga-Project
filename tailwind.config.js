/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#160b1a",
      "primary-text-color": "whitesmoke",
      "text-botton-color": "#606abb",
      "card-follower-count": "#c36034",
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.90) 1px 1px 90px 60px inset;",
      },
    },
  },
  plugins: [require("daisyui")],
};
