import arity from './internal/arity'
import curry from './curry'
import dunder from './dunder'
import map from './map'
import _equal from './internal/equal'

const evaluate = dunder('equal')

const equal = (...args) =>
  _equal(...map(args, evaluate))

export default curry(arity(2, equal))
