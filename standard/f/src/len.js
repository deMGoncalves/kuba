import dunder from './dunder'
import has from './has'
import magic from './magic'
import _len from './internal/len'

const containsDunderLenIn = has(magic('len'))
const evaluate = dunder('len')

const len = (target) => (
  containsDunderLenIn(target)
    ? evaluate(target)
    : _len(target)
)

export default len
