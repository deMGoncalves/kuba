import arity from './internal/arity'
import curry from './curry'
import toString from './internal/toString'

export default curry(arity(1, toString))
