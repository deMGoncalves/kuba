module.exports = {
  globals: {
    __settings: 'readonly'
  },
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
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
