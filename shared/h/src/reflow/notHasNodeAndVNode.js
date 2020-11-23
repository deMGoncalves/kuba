import * as f from '@rex/f'
import notHasNode from './notHasNode'
import notHasVNode from './notHasVNode'

export default (node, vNode) =>
  f.and(notHasNode(node), notHasVNode(null, vNode))
