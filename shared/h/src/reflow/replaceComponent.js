import * as f from '@rex/f'

const replaceComponent = (element, vElement, parent) =>
  parent.replaceChild(vElement.__target__.__element__, element)

export default f.frame(replaceComponent)
