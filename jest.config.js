module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@components$': '<rootDir>/src/components',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@images$': '<rootDir>/src/images',
    '^@shared$': '<rootDir>/src/shared',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [
    `/node_modules/(?!(react-children-utilities|gatsby))`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
