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
        theme1: "#257378",
        theme1light: "#edfcfc",
        theme1h: "#1c5f63",
        themeblack: "black",
        whitecolor: "white",
        
      },
      backgroundImage: {
        'hero-image': "url('/src/img/backgroundimg.jpeg')",
      }

    },
  },
  plugins: [],
};
