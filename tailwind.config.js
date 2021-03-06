module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
      scale: {
        '180': '-1'
      },
      borderRadius:{
        'extra': '1.5rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
      fontFamily:{
        'rokkitt': ["Rokkitt"]
      },
      screens: {
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '280px'},
        // => @media (max-width: 280) { ... }
      },
      extend:{
        height: {
          "1/2" :"0.125rem",
          "56": "14rem",
          "70": "18rem"
        },
        width: {
          "36": "9rem",
          "72": "20rem",
          "80": "24rem",
          "120": "50rem"
        }
      }
    },
    variants: {},
    plugins: [],
  }
  