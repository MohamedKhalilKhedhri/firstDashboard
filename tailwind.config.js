/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        SlideIn: {
          'from': {transform: 'translateX(-100%)'},
          'to':  {transform: 'translateX(0)' },
        },
        SlideOut: {
          'from': {transform: 'translateX(0)'},
          'to':  {transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('daisyui'),
    
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}