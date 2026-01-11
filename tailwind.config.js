/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#c1e2ed',
          200: '#97cfe1',
          300: '#6dbcd5',
          400: '#4eadcc',
          500: '#2e9fc3',
          600: '#2891b3',
          700: '#1f7f9e',
          800: '#176d8a',
          900: '#0a4e67',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
