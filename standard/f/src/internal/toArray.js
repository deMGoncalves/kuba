import dunder from '../dunder'
import has from '../has'
import magic from '../magic'

const containsDunderToArray = has(magic('toArray'))
const evaluate = dunder('toArray')

const toArray = (target) => (
  containsDunderToArray(target)
    ? evaluate(target)
    : Array.from(target)
)

export default toArray
