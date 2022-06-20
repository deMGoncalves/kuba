import arity from './internal/arity'
import concat from './internal/concat'
import curry from './curry'

export default curry(arity(2, concat))
