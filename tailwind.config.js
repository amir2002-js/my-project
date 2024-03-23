/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{ 
        center:true
      }
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'mdx': '990px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}