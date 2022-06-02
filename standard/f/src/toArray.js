import curry from './curry'
import dunder from './dunder'
import has from './has'
import magic from './magic'

const toArray = (target) => (
  has(magic('toArray'), target)
    ? dunder('toArray', target)
    : Array.from(target)
)

export default curry(toArray)
