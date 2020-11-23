import * as f from '@rex/f'
import isCustomTag from './isCustomTag'

export default (node, vNode) =>
  f.and(isCustomTag(node.tagName), isCustomTag(vNode.tagName))
