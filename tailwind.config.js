module.exports = {
  purge: ['./componens/*.js', './public/styles.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    keyframes: {
      'ltr-linear-infinite': {
        'from': { 'background-position': '0 0' },
        'to': { 'background-position': '400% 0%' },
      },
      'astero-back':{
        'from':{'background-position': '200% 0%'},
        'to': {'background-position' : '0% 0%'},
      },
      'rocket':{
        'from':{'background-position': '0 0'},
        'to':{'background':'0% 100%'},
      },
 
      },
    
      animation: {
        'ltr-linear-infinite': 'ltr-linear-infinite 100s linear infinite',
        'astero-back': 'astero-back 10s linear infinite',
        'rocket': 'rocket 10s linear infinite',
        
      },

    backgroundImage: theme => ({
      'hero-pattern': "url('./images/space.png')",
      'asteroid': "url('./images/asteroid.png')",
      'rocket': "url('./images/missle.jpg')",
      
    }),
     
      
     
    screens: {
      "xs": {'min': '300', 'max': '639px'},
      sm: {'min': '640px', 'max': '767px'},
      md: {'min': '768px', 'max': '1023px'},
      lg: {'min': '1024px', 'max': '1279px'},
      xl: {'min': '1280px', 'max': '1535px'},
      "2xl": {'min': '1536px'}
    },
    extend: {

      
     
   

      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        'player2':['Stint Ultra Condensed', 'cursive']
      },   
      cursor: ['hover', 'focus'], 
      colors:{
        primary: 'black'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
 