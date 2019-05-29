import cond from 'ramda/src/cond'
import T from 'ramda/src/T'
import appendChild from './appendChild'
import elementsAreDifferent from './elementsAreDifferent'
import elementsIsTextNode from './elementsIsTextNode'
import notHasElement from './notHasElement'
import notHasVElement from './notHasVElement'
import remove from './remove'
import replaceChild from './replaceChild'
import replaceElement from './replaceElement'
import setTextContent from './setTextContent'

export default cond([
  [notHasElement, appendChild],
  [notHasVElement, remove],
  [elementsIsTextNode, setTextContent],
  [elementsAreDifferent, replaceChild],
  [T, replaceElement]
])
