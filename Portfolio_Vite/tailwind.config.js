/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '3rem'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
        },
        zoomPan: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '25%': { transform: 'scale(1.1) translate(-4%, -4%)' },
          '50%': { transform: 'scale(1.2) translate(4%, 4%)' },
          '75%': { transform: 'scale(1.1) translate(4%, -4%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' }
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
        zoomPan: 'zoomPan 20s infinite'
      }
    }
  },
  plugins: [],
};
