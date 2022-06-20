import dunder from './dunder'
import has from '../has'
import magic from './magic'

const containsDunderLenIn = has(magic('len'))
const evaluate = dunder('len')

const len = (target) => (
  containsDunderLenIn(target)
    ? evaluate(target)
    : Object.keys(target)?.length
)

export default len
