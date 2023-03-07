/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        GeneralSans: ["GeneralSans-Semibold", ...defaultTheme.fontFamily.sans],
        GTWalsheimRegular: [
          "GTWalsheimPro-Regular",
          ...defaultTheme.fontFamily.sans,
        ],
        GTWalsheimMedium: [
          "GTWalsheimPro-Medium",
          ...defaultTheme.fontFamily.sans,
        ],
        GTWalsheimProBold: [
          "GTWalsheimPro-Bold",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
