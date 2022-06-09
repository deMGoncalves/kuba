import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'

const containsDunderFirstIn = has(magic('first'))
const evaluate = dunder('first')

const first = (target) => (
  containsDunderFirstIn(target)
    ? evaluate(target)
    : target?.[0]
)

export default curry(first)
