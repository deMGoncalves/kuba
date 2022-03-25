import curry from './curry'
import equal from './equal'
import F from './F'
import isNil from './isNil'
import or from './or'

const is = (Klass, value) => (
  isNil(value)
    ? F()
    : or(equal(value.constructor, Klass), value instanceof Klass)
)

export default curry(is)
