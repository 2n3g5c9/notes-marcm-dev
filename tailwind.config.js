module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
    options: {
      safelist: {
        standard: [
          /gap-1/,
          /grid(?:-\w+)?/,
          /h[xy]?-\d+/,
          /m\w?-\d+/,
          /opacity-\d+/,
          /p[xy]?-\d+/,
          /self-center/,
          /-translate-[xy]-\d+/,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      backgroundImage: {
        hero: 'var(--image-bg-hero)',
      },
      backgroundColor: {
        accent: 'var(--color-bg-accent)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        hover: {
          accent: 'var(--color-bg-hover-accent)',
          light: 'var(--color-bg-hover-light)',
        },
        light: {
          accent: 'var(--color-bg-light-accent)',
        },
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        dark: {
          accent: 'var(--color-text-dark-accent)',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(-0.25rem)',
          },
          '50%': {
            transform: 'translateY(0.25rem)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      screens: {
        xlish: '1200px',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      mono: ['DM Mono', 'monospace'],
    },
  },
  plugins: [require('tailwindcss-padding-safe')()],
}
