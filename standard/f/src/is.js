import curry from './curry'
import equal from './equal'
import F from './F'
import isNil from './isNil'
import or from './or'

const is = (Klass, target) => (
  isNil(target)
    ? F()
    : or(equal(target.constructor, Klass), target instanceof Klass)
)

export default curry(is)
