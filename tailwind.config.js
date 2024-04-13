/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { primary: '#585EE3', light: '#F5F8FF' },
        interface: {
          black: '#000',
          900: '#1D2D35',
          600: '#657178',
          400: '#657178',
          200 :'#F2F3F7',
          white: '#fff'
        }
      },
      fontSize: {
        headline1: [
          '24px',
          { lineHeight: '40px', letterSpacing: '.35px', fontWeight: '600' }],
        headline2: [
          '20px',
          { lineHeight: '28px', letterSpacing: '.35px', fontWeight: '600' }],
        headline2Mobile: [
          '16px',
          { lineHeight: '28px', letterSpacing: '.35px', fontWeight: '600' }],
        headline3: [
          '14px',
          { lineHeight: '20px', letterSpacing: '.20px', fontWeight: '500' }],
        bodyTextRegular: [
          '16px',
          { lineHeight: '24px', letterSpacing: '.5px', fontWeight: '400' }],
        bodyTextMedium: [
          '16px',
          { lineHeight: '24px', letterSpacing: '.5px', fontWeight: '500' }],
        bodyTextUpperCase: [
          '16px',
          { lineHeight: '24px', letterSpacing: '.5px', fontWeight: '500' }],
        smallText: [
          '12px',
          { lineHeight: '16px', letterSpacing: '.20px', fontWeight: '400' }]
      }
    },
    screens: {
      'md': '1024px',
      'lg': '1240px',
      'xl': '1920px'
    },
    boxShadow: {
      'medium': '0 0 20px rgba(0, 0, 0, 0.1)',
      'soft': '0 0 40px rgba(0, 0, 0, 0.08)'
    },
    borderWidth: {
      '2' : '2px'
    },
    gridTemplateColumns: {
      'lg-layout': '840px 264px',
      'xl-layout': '976px 304px',
      'custom3': 'repeat(3, 1fr)'
    }
  },
  plugins: []
}

//regular 400
//medium 500
//semiBold 600