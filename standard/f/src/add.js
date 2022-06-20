import add from './internal/add'
import arity from './arity'
import curry from './curry'

export default curry(arity(2, add))
