import arity from './arity'
import curry from './curry'
import unshift from './internal/unshift'

export default curry(arity(2, unshift))
