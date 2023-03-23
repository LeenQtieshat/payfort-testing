module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '__fixtures__', '__mocks__', '__tests__'],
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.js'],
};
