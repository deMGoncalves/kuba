import and from './internal/and'
import arity from './internal/arity'
import curry from './curry'

export default curry(arity(2, and))
