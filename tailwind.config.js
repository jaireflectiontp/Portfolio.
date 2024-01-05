/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14092a",
        secondary: "#aa6dff",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        accent: "rgba(57, 62, 70, 0.75)",
        hoverSecondary: "#5a2e986b",
        hoverPrimary: "#292d33",
        divider: "rgba(238, 238, 238, 0.10)",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
}

