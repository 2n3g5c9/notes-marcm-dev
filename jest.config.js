module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '^@assets/images$': '<rootDir>/src/assets/images',
    '^@components$': '<rootDir>/src/components',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@fontsource/.*': `identity-obj-proxy`,
    '^@hooks$': '<rootDir>/src/hooks',
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>/public`,
    `<rootDir>/cypress`,
  ],
  transformIgnorePatterns: [
    `/node_modules/(?!(react-children-utilities|gatsby))`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
