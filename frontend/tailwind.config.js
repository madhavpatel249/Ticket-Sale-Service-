/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6f1ab1', // Main purple color
        lightGray: '#f5f5f5', // Light gray for background
        darkGray: '#4a4a4a', // Dark gray for text
        white: '#ffffff', // White for button text
        black: '#000000', // Black for navbar text
        gray: {
          200: '#e2e2e2', // Light gray for button background
          300: '#d0d0d0', // Slightly darker gray for hover
          400: '#a0a0a0', // Darker gray for active state
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '1440px', // Adjust this value as needed
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Custom diagonal split
      },
      borderRadius: {
        'xl': '1rem', // Additional rounded sizes if needed
        'full': '9999px', // For rounded full circles
      },
    },
  },
  plugins: [],
};
