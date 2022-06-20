import indexOf from './indexOf'
import is from './is'
import splice from './splice'

const replace = (target, x, y) =>
  is(String, target)
    ? target?.replace?.(x, y)
    : splice(target, indexOf(target, x), 1, y)

export default replace
