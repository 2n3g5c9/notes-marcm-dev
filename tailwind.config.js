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
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
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
