import arity from './internal/arity'
import curry from './curry'
import memoize from './internal/memoize'

export default curry(arity(1, memoize))
