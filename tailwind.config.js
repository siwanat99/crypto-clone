/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        custom: "auto auto",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        boxShadow: {
          xxl: "5px 5px 10px rgba(0, 0, 0, 0.1)",
        },
        slideTop: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },

          "100%": { transform: "translateY" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX" },
        },
        slideLeft: {
          "0%": { transform: "translateX" },
          "100%": { transform: "translateX(100%)" },
        },
        slideMenu: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideTop: "slideTop 1s cubic-bezier(0.4, 0, 0.2, 1) ",
        slideRight: "slideRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        slideLeft: "slideLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        slideMenu: "slideMenu 0.7s cubic-bezier(0.4, 0, 0.2, 1) ",
        appear: "appear 1s linear",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
