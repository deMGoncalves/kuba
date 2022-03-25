import curry from './curry'
import indexOf from './indexOf'
import is from './is'
import splice from './splice'

const replace = (literal, x, y) => (
  is(String, literal)
    ? literal.replace(x, y)
    : splice(literal, indexOf(literal, x), 1, y)
)

export default curry(replace)
