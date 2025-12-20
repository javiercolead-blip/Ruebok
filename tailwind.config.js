/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    '-rotate-[8deg]',
    '-rotate-[4deg]',
    '-rotate-[5deg]',
    'rotate-[5deg]',
    'rotate-[4deg]',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
        'handwritten': ['Caveat', 'cursive'],
        'serif': ['Cambria', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        }
      }
    },
  },
  plugins: [],
}
