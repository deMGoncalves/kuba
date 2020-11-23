import extendAttributes from '../extendAttributes'
import getAttributes from './getAttributes'
import getEventListeners from './getEventListeners'
import removeEventListener from './removeEventListener'
import removeAttributes from './removeAttributes'

export default (node, vNode) =>
  extendAttributes({
    ...getAttributes(vNode),
    ...getEventListeners(vNode)
  },
  removeEventListener(removeAttributes(node)))
