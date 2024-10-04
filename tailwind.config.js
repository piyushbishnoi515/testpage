/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-layer': "url('./assets/image/webp/hero-layer.webp')",
      // },
      fontFamily: {
        'Messiri': "'El Messiri', sans-serif",
        'Lato': "'Lato', sans-serif",
      },
      colors: {
        'off-gray': "#4C4C4C",
        'deep-blue': "#1B3353",
        // 'dark-blue': "#110163",
        'light-blue': "#2BA8E0",
        'off-white': "##F3F5F6",
        'whitelight': "#FBFBFC",
        'light-gray': "#4D4D4D",
        // 'light-green': "#85B6A6",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1188px",
        },
      },
      dropShadow: {
        '3xl': "2px 2px 0px black",
        '4xl': "2px 2px 0px #076787",
      },
      boxShadow: {
        '3xl': "0px 4px 15px 0px #07678726",
        '4xl': "0px 26px 27px 0px #0000000A",
        '5xl': "0px 13px 18px 0px #0000000F",
        '6xl': "0px 4px 15px 0px #81488E26",
      },
      fontSize: {
        'custom-lg': "32px",
        'custom-xl': "40px",
        'custom-2xl': "52px",
        'custom-3xl': "60px",
      },
      lineHeight: {
        'custom-sm': "32px",
        'custom-lg': "36px",
        'custom-xl': "44px",
        'custom-2xl': "57px",
        'custom-3xl': "66px",
      }
    },
  },
  plugins: [],
}