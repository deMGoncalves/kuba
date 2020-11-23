import * as f from '@rex/f'
import isCustomTag from './isCustomTag'

export default (element, vElement) =>
  f.and(isCustomTag(element.tagName), isCustomTag(vElement.tagName))
