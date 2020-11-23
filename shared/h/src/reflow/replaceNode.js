import restrictAttributes from './restrictAttributes'
import extendChildren from './extendChildren'

export default (node, vNode) =>
  extendChildren(restrictAttributes(node, vNode), vNode)
