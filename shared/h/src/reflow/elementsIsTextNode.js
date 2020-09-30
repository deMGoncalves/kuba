import * as f from '@rex/f'

export default (element, vElement) =>
  f.and(f.equal(element.nodeType, 3), f.equal(vElement.nodeType, 3))
