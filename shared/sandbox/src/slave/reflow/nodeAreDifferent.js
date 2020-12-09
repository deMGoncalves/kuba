import * as f from '@rex/f'

export default (node, vNode) =>
  f.and(
    f.has('tagName', node),
    f.has('tagName', vNode),
    f.different(node.tagName, vNode.tagName)
  )
