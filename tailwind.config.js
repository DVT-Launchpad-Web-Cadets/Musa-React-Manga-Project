/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      white: "white",
      "primary-color": "#160b1a",
      "secondary-color": "#5c4ef2",
      "primary-text-color": "whitesmoke",
      "text-botton-color": "#C593FA",
      "card-follower-count": "#c36034",
      "icon-color": "yellow",
      "chip-color": "#2b161d",
      "gradient-color": "#28102b",
      "button-background": "rgba(0, 0, 0, 0.6)",
      "header-background": "rgba(0, 0, 0, 0.6)",
      "search-color": "#342d37",
      "search-header-color": "#120815",
      "error-color": "rgb(187 55 55)",
      grey: "grey",
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        slider: "rgba(0, 0, 0, 0.56) 0px -230px 36px -10px inset",
        showButton: "rgba(0, 0, 0, 0.45) 0px -50 36px -28px inset",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
};
