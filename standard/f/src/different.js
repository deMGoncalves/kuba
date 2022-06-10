import arity from './arity'
import curry from './curry'
import dunder from './dunder'
import equal from './equal'
import not from './not'

const evaluate = dunder('different')

const different = (x, y) => (
  not(equal(evaluate(x), evaluate(y)))
)

export default curry(arity(2, different))
