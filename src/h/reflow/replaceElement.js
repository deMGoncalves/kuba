import extendAttributes from './extendAttributes'
import extendChildren from './extendChildren'

export default (element, vElement) => {
  extendAttributes(element, vElement)
  extendChildren(element, vElement)
}
