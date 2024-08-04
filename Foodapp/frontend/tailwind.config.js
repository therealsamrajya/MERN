/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Source Sans Pro", "sans-serif"],
        primary: ["Oswald", "sans-serif"],
        button: ["Montserrat", "sans-serif"],
      },
      colors: {
        button: "#e4032f",
        heading: "#f7f6f2",
        gray: "#4a4a4a",
        dark: "#121212",
      },
      backgroundImage: {
        "custom-background": "url('/src/images/banner1.jpg')",
        "about-background": "url('/src/images/banner8.jpg')",
        "menu-background": "url('/src/images/banner3.jpg')",
        "promo-background": "url('/src/images/banner4.jpg')",
        "mockup-background": "url('/src/images/image1.jpeg')",
        "about1-background": "url('/src/images/banner7.jpg')",
        "about2-background": "url('/src/images/banner9.jpg')",
      },
    },
  },
  plugins: [],
};
