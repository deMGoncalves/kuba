import restrictAttributes from './restrictAttributes'
import extendChildren from './extendChildren'

export default (element, vElement) =>
  extendChildren(restrictAttributes(element, vElement), vElement)
