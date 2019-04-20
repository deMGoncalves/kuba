import extendAttributes from './extendAttributes'
import extendChildren from './extendChildren'

export default (element, vElement) =>
  extendChildren(extendAttributes(element, vElement), vElement)
