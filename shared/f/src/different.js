import curry from './curry'
import equal from './equal'

const different = (x, y) =>
  !equal(x, y)

export default curry(different)
