import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'

const first = (target) => (
  has(magic('first'), target)
    ? dunder('first', target)
    : target?.[0]
)

export default curry(first)
