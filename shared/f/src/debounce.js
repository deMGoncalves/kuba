import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'

const debounce = (handler, wait = 250, timeoutID) =>
  (...args) => {
    timeoutID = clearTimeout(timeoutID)
    timeoutID = setTimeout(() => handler(...args), wait)
  }

export default curry(arity(1, debounce))
