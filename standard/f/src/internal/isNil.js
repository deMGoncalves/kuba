import equal from './equal'
import or from './or'

const isNil = (target) => (
  or(equal(target, null), equal(target, undefined))
)

export default isNil
