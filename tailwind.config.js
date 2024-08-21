/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#F8d673',
        secondary: '#313F57',
        textPrimary: '#000000',
      },
      backgroundColor: {
        pageBg: '#313F57',
        cardBg: '#F8d673',
      },
    },
  },
  plugins: [],
}
