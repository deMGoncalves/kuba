import dunder from './dunder'
import curry from './curry'
import has from './has'
import magic from './magic'

const containsDunderJoin = has(magic('join'))
const evaluate = dunder('join')

const join = (target, separator) => (
  containsDunderJoin(target)
    ? evaluate(target)
    : target?.join?.(separator)
)

export default curry(join)
