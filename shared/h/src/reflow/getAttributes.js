import * as f from '@rex/f'

export default (vElement) =>
  []
    .slice
    .call(f.or(vElement.attributes, []))
    .reduce((reducer, { name, value }) =>
      ({ ...reducer, [name]: value }), {})
