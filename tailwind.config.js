module.exports = {
  theme: {
    fontFamily: {
      'heading': ['Raleway', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif']
    },
    fontSize: {
      'tiny': '.875rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'md': '0.9375',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    textColor: theme => ({
      'primary': 'hsl(0, 100%, 68%)',
      'dark': 'hsl(216, 53%, 9%)',
      'cyan': 'hsl(176, 68%, 64%)',
      'blue': 'hsl(198, 60%, 50%)',
      'white': 'hsl(0, 0%, 100%)',
      'green': 'hsl(94, 66%, 57%)',
      'purple': 'hsl(267, 73%, 76%)',
      'pink': 'hsl(336, 90%, 69%)'
    }),

    backgroundColor: theme => ({
      'primary': 'hsl(218, 28%, 13%)',
      'intro': 'hsl(217, 28%, 15%)',
      'light': 'hsl(176, 68%, 64%)',
      'footer': 'hsl(216, 53%, 9%)',
      'testimonials': 'hsl(219, 30%, 18%)',
      'blue': 'hsl(198, 60%, 50%)',
      'white': 'hsl(0, 0%, 100%)',      
    }),
    borderColor: theme => ({
      'primary': 'hsl(0, 100%, 68%)',
      'dark': 'hsl(230, 29%, 20%)',
      'gray': 'hsl(230, 11%, 40%)',
      'grayblue': 'hsl(231, 7%, 65%)',
      'light': 'hsl(207, 33%, 95%)'
    }),
    borderRadius: theme => ({
      default: '10px',
      lg: '50px',
      full: '9999px;'
    }),
    boxShadow: {
      default: '0 8px 16px 0 rgba(0, 0, 0, 0.3)'
    },
    zIndex: {
      '-30': '-30',
      '-20': '-20',
      '-10': '-10',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50'
    },
    screens: {
      'sm': {
        'min': '640px',
        'max': '767px'
      },
      'md': {
        'min': '768px',
        'max': '1023px'
      },
      'lg': {
        'min': '1024px',
        'max': '1199px'
      },
      'xl': {
        'min': '1200px'
      }
    },

    extend: {},
  },
  variants: {},
  plugins: [],
}