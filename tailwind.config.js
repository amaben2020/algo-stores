/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // override styles here i.e black, gray etc.
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

// TODO: Add tailwind typography
