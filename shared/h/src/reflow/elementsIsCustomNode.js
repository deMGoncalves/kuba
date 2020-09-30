import * as f from '@rex/f'
import isCustomElement from './isCustomElement'

export default (element, vElement) =>
  f.and(isCustomElement(element.tagName), isCustomElement(vElement.tagName))
