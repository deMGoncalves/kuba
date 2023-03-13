module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^(h|Fragment)$',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-extend-native': 'off',
    'no-sequences': 'off',
    'no-unused-expressions': 'off'
  }
}
