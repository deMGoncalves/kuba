import arity from './arity'
import call from './internal/call'
import curry from './curry'

export default curry(arity(2, call))
