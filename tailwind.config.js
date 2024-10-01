/** @type {import('tailwindcss').Config} */
module.exports = {
  assets: ['./assets/fonts/'],
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slpash_background: '#DAAF69',
        background: '#FFFFFF',
        cta_hero_home: '#2D604A',
        cta_share_button: '#DAAF69',
        cta_link: '#DAAF69',
        cta_navbar_active: '#DAAF69',
        cta_navbar_inctive: '#333333',
        txt_active: '#DAAF69',
        txt_primary: '#333333'
    },
      fontFamily: {
        serif: ['Noto Serif TC', 'serif'],
        'serif-light': ['NotoSerifTC-Light', 'serif'], // Add the light variation
        'serif-bold': ['NotoSerifTC-Bold', 'serif'], // Add the bold variation
    },
      fontWeight: {
        thin: '100',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },
      screens: {
        xs: '320px', // Extra small devices like mobile phones
        sm: '640px', // Small devices like landscape phones
        md: '768px', // Medium devices like tablets
        lg: '1024px', // Large devices like desktops
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // Even larger screens
        },
  },
  plugins: [],
}
}