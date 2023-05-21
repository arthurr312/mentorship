/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "navbar-background": "#14181c",
        "black": "#000",
        "dark-blue": "#000026",
        white: "#fff",
        "input-border-color": "#f2f3f4",
        blue: {
          primary: "#526aae",
          dark: "#2e5984",
        },
        gray: {
          100: "#f0f0f0",
          200: "#ccc7be",
          400: "#99948f",
          600: "#66635f",
        },
      },
    },
  },
  plugins: [],
};
