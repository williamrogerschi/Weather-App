/* font-family: 'Archivo', sans-serif;
font-family: 'Bricolage Grotesque', sans-serif;
font-family: 'Darker Grotesque', sans-serif;
font-family: 'Familjen Grotesk', sans-serif;
font-family: 'Hanken Grotesk', sans-serif;
font-family: 'Schibsted Grotesk', sans-serif; */



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: { 
        schibsted: ['Schibsted Grotesk, sans-serif'],
        archivo: ['Archivo, sans-serif'],
        bricolage: ['Bricolage Grotesque, sans-serif'],
        family: ['Familijen Grotesk, sans-serif'],
        hank: ['Hanken Grotesk, sans-serif'],
        darker: ['Darker Grotesque, sans-serif'],
      },
      },
  },
  plugins: [],
}

