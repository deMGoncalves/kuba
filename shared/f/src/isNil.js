import equal from './equal'
import or from './or'

export default (target) =>
  or(equal(target, null), equal(target, undefined))
