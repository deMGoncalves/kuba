import and from 'ramda/src/and'
import notHasElement from './notHasElement'
import notHasVElement from './notHasVElement'

export default (element, vElement) =>
  and(notHasElement(element), notHasVElement(undefined, vElement))
