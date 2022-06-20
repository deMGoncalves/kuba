import arity from './internal/arity'
import call from './internal/call'
import curry from './curry'

export default curry(arity(2, call))
