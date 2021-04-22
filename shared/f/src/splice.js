import arity from './arity'
import curry from './curry'

const splice = (x, y, z, ...args) =>
  x.splice(y, z, ...args)

export default curry(arity(3, splice))
