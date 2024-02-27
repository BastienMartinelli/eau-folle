/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#331C50",
          50: "#CCB8E6",
          100: "#C2A9E1",
          200: "#AC8BD6",
          300: "#966CCC",
          400: "#814EC1",
          500: "#6D3CAB",
          600: "#5A318C",
          700: "#46276E",
          800: "#331C50",
          900: "#190D26",
          950: "#0B0612",
        },
        secondary: {
          DEFAULT: "#9E2634",
          50: "#FDF9F9",
          100: "#F9E8EA",
          200: "#F2C7CC",
          300: "#EAA6AE",
          400: "#E28590",
          500: "#DA6572",
          600: "#D24454",
          700: "#BF2E3F",
          800: "#9E2634",
          900: "#711B25",
          950: "#5A161E",
        },
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
