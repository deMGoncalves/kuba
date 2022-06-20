import arity from './arity'
import curry from './curry'
import flatten from './internal/flatten'

export default curry(arity(1, flatten))
