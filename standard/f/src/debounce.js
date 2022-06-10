import arity from './arity'
import curry from './curry'

const debounce = (target, wait = 250, timeoutID) =>
  (...args) => (
    (timeoutID = clearTimeout(timeoutID)),
    (timeoutID = setTimeout(() => target(...args), wait))
  )

export default curry(arity(1, debounce))
