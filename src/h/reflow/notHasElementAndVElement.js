import * as f from '@f'
import notHasElement from './notHasElement'
import notHasVElement from './notHasVElement'

export default (element, vElement) =>
  f.and(notHasElement(element), notHasVElement(undefined, vElement))
