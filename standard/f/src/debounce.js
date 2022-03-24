import arity from './arity'
import curry from './curry'

const debounce = (func, wait = 250, timeoutID) =>
  (...args) => (
    (timeoutID = clearTimeout(timeoutID)),
    (timeoutID = setTimeout(() => func(...args), wait))
  )

export default curry(arity(1, debounce))
