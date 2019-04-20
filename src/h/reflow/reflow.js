import cond from 'ramda/src/cond'
import not from 'ramda/src/not'
import T from 'ramda/src/T'
import appendChild from './appendChild'
import differentTagName from './differentTagName'
import isTextNode from './isTextNode'
import notHasVElement from './notHasVElement'
import removeElement from './removeElement'
import replaceChild from './replaceChild'
import replaceElement from './replaceElement'
import replaceTextNode from './replaceTextNode'

export default cond([
  [(element) => not(!!element), appendChild],
  [notHasVElement, removeElement],
  [differentTagName, replaceChild],
  [isTextNode, replaceTextNode],
  [T, replaceElement]
])
