'use strict'

module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageReporters: [
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/?(*.)+(spec).js?(x)'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'ts-jest',
    '^.+\\.(css)$': 'jest-css-modules-transform'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  verbose: true
}
