import * as f from '@rex/f'
import appendChild from './appendChild'
import nodesAreDifferent from './nodesAreDifferent'
import nodesIsCustomTag from './nodesIsCustomTag'
import elementsIsTextNode from './elementsIsTextNode'
import doNothing from './doNothing'
import notHasElement from './notHasElement'
import notHasElementAndVElement from './notHasElementAndVElement'
import notHasVElement from './notHasVElement'
import otherObject from './otherObject'
import remove from './remove'
import replaceChild from './replaceChild'
import replaceComponent from './replaceComponent'
import restrictAttributes from './restrictAttributes'
import replaceElement from './replaceElement'
import sameObject from './sameObject'
import setTextContent from './setTextContent'

export default f.cond(
  [notHasElementAndVElement, doNothing],
  [notHasElement, appendChild],
  [notHasVElement, remove],
  [elementsIsTextNode, setTextContent],
  [nodesAreDifferent, replaceChild],
  [sameObject, doNothing],
  [otherObject, replaceComponent],
  [nodesIsCustomTag, restrictAttributes],
  [f.T, replaceElement]
)
