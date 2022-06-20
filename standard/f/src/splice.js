import arity from './arity'
import curry from './curry'
import splice from './internal/splice'

export default curry(arity(3, splice))
