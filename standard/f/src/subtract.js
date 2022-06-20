import arity from './internal/arity'
import curry from './curry'
import subtract from './internal/subtract'

export default curry(arity(2, subtract))
