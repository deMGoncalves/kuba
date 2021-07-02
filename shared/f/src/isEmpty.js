import curry from './curry'
import isNil from './isNil'
import not from './not'

const isEmpty = (value) =>
  isNil(value) || not(Object.keys(value).length)

export default curry(isEmpty)
