/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0f1f10',
        'background': '#e7f3e8',
        'primary': '#2c582f',
        'secondary': '#8fb3c7',
        'accent': '#525fa3',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

