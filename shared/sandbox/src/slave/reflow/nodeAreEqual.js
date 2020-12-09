import * as f from '@rex/f'

export default (node, vNode) =>
  f.and(
    f.has('tagName', node),
    f.has('tagName', vNode),
    f.equal(node.tagName, vNode.tagName)
  )
