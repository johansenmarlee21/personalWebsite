/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}' 
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '50%': { width: '25ch' },
          '100%': { width: '0' }
        },
        cursor: {
          '50%': { borderColor: 'transparent' }
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        typing: 'typing 3s steps(25) infinite, cursor .4s step-end infinite alternate',
        scroll: 'scroll 25s linear infinite',
      }
    },
    screens: {
      'sm': '640px', // Small devices
      'md': '768px', // Medium devices
      'lg': '1024px', // Large devices
      'xl': '1280px', // Extra large devices
      '2xl': '1536px', // 2XL devices,
      'custom-sm': '540px',  // Custom small device
      'custom-sm-1': '320px', // Custom smaller device
      'custom-md': '900px',
      'custom-sm-2': '400px',
      'custom-xl': '1100px',
      'custom-xl-2': '1380px',   
    }
  },
  plugins: [],
};
