import * as f from '@rex/f'

const replaceChild = (element, vElement, parent) =>
  parent.replaceChild(vElement, element)

export default f.frame(replaceChild)
