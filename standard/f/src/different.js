import arity from './internal/arity'
import curry from './curry'
import different from './internal/different'

export default curry(arity(2, different))
