import curry from './curry'
import isNil from './isNil'
import not from './not'

const isEmpty = (target) =>
  isNil(target) || not(Object.keys(target).length)

export default curry(isEmpty)
