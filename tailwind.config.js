module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
    options: {
      safelist: {
        standard: [/gap-0.5/, /grid(?:-\w+)?/, /h[x-y]?-\d+/, /p[x-y]?-\d+/],
      },
    },
  },
  darkMode: false,
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
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
      mono: ['DM Mono', 'monospace'],
    },
  },
  plugins: [require('tailwindcss-padding-safe')()],
}
