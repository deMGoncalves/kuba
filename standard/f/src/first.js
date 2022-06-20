import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'
import _first from './internal/first'

const containsDunderFirstIn = has(magic('first'))
const evaluate = dunder('first')

const first = (target) => (
  containsDunderFirstIn(target)
    ? evaluate(target)
    : _first(target)
)

export default curry(first)
