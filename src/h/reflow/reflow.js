import cond from 'ramda/src/cond'
import equals from 'ramda/src/equals'
import not from 'ramda/src/not'
import T from 'ramda/src/T'
import appendChild from './appendChild'
import remove from './remove'
import replaceChild from './replaceChild'
import replaceElement from './replaceElement'
import setTextContent from './setTextContent'

export default cond([
  [(element) => not(!!element), appendChild],
  [(_, vElement) => not(!!vElement), remove],
  [(element) => equals(element.nodeType, 3), setTextContent],
  [(element, vElement) => not(equals(element.tagName, vElement.tagName)), replaceChild],
  [T, replaceElement]
])
