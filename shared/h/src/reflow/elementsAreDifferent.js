import * as f from '@rex/f'

export default (element, vElement) =>
  f.different(element.tagName, vElement.tagName)
