import equal from './equal'
import or from './or'

export default (value) =>
  or(equal(value, null), equal(value, undefined))
