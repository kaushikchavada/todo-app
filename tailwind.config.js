/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // 👈 ADD THIS
    "./src/**/*.{js,jsx}",   // 👈 keep this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}