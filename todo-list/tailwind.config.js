/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        secondary: "rgb(242, 242, 242)",
        text: "rgb(3, 3, 3)",
      },
    },
  },
  plugins: [],
};
