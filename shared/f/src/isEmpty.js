import cond from './cond'
import curry from './curry'
import F from './F'
import is from './is'
import isNil from './isNil'
import len from './len'
import magic from './magic'
import not from './not'
import T from './T'

const evalute = (value) =>
  value[magic('isEmpty')]?.() ?? not(len(value))

const isEmpty = cond(
  [isNil, T],
  [is(Boolean), F],
  [is(Number), F],
  [T, evalute]
)

export default curry(isEmpty)
