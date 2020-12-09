import * as f from '@rex/f'

const classAreDifferent = (node, key, value) =>
  f.and(
    f.test(/^class/, key),
    f.different(node.attributes[key], value)
  )

export default f.curry(classAreDifferent)
