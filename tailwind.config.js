/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeShade: "#ed7966",
        blackShade: "#1a1a1a",
        whiteShade: "#efefef",
        textColor: "#202124",
        blueShade: "#4285f4",
        grayShade: "#dadce0",
        navigation: "#5f6368",
        lightGray: "#dddddd",
      },
      fontSize: {
        extraLarge: "110px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
