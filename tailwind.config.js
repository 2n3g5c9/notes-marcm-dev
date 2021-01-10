module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: {
        standard: [
          /grid(?:-\w+)?/,
          /h[x-y]?-\d+/,
          /m[x-y]?-\d+/,
          /p[x-y]?-\d+/,
          /text-\w+/,
        ],
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
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
}
