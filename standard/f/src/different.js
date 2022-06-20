import arity from './internal/arity'
import curry from './curry'
import dunder from './dunder'
import _different from './internal/different'

const evaluate = dunder('different')

const different = (x, y) => (
  _different(evaluate(x), evaluate(y))
)

export default curry(arity(2, different))
