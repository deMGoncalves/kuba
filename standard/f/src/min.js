import arity from './internal/arity'
import curry from './curry'
import min from './internal/min'

export default curry(arity(2, min))
