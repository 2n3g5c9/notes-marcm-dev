module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
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
