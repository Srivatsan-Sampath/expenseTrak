/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "260px", max: "567px" },
      sm: { min: "567px", max: "639px" },
      md: { min: "640px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1439px" },
      "2xl": { min: "1440px", max: "1920px" },
    },
    extend: {},
  },
  plugins: [],
}
