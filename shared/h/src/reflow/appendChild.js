import * as f from '@rex/f'

const appendChild = (_, vElement, parent) =>
  parent.appendChild(vElement)

export default f.frame(appendChild)
