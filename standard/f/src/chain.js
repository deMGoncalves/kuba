import arity from './internal/arity'
import chain from './internal/chain'
import curry from './curry'

export default curry(arity(1, chain))
