import arity from './internal/arity'
import compose from './internal/compose'
import curry from './curry'

export default curry(arity(2, compose))
