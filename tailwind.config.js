/** @type {import('tailwindcss').Config} */
export default {
  // Tells Tailwind which files to scan for class names
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Custom responsive breakpoints for the site
    screens: {
      sm: "768px",   // small screens and up
      md: "1024px",  // medium screens and up
      lg: "1280px",  // large screens and up
    },
    extend: {},
  },
  plugins: [],
};
