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
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'var(--image-bg-hero)',
      },
      backgroundColor: {
        accent: 'var(--color-bg-accent)',
        accentHover: 'var(--color-bg-accentHover)',
        accentLight: 'var(--color-bg-accentLight)',
        accentLightHover: 'var(--color-bg-accentLightHover)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        accentDark: 'var(--color-text-accentDark)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
      mono: ['DM Mono', 'monospace'],
    },
  },
}
