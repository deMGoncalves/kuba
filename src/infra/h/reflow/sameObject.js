import and from 'ramda/src/and'
import equals from 'ramda/src/equals'
import has from 'ramda/src/has'

const hasTarget = has('__target__')

export default (element, vElement) =>
  and(and(hasTarget(element), hasTarget(vElement)), equals(element.__target__, vElement.__target__))
