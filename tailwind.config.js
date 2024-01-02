/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      system: ["system-ui", "ui-sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        theme1: "#257278",
        themeblack: "black",
        whitecolor: "white",
      },
    },
  },
  plugins: [],
};
