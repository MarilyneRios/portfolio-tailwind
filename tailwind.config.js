/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        spin3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-3d': 'spin3d 10s linear infinite',
      },
        perspective: {
    1000: "1000px",
  },
    },
  },
  plugins: [],
}