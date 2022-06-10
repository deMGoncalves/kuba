import curry from './curry'

const gte = (x, y) => (
  x >= y
)

export default curry(gte)
