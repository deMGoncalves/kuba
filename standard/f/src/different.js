import arity from './arity'
import curry from './curry'
import equal from './equal'
import has from './has'
import magic from './magic'
import not from './not'

const method = magic('different')

const evaluate = (target) =>
  has(method, target) ? target[method]() : target

const different = (x, y) =>
  not(equal(evaluate(x), evaluate(y)))

export default curry(arity(2, different))
