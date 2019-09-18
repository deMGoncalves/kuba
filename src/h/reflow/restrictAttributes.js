import removeEventListener from './removeEventListener'
import removeAttributes from './removeAttributes'
import addEventListener from './addEventListener'
import setAttribute from './setAttribute'

export default (element, vElement) => {
  removeAttributes(removeEventListener(element))
  addEventListener(element, vElement)
  setAttribute(element, vElement)
  return element
}
