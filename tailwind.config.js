/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream:        '#FAF4EC',
        'cream-dark': '#EAE4D8',
        'card-blue':  '#1E3A8A',
        'card-green': '#2E7D32',
        'card-red':   '#FF4C24',
        'exp-pink':   '#FCB8FA',
        'exp-green':  '#C8E6C9',
        'exp-blue':   '#BBDEFB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}