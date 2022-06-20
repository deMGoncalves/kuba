import dunder from './dunder'
import indexOf from './indexOf'
import splice from './splice'

const evaluate = dunder('remove')

const remove = (target, x) =>
  ((value) => (
    splice(value, indexOf(value, x), 1)
  ))(evaluate(target))

export default remove
