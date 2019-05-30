import cond from 'ramda/src/cond'
import T from 'ramda/src/T'
import appendChild from './appendChild'
import elementsAreDifferent from './elementsAreDifferent'
import elementsIsTextNode from './elementsIsTextNode'
import doNothing from './doNothing'
import notHasElement from './notHasElement'
import notHasElementAndVElement from './notHasElementAndVElement'
import notHasVElement from './notHasVElement'
import otherObject from './otherObject'
import remove from './remove'
import replaceChild from './replaceChild'
import replaceComponent from './replaceComponent'
import replaceElement from './replaceElement'
import sameObject from './sameObject'
import setTextContent from './setTextContent'

export default cond([
  [notHasElementAndVElement, doNothing],
  [notHasElement, appendChild],
  [notHasVElement, remove],
  [elementsIsTextNode, setTextContent],
  [elementsAreDifferent, replaceChild],
  [sameObject, doNothing],
  [otherObject, replaceComponent],
  [T, replaceElement]
])
