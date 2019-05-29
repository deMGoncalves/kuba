import equals from 'ramda/src/equals'
import not from 'ramda/src/not'

export default (element, vElement) =>
  not(equals(element.__target__, vElement.__target__))
