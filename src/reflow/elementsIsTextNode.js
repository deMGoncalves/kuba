import and from 'ramda/src/and'
import equals from 'ramda/src/equals'

export default (element, vElement) =>
  and(equals(element.nodeType, 3), equals(vElement.nodeType, 3))
