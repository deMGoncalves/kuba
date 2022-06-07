import arity from './arity'

const memoize = (target, map = new Map()) =>
  (...args) =>
    ((key) => (
      map.has(key)
        ? map.get(key)
        : (map.set(key, target(...args)), map.get(key))
    ))(JSON.stringify(args))

export default arity(1, memoize)
