import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'

const frame = (target, ...args) =>
  window.requestAnimationFrame(() => target(...args))

export default curry(arity(2, frame))
