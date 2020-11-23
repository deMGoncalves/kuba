import * as f from '@rex/f'

export default (vNode) =>
  []
    .slice
    .call(f.or(vNode.attributes, []))
    .reduce((reducer, { name, value }) =>
      ({ ...reducer, [name]: value }), {})
