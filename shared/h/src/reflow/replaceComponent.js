import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'

const replaceComponent = (node, vNode, parent) =>
  parent.replaceChild(vNode[d.__klass__][d.__element__], node)

export default f.frame(replaceComponent)
