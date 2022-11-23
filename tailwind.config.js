/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      Roboto: ["'Roboto'", "sans-serif"],
      Sora: ["'Sora'", "sans-serif"],
      Inter: ["'Inter'", "sans-serif"],
    },
    screens: {
      xs: "0px",

      sm: "640px",

      md: "848px",

      lg: "1025px",

      xl: "1280px",

      "2xl": "1806px",
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
        "2auto": "repeat(2, minmax(auto, auto))",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
      },
      backgroundImage: {
        homeBackground: "url('./Attachments/Image/Home/Squares.png')",
        box2: "url('./Attachments/Image/bgBox2.png')",
      },
    },
  },
  plugins: [],
};
