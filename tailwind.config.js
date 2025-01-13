/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // 원하는 primary 색상 추가
        "primary-content": "#FFFFFF", // 텍스트 색상 추가 (옵션)
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
