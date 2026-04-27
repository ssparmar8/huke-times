/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}', './app/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
      },
    }
  },
  plugins: []
}
