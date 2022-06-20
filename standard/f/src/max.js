import arity from './internal/arity'
import curry from './curry'
import max from './internal/max'

export default curry(arity(2, max))
