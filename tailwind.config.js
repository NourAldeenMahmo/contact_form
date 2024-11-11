/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E0249",
        Secandary: "#A91079",
        accentary: "#2E024930",
        Fourth: "#EEEEEE",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
