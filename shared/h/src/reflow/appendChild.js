import * as f from '@rex/f'

const appendChild = (_, vNode, parent) =>
  parent.appendChild(vNode)

export default f.frame(appendChild)
