import * as f from '@rex/f'

export default (node, vNode) =>
  f.and(!node, !!vNode)
