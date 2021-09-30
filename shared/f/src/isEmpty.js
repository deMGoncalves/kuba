import curry from './curry'
import isNil from './isNil'
import not from './not'
import or from './or'

const isEmpty = (value) =>
  or(isNil(value), not(Object.keys(value).length))

export default curry(isEmpty)
