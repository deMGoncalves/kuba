import arity from './arity'
import curry from './curry'
import slice from './internal/slice'

export default curry(arity(2, slice))
