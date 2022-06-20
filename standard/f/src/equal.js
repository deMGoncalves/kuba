import arity from './arity'
import curry from './curry'
import dunder from './dunder'
import _equal from './internal/equal'

const evaluate = dunder('equal')

const equal = (...args) =>
  _equal(...args.map(evaluate))

export default curry(arity(2, equal))
