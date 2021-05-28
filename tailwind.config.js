module.exports = {
  purge: false,
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      backgroundColor: {
        accent: 'var(--color-bg-accent)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
      },
      borderColor: {
        accent: 'var(--color-border-accent)',
        primary: 'var(--color-border-primary)',
      },
      screens: {
        xlish: '1200px',
      },
      margin: {
        '50-screen': '-50vw',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'left-splash': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5) translateX(4px) translateY(4px)',
          },
          '75%': {
            opacity: '0',
            transform: 'scale(0.5) translateX(4px) translateY(4px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateX(0) translateY(0)',
          },
        },
        'right-splash': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5) translateX(-4px) translateY(-4px)',
          },
          '75%': {
            opacity: '0',
            transform: 'scale(0.5) translateX(-4px) translateY(-4px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateX(0) translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'left-splash': 'left-splash 0.75s',
        'right-splash': 'right-splash 0.75s',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [require('tailwindcss-padding-safe')()],
}
