import removeEventListener from './removeEventListener'
import removeAttributes from './removeAttributes'

export default (element, _vElement) => {
  removeAttributes(removeEventListener(element))
  return element
}
