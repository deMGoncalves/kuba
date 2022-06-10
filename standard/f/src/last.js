import curry from './curry'
import dec from './dec'
import dunder from './dunder'
import len from './len'

const evaluate = dunder('last')

const last = (target) => (
  ((value) => (
    value?.[dec(len(value))]
  ))(evaluate(target))
)
export default curry(last)
