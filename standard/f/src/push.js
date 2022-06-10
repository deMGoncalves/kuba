import arity from './arity'
import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('push')

const push = (target, ...args) =>
  ((value) => (
    value?.push?.(...args),
    value
  ))(evaluate(target))

export default curry(arity(2, push))
