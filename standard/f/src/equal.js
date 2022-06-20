import arity from './internal/arity'
import curry from './curry'
import equal from './internal/equal'

export default curry(arity(2, equal))
