import flip from './flip'
import reduce from './reduce'

const compose = (x, ...target) =>
  (...args) => (
    reduce(target, (a, b) => b(a), x(...args))
  )

export default flip(compose)
