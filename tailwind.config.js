/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backg: "#032b25 ",
        primary: "#032b25",
        secondary: "#0b322c",
        accent: "#0ddebb",
        textcl: "#e2fefa",
      },
    },
  },
  plugins: [],
};
