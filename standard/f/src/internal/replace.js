import dunder from './dunder'
import indexOf from './indexOf'
import is from './is'
import splice from './splice'

const evaluate = dunder('replace')

const replace = (target, x, y) =>
  ((value) => (
    is(String, value)
      ? value?.replace?.(x, y)
      : splice(value, indexOf(value, x), 1, y)
  ))(evaluate(target))

export default replace
