import * as f from '@rex/f'

const valueAreDifferent = (node, key, value) =>
  f.and(
    f.not(f.test(/^on/, key)),
    f.not(f.test(/^class/, key)),
    f.different(node.attributes[key], value)
  )

export default f.curry(valueAreDifferent)
