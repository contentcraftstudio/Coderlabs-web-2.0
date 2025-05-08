/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1600px",
    },
    colors: {
      blue: "#65AACD",
      purple: "#6F5F9B",
      pink: "#ff49db",
      orange: "#F3A44D",
      red: "#C44461",
      crimson: "#9A233E",
      green: "#5EA496",
      "green-light": "#69B865",
      yellow: "#DACC67",
      "gray-dark": "#5C5C5C",
      "gray-divide": "#909090",
      "gray-input": "#FAFAFA",
      "gray-border": "#DBDBDB",
      gray: {
        100: "#EAEAEA",
        200: "#C7C7C7",
        300: "#9D9D9D",
        400: "#5C5C5C",
        500: "#444444",
        600: "#373737",
        700: "#2E2E2E",
        800: "#232323",
      },
      white: "#FFFFFF",
      "background-white": "#EFEFEF",
      "background-dark": "#232323",
      transparent: "transparent",
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      secondary: ["Poppins", "sans-serif"],
    },
    extend: {},
    borderRadius: {
      R12: "12px",
      DEFAULT: "12px",
      none: "0",
    },
  },
  plugins: [],
};
