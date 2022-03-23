const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#ff6915',
          'muted': '#C4C4C4',
          'notification-bg': '#FFA573',
          'footer-bg': '#141B22',
          'body-bg': '#F4F4F4'
        },

        gridTemplateColumns: {
          'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
          'auto-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
        },
        gridTemplateRows: {
          'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
          'auto-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
        },
      }
    },
    plugins: [
      plugin(function ({ addComponents, theme }) {
        addComponents({
          '.card': {
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.3xl'),
            paddingTop: theme('spacing.4'),
            paddingBottom: theme('spacing.4'),
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
      
          '.input': {
            marginTop: theme('spacing.2'),
            borderWidth: theme('borderWidth.2'),
            borderStyle: theme('borderStyle.solid'),
            borderRadius: theme('borderRadius.lg'),
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            outline: "0px",
            '&:focus': {
              borderColor: theme('colors.primary'),
            },
            '&:checked ~ .checkmark': {
              borderColor: theme('colors.primary'),
              borderWidth: theme('borderWidth.2')
            }
          },
      
          '.btn': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
            backgroundColor: theme('colors.primary'),
            borderRadius: theme('borderRadius.full'),
            color: theme('colors.white'),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: theme('spacing.2'),
            '&:hover': {
              cusor: 'pointer',
            }
          },

          '.outlined_btn': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
            borderRadius: theme('borderRadius.full'),
            borderColor: theme('colors.primary'),
            borderWidth: '0.09rem',
            color: theme('colors.primary'),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: theme('spacing.2'),
            '&:hover': {
              cusor: 'pointer',
            }
          },

          '.removed': {
            textDecoration: "line-through",
            color: theme('colors.muted'),
            '&:hover': {
              cusor: 'pointer',
            }
          },

        })
      })
    ],
  }