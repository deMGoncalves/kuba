import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'
import _toArray from './internal/toArray'

const containsDunderToArray = has(magic('toArray'))
const evaluate = dunder('toArray')

const toArray = (target) => (
  containsDunderToArray(target)
    ? evaluate(target)
    : _toArray(target)
)

export default curry(toArray)
