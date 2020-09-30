import * as f from '@rex/f'
import notHasElement from './notHasElement'
import notHasVElement from './notHasVElement'

export default (element, vElement) =>
  f.and(notHasElement(element), notHasVElement(null, vElement))
