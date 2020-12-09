import * as f from '@rex/f'

const state = f.magic('__state__')
const stateAreEqual = (node, vNode) =>
  f.and(
    f.has(state, node),
    f.has(state, vNode),
    f.equal(node[state], vNode[state])
  )

export default stateAreEqual
