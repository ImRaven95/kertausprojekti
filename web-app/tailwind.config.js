/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
      }
    },
    colors: {
      'primary-black': '#32353c',
      'primary-white': '#FAF9F6',
      'primary-blue': '#003366',
      'secondary-white': '#F9F6EE',
      'primary-orange': '#cc5500',
      'card-text-blue': '#1588fc',
    }
  },
  plugins: [],
}

