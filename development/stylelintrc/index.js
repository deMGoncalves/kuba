'use strict'

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-order'
  ],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'no-empty-source': null,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-alphabetical-order': true
  }
}
