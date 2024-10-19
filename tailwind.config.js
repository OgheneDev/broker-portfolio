/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-blue': '#28293E',
        'light-accent': '#EF6D58',
        'light-grey': '#FFFFFFA3',
        'custom-pink': '#F3D1BF',
        'dark-accent': '#EF6D58',
        'dark': '#391400',
        'dark-grey': '#391400',
        'custom-ash': '#FDF0E9',
        'custom-idk': '#EF6C57',
        'custom-yellow': '#F7CB47',
        'light-blue': '#3A3C56'

      }
    },
  },
  plugins: [],
}

