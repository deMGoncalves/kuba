import dunder from './dunder'

const evaluate = dunder('toString')

const toString = (target, radix) => (
  evaluate(target)?.toString?.(radix)
)

export default toString
