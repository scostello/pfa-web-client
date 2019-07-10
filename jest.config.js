// @flow

module.exports = {
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|html)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/jest/__mocks__/styleMock.js',
    'worker-loader': '<rootDir>/jest/__mocks__/workerLoaderMock.js',
  },
  setupFilesAfterEnv: [require.resolve('./src/setupTests.js')],
  testPathIgnorePatterns: ['/coverage/', '/dist/', '/node_modules/'],
  collectCoverageFrom: ['**/src/**/*.js', '**/src/**/*.jsx', '!**/src/browser/external/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 45,
      branches: 35,
      functions: 35,
      lines: 45,
    },
  },
};
