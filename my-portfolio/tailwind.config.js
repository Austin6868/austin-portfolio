/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'bg-slate-900',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./Assets/BgMainImage.svg')",
      },
    },
  },
  plugins: [],
}
