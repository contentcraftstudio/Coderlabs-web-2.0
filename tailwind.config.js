/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      blue: '#65AACD',
      purple: '#6F5F9B',
      pink: '#ff49db',
      orange: '#F3A44D',
      red: '#C44461',
      crimson: '#9A233E',
      green: '#5EA496',
      'green-light': '#69B865',
      yellow: '#DACC67',
      'gray-dark': '#5C5C5C',
      gray: '#9D9D9D',
      'gray-light': '#C7C7C7',
      'background-white': '#EFEFEF',
      'background-dark': '#232323',
      transparent: 'transparent',
      white: '#FFF'
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif']
    },
    extend: {},
    borderRadius: {
      R12: '12px',
      DEFAULT: '12px',
      none: '0'
    }
  },
  plugins: []
}
