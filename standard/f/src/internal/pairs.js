import reduce from './reduce'

const pairs = (target) => (
  reduce(target, (x, [a, b]) => ((x[a] = b), x), {})
)

export default pairs
