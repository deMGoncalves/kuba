import * as f from '@rex/f'

const notHasClassName = (node, key) =>
  f.and(
    f.test(/^className$/, key),
    f.not(f.has(key, node.attributes))
  )

export default f.curry(notHasClassName)
