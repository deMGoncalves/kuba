import * as f from '@rex/f'

export default (element, vElement) =>
  f.not(f.equal(element.tagName, vElement.tagName))
