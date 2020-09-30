import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'

const background = (handler, ...args) =>
  'requestIdleCallback' in window
    ? window.requestIdleCallback(handler.bind(null, ...args))
    : window.setTimeout(handler.bind(null, ...args), 0)

export default curry(arity(2, background))
