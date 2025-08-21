module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'custom-blue': 'rgba(56, 90, 156, 1)',
    },
   backgroundImage: {
      'logo': "url('/assest/loginlogo.png')",
    },
  plugins: [],
   screens: {
        'custom': '1161px',
      } }}
    }
