import cond from './cond'
import curry from './curry'
import dunder from './dunder'
import F from './F'
import is from './is'
import isNil from './isNil'
import len from './len'
import not from './not'
import T from './T'

const evaluate = (target) => (
  target[dunder.isEmpty]?.() ?? not(len(target))
)

const isEmpty = cond(
  [isNil, T],
  [is(Boolean), F],
  [is(Date), F],
  [is(Number), F],
  [T, evaluate]
)

export default curry(isEmpty)
