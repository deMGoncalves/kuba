module.exports = {
  extends: 'stylelint-config-standard',
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        'at-rule-no-unknown': null
      }
    }
  ],
  plugins: [
    'stylelint-order'
  ],
  processors: [
    'stylelint-processor-styled-components'
  ],
  rules: {
    'custom-property-pattern': /[\w-_]+/,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-alphabetical-order': true
  }
}
