import curry from './curry'
import isNil from './isNil'
import magic from './magic'
import not from './not'
import or from './or'

const isEmpty = (value) =>
  or(
    isNil(value),
    value[magic('isEmpty')]?.() ?? not(Object.keys(value).length)
  )

export default curry(isEmpty)
