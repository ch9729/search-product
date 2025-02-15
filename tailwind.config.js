/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        "primary-content": "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["wireframe", "dark", "cupcake"],
  },
  fontFamily: {
    tenada: ["Tenada"],
  },
};
