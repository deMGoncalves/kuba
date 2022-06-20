import arity from './arity'
import curry from './curry'
import or from './internal/or'

export default curry(arity(2, or))
