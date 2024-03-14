/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xr: "300px",
      sx: "321px",
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        ttyelow: "Yellowtail, cursive",
        ttroboto: "Roboto, san-serif"
      },
      fontWeight: {
        regular: 400,
      },
      colors: {
        primary: "#EFD372",
        dark: "#274C5B",
        secondary: "#A1DCDC",
        grey: "#B8B8B8",
        lghite: "#F5F5F5",
        darkBrown: "#525C60",
        darkgreen: "#7EB693",
        lightWhite: "#FAFAFA",
        light: "#E0E0E0",
        aboutBg: "#F9F8F8",
        organicWhite: "#F1F8F4",
        plachholderLight: "#ABABAB",
        whiteLight: "#ECECEC"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          desc: "1320px"
        }
      }
    },
  },
  plugins: [],
}