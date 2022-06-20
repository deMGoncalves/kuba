import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'
import _join from './internal/join'

const containsDunderJoin = has(magic('join'))
const evaluate = dunder('join')

const join = (target, separator) => (
  containsDunderJoin(target)
    ? evaluate(target)
    : _join(target, separator)
)

export default curry(join)
