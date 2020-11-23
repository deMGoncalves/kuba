import * as f from '@rex/f'

export default (node, vNode) =>
  f.different(node.tagName, vNode.tagName)
