'use strict'

module.exports = {
  globals: {
  },
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:cypress/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'cypress'
  ],
  rules: {
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-async-tests': 'off',
    'cypress/no-force': 'warn',
    'cypress/no-pause': 'error',
    'cypress/no-unnecessary-waiting': 'off',
    'jext/expect-expect': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-console': 'error',
    'no-implied-eval': 'off',
    'no-return-assign': 'off',
    'no-sequences': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^(h|Fragment)$',
        argsIgnorePattern: '^_'
      }
    ]
  },
  settings: {
    jest: {
      version: 26
    }
  }
}
