import arity from './arity'
import curry from './curry'

const or = (x, ...args) =>
  args.reduce((a, b) => a || b, x)

export default curry(arity(2, or))
