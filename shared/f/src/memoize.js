const map = new Map()
const memoize = (target) =>
  (...args) =>
    ((key) => (
      map.has(key)
        ? map.get(key)
        : (map.set(key, target(...args)), map.get(key))
    ))(JSON.stringify(args))

export default memoize
