/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '899px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        custom: ['Inter', 'serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide': 'slide 30s linear infinite',
      },
    },
  },
  plugins: [],
}
