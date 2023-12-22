import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-hero": "url('/images/hero.jpg')",
        "rans-hero": "url('/images/ranshero.jpg')",
        "grate-hero": "url('/images/grateinoxhero.jpeg')",
        "iceden-hero": "url('/images/icedenhero.jpg')",
        "ultimate-hero": "url('/images/ultimatehero.jpg')",
      },
      colors: {
        def: "#FAF9F6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
