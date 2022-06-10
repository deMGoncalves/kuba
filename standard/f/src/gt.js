import curry from './curry'

const gt = (x, y) => (
  x > y
)

export default curry(gt)
