import indexOf from './indexOf'
import splice from './splice'

const remove = (target, x) =>
  splice(target, indexOf(target, x), 1)

export default remove
