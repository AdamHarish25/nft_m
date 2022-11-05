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

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1806px",
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
      },
      backgroundImage: {
        homeBackground: "url('./Attachments/Image/Squares.png')",
      },
    },
  },
  plugins: [],
};
