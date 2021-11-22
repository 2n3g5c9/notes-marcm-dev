module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'yarn serve',
      url: [
        'http://localhost:9000/',
        'http://localhost:9000/about/',
        'http://localhost:9000/notes/',
        'http://localhost:9000/404/',
      ],
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        interactive: 'off',
        'csp-xss': 'off',
        'first-contentful-paint': 'off',
        'largest-contentful-paint': 'off',
        'legacy-javascript': 'off',
        'non-composited-animations': 'off',
        'themed-omnibox': 'off', // to dynamically set theme-color
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'valid-source-maps': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
