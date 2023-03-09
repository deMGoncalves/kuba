import curry from './curry'
import magic from './magic'

function zip (x, y) {
  const n = Math.max(x.length, y.length)
  return Array(n).fill(undefined).map((_, i) => [x[i], y[i]])
}

export default curry(magic(zip))
