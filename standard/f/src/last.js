import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'
import _last from './internal/last'

const containsDunderLastIn = has(magic('last'))
const evaluate = dunder('last')

const last = (target) => (
  containsDunderLastIn(target)
    ? evaluate(target)
    : _last(target)
)

export default curry(last)
