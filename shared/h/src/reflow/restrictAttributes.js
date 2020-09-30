import extendAttributes from '../extendAttributes'
import getAttributes from './getAttributes'
import getEventListeners from './getEventListeners'
import removeEventListener from './removeEventListener'
import removeAttributes from './removeAttributes'

export default (element, vElement) =>
  extendAttributes({
    ...getAttributes(vElement),
    ...getEventListeners(vElement)
  },
  removeEventListener(removeAttributes(element)))
