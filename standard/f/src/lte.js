import curry from './curry'

const lte = (x, y) => (
  x <= y
)

export default curry(lte)
