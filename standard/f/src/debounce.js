import arity from './arity'
import curry from './curry'
import debounce from './internal/debounce'

export default curry(arity(1, debounce))
