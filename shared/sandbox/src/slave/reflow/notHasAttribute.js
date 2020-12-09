import * as f from '@rex/f'

const notHasAttribute = (node, key) =>
  f.and(
    f.not(f.test(/^on/, key)),
    f.not(f.test(/^className$/, key)),
    f.not(f.has(key, node.attributes))
  )

export default f.curry(notHasAttribute)
