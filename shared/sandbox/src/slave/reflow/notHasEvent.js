import * as f from '@rex/f'

const notHasEvent = (node, event) =>
  f.and(
    f.test(/^on/, event),
    f.not(f.has(event, node.attributes))
  )

export default f.curry(notHasEvent)
