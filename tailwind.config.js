/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cute-pink': '#FFD1DC',
        'cute-lavender': '#E6E6FA',
        'cute-text': '#5A4A5A',
        'cute-red': '#FF6961',
        'cute-bg': '#FFF0F5', // Lavender Blush
      },
      fontFamily: {
        'cute': ['"Quicksand"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
