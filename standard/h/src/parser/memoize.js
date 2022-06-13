import * as f from '@kuba/f'
import booking from './booking'

const memoize = (target) =>
  (...args) =>
    ((key) => (
      (booking.has(key)
        ? booking.get(key)
        : (booking.set(key, target(...args)), booking.get(key))).cloneNode(f.F())
    ))(JSON.stringify(args))

export default f.curry(f.arity(1, memoize))
