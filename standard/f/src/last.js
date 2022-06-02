import curry from './curry'
import dec from './dec'
import dunder from './dunder'
import len from './len'

const evaluate = dunder('last')

const last = (target) =>
  evaluate(target)[dec(len(target))]

export default curry(last)
