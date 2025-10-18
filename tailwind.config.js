/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tetromino-i': '#06b6d4',
        'tetromino-o': '#eab308',
        'tetromino-t': '#a855f7',
        'tetromino-s': '#22c55e',
        'tetromino-z': '#ef4444',
        'tetromino-j': '#3b82f6',
        'tetromino-l': '#f97316',
      },
    },
  },
  plugins: [],
}
