/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        mColor:'#fc0300'
      },
      textColor:{
        mainColor: '#fc0300',
      },
      backgroundColor: {
        mainColor: '#fc0300',
        secColor: '#f32f2d',
      },
      backgroundImage: {
        heroWallpaper : "url('/assets/images/wallpaper-vektor.png')"
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/6' : '9 / 6',
        '14/8' : '14 / 8'
      },
      screens: {
        'smallPhone': {'min': '250px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'Tablet': {'min': '768px', 'max': '1279px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'Laptop': {'min': '1280px', 'max': '1779px'},
        'Desktop': {'min': '1780px'}
      }
    },
    
  },
  plugins: [
    
  ],
}
