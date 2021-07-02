import curry from './curry'
import isNil from './isNil'
import not from './not'
import or from './or'

const has = (key, object) =>
  not(isNil(object)) && or(object[key], {}.hasOwnProperty.call(object, key))

export default curry(has)
