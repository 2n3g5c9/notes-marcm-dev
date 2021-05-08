module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      startServerCommand: 'yarn serve',
      url: [
        'http://localhost:9000/',
        'http://localhost:9000/about',
        'http://localhost:9000/notes',
        'http://localhost:9000/404',
      ],
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'first-contentful-paint': [
          'error',
          { maxNumericValue: 2500, aggregationMethod: 'optimistic' },
        ],
        interactive: [
          'max-potential-fid',
          { maxNumericValue: 100, aggregationMethod: 'optimistic' },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
