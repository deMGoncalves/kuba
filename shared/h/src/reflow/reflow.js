import * as f from '@rex/f'
import appendChild from './appendChild'
import doNothing from './doNothing'
import nodesAreDifferent from './nodesAreDifferent'
import nodesIsCustomTag from './nodesIsCustomTag'
import nodesIsText from './nodesIsText'
import notHasNode from './notHasNode'
import notHasVNode from './notHasVNode'
import otherObject from './otherObject'
import remove from './remove'
import replaceChild from './replaceChild'
import replaceComponent from './replaceComponent'
import restrictAttributes from './restrictAttributes'
import replaceNode from './replaceNode'
import sameObject from './sameObject'
import setTextContent from './setTextContent'

export default f.cond(
  [notHasNode, appendChild],
  [notHasVNode, remove],
  [nodesIsText, setTextContent],
  [nodesAreDifferent, replaceChild],
  [sameObject, doNothing],
  [otherObject, replaceComponent],
  [nodesIsCustomTag, restrictAttributes],
  [f.T, replaceNode]
)
