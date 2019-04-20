import equals from 'ramda/src/equals'
import not from 'ramda/src/not'

export default (element, vElement) =>
  not(equals(element.tagName, vElement.tagName))
