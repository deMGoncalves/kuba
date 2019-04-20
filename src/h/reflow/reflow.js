import cond from 'ramda/src/cond'
import equals from 'ramda/src/equals'
import not from 'ramda/src/not'
import T from 'ramda/src/T'
import appendChild from './appendChild'
import isTextNode from './isTextNode'
import remove from './remove'
import replaceChild from './replaceChild'
import replaceElement from './replaceElement'
import replaceTextNode from './replaceTextNode'

export default cond([
  [(element) => not(!!element), appendChild],
  [(_, vElement) => not(!!vElement), remove],
  [(element, vElement) => not(equals(element.tagName, vElement.tagName)), replaceChild],
  [isTextNode, replaceTextNode],
  [T, replaceElement]
])
