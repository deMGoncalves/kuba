import cond from 'ramda/src/cond'
import T from 'ramda/src/T'
import appendVElement from './appendVElement'
import differentTagName from './differentTagName'
import isTextNode from './isTextNode'
import notHasElement from './notHasElement'
import notHasVElement from './notHasVElement'
import removeElement from './removeElement'
import replaceChild from './replaceChild'
import replaceElement from './replaceElement'
import replaceTextNode from './replaceTextNode'

export default cond([
  [notHasElement, appendVElement],
  [notHasVElement, removeElement],
  [differentTagName, replaceChild],
  [isTextNode, replaceTextNode],
  [T, replaceElement]
])
