import curry from './curry'
import reduce from './reduce'

const pairs = (array) =>
  reduce(array, (x, [a, b]) => ((x[a] = b), x), {})

export default curry(pairs)
