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
        'hero-image1': "url('/src/img/banner-01.jpg')",
        'hero-image2': "url('/src/img/banner-02.jpg')",
        'hero-image3': "url('/src/img/banner-03.jpg')",
        'hero-image4': "url('/src/img/banner-04.jpg')",
      }

    },
  },
  plugins: [],
};
