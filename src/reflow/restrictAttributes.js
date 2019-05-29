import removeEventListener from './removeEventListener'
import addEventListener from './addEventListener'
import setAttribute from './setAttribute'

export default (element, vElement) => {
  removeEventListener(element)
  addEventListener(element, vElement)
  setAttribute(element, vElement)
  return element
}
